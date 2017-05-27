---
title: Can this router run linux 
comments:
  - author: Anonymous
    email: terminator@mailinator.com
    ip: 69.110.156.118
    url:
    date: 01/23/2008 10:21:49 PM
    text: >
      Note the ram chip is 64Mb (Megabit, not MegaByte).  8MB junker, next!
  - author: peter
    email: tech.fak@gmail.com
    ip: 67.166.250.242
    url:
    date: 07/26/2008 04:44:24 PM
    text: >
      Good job, looks like a nice little machine...<br/>I made the same mistake that you did and downgraded to the 2003 FW-Version. Cannot find the 2004 FW anywhere on the net.<br/>Any suggestions where to find another working FW ?<br/><br/>Thank you.
  - author: Albert
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url:
    date: 07/27/2008 11:03:40 AM
    text: >
      Hi Peter! I'm sorry I haven't touched the router in awhile, not sure....
  - author: Mike
    email: mikehibbett@oceanfree.net
    ip: 192.168.134.22
    url:
    date: 02/10/2009 04:41:48 PM
    text: >
      Hi, great story. I have a ISW054t, and your trick with reading the nvram worked. Nice.<br/><br/>I'm a bit stuck. I found this page while searching for a tip on how to reset the password back to admin/1234. I can't work aout how to restore factory defaults. Do you have any idea? I read the nvram file and found the 'admin' string but it looks like the password is encrypted.<br/><br/>Cheers,<br/><br/>Mike.
  - author: Mike
    email: mikehibbett@oceanfree.net
    ip: 192.168.134.22
    url:
    date: 02/10/2009 04:54:29 PM
    text: >
      Found it :o)<br/><br/>Press and hold the reset button for 10s. I should have guessed.<br/><br/>Interestingly, when I downloaded the nvram again, I saw that the default password 1234 stored in plaintext. Same when I changed it. So I must have been doing something wrong when I copied the password field from the nvram. Anyway, back in working order now.<br/><br/>Mike.
  - author: Albert
    email: albert.lash@savonix.com
    ip: 192.168.134.22
    url:
    date: 02/10/2009 09:02:42 PM
    text: >
      Cool! I was going to suggest maybe re-flashing the nvram with the image that's still floating around. Glad to hear you are back up and running!
  - author: Mov
    email: movaxbx@gmail.com
    ip: 192.168.134.22
    url:
    date: 03/19/2009 04:35:23 AM
    text: >
      Hi, just posting randomly after stumbling across this page via google (I realize it's quite old).<br/><br/>Interesting stuff. IIRC I flashed my ISW054t with the ISW054u firmware, which adds a print server (hence the USB port) configurable via the web interface.<br/><br/>It's a shame the assholes never released any source.
  - author: Albert
    email: albert.lash@savonix.com
    ip: 192.168.134.22
    url:
    date: 03/21/2009 08:59:28 PM
    text: >
      Hey Mov, I totally agree - they should have released the source (and breached the GPL by not doing so).
  - author: Miguel
    email: miguel.arce@arrobba.com.mx
    ip: 189.148.164.238
    url:
    date: 07/14/2010 03:09:23 AM
    text: >
      hi,<br/><br/>i would like to colaborate with you in this cruzade.<br/><br/>i have an Advantek Networks ABR-241 ( old one ) and its very much like your router.<br/><br/>I put a serial console to the thing and was hable to see it booting and take a look at the menus, i used an CA-42 Nokia clone cable.<br/><br/>This thing has an SD9148 procesor like yours, 8 MB FLASH RAM and 8 MB SDRAM so its pretty decent.<br/><br/>i think its possible it could run openWRT without problems.<br/><br/>if you are interested, please<br/>contact me i am miguel.arce at arrobba.com.mx or un_migue at hotmail.com
  - author: Albert
    email: albert.lash@savonix.com
    ip: 96.241.16.89
    url:
    date: 07/16/2010 07:04:41 AM
    text: >
      Hi Miguel, Thanks for commenting! I'd like to pick up this project again, but I don't have the time at the moment. Please keep my posted on your progress!
  - author: Miguel
    email: miguel.arce@arrobba.com.mx
    ip: 189.148.172.55
    url:
    date: 11/02/2010 10:15:04 PM
    text: >
      Hi, ok, right now i am going deep with the OpenWRT software to gain some basic experience in this firmware stuff, but there are some weird things about this device:<br/>firmware format: RTOS image format, its RealTimeOperativeSystem image format .. unknown.<br/>Bootloader ... uknown, i think in order to the openWRT firmware its necesary to change the bootloader and for that we need the board and procesor specs to compile some other bootloader...<br/><br/>well, thats what i'll be doing i have an wrt160nl to play also :)<br/>regards.
  - author: Albert
    email: albert.lash@savonix.com
    ip: 71.163.238.106
    url:
    date: 11/04/2010 12:44:39 AM
    text: >
      Sounds awesome Miguel! I wish I had time to experiment with it these days.
date: 2007-07-21
tags: none
author: Albert Lash
---

I bought a cheap router at geeks.com and now I'm tinkering with it to see if it can run free and open source software.

They were also smart enough to use a somewhat random lan address: 192.168.61.0/24, and the admin is easy enough to figure out: admin, 1234. The webgui leaves much to be desired, but does what it needs. Would be nice to be able to flash the device with m0n0wall or openwrt but that's unlikely. :-(

<a href="http://www-sa.evenserver.com/s/img/2007/07/snb10864.JPG">
<img src='http://www-sa.evenserver.com/s/img/2007/07/snb10864.thumbnail.JPG' title='snb10864.JPG' alt='snb10864.JPG' /></a>

I just opened it up and holy cow there is a host USB port!

<a href="http://www-sa.evenserver.com/s/img/2007/07/snb10860.JPG">
<img src='http://www-sa.evenserver.com/s/img/2007/07/snb10860.thumbnail.JPG' title='snb10860.JPG' alt='snb10860.JPG' /></a>

<a href="http://www-sa.evenserver.com/s/img/2007/07/snb10863.JPG">
<img src='http://www-sa.evenserver.com/s/img/2007/07/snb10863.thumbnail.JPG' title='snb10863.JPG' alt='snb10863.JPG' /></a>

The back of the board has a sticker that says "820-05905010".

It has a RTL8208 chip in it, which is decent, and I think the processor is an SD SD9148-AB, whatever that is. :-) Looks to be a MIPS 200Mhz chip, from some similarly name board specs available at <a href="http://www.silicon-data.com/" rel="nofollow">http://www.silicon-data.com/</a>.

