---
title: Server Based Comment Spam Protection
date: 2007-10-24
tags: spam
---
<a href="http://www.docunext.com/2007/10/24/server-based-comment-spam-protection/">

I've been thinking about how to protect Wordpress, Trac, and other "community-style" web applications against comment spam, so I figured I should write up an article about my thoughts here at Docunext.com.
<h3>Spam Karma 2</h3>

Spam Karma is useful for Wordpress, but it uses up a lot of server resources. It appears to be Wordpress only, too.
<h3>Spamassassin</h3>

Spamassassin works great for emails, but I can't figure out how to get it to work for Trac (or Wordpress for that matter). I found a perl client for connecting to spamd, but then I couldn't find the format information should be sent to the daemon.
<h3>dnsbl</h3>

There are some promising modules in the works for Apache which appear to connect directly with dnsbl servers, but they aren't mature enough for what I'm looking for. Most are still in alpha stage.
<h3>mod_rewrite?</h3>

mod_rewrite has a few features which could prove to be very helpful in defending against comment spam. One: RewriteMap, Two: [F] (forbidden). Here's a quick sample of how this might work:

<pre><Directory /var/www>

RewriteMap badbots txt:bad_bots

RewriteEngine On

RewriteCond %{REQUEST_METHOD} POST

RewriteCond ${badbots:%{REMOTE_ADDR}} 1

RewriteRule . - [F]

Options ExecCGI FollowSymlinks

Allow from all</Directory></pre>

The nice thing about this rewriterule is that it only targets POST requests. The problem is that it requires a file to reference with an ip address. This would be difficult to update on a regular basis, but not impossible. You could also use an external program such as a perl script to query a dnsbl, but I'm not sure if that works so well, especially if you have a whole bunch of scripts.

Block List

Pass List

Another positive factor of the above access control is that it is simple, quick, effective, and could be used server-wide. It could easily be extended to support pass lists as well as authenticated bypasses. <b>Related:</b>

<a href="http://www.spamcannibal.org/cannibal.cgi">http://www.spamcannibal.org/cannibal.cgi</a>

<a href="http://unknowngenius.com/blog/wordpress/spam-karma/">http://unknowngenius.com/blog/wordpress/spam-karma/</a>

<a href="http://spamassassin.apache.org/">http://spamassassin.apache.org/</a><b>Link / Quote of the Day</b>

<a href="http://kerneltrap.org/Linux/Compiler_Optimization_Bugs_and_World_Domination">http://kerneltrap.org/Linux/Compiler_Optimization_Bugs_and_World_Domination</a>

<blockquote>During the thread, Linus suggested that the optimization made by the compiler wasn't "legal", to which Alan Cox retorted, "pedant: valid. Almost all optimizations are legal, nobody has yet written laws about compilers. Sorry but I'm forever fixing misuse of the word 'illegal' in printks, docs and the like and it gets annoying after a bit." Linus playfully responded, "heh. When I'm ruler of the universe, it *will* be illegal. I'm just getting a bit ahead of myself." When asked how long until he expected to be ruler, Linus added, "I'm working on it, I'm working on it. I'm just as frustrated as you are. It turns out to be a non-trivial problem."</blockquote>
<h3>mod_defensible</h3>

UPDATE October 27, 2007: Found these promising modules: * <a href="http://julien.danjou.info/mod_defensible.html">http://julien.danjou.info/mod_defensible.html</a>* <a href="http://www.steve.org.uk/Software/mod_ifier/index.html">http://www.steve.org.uk/Software/mod_ifier/index.html</a>

UPDATE October 28, 2007: So far mod_defensible is working nicely. I had to enter an alternate DNS resolver as described on the <a href="http://julien.danjou.info/mod_defensible.html">mod_definsible hompage</a>. Otherwise the server would hang, probably unable to resolve the dnsbl. I'm really liking the idea of using mod_defensible as a first line of defense against comment spam for quick filtering.

UPDATE October 30, 2007: I'm now trying out mod_defensible on a production server, it will be interesting to find out if the volume of spam caught by spam karma 2 decreases.

UPDATE October 31, 2007: Over the night, mod_defensible was causing apache processes to never die, resulting in the maxclients directive getting reached and a denial of service (DoS). I've disabled mod_defensible and am emailing the author to ask if there is a timeout or something to alleviate this problem.

