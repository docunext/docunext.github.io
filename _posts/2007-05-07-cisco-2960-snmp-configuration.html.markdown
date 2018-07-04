---
title: Cisco 2960 SNMP Configuration
date: 2007-05-07
tags: cisco,configuration
---
<a href="http://www.cisco.com/en/US/products/ps6406/products_configuration_guide_book09186a00805f80e4.html">Cisco 2960 Manual</a>

Gosh that was ridiculously difficult. Turned out to be that the vlan1 interface was simply down. Duh.

<pre class="sh_sh">
#configure terminal(config)
#interface vlan1(config-if)
#no shutdown(config-if)
#end
</pre>