It also has an <a href="http://www.etron.com/SDRAM.php?s1=1&s2=1">Etrontech em638325ts-6 chip</a>, which supplies the ram for the board. Wow, it looks like that is actually 64MB of ram. Cool! Here's the datasheet: <a href="http://www.etron.com/manager/uploads/EM638325_v14.pdf">PDF</a>.

Found some other cool pages on related efforts:

<a href="http://soapbox.bartsplace.net/article.php/20050118211503648">http://soapbox.bartsplace.net/article.php/20050118211503648</a>

<a href="http://forum.openwrt.org/viewtopic.php?pid=52367">http://forum.openwrt.org/viewtopic.php?pid=52367</a>

Too bad, looks like the manufacturer is breaking the GPL rules:

<a href="http://lkml.org/lkml/2004/4/22/72">http://lkml.org/lkml/2004/4/22/72</a>

Even though the inexq website is down, I found a firmware image for another one of their products:

<a href="http://www-sa.evenserver.com/s/img/2007/07/isw054t.zip">isw054t.zip</a>

I found it via some stupid driver download site that makes you pay for or watch a gazillion ads so I can't vouch for the validity or authenticity of the archive.

Also found this one at the same place:

<a href="http://www-sa.evenserver.com/s/img/2007/07/is050t.zip">is050t.zip</a>

Looks like the router already is running linux:

<pre>0017700    0a  63  70  6c  65  6e  73  20  3d  20  00  00  0a  63  70  6c          nl   c   p   l   e   n   s  sp   =  sp nul nul  nl   c   p   l

0017720    65  78  74  20  3d  20  00  00  0a  62  6f  72  64  65  72  20           e   x   t  sp   =  sp nul nul  nl   b   o   r   d   e   r  sp

0017740    3d  20  00  00  0a  00  0a  0a  00  00  00  00  0a  0a  20  2d           =  sp nul nul  nl nul  nl  nl nul nul nul nul  nl  nl  sp   -

0017760    2d  20  53  79  73  74  65  6d  20  68  61  6c  74  65  64  00           -  sp   S   y   s   t   e   m  sp   h   a   l   t   e   d nul

0020000    62  79  74  65  5f  63  6f  75  6e  74  20  3d  20  00  00  00           b   y   t   e   _   c   o   u   n   t  sp   =  sp nul nul nul

