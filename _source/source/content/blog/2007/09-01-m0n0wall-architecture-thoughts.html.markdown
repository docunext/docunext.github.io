---
title: M0n0wall Architecture Thoughts
date: 2007-09-01
tags: firewalls,freebsd,m0n0wall,pfsense
---
NOTICE: These are just quick notes and are very disorganized! I'm planning to clean them up soon, but posted them here to do so.

I just read through the "unborn" architecture document outlining a new m0n0wall design. There are some great concepts in there.

I'm pleased with the design ideas - mainly that the system will provide more efficient operation of dynamic services. For example - updating firewall rules without requiring a restart.

Even with this new design, I don't think it makes sense to provide a fully-extensible, software-based module system, and instead suggest a more sophisticated building process.

Ideas:

* use sqlite
* xml module files

Also, I'm not sure if I understand the idea of the core. In the architecture doc, Manuel says:     "The core is responsible for the central management of all loaded modules. Newly loaded modules register the services that they offer, as well as the events that they can generate, with the core. Module dependencies are resolved during installation, in order to be able to load additionally required modules. "

Does that mean that for a service like djabberd, that somehow the messages that it handles are instead managed by the core, instead of the djabberd daemon?

When considering this new architecture, I was interested in the possibility of having the system run on something like a WRTG54L, but as I explore this idea more and more, I've been changing my mind. I'm not so concerned with high performance as I am with capability, and the main problem I see with devices like the WRT is the lack of storage. Trying to put an effective system on 4MB is tough. Even 8 is tough, but 64MB or more is quite easy. Along those lines, it would be great to work with MIPS, ARM, PPC, and of course x86. Furthermore, the possibility of running such a system on various operating systems such as linux, freebsd, or netbsd should within reach.

Let's get back to the architecture document. The real beauty of the document is revealed in the XML examples starting on page 12, section 6.1. In this section, Manuel describes an XML schema for describing modules. This sort of reminds me of the distinfo or dpkg files available, but better because of its XML!

In this light its easy to see that its more than just an architecture we're talking about here, its a distribution. But due to its potentially operating system ambivalence, as well as potentially being able to leverage existing package and porting repositories, I have been calling this concept a "meta-distribution" - its a way of repackaging, redistributing, or rebuilding existing distributions.

Before this train of thought gets way too out of control, let me constrain it a little. <b>This is only for servers and network devices.</b>

The fact that the operating requirements of servers and network devices can effectively be minimized (8mb for m0n0wall, 32 for freenas, and 128 for pfsense), leads me to suggest that the scope for such a meta-distribution is finite and manageable.

Going back to Manuel's module schemas, I would like to see not only operational information in these schemas, but also builder schemas. The schemas will need to know the module configuration format, and specify it in XSL so that XML based configuration keys and values can be output in a way the module can understand.

XML based webgui

One of the cool things about webguis is that they can be used as apis as well. Forget about rpc and soap! Get some REST instead! :-) However, machines and humans differ in what they consider "usable" and "user-friendly", so it the danger of having to create multple webguis is possible. I recommend using XML, XSL, and CSS to avoid doing that.

Why builders?

The fact that m0n0wall is 8MB and pfsense is 128MB is reason enough. Some folks might want a captive portal, some folks might not. Some folks might want squid, others who knows?

Architecture:

* Services
* Applications
* Modules
* Plug-ins
* Packages - must be very, very generic!

Variations:

* Embedded
* PXE
* Frugal?
* Multi-session CDR
* Remote control

Also in the architecture document, Manuel makes a great case against the current configuration system. While it works great for the current m0n0wall design, it has issues beyond what he mentions (access to foreign parts of the config file), including it modularity. For example, when replacing a m0n0wall appliance, it might be necessary to retain the configuration, but alter it for the new hardward. In this way, it would be great to be able to save "chunks" of the configuration for importing into the new appliance, similarly for new appliances - especially for services like VPNs which have complex configurations yet can sometimes be replicated several times. True, this can be done manually by editing the config.xml file, I am aware of that, I'm just using this as an example.

In his paper, Manuel suggests structuring the configuration more by splitting it into sections and by channelizing it. I think these are terrific ideas! He also mentions swapping responsibilities, but I'm not sure what he means by that, so I'll stick with the first two options. First off, having a global configuration is clearly a good idea. Information like hostname, ip addresses, and time is pretty much "context-free", meaning that the why the information is used should not be affected by how it is presented. Secondly, by having sections, you can specify some sections as required and persistent, while others can be transient, non-persistent, and/or readily changeable. This would even allow for a system to have a base installed configuration, like the information mentioned above ( hostname, ip addresses, hardware, etc.), then download its other configurations from a configuration server, like what ntp server to use, what dns servers to use, etc. etc. etc..

