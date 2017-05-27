---
title: Fake Googlebots
date: 2010-06-01
tags: access control,google,security
---
There are some HTTP clients accessing my web servers with strange request patterns. They include a header stating that they are a Googlebot, but its clear that they are **fake googlebots**.

#### **Detection of Fake Googlebots**

I noticed some HTTP clients spoofing Google's search crawler user-agent, aka "Googlebot", like these:

<pre class="sh_sh">
404 www.neosensorz.com "GET /wp-login.php HTTP/1.1" "-" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" 67.19.102.242 0.014
404 www.neosensorz.com "GET /old/wp-login.php HTTP/1.1" "-" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" 67.19.102.242 0.007
404 www.neosensorz.com "GET /cms/wp-login.php HTTP/1.1" "-" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" 67.19.102.242 0.007
404 www.neosensorz.com "GET /blog/wp-login.php HTTP/1.1" "-" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" 67.19.102.242 0.005
404 www.neosensorz.com "GET /blog_old/wp-login.php HTTP/1.1" "-" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" 67.19.102.242 0.006
404 www.neosensorz.com "GET /blog-old/wp-login.php HTTP/1.1" "-" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" 67.19.102.242 0.007
404 www.neosensorz.com "GET /blog/wp/wp-login.php HTTP/1.1" "-" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" 67.19.102.242 0.006
404 www.neosensorz.com "GET /wp/wp-login.php HTTP/1.1" "-" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" 67.19.102.242 0.006
404 www.neosensorz.com "GET /WP/wp-login.php HTTP/1.1" "-" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" 67.19.102.242 0.004
404 www.neosensorz.com "GET /backup/wp-login.php HTTP/1.1" "-" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" 67.19.102.242 0.006
404 www.neosensorz.com "GET /blog/backup/wp-login.php HTTP/1.1" "-" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" 67.19.102.242 0.006
404 www.neosensorz.com "GET /wordpress/wp-login.php HTTP/1.1" "-" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" 67.19.102.242 0.006
404 www.neosensorz.com "GET /Wordpress/wp-login.php HTTP/1.1" "-" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" 67.19.102.242 0.005
404 www.neosensorz.com "GET /wordpress2/wp-login.php HTTP/1.1" "-" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" 67.19.102.242 0.008
</pre>

I started to think about ways to automatically block them. I didn't figure that Google would provide a list of CIDR blocks, and based upon what I've read, it would appear that I was right, they don't. I read on their blog that they suggest using DNS to do a reverse lookup and see if it contains their domain name, like this:

<pre class="sh_sh">
$ dig -x 66.249.71.155
; &lt;&lt;>> DiG 9.6.1-P1 &lt;&lt;>> -x 66.249.71.155
;; global options: +cmd
;; Got answer:
;; ->>HEADER&lt;&lt;- opcode: QUERY, status: NOERROR, id: 63653
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0
;; QUESTION SECTION:
;155.71.249.66.in-addr.arpa.	IN	PTR
;; ANSWER SECTION:
155.71.249.66.in-addr.arpa. 86400 IN	PTR	crawl-66-249-71-155.googlebot.com.
;; Query time: 157 msec
;; SERVER: 192.168.1.1#53(192.168.1.1)
;; WHEN: Tue Jun  1 02:49:14 2010
;; MSG SIZE  rcvd: 91
</pre>

Since I use NGINX as the front-most web server, I could manually set non-Google ip addresses in a **"map"** block and check them when the user-agent contains the Googlebot string, something like this:

<pre class="sh_c">
map  $remote_addr  $nogip  {
default 0;
67.19.102.242 1;
}
if ($http_user_agent ~ Googlebot) {
  set $noacc $nogip;
}
if ($http_user_agent !~ Googlebot) {
  set $noacc 0;
}
if ($noacc = 1) {
  return 503;
}
</pre>

I doubt I'll set this up though, its too specific!

