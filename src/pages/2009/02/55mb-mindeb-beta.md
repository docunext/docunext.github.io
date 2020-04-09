---
title: 55MB Mindeb Beta
date: 2009-02-02
tags: packages
---
<a href="/pub/20090202_nodows.img.bz2">55MB Mindeb Beta</a>

Root password is nodows, can run with this command:
<pre class="sh_sh">qemu -m 128 -vnc :0 -net nic,model=rtl8139 -net tap -hda nodows.img
</pre>

(The archive is bzip2 compressed, and cannot run prior to being decompressed.)

What's included?

Packages:
<pre>Desired=Unknown/Install/Remove/Purge/Hold
| Status=Not/Inst/Cfg-files/Unpacked/Failed-cfg/Half-inst/trig-aWait/Trig-pend
|/ Err?=(none)/Hold/Reinst-required/X=both-problems (Status,Err: uppercase=bad)
||/ Name                              Version                           Description
+++-=================================-=================================-==================================================================================
ii  adduser                           3.110                             add and remove users and groups
ii  apt                               0.7.20                            Advanced front-end for dpkg
ii  apt-utils                         0.7.20                            APT utility programs
ii  base-files                        5                                 Debian base system miscellaneous files
ii  base-passwd                       3.5.19                            Debian base system master password and group files
ii  bash                              3.2-4                             The GNU Bourne Again SHell
ii  bsd-mailx                         8.1.2-0.20071201cvs-3             A simple mail user agent
ii  bsdutils                          1:2.13.1.1-1                      Basic utilities from 4.4BSD-Lite
ii  coreutils                         6.10-6                            The GNU core utilities
ii  debconf                           1.5.24                            Debian configuration management system
ii  debconf-english                   1.5.24                            small footprint English-only debconf
ii  debian-archive-keyring            2008.04.16+nmu1                   GnuPG archive keys of the Debian archive
ii  debianutils                       2.30                              Miscellaneous utilities specific to Debian
ii  diff                              2.8.1-12                          File comparison utilities
ii  dpkg                              1.14.24                           Debian package management system
ii  dropbear                          0.51-1                            lightweight SSH2 server and client
ii  e2fslibs                          1.41.3-1                          ext2 filesystem libraries
ii  e2fsprogs                         1.41.3-1                          ext2/ext3/ext4 file system utilities
ii  findutils                         4.4.0-2                           utilities for finding files--find, xargs
ii  gcc-4.2-base                      4.2.4-6                           The GNU Compiler Collection (base package)
ii  gcc-4.3-base                      4.3.2-1.1                         The GNU Compiler Collection (base package)
ii  gnupg                             1.4.9-3                           GNU privacy guard - a free PGP replacement
ii  gpgv                              1.4.9-3                           GNU privacy guard - signature verification tool
ii  grep                              2.5.3~dfsg-6                      GNU grep, egrep and fgrep
ii  gzip                              1.3.12-6                          The GNU compression utility
ii  hostname                          2.95                              utility to set/show the host name or domain name
ii  ifupdown                          0.6.8+nmu1                        high level tools to configure network interfaces
ii  initscripts                       2.86.ds1-61                       Scripts for initializing and shutting down the system
ii  iproute                           20080725-2                        networking and traffic control tools
ii  libacl1                           2.2.47-2                          Access control list shared library
ii  libattr1                          1:2.4.43-1                        Extended attribute shared library
ii  libblkid1                         1.41.3-1                          block device id library
ii  libbz2-1.0                        1.0.5-1                           high-quality block-sorting file compressor library - runtime
ii  libc6                             2.7-18                            GNU C Library: Shared libraries
ii  libcap1                           1:1.10-14                         support for getting/setting POSIX.1e capabilities
ii  libcomerr2                        1.41.3-1                          common error description library
ii  libdb4.6                          4.6.21-11                         Berkeley v4.6 Database Libraries [runtime]
ii  libdevmapper1.02.1                2:1.02.27-4                       The Linux Kernel Device Mapper userspace library
ii  libedit2                          2.11~20080614-1                   BSD editline and history libraries
ii  libevent1                         1.3e-3                            An asynchronous event notification library
ii  libgcc1                           1:4.3.2-1.1                       GCC support library
ii  libgcrypt11                       1.4.1-1                           LGPL Crypto library - runtime library
ii  libgnutls26                       2.4.2-4                           the GNU TLS library - runtime library
ii  libgpg-error0                     1.4-2                             library for common error values and messages in GnuPG components
ii  libgssglue1                       0.1-2                             mechanism-switch gssapi library
ii  libkeyutils1                      1.2-9                             Linux Key Management Utilities (library)
ii  libkrb53                          1.6.dfsg.4~beta1-5                MIT Kerberos runtime libraries
ii  libldap-2.4-2                     2.4.11-1                          OpenLDAP libraries
ii  libldns1                          1.4.0-1                           ldns library for DNS programming
ii  liblockfile1                      1.08-3                            NFS-safe locking library, includes dotlockfile program
ii  libncurses5                       5.7+20081213-1                    shared libraries for terminal handling
ii  libnfsidmap2                      0.20-1                            An nfs idmapping library
ii  libnss-ldap                       261-2.1                           NSS module for using LDAP as a naming service
ii  libpam-ldap                       184-4.2                           Pluggable Authentication Module for LDAP
ii  libpam-modules                    1.0.1-5                           Pluggable Authentication Modules for PAM
ii  libpam-runtime                    1.0.1-5                           Runtime support for the PAM library
ii  libpam0g                          1.0.1-5                           Pluggable Authentication Modules library
ii  libpcre3                          7.6-2.1                           Perl 5 Compatible Regular Expression Library - runtime files
ii  libpopt0                          1.14-4                            lib for parsing cmdline parameters
ii  libreadline5                      5.2-3                             GNU readline and history libraries, run-time libraries
ii  librpcsecgss3                     0.18-1                            allows secure rpc communication using the rpcsec_gss protocol
ii  libsasl2-2                        2.1.22.dfsg1-23                   Cyrus SASL - authentication abstraction library
ii  libselinux1                       2.0.65-5                          SELinux shared libraries
ii  libsepol1                         2.0.30-2                          Security Enhanced Linux policy library for changing policy binaries
ii  libslang2                         2.1.3-3                           The S-Lang programming library - runtime version
ii  libss2                            1.41.3-1                          command-line interface parsing library
ii  libssl0.9.8                       0.9.8g-15                         SSL shared libraries
ii  libstdc++6                        4.3.2-1.1                         The GNU Standard C++ Library v3
ii  libtasn1-3                        1.4-1                             Manage ASN.1 structures (runtime)
ii  libusb-0.1-4                      2:0.1.12-13                       userspace USB programming library
ii  libuuid1                          1.41.3-1                          universally unique id library
ii  libvolume-id0                     0.125-7                           libvolume_id shared library
ii  libwrap0                          7.6.q-16                          Wietse Venema's TCP wrappers library
ii  libxml2                           2.6.32.dfsg-5                     GNOME XML library
ii  libxslt1.1                        1.1.24-2                          XSLT processing library - runtime library
ii  login                             1:4.1.1-6                         system login tools
ii  lsb-base                          3.2-20                            Linux Standard Base 3.2 init script functionality
ii  lzma                              4.43-14                           Compression method of 7z format in 7-Zip program
ii  mailx                             1:20071201-3                      Transitional package for mailx rename
ii  makedev                           2.3.1-88                          creates device files in /dev
ii  mawk                              1.3.3-11.1                        a pattern scanning and text processing language
ii  mktemp                            1.5-9                             tool for creating temporary files
ii  module-init-tools                 3.4-1                             tools for managing Linux kernel modules
ii  mount                             2.13.1.1-1                        Tools for mounting and manipulating filesystems
ii  ncurses-base                      5.7+20081213-1                    basic terminal type definitions
ii  ncurses-bin                       5.7+20081213-1                    terminal-related programs and man pages
ii  net-tools                         1.60-22                           The NET-3 networking toolkit
ii  netbase                           4.34                              Basic TCP/IP networking system
ii  nfs-common                        1:1.1.2-6lenny1                   NFS support files common to client and server
ii  nscd                              2.7-18                            GNU C Library: Name Service Cache Daemon
ii  ntp                               1:4.2.4p4+dfsg-8                  Network Time Protocol daemon and utility programs
ii  open-iscsi                        2.0.870~rc3-0.4                   High performance, transport independent iSCSI implementation
ii  passwd                            1:4.1.1-6                         change and administer password and group data
ii  perl-base                         5.10.0-19                         minimal Perl system
ii  portmap                           6.0-9                             RPC port mapper
ii  pound                             2.4.3-1                           reverse proxy, load balancer and HTTPS front-end for Web servers
ii  procps                            1:3.2.7-11                        /proc file system utilities
ii  psmisc                            22.6-1                            Utilities that use the proc filesystem
ii  readline-common                   5.2-3                             GNU readline and history libraries, common files
ii  rsync                             3.0.3-2                           fast remote file copy program (like rcp)
ii  rsyslog                           3.18.6-3                          enhanced multi-threaded syslogd
ii  sed                               4.1.5-6                           The GNU sed stream editor
ii  ssmtp                             2.62-2.2                          extremely simple MTA to get mail off the system to a mail hub
ii  sysv-rc                           2.86.ds1-61                       System-V-like runlevel change mechanism
ii  sysvinit                          2.86.ds1-61                       System-V-like init utilities
ii  sysvinit-utils                    2.86.ds1-61                       System-V-like utilities
ii  tar                               1.20-1                            GNU version of the tar archiving utility
ii  tzdata                            2008h-2                           time zone and daylight-saving time data
ii  ucf                               3.0014                            Update Configuration File: preserve user changes to config files.
ii  udev                              0.125-7                           /dev/ and hotplug management daemon
ii  udhcpc                            0.9.8cvs20050303-2.1              very small DHCP client
ii  unbound                           1.0.2-1                           validating, recursive, caching DNS resolver
ii  util-linux                        2.13.1.1-1                        Miscellaneous system utilities
ii  vim-common                        1:7.1.314-3+lenny2                Vi IMproved - Common files
ii  vim-tiny                          1:7.1.314-3+lenny2                Vi IMproved - enhanced vi editor - compact version
ii  wget                              1.11.4-2                          retrieves files from the web
ii  xsltproc                          1.1.24-2                          XSLT command line processor
ii  zlib1g                            1:1.2.3.3.dfsg-12                 compression library - runtime
</pre>

Linux kernel 2.6.26, almost all the modules included with the debian kernel, though I removed ipv6 for now. Initramfs.

