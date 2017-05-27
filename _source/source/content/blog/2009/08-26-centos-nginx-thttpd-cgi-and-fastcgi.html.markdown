---
title: CentOS NGINX thttpd CGI and FastCGI
date: 2009-08-26
tags: centos,fastcgi,gigabyte,nginx
---
I'm trying out CentOS and so far I'm finding it quite nice and simple. It has many fewer packages than Debian, but in some ways that's a good thing.

Yum is very fast, and a minimal installation of centos has a very light footprint on memory and storage.

To keep along those lines, I'm working with NGINX and FastCGI. Since NGINX does not spawn FastCGI processes, I'm using thttpd and its CGI capabilities to do that job for it.

So far so good:
<pre class="sh_sh">[root@vpn-stars cgi-bin]# pstree
init-+-blah.fcgi
     |-hellua.fcgi
     |-klogd
     |-master-+-pickup
     |        `-qmgr
     |-nginx---nginx
     |-sshd---sshd---bash---pstree
     |-syslogd
     `-thttpd
[root@vpn-stars cgi-bin]# free -m
             total       used       free     shared    buffers     cached
Mem:            64         22         41          0          0          0
-/+ buffers/cache:         22         41
Swap:            0          0          0
</pre>

With FastCGI and CGI, the idea is that the FastCGI processes can be shutdown if they aren't being used for awhile, and then NGINX can re-route requests to a thttpd cgi-bin binary which can then make a system call to spawn-fcgi. I think its pretty cool!

