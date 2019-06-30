---
title: NSLU2 Network Bridge USB to Ethernet
date: 2007-02-16
---
In planning the rebuild of our network, a new strategy I'm employing is to compartmentalize various services to different machines. I used to consolidate them to save money on hardware and energy, but with the advent of low-cost, low-power, linux-capable embedded devices, it makes much more sense to separate the services based upon security concerns, information sensitivity, and required update frequency.

The devices I'm referring include, but are not limited to, the following:

<ul><li><a href="http://www.my-tech-deals.com/blog/2008/01/16/linksys-nslu2-price-drop/">Linksys NSLU2</a></li><li>Thecus n2100</li><li>Netgate M1n1wall</li><li>Hacom Thinbox</li></ul>

However, the lowest price devices, the NSLU2 "SLUG", and the more powerful Hacom Thinbox only have 1 ethernet port. So I did a little more digging and found a great website that's done a lot more digging, albeit on behalf of the Macintosh operating system, which thankfully happens to be based on BSD. One of the beautiful things about the NSLU2 is that it can run Debian, one of my favorite operating systems.

The webpage I speak of is: <a href="http://www.sustworks.com/site/news_usb_ethernet.html">USB-To-Ethernet Adaptors for Mac OS X @ Sustworks.com</a>.

So based upon the overview the provide of the Pegasus and AX8817X chipsets and available drivers, I was able to extrapolate and find that the the Linksys USB100M also uses the Pegasus chip, which is easy to setup on the NSLU2 Slug. The only thing that concerns me is that the ethernet adapter looks a little fragile, but it comes with a separate usb extension. Will it provide the flexibility to prevent damage? Hope so.

Related pages:

<a href="http://www.debonaras.org/">Debian on Routers and Stuff</a> - I love that name!

<a href="http://www.nslu2-linux.org/wiki/Debian/HomePage">NSLU2-Linux</a> - Great info on Debian for NSLU2

<a href="http://shopping.hacom.net/catalog/product_info.php?products_id=91">Hacom Thinbox</a>

<a href="http://www.netgate.com/product_info.php?cPath=60&products_id=312">Netgate m1n1wall</a>

<a href="http://www.my-tech-deals.com/blog/2008/01/16/linksys-nslu2-price-drop/">Buy an NSLU2</a>
