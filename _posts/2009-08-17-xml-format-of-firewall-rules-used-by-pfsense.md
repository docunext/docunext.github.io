---
title: XML Format of Firewall Rules used by pfSense
date: 2009-08-17
tags: firewalls,pfsense,xml
---
This is what firewall rules from pfSense look like:

<pre>&lt;filter&gt;
&nbsp; &lt;rule&gt;
&nbsp;&nbsp;&nbsp; &lt;type&gt;reject&lt;/type&gt;
&nbsp;&nbsp;&nbsp; &lt;interface&gt;wan&lt;/interface&gt;
&nbsp;&nbsp;&nbsp; &lt;max-src-nodes/&gt;
&nbsp;&nbsp;&nbsp; &lt;max-src-states/&gt;
&nbsp;&nbsp;&nbsp; &lt;statetimeout/&gt;
&nbsp;&nbsp;&nbsp; &lt;statetype&gt;keep state&lt;/statetype&gt;
&nbsp;&nbsp;&nbsp; &lt;os/&gt;
&nbsp;&nbsp;&nbsp; &lt;protocol&gt;tcp&lt;/protocol&gt;
&nbsp;&nbsp;&nbsp; &lt;source&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;address&gt;192.0.2.0&lt;/address&gt;
&nbsp;&nbsp;&nbsp; &lt;/source&gt;
&nbsp;&nbsp;&nbsp; &lt;destination&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;any/&gt;
&nbsp;&nbsp;&nbsp; &lt;/destination&gt;
&nbsp;&nbsp;&nbsp; &lt;log/&gt;
&nbsp;&nbsp;&nbsp; &lt;descr&gt;&lt;/descr&gt;
&nbsp; &lt;/rule&gt;
&lt;/filter&gt;
</pre>

I'm working on a new project which will work with this type of data.