Let me also talk about channelizing the configuration a little. Let's use the example Manuel refers to in this context, the dhcp and firewall configurations. Rather than accessing the configuration itself, the dhcp server should ask the firewall server for its configuration. This is a little confusing, because you are probably thinking that the firewall "server" isn't really a server, and doesn't know much about sharing configuration information with other services in a consistent manner. But we're labeling the service here as a server, to contain it in an independent module. What we can actually talk to for this configuration information is the web server. As I propose, the web server would be capable of serving XML data.

Here's a good point that can be used to describe what Manuel is proposing with the core (I think). Instead of using a web server to serve XML configurations which would then need to be parsed (which would be slow), he's saying the core can serve the data directly and programmatically via the core to its server modules. For me, the jury still isn't out on which I like better, because in my experience it actually isn't that hard or time consuming to parse XML on the fly, especially if you're not doing it all the time and if by doing it you can avoid having additional constraints, which in this case, I believe you do. by using an internal api, you are limiting yourself to a single system, and would need to use a remote procedure call (RPC) to talk to other servers, but with an HTTP interface, the internet is your oyster.

While I was at it, I did a bunch of thinking about how to store the configuration. While XML is a great edit, transfer, communication, and/or messaging format, its not the best storage format. Since they are pretty straightforward, I'll just say what they are before going into an extended diatribe about why or why not any or all of them should be considered.

Storage engines:

* XML flat file
* SQLite
* Remote configuration server - daemon downloads it on boot, sort of like a pxe server, would need system configuration handy though

Sensory overload. Again you are probably thinking this is starting to look like the mythical giant squid crossed with moby dick, an erstwhile yet ungraspable pipe dream. But hey, what is life without dreams? Life is good, yet slightly uncomfortable, when you are barfing up your dreams into reality.

Now back to our regularly programmed reality. Here's where the builders come into play. You could potentially build a m0n0wall distribution that has <b>no configuration or management interface</b>, yet boots up and operates successfully on the first try. (Think about the possibilities here with CDRWs and USB sticks!) How? Well one thing that struck me as particularly cool in m0n0wall was the way it parses the xml file and writes out the configuration file for each service every time it boots. I thought: "hey, xsl can do that" (which is another good reason for using XML over HTTP). By using a build system like phing to build a m0n0wall image, you can even build a custom configuration file or set of files for inclusion. Well OK, but... SQlite? Yeah SQLite, its really the only dmbs that could fit on an embedded system, and while an rbdms on a remote or builder system would provide more usefulness, I believe that SQLite would provide the flexibility and sophistication required for a more advanced configuration process. Overkill? Not really, SQLite is actually phenomenally small.

I didn't think of this stuff on my own of course. As Neil Williams and Sir Isaac Newton put it, its a good idea to stand on giants shoulders when trying to see far away. Meraki gave me the idea of remote configuration, though I believe its likely they were inspired in turn by their own friendly giant.

The XML over HTTP stuff? Again, not me. Thanks to REST.

Give me your tired, your weak, and your poor.

Rationalization?

Systematic and consistent method for building, managing, and operating a set of network appliances and services with a wide variety of applications and application configuration formats and processes in a disparate, inconsistent, and unpredictable network environment.

Justification?

You might be thinking, wow this is some pretty powerful stuff.

Rebuild:

* m0n0wall
* askozia
* freenas
* pfsense

using nodows.

Read more on pfsense. Could / should a running nodows install be able to download, install and run a plugin?

LICENSE:

AGPL

Examples:

Build and manage a set of DNS servers...

mydns== M0n0wall GOOD ==

What do I love about m0n0wall:

* small
* simple
* clear
* management of CF
* filesystem in RAM
* configuration system - the building of configuration files during the booting process

#### PFSENSE GOOD

Things I really like about pfSense:

* pf
* load balancer
* carp failover
* Uses APC, very interesting. Suprised they don't use xcache - oh wait I see they are using PHP4.

Things I don't like about pfsense:

* complicated
* bloated
* inability to use traffic shaping when altq not available

Other ideas:

* layer7 load balancing with apache or...
* how to do the same stuff in linux?
* ipsec compression
* download and starting of binaries and their configurations
* sshfs
* nss_mysql

Can curl use digest authentication?

http://curl.haxx.se/mail/curlphp-2007-08/0033.html

Can php curl cache?

http://us.php.net/manual/en/function.curl-setopt.php#69115

Curl compresses! Need reference.

You could use a proxy cache like squid - that would be best.

Why use layer 7 load balancing when pf can use round-robin and "sticky-address", from the openbsd pf user's guide:"Successive connections will be redirected to the web servers in a round-robin

manner with connections from the same source being sent to the same web

server. This "sticky connection" will exist as long as there are states that

refer to this connection. Once the states expire, so will the sticky

connection. Further connections from that host will be redirected to the next

web server in the round robin."

HFSC is available on both linux and bsd!

Comparing linux to BSD:

* geom is like mdadm?
* pf is like iptables and tc
* does pf include routing capabilities like iproute2? - yes, because tc is part of iproute2. though some bsd routing capabilities are probably implemented elsewhere, like "route"