0020020    55  6e  63  6f  6d  70  72  65  73  73  69  6e  67  20  4c  69           U   n   c   o   m   p   r   e   s   s   i   n   g  sp   L   i

0020040    6e  75  78  2e  2e  2e  20  0a  00  00  00  00  4f  6b  2c  20           n   u   x   .   .   .  sp  nl nul nul nul nul   O   k   ,  sp

0020060    62  6f  6f  74  69  6e  67  20  74  68  65  20  6b  65  72  6e           b   o   o   t   i   n   g  sp   t   h   e  sp   k   e   r   n

0020100    65  6c  2e  0a  00  00  00  00  1f  8b  08  08  dc  b9  5d  3f           e   l   .  nl nul nul nul nul  us  8b  bs  bs  dc  b9   ]   ?

0020120    02  0b  55  4e  45  58  2d  74  2d  30  30  2d  30  39  2d  30         stx  vt   U   N   E   X   -   t   -   0   0   -   0   9   -   0

0020140    37  50  5f  55  2e  62  69  6e  00  ec  5c  7f  70  1c  d5  7d           7   P   _   U   .   b   i   n nul  ec   \ del   p  fs  d5   }</pre>

The important part there is: <b>U   n   c   o   m   p   r   e   s   s   i   n   g  sp   L   i   n   u   x   .   .   .</b>

I did some more digging and found with the help of this <a href="http://lists.gpl-violations.org/pipermail/legal/2005-March/000020.html">GPL violation page about how "Inexq/Unex use Linux kernel and other GPL software in their routers, yet refuse to distribute the source code..."</a>, I was able to decompress the img file from the firmware, and file all sorts of neat stuff, like: <textarea rows="6" cols="60"><pre>Firmware upgrade failure^@^@^@

Firmware upgrade successful^@^@^@^@tftp server: moved %lu bytes %s ^@^@^@^@tftp server error: status %d, msg: %s, host:^@^@^@^@image^@^@^@octet^@^@^@TFTP Server: got req while off^@TFTP Server:  Bad mode %s in req^@^@^@Transfers currently disabled.^@^@^@Transfer refused.^@^@^@TFTP Serve:  Ignoring req, too many connections^@^@^@^@TFTP Server: bad init opcode %u^@^@^@^@TFTP Server: session Alloc failed^@^@netascii^@^@^@^@Bad mode^@^@^@^@TFTP Server: UDP listen error^@^@UDP send failed^@UDP alloc failed^@^@^@^@Bad len (too short)^@short data from peer^@^@^@^@Rcvd unexpected data block^@^@ ^@^@^@bogus tftp error text^@^@^@ ^@^@^@Unknown transfer ID^@File already

exists^@Disk full^@^@^@See text^@^@^@^@File not found^@^@Access violation^@^@^@^@Illegal TFTP operation^@^@No such user^@^@^@^@ ^@^@^@Retry limit exceeded, giving up^@retry limit exceeded^@^@^@^@zero length file^@^@^@^@Transferred %lu bytes in %u.%u seconds^@^@tfstate^@tftps^@^@^@tfsrv^@^@^@Toggle tftp server on/off^@^@^@tftp server menu^@^@^@^@Display tftp stats^@^@OFF^@ON^@^@tftp server %s^@usage: tf%s host sourcefile [destfile]^@put^@get^@TFTP host address error: %s^@^@^@^@TFTP client error: %s^@^@OFF^@ON^@^@put to^@^@tftp server state %s^@^@^@connection: %s %u.%u.%u.%u, state:%d, bytes moved: %ld^@^@^@^@get from^@^@^@^@%d connections open</pre></textarea>

Sounds like there is something with a tftp server or client going on there. Which if I call correctly is how some of the wrt routers get upgraded. Yup, you basically send the firmware as the router is booting up, as described here at the <a href="http://wiki.openwrt.org/OpenWrtDocs/Installing/TFTP">OpenWRT TFTP flashing page</a>.

The current firmware is 00-10-04T2 updated in 2004, and I'm now trying to upload IS050t-S-00-09-07P.img. Well, it worked, but I just backgraded to 00-09-07P, Sep 09 2003 19:27:30. :-) At least I know it works!

There is a hidden page at /UE/Main <a href="http://www.ussg.iu.edu/hypermail/linux/kernel/0404.2/1394.html">(Allegro-Software-RomPager ^)</a>, and supposedly it is possible to get a shell.

