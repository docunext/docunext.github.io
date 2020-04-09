---
title: LTSP PXE E32 TFTP open timeout
date: 2007-06-29
tags: aopen,ltsp,ubuntu
---
I'm trying to setup Ubuntu ltsp. No luck, dhcp gives ip but then the tftp server never serves the goodies. Here's the strace:

<pre>&lt;... select resumed> )                  = 1 (in [0], left {892, 36000})

setsockopt(0, SOL_IP, IP_PKTINFO, [1], 4) = 0

recvmsg(0, {msg_name(16)={sa_family=AF_INET, sin_port=htons(2074), sin_addr=inet_addr("192.168.0.135")}, msg_iov(1)=[{"\0\1/ltsp/i386/pxelinux.0\0octet\0ts"..., 65468}], msg_controllen=24, {cmsg_len=24, cmsg_level=SOL_IP, cmsg_type=, ...}, msg_flags=0}, 0) = 38

socket(PF_INET, SOCK_DGRAM, IPPROTO_IP) = 1

connect(1, {sa_family=AF_INET, sin_port=htons(0), sin_addr=inet_addr("192.168.0.174")}, 16) = 0

getsockname(1, {sa_family=AF_INET, sin_port=htons(32780), sin_addr=inet_addr("192.168.0.174")}, [16]) = 0

close(1)                                = 0

clone(Process 23939 attached

child_stack=0, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0xb7d89708) = 23939
[pid 23909] select(1, [0], NULL, NULL, {900, 0} &lt;unfinished ...>
[pid 23939] rt_sigaction(SIGHUP, {SIG_IGN}, NULL, 8) = 0
[pid 23939] open("/etc/hosts.allow", O_RDONLY) = 1
[pid 23939] fstat64(1, {st_mode=S_IFREG|0644, st_size=787, ...}) = 0
[pid 23939] mmap2(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0xb7ef4000
[pid 23939] read(1, "# /etc/hosts.allow: list of host"..., 4096) = 787
[pid 23939] close(1)                    = 0
[pid 23939] munmap(0xb7ef4000, 4096)    = 0
[pid 23939] close(0)                    = 0
[pid 23939] socket(PF_INET, SOCK_DGRAM, IPPROTO_IP) = 0
[pid 23939] open("/proc/sys/kernel/ngroups_max", O_RDONLY) = 1
[pid 23939] read(1, "65536\n", 31)      = 6
[pid 23939] close(1)                    = 0
[pid 23939] socket(PF_FILE, SOCK_STREAM, 0) = 1
[pid 23939] fcntl64(1, F_GETFL)         = 0x2 (flags O_RDWR)
[pid 23939] fcntl64(1, F_SETFL, O_RDWR|O_NONBLOCK) = 0
[pid 23939] connect(1, {sa_family=AF_FILE, path="/var/run/nscd/socket"}, 110) = -1 ENOENT (No such file or directory)
[pid 23939] close(1)                    = 0
[pid 23939] socket(PF_FILE, SOCK_STREAM, 0) = 1
[pid 23939] fcntl64(1, F_GETFL)         = 0x2 (flags O_RDWR)
[pid 23939] fcntl64(1, F_SETFL, O_RDWR|O_NONBLOCK) = 0
[pid 23939] connect(1, {sa_family=AF_FILE, path="/var/run/nscd/socket"}, 110) = -1 ENOENT (No such file or directory)
[pid 23939] close(1)                    = 0
[pid 23939] open("/etc/group", O_RDONLY) = 1
[pid 23939] fcntl64(1, F_GETFD)         = 0
[pid 23939] fcntl64(1, F_SETFD, FD_CLOEXEC) = 0
[pid 23939] _llseek(1, 0, [0], SEEK_CUR) = 0
[pid 23939] fstat64(1, {st_mode=S_IFREG|0644, st_size=1008, ...}) = 0
[pid 23939] mmap2(NULL, 1008, PROT_READ, MAP_SHARED, 1, 0) = 0xb7ef4000
[pid 23939] _llseek(1, 1008, [1008], SEEK_SET) = 0
[pid 23939] fstat64(1, {st_mode=S_IFREG|0644, st_size=1008, ...}) = 0
[pid 23939] munmap(0xb7ef4000, 1008)    = 0
[pid 23939] close(1)                    = 0
[pid 23939] setgroups32(1, [65534])     = -1 EPERM (Operation not permitted)
[pid 23939] time(NULL)                  = 1183144155
[pid 23939] open("/etc/localtime", O_RDONLY) = 1
[pid 23939] fstat64(1, {st_mode=S_IFREG|0644, st_size=1267, ...}) = 0
[pid 23939] fstat64(1, {st_mode=S_IFREG|0644, st_size=1267, ...}) = 0
[pid 23939] mmap2(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0xb7ef4000
[pid 23939] read(1, "TZif\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\4\0\0\0\4\0"..., 4096) = 1267
[pid 23939] close(1)                    = 0
[pid 23939] munmap(0xb7ef4000, 4096)    = 0
[pid 23939] stat64("/etc/localtime", {st_mode=S_IFREG|0644, st_size=1267, ...}) = 0
[pid 23939] stat64("/etc/localtime", {st_mode=S_IFREG|0644, st_size=1267, ...}) = 0
[pid 23939] stat64("/etc/localtime", {st_mode=S_IFREG|0644, st_size=1267, ...}) = 0
[pid 23939] send(3, "&lt;27>Jun 29 15:09:15 in.tftpd[239"..., 70, MSG_NOSIGNAL) = 70
[pid 23939] exit_group(71)              = ?</pre>

Looks like it finds the pxelinux.0 file OK, but then something funky happens. Not sure what though.

Cool! I got it to work. Turns out there was two tftpd programs running, so I stopped /etc/init.d/openbsd-inetd and commented out the tftp server anyway. I then had to manually stop the processes. I then started the tftpd-hpa daemon and it booted!

It looks terrible on my screen though. Reminds me of how the Aopen screen looked.

The cool thing is that I also booted off a t5125, and the screen looked fine. I bet I will be able to boot off of a wide variety of devices. I'd also like to figure out how to do network installs using PXE boot. I gotta check out this <a href="http://www.informatik.uni-koeln.de/fai/">Debian FAI - Fully Automatic Installation</a>.
