---
title: Separating Functionality
date: 2007-04-29
tags: open source
---
In my humble opinion, one of the most important and fundamental aspects to software development and usability is the separation of functionality. So often do applications and packages have too much that I have to wonder when it will stop.

I prefer to take a minimalist point of view, where the less a package does, the better. Chances are, if the package is more focused, it will likely do its job better. The key then of course is integration, allow many separate packages work together.

That being said, I don't want to have URL routing and rewriting built into my framework. I prefer to let mod_rewrite handle all the rewriting. But the question remains, how can an application be built to natively support a variety of url rewriting schemas? My answer to this question is exactly why I choose to build interfaces with XSL. Most buttons and links are a part of a hierarchical structure (just like the web), and I usually build these relationships using a database. The output of the database is an <a href="http://www.xml-info.com/blog/">XML</a> document which is then parsed for user interface elements. It is that parsing process that must do the job of url generation.

Just like in symfony, there is an internal uri and an external url, and these two must be in sync. Where symfony is able to keep the two in sync by using the same routing ruleset for parsing and rendering urls, I prefer to let mod_rewrite do all the parsing, and xsl do all the rendering.

Wordpress has handled this challenge in an interesting way. Based upon the url generation routing rules the user specifies, <a href="http://www.docunext.com/wiki/Wordpress">Wordpress</a> will then generate a mod_rewrite ruleset for use with the webserver. This is the method I would like to use as well. A caveat here is that the symfony generator scripts I'm using prefer to have the document root non-writable by the web server, so the web server will not be able to write an ".htaccess" script to that directory. Again Wordpress has a solution for this, using a symlink to a different directory where the webserver has write access. Actually, I am wrong about this. I just checked Wordpress and the htaccess file they use is fairly standard and straightforward. Nevertheless, they DO symlink, but I was also wrong about the write access. At least on Debian, the symlink is from the Wordpress web server document root to the /etc/wordpress/ folder, to a file entitled htaccess (no "." hidden prefix).

The Wordpress rewrite rules:

<pre><IfModule mod_rewrite.c>

RewriteEngine On

RewriteBase /

RewriteCond %{REQUEST_FILENAME} !-f

RewriteCond %{REQUEST_FILENAME} !-d

RewriteRule . /index.php [L]</IfModule></pre>

Nevertheless, I choose not to use a symlink, but instead to set the ruleset configuration in the webserver manually. I realize this is not optimal for those using shared hosts, but with the availability of <a href="http://www.docunext.com/virtual-private-servers/">low-cost virtual private hosting (VPS) providers</a>, I am comfortable recommending a <a href="http://httpd.apache.org/docs/2.2/misc/perf-tuning.html#runtime">higher performance web server configuration</a>.

The question I'm trying to answer is how to get a runtime setting to power both the static web server mod_rewrite configuration as well as the xsl powered url generator patterns. Of course! <a href="http://httpd.apache.org/docs/2.2/mod/mod_rewrite.html#rewritemap">The fine folks who created mod_rewrite have instituted a RewriteMap directive</a>, reminiscent of the postfix maps I'm slightly familiar with. AWESOME!!! Actually this doesn't do everything that I need, but it definitely helps.

The players:

<ul><li>Sitemap</li><li>Interface</li><li>URLs</li><li>Host / Server</li><li>Project</li><li>App</li></ul>

My goodness, mod_rewrite is really a terrific piece of software. Nice work Ralf!

The division of roles between web application framework and webserver is an important one, and now I'm reconsidering whether or not I would like to share application logic with webserver logic. Might not make a lot of sense.

The application has to know a little bit about the webserver, like whether or not it is in a sub-directory. It can find this information from the $_SERVER['SCRIPT_NAME'] variable (by getting the directory of it). After that, whether the web server or the application does the "command parsing" is moot, as even without url rewriting, the scripting language (in our case PHP) that is powering the application has to parse the parameters either way. Or does it? If mod_rewrite does the URL parsing, it is going to create get variables and their values for the application to access. If not, there are still going to be get variables and values for the application to access, but in the case of "pretty" permalinks, there may only be one get variable that the application must parse, create variables and then access. In the case of nexista, flow does a great job of handling server variables natively by adding them to the xml dom, so I'm not sure it makes sense to have it parse the get variable, set new variables, and then in turn set flow variables. <b>Possible Strategies</b><ol><li>mod_rewrite splits the url into pieces based upon the content between slashes.<ul><li>Pros: consistent, simple, straightforward, fast.</li><li>Cons: limited to a bound number of divisions (right?), what happens when a key contains a slash?</li></ul></li><li>php explodes the passed get variable into pieces based upon what is between slashes<ul><li>Pros: flexible, (can begin various matching processes to decipher parameters).</li><li>Cons: slower, complicated</li></ul></li></ol>

