---
title: PECL Problems on Xen Ubuntu
date: 2007-04-25
---
<pre>Fatal error: Allowed memory size of 8388608 bytes exhausted (tried to allocate 92160 bytes) in /usr/share/php/PEAR/PackageFile/v2/Validator.php on line 169</pre>

I've increased the memory limits of all the php.ini files I can find! It turns out that the pecl command was being passed the "-n" option, causing it not to load any php.ini file at all. I commented that out and it worked!

<pre>nano /usr/bin/pecl#exec $PHP -C -n -q $INCARG -d output_buffering=1 -d safe_mode=0 -d register_argc_argv="On" $INCDIR/peclcmd.php "$@"

exec $PHP -C -q $INCARG -d output_buffering=1 -d safe_mode=0 -d register_argc_argv="On" $INCDIR/peclcmd.php "$@"</pre>

<pre>checking for PDO includes... checking for PDO includes... /usr/include/php/ext

configure: error:

You've configured extension pdo_mysql, which depends on extension pdo,

but you've either not enabled pdo, or have disabled it.

ERROR: `/tmp/pear/cache/PDO_MYSQL-1.0.2/configure' failed</pre>

Huh?

<pre>find PHP_ADD_EXTENSION_DEP inside /usr/lib/php5/build/acinclude.m4 (or

wherever yours is located)

and REMOVE this snippet from that function:

if test "x$is_it_shared" = "x" && test "x$3" != "xtrue"; then

AC_MSG_ERROR([

You've configured extension $1, which depends on extension $2,

but you've either not enabled $2, or have disabled it.])

fi</pre>

UGH!

<a href="http://ubuntuforums.org/showthread.php?t=199730">Thanks Ubuntu forums.</a>

