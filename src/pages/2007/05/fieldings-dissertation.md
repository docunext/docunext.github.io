---
title: Fielding s REST Dissertation
comments:
  - author: Blake
    email: dournaee@gmail.com
    date: 07/02/2007 02:15:57 PM
    text: >
      Hey dude, Fielding's Dissertation was in Computer Science (it says so right on the dissertation itself). All Ph.D's are "Doctor of Philosophy" in X.
  - author: admin
    date: 07/02/2007 02:18:37 PM
    text: >
      Thanks for clearing that up Blake. Just checked, you are right.
  - author: Mutuelle
    email: elodycompareo@hotmail.fr
    url: http://mutuelle.compareo.net
    date: 08/09/2010 04:10:03 AM
    text: >
      REST for the overall architecture of a system. It does not define how to achieve in the details. In particular, REST services can be made. NET, Java, CGI or COBOL.
date: 2007-05-05
tags: none
author: Albert Lash
---
I'm reading <a href="http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm">Roy Fielding's dissertation: "Representational State Transfer"</a>, and here are my notes:

<a href="http://www.ics.uci.edu/~fielding/pubs/dissertation/software_arch.htm#sec_1_3">Configurations</a> - use of the word topology here reminds me of the often used term "sitemap" (it is used in <a href="http://www.nexista.org/">Nexista</a> all the time - <a href="http://www.docs.nexista.org/Nexista/tutorial_sitemap.pkg.html">Nexista: The Sitemap</a>). Topology is nice because of it covers more "ground" (no pun intended) than sitemap. Perhaps it would be better to limit the definition of the word sitemap (in the context of websites and software architecture) to how search engines and visitors see websites, and instead use topology to describe the same system from what a developer or architect is working on. Methinks a site-topology.dtd is a good idea! Some development frameworks which use the "sitemap" concept: cocoon, popoon, nexista, <a href="http://ausweb.scu.edu.au/aw02/papers/refereed/calvo/paper.html">OACS (tcl webapp framework)</a>, and probably several others.

<a href="http://www.ics.uci.edu/~fielding/pubs/dissertation/software_arch.htm#sec_1_5">Definition of Architectural Styles</a> - this definition rocks. Last night, I, like <a href="http://tomayko.com/articles/2004/12/12/rest-to-my-wife">Ryan Tomayko</a>, tried to explain REST to my wife, and in hindsight I'm surprised I was able to conjure up a similar explanation of architectural style. I had explained to her that in the course of building shelter, humans had tried numerous different strategies and attempts with varying levels of success. It is the architect's role to identify styles within patterns, organize and clarify them, and finally document and communicate them to other architects, builders, and developers. This can obviously be done on a scholarly level or on a project by project level. As a side note: my <a href="http://txtst.com/">friend and fellow technical megadon Mike Bukhin</a> once compared software development to urban design in that it is "never done". I'm amazed as how durable that comparison has proved to be! Another side note: Mike! I can't believe you're going to work for Microsoft!

<a href="http://www.ics.uci.edu/~fielding/pubs/dissertation/software_arch.htm#sec_1_7">Views</a> - this was helpful to understand the relationship of model-view-controller (MVC) development to REST.

I skipped sections 1.8.3-1.8.5.

<a href="http://www.ics.uci.edu/~fielding/pubs/dissertation/net_app_arch.htm#sec_2_1">Scope</a> - Yes, I'm working on the type of applications that are focused on in Fielding's dissertation. I call them web applications. <A href="http://www.ics.uci.edu/~fielding/pubs/dissertation/net_app_arch.htm#sec_2_2">2.2 Evaluating the Design of Application Architectures</a> - derivation tree? Reminds me of score based decision engines, like spamassassin. Yes, in the last paragraph he references Perry and Wolf saying:

<blockquote>

Design evaluation is frequently a question of choosing between trade-offs. Perry and Wolf [105] describe a method of recognizing trade-offs explicitly by placing a numeric weight against each property to indicate its relative importance to the architecture, thus providing a normalized metric for comparing candidate designs. However, in order to be a meaningful metric, each weight would have to be carefully chosen using an objective scale that is consistent across all properties. In practice, no such scale exists. Rather than having the architect fiddle with weight values until the result matches their intuition, I prefer to present all of the information to the architect in a readily viewable form, and let the architect's intuition be guided by the visual pattern. This will be demonstrated in the next chapter.</blockquote>

