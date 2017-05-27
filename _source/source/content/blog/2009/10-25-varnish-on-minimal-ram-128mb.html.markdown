---
title: Varnish on Minimal RAM 128MB 
comments:
  - author: Find PDF eBook
    email: findpdf@yahoo.com
    ip: 125.164.193.222
    url:
    date: 01/28/2011 02:02:08 AM
    text: >
      i guess that you are using openvz..<br/><br/>in openvz environment, varnish can eat all of your RAM. so, i created a simple cron shell to restart the varnish after it reach amount of memory.<br/><br/>vmem=$(ps aux | grep varnish | grep nobody | awk '{print $6}')<br/><br/>if [ $vmem -ge 10000 ] ; then<br/>	/etc/init.d/varnish restart<br/>	logger -s "varnish memory $vmem"<br/>fi<br/><br/>echo "varnish current memory $vmem KB"
date: 2009-10-25
tags: caching,http,memory,ram,varnish
---
I'm a big fan of Varnish. It makes HTTP redundancy a lot easier, even for small networks like mine.

I've previously felt that 256MB or more RAM was necessary, but I'm experimenting with a setup now that seems to work.

Here's my setup:

* CentOS 5 minimal - uses only about 8MB of RAM out of the box
* NGINX on port 80 - uses very little RAM; 2MB?
* Varnish on localhost:6081 - uses a lot, but can be limited

Here's the /etc/sysconfig/varnish file I'm using:

<pre class="sh_sh">
DAEMON_OPTS="-a localhost:6081 \
             -T localhost:6082 \
             -f /etc/varnish/default.vcl \
             -w 1,4,10 \
             -p sess_timeout=2 \
             -p thread_pools=3 \
             -p first_byte_timeout=300 \
             -u varnish -g varnish \
             -s file,/var/lib/varnish/varnish_storage.bin,1G"
</pre>

I'm running this on an OpenVZ container. Seems to work OK.

Memory usage:
<pre class="sh_sh">
# free -m
             total       used       free     shared    buffers     cached
Mem:           128        116         11          0          0          0
-/+ buffers/cache:        116         11
Swap:            0          0          0
</pre>

UPDATE: Today, about two days after I originally wrote this post, I tried to ssh into this machine and was greeted with an ssh error. I think it was starving for memory. I was able to reboot it, but I guess its just not happening.

¥

