---
title: libdbi
date: 2007-11-03
tags: none
author: Albert Lash
---
I'm installing libdbi0 to try out mod_dbi_pool from outoforder.cc:

DOH!

<pre>/bin/sh ../../libtool --tag=CC   --mode=compile gcc -DHAVE_CONFIG_H -I. -I../.. -I../.. -I../../include -I/usr/include -I/usr/include    -O20 -ffast-math -D_REENTRANT -fsigned-char -MT dbd_mysql.lo -MD -MP -MF .deps/dbd_mysql.Tpo -c -o dbd_mysql.lo dbd_mysql.c

mkdir .libs gcc -DHAVE_CONFIG_H -I. -I../.. -I../.. -I../../include -I/usr/include -I/usr/include -O20 -ffast-math -D_REENTRANT -fsigned-char -MT dbd_mysql.lo -MD -MP -MF .deps/dbd_mysql.Tpo -c dbd_mysql.c  -fPIC -DPIC -o .libs/dbd_mysql.o

dbd_mysql.c: In function '_get_row_data':

dbd_mysql.c:701: error: 'DBI_INTEGER_SIZEMASK' undeclared (first use in this function)

dbd_mysql.c:701: error: (Each undeclared identifier is reported only once

dbd_mysql.c:701: error: for each function it appears in.)

dbd_mysql.c:716: error: 'DBI_DECIMAL_SIZEMASK' undeclared (first use in this function)

make[3]: *** [dbd_mysql.lo] Error 1

make[3]: Leaving directory `/usr/src/libdbi-drivers-0.8.2-1/drivers/mysql'

make[2]: *** [all-recursive] Error 1

make[2]: Leaving directory `/usr/src/libdbi-drivers-0.8.2-1/drivers'

make[1]: *** [all-recursive] Error 1

make[1]: Leaving directory `/usr/src/libdbi-drivers-0.8.2-1'

make: *** [all] Error 2</pre>

UPDATE: November 13, 2007: I later found out that there is a newer version of this package which will work with the newer MySQL client libraries. :-) Can't wait to try it out.