I skipped section 2.3 and chapter 3 for now based upon the belief that my goals are aligned with the architectural properties that REST affords.

I skimmed through but did read chapter 4 based on a margin understanding of the history of the web, as well as its problems. The end of he chapter is important in that it exposes Fielding's hypothesis and methodologies.

<a href="http://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm#sec_5_1_3">5.1.3 Stateless</a> - Unfortunately the terms stateful and stateless are so generic and bland they are hard to grasp. In terms of web development, I like to describe these terms like so:

<ul><li>Stateless - each operation happens in isolation, in that when a user clicks a button, the "system" (i.e. the client / server combination) does not inherently provide continuity through to the next state (i.e. what the next screen looks like).</li><li>Stateful - each operation is connected to each other, and rather than producing a new state, it modifies the current state.</li></ul>

For example, we have setup a site sketch99.com to expose the difference between these conditions through the use of server-side XSLT transformations as well as client-side-only javascript operations on the dom. It the latter case, the dom is continually modified by the javascript operations, whereas the dom is fully reset during each XSLT transaction. In other words, client side javascript can continuous change and modify one state into different manifestations (stateful), whereas server-side XSLT can create numerous, different states with accordingly different manifestations.

It should be noted here that both Javascript and XSLT can reverse roles. Javascript can become a client of a server in the same was as a browser (as in the case of <a href="http://www.w3.org/TR/XMLHttpRequest/">XMLHttpRequest Objects</a>, aka <a href="http://en.wikipedia.org/wiki/AJAX">AJAX</a>), and XSLT can perform transformations solely on the client in a stateful manner, hence the specificity of the previous examples (see <a href="http://www.tonymarston.net/php-mysql/client-side-xslt.html">for an example of Performing client-side XSL transformations</a>.

Refer to <a href="http://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm#tab_5_1">Table 5.1 for clarification on REST data elements</a> which remind me of http header content.

In section <a href="http://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm#sec_5_3_1">5.3.1 Process View</a>, Fielding again uses the term "pipe-and-filter", which reminds me of the action modules in nexista, and obviously the pipe element of the command line interface - "|".

<a href="http://www.ics.uci.edu/~fielding/pubs/dissertation/evaluation.htm#sec_6_2_2">Section 6.2.2 Manipulating Shadows</a> not only has a cool name, but also starts to answer a burning question I've had since I started to learn about REST - what replaces the "verb" aspect of RPC in the world of REST? Fielding phrases the question more clearly in this way:

<blockquote>how does a user access, manipulate, or transfer a concept such that they can get something useful when a hypertext link is selected?</blockquote>

and thankfully goes on to answer that question:

<blockquote>REST answers that question by defining the things that are manipulated to be representations of the identified resource, rather than the resource itself. An origin server maintains a mapping from resource identifiers to the set of representations corresponding to each resource. A resource is therefore manipulated by transferring representations through the generic interface defined by the resource identifier.</blockquote>

I interpret the above as meaning the "representations of the identified" could achieved through the use of xlinks. Maybe? Am I close? Unfortunately the next two paragraphs don't make much sense to me...  in the last paragraph Fielding uses the term "information hiding" which strikes a chord with me, but again I'm can't grasp the meaning or significance of:

<blockquote>Because a client is restricted to the manipulation of representations rather than directly accessing the implementation of a resource, the implementation can be constructed in whatever form is desired by the naming authority without impacting the clients that may use its representations.</blockquote>

Re-reading it for the third time, I take that to mean that independent authors can build the back-ends of their applications however they want without worrying about the resulting impact on the client - server relationship. I think this didn't make sense to me on the outset because the client-server relationship was well defined by the time I started web development and is certainly something I take for granted! :-)

I agree with <a href="http://www.ics.uci.edu/~fielding/pubs/dissertation/evaluation.htm#sec_6_3_2_1">6.3.2.1 Host</a> in that I only use:

<pre>$_SERVER['SERVER_NAME'];</pre>

instead of

<pre>$_SERVER['HTTP_HOST'];</pre>

in my PHP-based applications.

In reading chapter 6, Fielding has reminded me of my heartfelt appreciation of the Apache web server, the header() function in PHP, and the HTTP 1.1 specification. In fact, his REST dissertation is a great read for someone wanting to learn about HTTP.

I haven't even read section <a href="http://www.ics.uci.edu/~fielding/pubs/dissertation/evaluation.htm#sec_6_5_1">6.5.1 Advantages of a Network-based API</a>, but the title alone incredibly satisfying for me to read because it validates my choice to use a libcurl and javascript as client-interfaces to my application APIs and (though it should be obvious) the web server as the application server APIs. To try and explain this better, let me put it this way: I have decided to setup my applications so that they can transfer, represent, and manipulate data to and from one another in the same exact way that their users do.

Why did I decide to do this? I decided to use HTTP as my API methodology of choice because of the incredible, and as I mentioned earlier on a different subject, often taken for granted, characteristics: cache-ability, simplicity, consistency, standardization, and oh so much more.

As Fielding puts it:

<blockquote>

A network-based API is an on-the-wire syntax, with defined semantics, for application interactions. A network-based API does not place any restrictions on the application code aside from the need to read/write to the network, but does place restrictions on the set of semantics that can be effectively communicated across the interface. On the plus side, performance is only bounded by the protocol design and not by any particular implementation of that design.

A library-based API does a lot more for the programmer, but in doing so creates a great deal more complexity and baggage than is needed by any one system, is less portable in a heterogeneous network, and always results in genericity being preferred over performance. As a side-effect, it also leads to lazy development (blaming the API code for everything) and failure to account for non-cooperative behavior by other parties in the communication.</blockquote>

which I take to mean: "less is more".

So what is an independent application developer who doesn't use PHP or javascript to do if they want to interface with one of my applications? There are many other choices:

<ul><li>libwww is a perl based client - <a href="http://www.w3.org/Library/">http://www.w3.org/Library/</a></li><li>httpclient is a java-based client - <a href="http://jakarta.apache.org/commons/httpclient/">http://jakarta.apache.org/commons/httpclient/</a></li><li>wget is a command line client - <a href="http://en.wikipedia.org/wiki/Wget">http://en.wikipedia.org/wiki/Wget</a></li><li>CURL (which I use in PHP) is an independent library which can be accessed in many ways - <a href="http://en.wikipedia.org/wiki/CURL">http://en.wikipedia.org/wiki/CURL</a></li></ul>

There are many quality <a href="http://en.wikipedia.org/wiki/Category:HTTP_clients">http clients</a> which are freely available.

<strong>My Conclusions</strong>

So what do I make of REST? I noted that Fielding's doctorate was in Philosophy, and I accordingly view REST as an architectural and development philosophy. His dissertation does not include details about how one goes about building a REST application, which I think was smart to do and am guessing that he omitted that on purpose. REST is not a specification or a protocol, I'll repeat myself by saying it is an architectural and development philosophy. It encourages me to not take for granted the incredible work that has gone into specifying HTTP 1.1, and to leverage that work in building network-based applications.

Unfortunately, I, and I imagine many others, look to REST for design specifications, such as how to structure XML-based result sets returned by API URIs, or when to use "pretty" URIs. After learning more about REST, I'm planning to instead turn to SOA, UDDI, and WSDL documentation for some guidelines,

Upon a few cursory glances, I've made the following preliminary judgments:

<ul><li><a href="http://en.wikipedia.org/wiki/Service-oriented_architecture">SOA</a> is a slightly more specific architecture philosophy for developing service oriented applications</li><li><A href="http://en.wikipedia.org/wiki/Universal_Description%2C_Discovery%2C_and_Integration">UDDI</a> is a much more specific standard for business registrationon the internet</li><li><a href="http://en.wikipedia.org/wiki/Web_Services_Description_Language">WSDL</a> is on its way to becoming a W3C recommendation, which means to me that the XML tags contained in WSDL documents will likely have consistent meanings across documents, clients, servers, networks, and autonomous systems. Now THAT would be cool.</li></ul>

To me, Fielding's paper summarizes the ways the HTTP Specification can be leveraged to support the continually evolving and expanding requirements of the world wide web and its uses. By "evolving and expanding requirements of the world wide web and its uses" I am referring to web applications, aka web services, and by saying the HTTP specification can be leverage to support them, I mean that the HTTP specification is more relevant to web application architecture than a cursory glance may suggest and use of its principals will improve web application development processes and thus the resulting web applications.

Additionally, though less relevant to me, his paper also explores potential future changes and additions to the HTTP specification to further support the needs of the web.

¥
