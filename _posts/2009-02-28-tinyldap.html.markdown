---
title: TinyLDAP
date: 2009-02-28
tags: ldap,tinyldap
---
Sweet - I got TinyLDAP to build on debian!

Pretty easy, actually. Just had to install libowfat and edit the tinyldap makefile manually:

<pre class="sh_c">DIET=/usr/bin/diet -Os
CC=gcc
CFLAGS=-pipe -I/opt/diet/include -I. -Wall -W -Wextra
ifneq ($(DEBUG),)
DIET=/usr/bin/diet
CFLAGS=-pipe -I/opt/diet/include -I. -Wall -W -g -fstack-protector</pre>