I'm trying to figure out if I can get a shell <a href="http://lists.gpl-violations.org/pipermail/legal/2005-March/000032.html">^</a>, I don't think so, there isn't any telnet or shell keywords in the binary I could find. I think there is a console though, so there maybe some way to access that via a serial cable of some sorts. From what I read it appears that there is a voltage discrepancy of sorts.

The tftpd server works though, it is easy to update the firmware from the command line:

<pre>echo -e "binary\nrexmt 1\ntimeout 60\ntrace\nput IS050t-S-00-09-07P.img\n" | tftp 192.168.62.1</pre>

Only thing I could find about the CPU was in a patent application: <textarea rows="6" cols="60">[0015] The CPU 101 is a kernel component of the wireless gateway 10, and is connected with the SDRAMs 102, the flash memory 103, the crystal oscillator 104, the reset circuit 105, the Ethernet transceiver 106, the USB port 107, the JTAG port 108, the PCMCIA port 109 and the RS232 transceiver 110. Each of said SDRAMs 102 has a capacity of 32M bytes, and the flash memory 103 has a capacity of 8M bytes. The Ethernet transceiver 106 comprises six 10/100 Ethernet ports. Four of said Ethernet ports are used for communicating with one or more LANs 50, and the other two are configured for connecting to the WAN 20 and the DMZ 40 each in one-to-one correspondence. The PCMCIA port 109 communicates with the computer 90 or the digital camera by way of the wireless network card 60 in a wireless manner. In the preferred embodiment of the present invention, the CPU 101 is implemented by an <b>SD9148</b> chip produced by Silicon Data Company, and the Ethernet transceiver 106 is implemented by an RTL8208 chip produced by Realtek Company. In an alternative embodiment of the present invention, the wireless network card 60 is connected to the USB port 107 if the wireless network card 60 has a USB interface. In such case, the USB port 107 communicates with the computer 90 or the digital camera by way of the wireless network card 60 in a wireless manner.</textarea>

Patent number: 20040240425

I also found some information in Chinese about the system on chip (SoC):

<a href="http://www.dongxindz.cn/dongxindz_Product_1516572.html">http://www.dongxindz.cn/dongxindz_Product_1516572.html</a><textarea rows="6" cols="60"><pre>Joint top TE-SR400 broadband router configuration small and exquisite, slightly more than the palm of one's hand is the size of this test, Volume one of the smallest products. TE-SR400可以支持虚拟服务器、DDNS、DMZ主板以及特殊应用程序等高级功能，但是，该宽带路由器的网络控制、管理功能很弱，类似上网时间管理、网址过滤等功能没有被设计在内。TE-SR400 can support virtual server, DDNS. DMZ Main Board and special application procedures, and other advanced features, but the broadband router network control and management functions are very weak, Similar online time management, web site filtering, and other functions, were not designed. TE-SR400采用MIPS 3000构架的SD SD9148-AB处理器、具有8MB缓存，其电路板设计简洁、紧凑。TE-3000 SR400 using MIPS architecture SD SD9148-AB processor, with 8 MB cache, its circuit board design is simple and compact.　　在测试中，顶联TE-SR400的连接性能测试和吞吐量测试表现一般，其性能处于中等偏下水平。In tests, in conjunction top TE-SR400 link throughput performance test and performance test in general. Its performance in the middle - to-lower level. 让人感高兴的是，在Chariot应用性测试中，虽然没有通过100个连接测试，但在50个连接测试中，TE-SR400的吞吐量居然达到了92.878Mbps，成绩相当不错了。People are pleased about is that the Chariot application testing, although not connected through 100 tests But in 50 connection test, TE-SR400 actually achieve throughput of 92.878 Mbps. results quite well. </pre></textarea>

Since the SD9148 is a MIPS3000, perhaps it can use the Realtek 8181 sdk?

Also found this here: <textarea rows="8" cols="60"><pre>Product Name : HL-RT8268出品公司：深圳市三宝龙科技有限公司Products Company : Shenzhen City 3 Baolong Technology Ltd.尺� �：16Size : 16 	市场价� �：Market prices :请登陆才能看到报价Requests will be able to see the landing Price颜色：100Color : 100 	

VIP会员价：VIP Member Price :请登陆才能看到报价Requests will be able to see the landing Price企业级路由器Enterprise Router 商 品 详 细 说 明Trade details

HL－RT8268　路由器（企业级）宽带路由器说明HL-RT8268 Router (Enterprise) Note Broadband Router系统规� �( System Specifications ):System specifications (System Specifications) :使用芯片：美国（processor)sd9148;内存：64M;Use Chip : United States (processor) sd9148; Memory : 64M;高速缓存：16K(指令缓存8K; 数据缓存8K);Cache : 16K (8K instruction cache; 8K data cache);

