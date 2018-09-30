---
title: More Thecus n2100 Pics
date: 2007-02-22
tags: thecus
---
Here's another couple shots of the Thecus, showing the serial connection, and an extra fan I added. These two are quieter than the original, but still pretty noisy.

<table>
<tbody>
<tr>
<td>
<a class="thickbox" href="http://www-sa.evenserver.com/s/img/2007/02/img_0121.JPG" title="Thecus n2100">
<img src="http://www-sa.evenserver.com/s/img/2007/02/img_0121.thumbnail.JPG" alt="Thecus n2100" />
</a>
</td>
<td>
<a class="thickbox" href="http://www-sa.evenserver.com/s/img/2007/02/img_0124.JPG" title="Thecus n2100">
<img src="http://www-sa.evenserver.com/s/img/2007/02/img_0124.thumbnail.JPG" alt="Thecus n2100" />
</a>
</td>
</tr>
<tr>
<td>
<a class="thickbox" href="http://www-sa.evenserver.com/s/img/2007/02/img_0126.JPG" title="Serial Connection">
<img src="http://www-sa.evenserver.com/s/img/2007/02/img_0126.thumbnail.JPG" alt="Serial Connection" />
</a>
</td>
<td>
<a class="thickbox" href="http://www-sa.evenserver.com/s/img/2007/02/img_0128.JPG" title="Thecus n2100 Serial Connection">
<img src="http://www-sa.evenserver.com/s/img/2007/02/img_0128.thumbnail.JPG" alt="Thecus n2100 Serial Connection" />
</a>
</td>
</tr>
</tbody>
</table>

And some other random info:

<pre class="sh_sh">cat /proc/cpuinfo
Processor       : XScale-80219 rev 0 (v5l)
BogoMIPS        : 593.10
Features        : swp half fastmult edsp
CPU implementer : 0x69
CPU architecture: 5TE
CPU variant     : 0x0
CPU part        : 0x2e3
CPU revision    : 0
Cache type      : undefined 5
Cache clean     : undefined 5
Cache lockdown  : undefined 5
Cache format    : Harvard
I size          : 32768
I assoc         : 32
I line length   : 32
I sets          : 32
D size          : 32768
D assoc         : 32
D line length   : 32
D sets          : 32
Hardware        : Thecus N2100
Revision        : 0000
Serial          : 0000000000000000
</pre>

I wish the fan regulator worked, or I wish I knew enough about electronics to slow down a fan a little bit. I'm sure it would have something to do with a resistor, but I dunno.

Cool! Martin included some info on controlling the fan, and it does have a gradient. I thought it was all or nothing. Right now, I've got my fans running at "80" out of 255, and they are practially inaudible. The drives are hovering around 41 degrees, but the cover is currently off. I'm going to put the cover back on in a minute and monitor the temp. Putting the cover back on will make it quieter too!

By the way, I used double sided tape to adhere a second fan to the front of the drives. That way I figure the air will blow through the channel between the drives where the the most heat is generated.

Here's my current temp:

<pre class="sh_sh">194 Temperature_Celsius     0x0022   118   112   000    Old_age   Always       -       40
</pre>

I should also note that the Thecus I'm currently working with is not under heavy load by any means. And some of my other settings:

noatime in fstab, installed laptop-mode-utils, and I think that's about it.

Some other thoughts:

<ul>
<li>I have 256MB RAM installed. I had 512MB, but I wasn't sure it was being put to good use. Anyone have any opinions to share?
</li>
<li>I setup RAID1 with my two drives - probably not worth it, as the throughput doesn't seem capable of nearing the output of a non-RAID setup. True you get redundancy but this isn't a disaster recovery for me.
</li>
<li>Two 1000Mbit nics - what for? I'm now a believer in specialized hosts rather a setup that can do everything. Meaning I don't want to use the Thecus as a router - just a storage device. Others may, but I don't. And I don't think a single 1000Mbit would be more than enough pipe for the throughput this device is capable of. Any opinions?
</li>
</ul>
<b><div>
</div>Temperature Update
</b>:

I've been copying a large file over the network for about 10 minutes, and the temperature has gone up to 44 degrees. Still not bad at all. Also the cover has been on during this time.<div>
</div><div><b>Temperature Update 2
</b>:

20 minutes later and a 400MB file xferred the Thecus temp has risen higher than I've ever seen it. Its still rising slowly, and I'm hoping it will eventually stop and start decreasing. Currently it is at 49 degrees celcius.<div>
</div><div><b>Temperature Update 3
</b>:

Once if got up to 50 degrees, I sped up the fan to "120" out of 255 and the temperature dropped quickly. Its now at 39. Maybe I can find a midpoint in between 80 and 120 that is quiet but effective.

Again, here are the links to "the Thecus pages":

<a href="http://www.smallnetbuilder.com/content/view/29720/75/">Retest of the Thecus n2100 at SmallNetBuilder
</a>

<a href="http://www.cyrius.com/debian/iop/n2100/install.html">Debian on the Thecus n2100
</a>

<a href="http://www.debonaras.org/wiki/Info/ThecusN2100">Thecus n2100 at Debonaras
</a>

<a href="http://nchip.livejournal.com/7777.html">Nice thread at nchips livejournal about the Thecus and software porting: Allnet ALL6500: Next Debian/Arm porting machine?
</a> - I like the arrow pointing at the memory slot! :-)

<a href="http://onbeat.dk/thecus/index.php/Main_Page">Mucho Thecus Info
</a></div></div>