I wrote to the author Julien and he responded back quickly (thanks!) saying he's aware of the issue, but doesn't have time to work on it at the moment. I'm no good at C, but if you are, please help! :-)

Debugging now - I figured out that the Limit directive isn't in the scope of mod_defensible, so I'm also trying the location scope. Good, that seems to work better. To fend off the possibility of zombie processes, I think it's best to consider using a local dns server. But still that's not too good an idea in case the dns server crashes.

Interesting, apache won't become a zombie process if udns isn't used and the dnsbl is invalid. Perhaps that is the way to go. The question is whether the same or a similar effect to that of <a href="http://www.corpit.ru/mjt/udns.html">udns</a> can be achieved by setting the system's resolv.conf to use a caching dns resolver, like dnsmasq.

Unfortunately the limit directive is a little different than the directory, location, and files directive, so I'm having to use mod_rewrite to achieve my goal. Here's what I've got going on:

<pre>
RewriteEngine On

RewriteCond %{REQUEST_METHOD} POST

RewriteRule (.*) /__POST__$1 [PT]<Location /__POST__/>        DnsblUse On        #DnsblServers zen.spamhaus.org.        DnsblServers localhost.</Location>

Alias /__POST__/ /var/www/</pre>

While I was in the source code for mod_defensible, I tried setting a timeout for udns, but what I tried didn't work. On line 356 of mod_defensible.c:

<pre>        if(poll(&pfd, 1, dns_timeouts(0, -1, 0) * 1000))</pre>

I changed the -1 to 4, but it resulted in the same behavior. What strikes me as odd is that the first parameter is a 0, but in the reference for udns it is ctx, which I *think* is a reference to the udns object. Maybe if I change the 0 to the reference used throughout the rest of the code, the timeout will work?

<pre>
if(poll(&pfd, 1, dns_timeouts(&dns_defctx, 4, 0) * 1000))</pre>

By the way, to reproduce the timeout error, setup a non-existent dns resolver and feed it a non-existent dnsbl.

<pre>                DnsblUse On                DnsblNameserver 7.0.0.1                DnsblServers zeniy.spamhaus.org.                #DnsblServers localhost.</pre>

Nope, that didn't work either.

I'm working my way through the mod_defensible code, and I've got a few ideas. I think that the modules should have the option of setting an environment variable as opposed to strictly sending a 403 and error message. To achieve that, I changed the hook near the end of the file to:

<pre>    ap_hook_fixups(check_dnsbl_access, NULL, NULL, APR_HOOK_MIDDLE);</pre>

That seems to work OK. In trying to come up with a way to timeout the udns lookup, I came up with a really chessy method to try out:

<pre>#ifdef HAVE_LIBUDNS    struct pollfd pfd;    struct udns_cb_data **data_array_elts;    int cheesy_timeout = 0;    pfd.fd = dns_sock(0);    pfd.events = POLLIN;    data_array_elts = (struct udns_cb_data **) data_array->elts;    /* While we have a queue active */    while(dns_active(&dns_defctx) && cheesy_timeout < 99) {        if(poll(&pfd, 1, dns_timeouts(0, -1, 0)) * 1000)            dns_ioevent(0, 0);        cheesy_timeout++;    }    dns_close(&dns_defctx);    /* Check if one of the DNSBL server has blacklisted */    for(i = 0; i < data_array->nelts; i++)        if(data_array_elts[i]->blacklist)        {                /*            r->status = 403;            generate_page(r, data_array_elts[i]->dnsbl);            */            apr_table_setn(r->subprocess_env, "defensible","defensible");            return OK;        }#endif</pre>

This is a very poor method, and might not work without the other changes I made. Like not using the denial page, but instead setting an environment variable, which can then be used by other access controls to block, filter, or redirect various requests. Cool, huh?

I've still got some major cleanup to do, but thanks to the great work by <a href="http://julien.danjou.info/mod_defensible.html">Julien</a> on this, I was actually able to learn a ton about Apache modules, and maybe even make one a little better! :-)

I just sent Julien this email:

<blockquote>

I actually did some stuff. :-)

I changed the result of a dnsbl positive to set an environment variable "defensible". A better solution would have the env variable name set in the configuration file, but I don't really know what I'm doing. That way, the user can test for the env and handle it in a variety of ways, and even use a custom error file. To do this I had to change the hook to fixups.

