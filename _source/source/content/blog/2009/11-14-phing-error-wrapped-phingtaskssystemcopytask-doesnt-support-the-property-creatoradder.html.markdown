---
title: Phing Error wrapped phing.tasks.system.CopyTask doesn t support the property creator adder. 
date: 2009-11-14
tags: phing,xml
---
I haven't seen this one before...

<pre class="sh_xml">
    &lt;copy todir="${dirs.build}/etc/" overwrite="true">
      &lt;property name="nginx_fstab" value="#"/>
      &lt;filterchain>
        &lt;expandproperties />
      &lt;/filterchain>
      &lt;fileset dir="${dirs.files}/debian/etc/">
        &lt;include name="etc/network/interfaces"/>
        &lt;include name="inittab"/>
        &lt;include name="rc.local"/>
        &lt;include name="sysctl.conf"/>
        &lt;include name="fstab"/>
        &lt;include name="vz/conf/777.conf"/>
      &lt;/fileset>
    &lt;/copy>
</pre>

If I remove:

<pre class="sh_xml">&lt;property name="nginx_fstab" value="#"/></pre>

it works OK.