flash: 16MFlash : 16M处理器(Processor)Processor (Processor)

200Mhz 32bit MIPS SoC200Mhz 32bit MIPS SoC

NAT转换效能<br> 最高可达 60Mbps 以上(LAN to WAN)NAT <br> conversion efficiency of up to 60Mbps over (LAN to WAN)系统管理<br> 浏览器图形接口管理(IE4.0 以上版本)System Management <br> browser graphical interface management (odd versions)软件重置<br> 内建重置按钮Built-in software replacement <br> RESET button固件升级<br> 可升级式固件更新<br> Upgrading firmware-upgradable firmware update硬件规� �( Hardware Specifications )Hardware specifications (Hardware Specifications)局域网络接口(LAN)LAN interface (LAN)

4×10/100BaseT Switch；802.3/802.3U，4 × 10/100BaseT Switch; 802.3/802.3U.(Auto MDI/X)(Auto MDI / X)广域网络接口(WAN)Wide Area Network Interface (WAN)

1×10/100BaseT；1 × 10/100BaseT;

ADSL/VDSL/PPPoE/Cable/LAN，(Auto MDI/X)，ADSL / VDSL / PPPoE / Cable / LAN, (Auto MDI / X)面板灯号显示<br> 电源/开机自我测试/广域网络连接/广域网络� <br> Panel lights indicate power / boot self-test / wide area network connectivity / WAN networks -送/局域网络连接/局域网络� 送/连接速度Send / LAN connectivity / LAN transmission / connectivity speed尺寸与重量Size and Weight

150*98*25（mm）;净重424g150 * 98 * 25 (mm); Weighing 424g架设方式<br> 桌上型Erection way <br> Desktop冷却<br> 自动冷却模式Cooling <br> automatic cooling mode电源Power

5V DC 2.0A 220VAC 50Hz5V DC 2.0A 220VAC 50Hz工作环境<br> 作业温度：0-45C；相对湿度：25-85%Work environment <br> operating temperatures ":-)",-Port; Relative humidity :25-85%软件功能( Firmware Specifications )Software (Firmware Specifications)通讯协议Communication Protocol

TCP/IP，DHCP Client/Server，PPP，PPPoE，TCP / IP, DHCP Client / Server, PPP, PPPoE,

ARP，ICMP，UTP，HTTP，NATARP, ICMP, UTP, HTTP, NAT网址过滤<br> 可管制内部使用者连接不当网站或是只能连接特Address filtering <br> internal controls can connect users only inappropriate websites or special link定网页Scheduled website流量统计<br> 记录过去进出内部局域网络的封包流量<br> Flow statistics from the past record of the internal local area network packet flow虚拟主机<br> 提供12组虚拟主机设定，可提供使用者利用虚Virtual Host <br> provide 12 sets of virtual server settings, can provide users using virtual拟IP架设网站功能(Virtual Server)Terms of the proposed erection of IP functions (Virtual Server)防火墙<br> 提供透通模式，NAT与NAPT功能，以及广域网络Firewall <br> provided through links model, NAT and NAPT function, and Wide Area Network阻断ICMP封包功能(DDoS).支持封包过滤、阻断Blocking ICMP packet functions (DDoS). Support for packet filtering, blocking服务(Denial of Service，DoS)，SYN Ack，(Denial of Service, DoS), SYN Ack.状态封包检查(Stateful Packet Inspection-State packet inspection (Stateful Packet Inspection -

SPI)，阻断Cookies，Java，Java script，SPI), block cookies, Java, Java script,

ActiveX，网络联机时间自订等功能ActiveX, on-line time since setting function

DDNS支援<br> 支援DDNS(Dyndns.org)，可使用动态网址转换DDNS support <br> support DDNS (Dyndns.org), the use of dynamic web site conversion功能，架设网站，最合适于� 动态IP位置的使Function, and have set up websites, in the most suitable location without the dynamic IP to enable用者，如计时制ADSL PPPoE或是Cable ModemUsers, such as system time PPPoE ADSL or Cable Modem用户Users虚拟私有网络（VPN）Virtual Private Network (VPN)支持PPTP/IPSec Pass through穿越功能Support PPTP / IPSec Pass through cross functional远程管理<br> 提供远程进入系统管理(Remote AccessRemote Management <br> provide remote access to the system management (Remote Access

Management)，支持远程重置。Management), support remote replacement.