It would be great if you could pick and choose which strategy at runtime, based upon the url that was being passed in a standard and consistent manner. For example, if the first "key" (i.e. content between the slashes) is the name of an app, then do one thing, and if not, then do another. It appears that it may be possible to do this sort of "try" method, as seen here in the <a href="http://httpd.apache.org/docs/2.2/rewrite/rewrite_guide.html#multipledirs">searching capability of mod_rewrite</a>. In our case, we would want mod_rewrite would try to find the app loader, and if could find it, load its appropriate RewriteMap. In turn, the xsl interface builder would use the same map to build links. BUT, and that's a big BUT, I'm uncertain whether mod_rewrite can do that sort of testing, and how capable the RewriteMaps are. A side note here, Ralf made an excellent decision by allowing external programs or scripts to be called as RewriteMaps.

I will first try out this test capability of mod_rewrite.

Initial test case #1:

<pre>
RewriteCond %{REQUEST_URI} !.php

RewriteCond %{REQUEST_URI} /([^\/]*)/([a-z]+)/(.*)

RewriteCond %{DOCUMENT_ROOT}/%1/%2.php -f

RewriteRule ([a-z]*)/(.*)  $1.php?nid=$1  </pre>

The results were positive. I still need to figure out how to deal with the path prefix. On the other hand, simplicity is key here, so I may have the application do that parsing, following different rules for each application. This might be a little like prepared queries. If I explode the request into the separate pieces based upon the slashes, then the resulting array can be assigned to specific parameters. For example: /somepath/user/admin/edit

<pre>
Array([0]=>'somepath',[1]=>'user',[2]=>'admin',[3]=>'edit')</pre>

And a link in general:

protocol, host, path_prefix, app_prefix, gate

0: path_prefix

1: app_prefix

2: gate

Symfony simplifies this with their internal URI syntax:

<pre>// Internal URI syntax<module>/<action>[?param1=value1][&param2=value2][&param3=value3]...</pre>

Mine would be:

<pre>
<prefix>/<app>/<gate>/[?param1=value1][&param2=value2][&param3=value3]...</pre>

I'll just have to remove any "/" from my gates, that's a little wacky, but not a big deal. Most of the slashes are there to identify apps and modules anyway.

My second tests seem to avoid the issue of the path prefix, which is awesome!

<pre>
RewriteEngine On# we skip all files with .something

RewriteCond %{REQUEST_URI} \..+$

RewriteCond %{REQUEST_URI} !\.html$

RewriteRule .* - [L]# no real files

RewriteCond %{REQUEST_FILENAME} !-f

RewriteCond %{REQUEST_FILENAME} !-d

RewriteRule ^([a-z,\-,0-9]+)/([^\/]+)/(.*)$ $1.php?nid=$2&page=$3 [L]

RewriteRule ^([a-z,\-,0-9]+)/([^\/]+/?)$ $1.php?nid=$2 [L]</pre>

So it turns out it will be useful and feasible to parse the request_uri at the web server level (at least I think so). The first two parameters are the app and the gate, and everything after that will be passed as a whole.

To combine the above rules into one:

<pre>RewriteRule ^([a-z,\-,0-9]+)/([^\/]+)(.*)$ $1.php?nid=$2&params=$3 [L]</pre>

My strategy from here is to come up with an XML format to support the parsing of the parameters. I'd like to use symfony's routing processes, but I might have to start from scratch. For the most part, my applications don't have pretty permalinks, but I'd like to support them in the future. For the first go at it, I'd like to enable wikipages to be viewable in the following manner:

page_title/version_number

Continuing thoughts on configuration: <ol><li>Server name</li><li>Project name</li><li>App name</li><li>Module name</li></ol>

The application needs to know a few things; * Where is nexista?* Which app is currently running?* Where is it located?* What project is the app part of, and where is its root?* What other apps are available?* Where is the web server document root?

Inter-app integration is going to be difficult.  For one, when a query is called, it's is only going to have the table names for the app which is calling it. Second, anchoring to a separate app will require knowledge of what other apps are available on that server, and the script uris to access the app loaders.

