---
title: Everex NC1500 DSDT Fix
comments:
  - author: Scott
    email: sjmacewan@gmail.com
    date: 04/18/2009 05:27:00 PM
    text: >
      I'm not sure if you still know about this, but could you give a better description of what file you mean by 'your-initrd-file-here'? I'm not THAT familiar with Linux yet (Ubuntu 8.04LTS)<br/>Thanks!
  - author: Albert
    date: 04/18/2009 05:54:03 PM
    text: >
      Hi Scott, the 'your-initrd-file-here' would likely mean the initial ram disk used to boot the system. For ubuntu and debian its usually located in the /boot/ directory and starts with initrd.<br/><br/>Does that help?
  - author: Scott
    email: sjmacewan@gmail.com
    date: 04/18/2009 06:13:29 PM
    text: >
      Albert,<br/>Thanks for your quick reply!<br/>That does answer my question, unfortunately, the fan on my VA1500 still runs nonstop. Oh well! Worth a try!
date: 2007-03-06
tags: bios,c7,energy,everex,hardware,via
---

<a class="thickbox" href="http://www-sa.evenserver.com/s/img/2007/03/img_0172.JPG" title="Everex Notebook - Copyright Albert Lash">
<img src="http://www-sa.evenserver.com/s/img/2007/03/img_0172.thumbnail.JPG" alt="Everex Notebook - Copyright Albert Lash" />
</a>

<a class="thickbox" href="http://www-sa.evenserver.com/s/img/2007/03/img_0173.JPG" title="Everex Notebook with Windows XP Home - Copyright Albert Lash">
<img src="http://www-sa.evenserver.com/s/img/2007/03/img_0173.thumbnail.JPG" alt="Everex Notebook with Windows XP Home - Copyright Albert Lash" />
</a>

</a>

<pre class="sh_sh">Device (FAN)
{
    Name (_HID, EisaId ("PNP0C0B"))
    Name (_PSC, 0x00)
Method (_PS0, 0, NotSerialized)
    {
       \_TZ.PFAN._ON ()
       SFAN(0x03)
    }
}
</pre>
----            Scope (\_TZ)

didn't do anything...----

changed line: 2532 from 0x02 to 0x03

nothing...-----

I kind of think its working now...

This is the link that finally worked:

<a href="http://kubuntuforums.net/forums/index.php?topic=6523.0;topicseen" rel="nofollow">http://kubuntuforums.net/forums/index.php?topic=6523.0;topicseen  - fix DSDT for proper ACPI fan function
</a>

My code is a little different:

<pre class="sh_sh">Device (FAN)
{
    Name (_HID, EisaId ("PNP0C0B"))
    Name (_PSC, 0x00)
    Method (_PS0, 0, NotSerialized)
    {
        \_TZ.PFAN._ON ()
    }
    Method (_PS1, 0, NotSerialized)
    {
    }
    Method (_PS2, 0, NotSerialized)
    {
    }
    Method (_PS3, 0, NotSerialized)
    {
        \_TZ.PFAN._OFF ()
    }
}
</pre>

The fan state is always "on", but it only turns on when the processor is heavily used. This is awesome. I tested it and it turns on when the thermal zone reaches 55 degrees C.

http://kmandla.wordpress.com/2006/11/11/howto-set-up-edgy-for-speed/

http://forums.gentoo.org/viewtopic.php?t=122145

http://www.columbia.edu/~ariel/acpi/acpi_howto.txt

http://averatecforums.com/showthread.php?t=1705&amp;page=2

http://www.advogato.org/article/913.html

<strong>UPDATE June 22, 2007</strong>:

Looks like the location for the DSDT.aml file has changed. I'm now copying it to /etc/initramfs-tools/. After you copy DSDT.aml there, you need to mkinitramds -o your-initrd-file-here.

¥

