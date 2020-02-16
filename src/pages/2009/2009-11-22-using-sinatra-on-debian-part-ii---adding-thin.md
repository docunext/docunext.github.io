---
title: Using Sinatra on Debian Part II Adding Thin
date: 2009-11-22
tags: rack,ruby,thin
---
This was way easier than I thought! I'll explain my setup, but first let me digress into gateway interfaces and proxies.

If I understand correctly, I'm starting down the "middleware" path of Ruby webserver interfaces, aka Rack.

In HTTP, CGI and FastCGI are "common gateway interfaces". They provide very simple, fundamental-environmental pathways for requests to be passed from one process to another, and similarly to pass a response back again. Different programs and services can implement the CGI / FastCGI standard and achieve interoperability. Unfortunately, as far as I can tell, the protocol is limited to a certain degree by its simplicity, i.e. it is difficult to pass complex, sophisticated objects back and forth to several intermediaries. If something goes wrong, its difficult to ascertain where things went wrong, and what went wrong.

In Python, WSGI is a python-specific webserver interface. I found it logical that the "GI" was retained - I could compare WSGI with FastCGI and CGI. Lua has WSAPI.

Now that I'm learning Ruby, it appears that "Rack" is the Ruby Gateway Interface.

These concepts are very cool, but they are a little foreign to me. I'm much more familiar with the idea of HTTP proxies, and more specifically filtering proxies. Like CGI applications, HTTP proxies can be limiting due to their simplicity, but I still feel there is some untapped value there. The FastCGI specification includes a filtering role. That sounded really terrific to me, but I never found it implemented anywhere and therefore found it difficult to pursue.

So back to the practical task of using Sinatra with thin! I created config.ru in the same directory as the hi.rb file I created based on instructions from the Sinatra homepage with the following contents:

<pre class="sh_ruby">
require 'hi'
run Sinatra::Application
</pre>

And then I ran thin like this:

<pre class="sh_sh">
$ thin1.8 start -R config.ru
>> Thin web server (v1.2.4 codename Flaming Astroboy)
>> Maximum connections set to 1024
>> Listening on 0.0.0.0:3000, CTRL+C to stop
</pre>

Easy enough! Let me delve into more about what I think is actually going on here.

Thin is a webserver. It handles HTTP stuff - opening and closing sockets, receiving GET/POST/whatever requests, HTTP headers, HTTP responses, etc.

Sinatra is a web application framework. The two connect together through Rack. Why would you want to connect Thin and Sinatra? You might not - you could alternatively connect a webserver like NGINX to more directly to Sinatra through a simpler gateway such as FastCGI or CGI. [I just checked into this and found that Rack is still required for CGI and even takes some tweaking to get FastCGI working right](http://www.sinatrarb.com/book.html#deployment_fastcgi).

So Rack is required to bridge the gap between a Sinatra application and HTTP. Why would the Sinatra developers do such a thing? There is probably a good reason, beyond keeping a projects focus in scope.

If I understand correctly, another reason for using Rack is that is this concept of middleware. Apparently, Rack can connect not only HTTP and Sinatra applications, but all sorts of cool thingamajigs.

For part III, I'm going to try the following setup:

**Thin -> Some Ruby Middleware -> Sinatra**
