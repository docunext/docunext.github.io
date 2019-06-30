---
title: Javascript HEAD keepalive
comments:
  - author: Marco
    email: marcusbu@gmail.com
    ip: 192.168.8.2
    url: http://markon.netsons.org
    date: 08/04/2009 04:30:59 AM
    text: >
      Thank you for this explanation ;)<br/>keepalive! :-)<br/>
  - author: http://www.openid.albertlash.com/openid/
    email:
    ip: 71.163.55.98
    url:
    date: 08/09/2009 01:14:28 AM
    text: >
      Gratzie Marco!
date: 2007-09-15
tags: ajax,javascript,latency,tcp
---
Can I use javascript to keep alive a connection to a webserver? Probably, but why? For a couple of reasons, you save the existing process at a minimal expense (I think the expense would be minimal), and let the connection die when the client moves on.

For example, if you have too high a keep alive, then your server is going to hold connections open waiting for the original connection to make another request - even if the original requester has gone on to another site. Set it too low, and you'll be creating and destroying connections left and right. You could go somewhere in between, but another alternative is to have a javascript cron-like process in the browser "ping" the server every 5 or 10 seconds, up to 5 or 10 times, to keep the connection open. If the user closes there window or moves off the page, the javascript will stop pinging.

This would also work for TCP connections, which is good for sticky connections in load balancers as well.

Couple other comments:

* I think the issue of process creation isn't as big of a deal when you are dealing with threads, like the Apache MPM Worker does. Not sure about that.
* You can have different keepalive timeouts for different virtual servers, which is great for SSL sites that you'd want to maintain connections for longer (the user will probably stay active) because a high surge of different visitors is less likely to occur (though on plain http it could happen at any time!).

#### Results

When using AJAX to sent a keepalive message to a web server, apache 2 mpm-worker in this case, I measured an average response time of around 30ms (obviously this would be network dependent). When creating a new connection, the response time was almost double, 60ms. Not a big deal, but multiple that by a million.

<b>Surprises</b>

I guess it shouldn't come as a surprise, but the request and response headers had a sizable impact on the response time. I trimmed as many as I could, and found the the referer [sic] request header could not be trimmed via javascript in Mozilla, more on that below. The fewer the request and response headers, the faster the response.

FYI - I'm only doing a HEAD request, so there is no payload beyond the headers.
<h3>The Annoying Referer [sic] Request Header</h3>

In writing up a script about this concept, I learned about a part of the HTTP specification that is kind of broken and susceptible to abuse in several ways. The referer request header. Yes, its misspelled. Yes, some people use it to authenticate users for access to images, commenting capabilities, and more, when in my opinion its a lousy way to authenticate people.

Many user agents can put whatever they want in the referer header, so its not a very reliable indicator of authenticity. On the other hand, ajax opens up the possibility of hijacking people's browsers to do behind the scenes activities without their knowledge. Say for instance, you browse a page that contains some sneaky ajax. That ajax can open up a new connection in your browser to other websites without your knowledge. What for? Its hard to say, but I'm sure the sneaky people can find a reason. (Ooh, I just thought of one - a web surfer to xyz.com could become the unsuspecting submitter of a spam comment on another, totally unrelated blog, via an XMLHttpRequest, or a series of them) Because of this, the W3C has recommended that the referer request header, among others, be non-editable for XMLHttpRequest objects, and this is the case in Mozilla. Why? Well it gives servers a way to tell where the requests are coming from, especially if they are coming from unassuming, otherwise legitimate clients, i.e. average web surfers. Even with that knowledge, the server can't do much. They could block all requests that don't have a proper http referer request header, but many clients automatically block this header for privacy concerns, with good reason.

In my case, the referer header is unnecessary payload in a simple keepalive request. In my humble opinion, it might make sense to prevent ajax clients from manipulating or faking the referer header, but why prevent them from not sending it at all?

If servers want to use a simple mechanism like the referer request header as a method to authenticate clients for access to images and comment posting capabilities, they should instead use a nonce GET parameter. It would be much more effective method. In fact some spam defense strategies for blogs already do so.

The benefits of the referer header? As a webmaster, its nice to know where your traffic is coming from, but when there is a good change that the information is invalid, its not that nice. This is another reason why I like the idea of a pingback. They give you a heads up that someone has linked to one of your pages. Unfortunately, pingbacks are also a fairly broken method for link awareness and an often abused protocol.

As a result of today's work, I've decided to turn off sending the request header on my browsers. At least it will save a little bandwidth! :-) To do so yourself, its easy to do in Firefox, but I couldn't figure out how to set it up in IE or Safari - I also noticed that Safari won't let AJAX override its User-Agent. For Mozilla / Firefox clients, just type "about:config" into your menu bar, the search for referer, and change the 2 to a 0.

* <http://www.docunext.com/wiki/Comet>
* <http://kb.mozillazine.org/Network.http.sendRefererHeader>
* <http://httpd.apache.org/docs/2.0/mod/core.html#keepalivetimeout>
* <http://pbbakkum.com/print.php?type=articles&amp;id=7>
* <http://tldp.org/HOWTO/TCP-Keepalive-HOWTO/overview.html>
* <http://www.pmg.com/tip_archive/03_03.htm>
* <http://en.wikipedia.org/wiki/Stateful_firewall>
* <http://www.aarongifford.com/computers/ipfwpatch.html>
* <http://www.sean.de/Solaris/soltune.html#common>
* <http://www.mercurytide.co.uk/whitepapers/issues-working-with-ajax/>

¥
