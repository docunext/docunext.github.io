---
title: Compiling Ming on Linux
date: 2004-05-18
tags: none
author: Albert Lash
---
August 30, 2005 - Needed to add -fPIC cflag to Makefile.config on AMD64. Generated libming.a, hopefully that is enough. Was able to go inside Makefile.config and add some optimization flags for ming, and set the install directory. AWESOME.

<strong>New instructions, as of Spring 2005</strong>

<pre># ./autogen.sh : for a fresh CVS checkout# make# make install</pre>

<strong>THIS IS OLD:</strong>

<pre>
mkdir ming_build

PREFIX="/home/user/ming_new/ming/ming_build" CFLAGS="-L/home/user/php_workshop/php_complete/lib -I/home/user/php_workshop/php_complete/include" make -e static

PREFIX="/home/user/ming_new/ming/ming_build" make -e install-common

cp libming.a ming_build/lib/

So far so good.#Changed --with-ming=/home/user/ming3b_cvs/ming/ming_build in php_build.#Called ./php_build

Making as a php_module:

cd php_ext

Exported path to include php-config file

export PATH="$PATH:/home/user/php_workshop/php_complete/bin"

make command:

PREFIX="/home/user/ming_new/ming/ming_build" CFLAGS="-L/home/user/php_workshop/php_complete/lib -I/home/user/php_workshop/php_complete/include" make -e-e uses environment variables (the prefix and CFLAGS vars)</pre>