So some rules: * Each app has an app_name.php file in the web directory. * Each app must be completely separate from each other. If one app needs information from another app, it must request the information using the other apps API. * Apps should hard code the location of their queries, xsl templates, php scripts, and more in the gate files. * The only exception to a resource file being outside of an apps root is the runtime.php script which is called as a sitemap prepend for each app (it is the same across every app within a project). * For building link anchors, each app must know about what other apps are available, and there also must be an app dependency system, so if an app will gracefully report the cause of its inability to install or run.

The purpose of this flexibility is to provide the following benefits: * Portability - ease of installation in a wide variety of situations* Reusability - ease of multiple installations with the same code base with clear separation of configuration files

Reusability has always been available, but the point here is to achieve portability while retaining reusability.
<h3>Nexista app APIs:</h3>* Nexista apps can have an API used for transferring data between one another. The APIs will use the http protocol to handle requests and responses, and will format the data in XML. Security will be handled the same way as regular requests, via session roles. The method will carry the session identifying by the cookie jar technique or via get variable, and will be processed by the curl function. (<a href="http://www.php.net/manual/en/ref.curl.php#72608">See php.net comment about using browser sessions with php's curl function.</a>)

I use examples to think things through. In the case of a wiki, the wiki and the user information is separate. But how would you know who edited and article? And what if that author was deleted from the user database? These are totally different questions, but I thought of them both at that same time. Let's just deal with the first one, of attributing edits to different users. The page version table will have a user_id in it, that's all. So when we want to find out the user's login name, we'll have to go elsewhere. Where do we go? All we should have to know is the app's name that handle's that data, the data we have, and the data we want. In this case, we know the app is "user", and we know we have at least one user id, and we want the user login name that corresponds with that user id. What we don't know is where or how that data is stored, that's up for the user app to know.

The old way:

LEFT JOIN on the foreign table

Potential new ways:

1. Get each user login name for each page: http://www.example.com/user/api-user/56 using Javascript XmlHTTPRequest. In this case, there would be an http request for each user login name needed.

2. Get a set of user login names before the original response is fulfilled, using a php based curl request passing an array of user ids in the uri. In this case, there is one additional http request, which causes a query to loop and add new nodes to the flow xml document. The XSL transformation then simply cross-references the two node trees to join the data.

I'm leaning towards the second option as I expect it will be much faster, however, there may be certain situations where it makes sense to use the first option.

How to make this happen: <ol><li>Draft API for user app to serve XML responses</li><li>Write curl action which takes two parameters: uri and flow xpath reference to be used as get variables</li></ol>

By keeping the API simple, the REST calls will be simple. I hope to be able to do something like this:

http://www.example.com/user/api-user?user_id[]=56&user_id[]=58&user_id[]=28&user_id[]=928&user_id[]=7236

No, not all REST calls need to be pretty.
<h3>The Results</h3>

I'm glad to have ventured down this road: the results were great. A couple of notes: * PHP or Apache sets the mime type of the output to text/html even though I specify xml in the XSL stylesheet* I can override the mime type with a simple php header* The "get set" idea worked, where if I wanted to get a set of user login names I could pass an array of user_ids like so: user_id[]=123&user_id[]=435 * PHP sessions worked fine, and so I presume if I output the data as JSON (or XML for javascript of some kind), then the session will also without without a hitch
<h3>Rationale</h3>

My gut tells me that developers will scratch their head when they realize that apps live in completely separate worlds, in that they can only access the database table specifically relevant to the data handled by the app. So I want to be as clear as possible as to why I'm doing this.

Completely isolating each app will provide the following benefits: * Improved modularity - meaning applications will be able to connect <em>and disconnect</em easily* Easier integration with foreign apps - a clean, well documented API for each app will allow other apps to integrate with them more easily

For a good example of how a REST API might work, check out how <a href="http://developer.yahoo.com/php/howto-reqRestPhp.html">Yahoo sets up their REST servers for PHP requests</a>.

Other goodies:

<a href="http://phprestsql.sourceforge.net/tutorial.html">http://phprestsql.sourceforge.net/tutorial.html</a>

<a href="http://www.peej.co.uk/articles/rest.html">http://www.peej.co.uk/articles/rest.html</a>

<a href="http://www.prescod.net/">http://www.prescod.net/</a>

<a href="http://simile.mit.edu/timeline/">http://simile.mit.edu/timeline/</a>

<a href="http://www.mnot.net/blog/2005/10/18/libxslt_web">http://www.mnot.net/blog/2005/10/18/libxslt_web</a>

<a href="http://decafbad.com/blog/2004/11/30/nextgenwebapps">http://decafbad.com/blog/2004/11/30/nextgenwebapps</a>

