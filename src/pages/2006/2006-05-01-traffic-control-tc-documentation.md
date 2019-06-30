---
title: traffic control tc Documentation
date: 2006-05-01
tags: none
author: Albert Lash
---
<h2 id="toc0">Bandwidth Throttling on Linux</h2><p>To setup bandwidth throttling on linux, you can use advanced linux routing techniques. Install a package called iproute2, and it should include the &quot;tc&quot; binary command.</p><h3 id="toc1">tc - traffic control</h3><p>Traffic control on linux is done using the tc command. It can setup kernel packet queuing management disciplies, and you have incredible control over how the packets are released to the network. You can also have limited control over incoming packets using an ingress queue.</p><h3 id="toc2">My tc notes</h3><p>TBF is causing rsync and scp to report back very low transfer rates. Something with this is not right because Fugu, an SCP client reports accurate transfer rates.</p>
<p><strong>External tc - related links</strong>

<a href="http://snafu.freedom.org/linux2.2/iproute-notes.html" rel="nofollow">http://snafu.freedom.org/linux2.2/iproute-notes.html</a>

<a href="http://www.opalsoft.net/qos/" rel="nofollow">http://www.opalsoft.net/qos/</a></p>