As for the timeout, I came up with a very cheesy solution: limiting the while loop to 150 iterations! I've set it as low as 9 and it was able to resolve without timing out, but I was using a local resolver. This should also be configurable, but I don't know how to do that yet. I tried a bunch of udns functions but couldn't get a handle on it. I just happened to have an Apache book handy so that's why I stuck to the Apache API.

Obviously the timeout is not the best, but since I'm using this mainly to ward off comment spam, it isn't a big deal if there is a timeout. I may even just stick with the system dns resolver as I was also able to figure out a way to use the dnsbl for only POST requests.

Thanks again, I'm curious to learn what you think of the patch. </blockquote>

And the patch: <textarea rows="14" cols="60"><pre>--- mod_defensible.c.orig	2007-10-31 17:43:54.000000000 -0400+++ mod_defensible.c	2007-10-31 17:45:04.000000000 -0400@@ -59,6 +59,7 @@ {     enum use_dnsbl_type use_dnsbl;     apr_array_header_t *dnsbl_servers;+    apr_table_t *features; #ifdef HAVE_LIBUDNS     char * nameserver; #endif@@ -179,18 +180,6 @@ } #endif-static void generate_page(request_rec *r, char * dnsbl)-{-    ap_set_content_type(r, "text/html"); -    ap_rputs(DOCTYPE_HTML_2_0, r);-    ap_rputs("<html><head>\n<title>403 Forbidden</title></head><body><h1>Forbidden</h1>\n", r);-    ap_rprintf(r, "<p>You don't have permission to access %s\n", ap_escape_html(r->pool, r->uri));-    ap_rprintf(r, "on this server because you are currently blacklisted by a DNSBL server at: <b>%s</b></p>\n", dnsbl);-    ap_rputs("<hr>\n", r);-    ap_rprintf(r, "<address>%s</address>\n", ap_get_server_version());-    ap_rputs("</body></html>\n", r);-}- /*   * Callback function called on each HTTP request  * Check an IP in a DNSBL@@ -312,9 +301,8 @@         {             ap_log_rerror(APLOG_MARK, APLOG_ERR, 0, r,                           "denied by DNSBL: %s for: %s", srv_elts[i], r->uri);-            r->status = 403;-            generate_page(r, srv_elts[i]);-            return DONE;+            apr_table_setn(r->subprocess_env, "defensible","defensible");+            return OK;         }         else         {@@ -345,16 +333,19 @@ #ifdef HAVE_LIBUDNS     struct pollfd pfd;     struct udns_cb_data **data_array_elts;-+    int cheesy_timeout = 0;     pfd.fd = dns_sock(0);     pfd.events = POLLIN;     data_array_elts = (struct udns_cb_data **) data_array->elts;     /* While we have a queue active */-    while(dns_active(&dns_defctx))-        if(poll(&pfd, 1, dns_timeouts(0, -1, 0) * 1000))++    while(dns_active(&dns_defctx) && cheesy_timeout < 150) {+        if(poll(&pfd, 1, dns_timeouts(0, -1, 0)) * 1000)              dns_ioevent(0, 0);+	cheesy_timeout++;+    }     dns_close(&dns_defctx);@@ -362,9 +353,8 @@     for(i = 0; i < data_array->nelts; i++)         if(data_array_elts[i]->blacklist)         {-            r->status = 403;-            generate_page(r, data_array_elts[i]->dnsbl);-            return DONE;+	    apr_table_setn(r->subprocess_env, "defensible","defensible");+	    return OK;         } #endif@@ -385,7 +375,7 @@ /* Register hooks */ static void register_hooks(apr_pool_t *p __attribute__ ((unused))) {-    ap_hook_access_checker(check_dnsbl_access, NULL, NULL, APR_HOOK_MIDDLE);+    ap_hook_fixups(check_dnsbl_access, NULL, NULL, APR_HOOK_MIDDLE);     ap_hook_post_config(defensible_init, NULL, NULL, APR_HOOK_LAST); } </pre></textarea>

Hmm, I worked on this for several more hours tonight and I don't think that ap_hook_fixups is the appropriate hook for this, but instead think the original one was correct. I was getting some very odd behavior when accessing directories versus files, and when I switched it back to ap_hook_access_checker, it worked how I expected. There is a lot going on with how the modules talk to each other, and how they are organized in order. Very interesting. It turns out that the first way I got it to work wasn't half bad. It still has a lot of room for improvement though!

Note - the reason why I changed the hook in the first place was because I thought it was necessary to set an environment variable, but as it turns out it isn't.