MAC克隆<br> 提供如Cable Modem使用者可变换广域网络实体MAC cloning <br> provide as Cable Modem Users can transform the wide area network entities层MAC Address防止ISP锁定功能MAC Address - lock function to prevent ISP

DHCP服务器<br> 提供最高可发放PC端IP数量：253个DHCP server <br> provide maximum payment of PC-IP number : 253

IP状态监控<br> 提供使用端IP位置扫描以及DHCP Client所使用IP Monitoring <br> provide IP-use scanning and location by the use of DHCP Client之IP位置，MAC位置，计算机名称等实时扫描与IP location, MAC location, and other real-time computer name and scanning监控Monitor

PPPoE联机<br> 提供使用端使用计时制ADSL-PPPoE通讯，并可PPPoE available online <br>-time system using ADSL-PPPoE communications, may支持Dial-On-Demand或永远保持联机功能。Support Dial-On-Demand or permanently maintain on-line functions.网络日志<br> 可在线纪录使用者连接网址等情况Network log <br> can connect users online records of the websites主要特点：Main features :可连接到宽带调制解调器或以太骨干网上Can be connected to the broadband modem or Ethernet Backbone Network多达253台计算机与INTERNET的同步连接As many as 253 computers with Internet connection synchronization具有防火墙功能以保护� 的计算机不受外部黑客的入侵Firewall function is to protect your computer from external hackers invasion内置4口10/100M交换机Built-4 10 / 100M switch高速交换可满足网络游戏和多媒体应用Meet the high-speed network to exchange games and multimedia applications全中文配置管理接口,可通过网络上的任一台计算机All Chinese configuration management interface, through the network of a computer　　　　　的Web浏览器进行配置管理Web browser for configuration management能作为DHCP服务器或客户Can act as a DHCP server or client遵从互联网应用的� �准Internet applications comply with the standards管理员能阻断指定的内部用户访问互联网Administrators can block specific internal users access to the Internet技术性能指针：Technical performance indicators :集成200MHz RISC w/MMUIntegrated 200 MHz RISC w / MMU内置网络交换机：4个10/100兆以太网局域网口Built-in network switches : four 10/100 Ethernet LAN I

1个10/100兆广域网口A 10/100 WAN I

DHCP服务器/客户、网络地址转换(NAT)、防火墙DHCP server / client, the Network Address Translation (NAT), firewall

Web管理设定Web administrators to set事件日志报告Event log report网络流量统计Network traffic statistics软件在线升级Online Software Upgrade� �准：IEEE 802.11b，Standards : IEEE 802.11b,线缆类型：10BaseT:3/5类非屏蔽/屏蔽双绞Cable types : 10BaseT : 3 / 5 categories of non-shielding / Shielded twisted-pair

100BaseTX:5类非屏蔽/屏蔽双绞100BaseTX : Category 5 unshielded / Shielded twisted-pair拓扑结构：星形Topology : Star外形尺寸：150*98*25 (深/宽/高)Dimensions : 150 * 98 * 25 (D / width / height)重量：424gWeight : 424g电源适配器：AC100-240V/50Hz输入，Power Adapter : AC100-240V/50Hz input,　　　　　　　　　　　　DC 5V/2.0A输出Output DC 5V/2.0A工作温度：0℃ ～ 50℃Operating temperature : 0 ° C to 50 ° C存放温度：-20℃ ～ 70℃Storage temperature : -20 ° C to 70 ° C工作湿度：10% ～ 85%Working Humidity : 10% ~ 85% </pre></textarea>

Its really lame that a nice board like this, that uses GPL software, was manufactured by a company that never released the source code that they used to generate the firmware. And then they go out of business and its a waste of effort.

After reading the "help" page in the admin pages, it sounded like you can tftp the nvram settings, with the "get nvram_whatever.bin" command, so I tried it, and it worked. The nvram contains all the configuration settings of the router: ip address, username and password, and dhcp settings. Its in binary form, but the settings themselves are in ascii.

Before this post gets too big, I've created a new wiki page on the topic: <a href="http://www.docunext.com/wiki/INEXQ_IS050t">INEXQ IS050t</a>

Related Links:

http://www.e210.cn/views.asp?hw_id=672

http://www.euodeio.net/shortlinux.php

http://www.linux-mips.org/wiki/Realtek_SOC

http://rtl8181.sourceforge.net/

http://www.dongxindz.cn/dongxindz_Product_1516572.html

¥

