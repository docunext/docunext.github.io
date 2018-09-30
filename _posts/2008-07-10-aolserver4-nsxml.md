---
title: aolserver4 nsxml
date: 2008-07-10
---
Debian (which is awesome) has the aolserver4-nsxml package, but it doesn't come with xslt support compiled in. So I've downloaded the source and am trying to build it with xslt support. In the Makefile:

<pre lang="bash">
ifdef LIBXSLT    MODLIBS   = -L/usr/lib -L/usr/lib -lxml2 -lxslt    CFLAGS   += -DDO_XSLT -I$(LIBXML2)/include/libxml2 -I$(LIBXSLT)/include
else    MODLIBS   = -L/usr/lib -lxml2    CFLAGS   += -I/usr/include/libxml2
endif</pre>

Hmmm, not sure how to work with that, maybe I'll just set LIBXSLT to the path where its located?

I set LIBXSLT = /usr, and that seems to make it try to compile in xsl support, but I get these compilation errors:

<pre>
nsxml.c:2240: warning: implicit declaration of function ‘xmlMemSetup’

nsxml.c:2240: error: ‘xmlFreeFunc’ undeclared (first use in this function)

nsxml.c:2240: error: expected ‘)’ before ‘ns_free’

nsxml.c:2245: warning: implicit declaration of function ‘xmlInitMemory’

nsxml.c:2247: warning: implicit declaration of function ‘xmlSetExternalEntityLoader’

nsxml.c:2247: error: ‘xml_load_entity’ undeclared (first use in this function)

nsxml.c:2249: warning: implicit declaration of function ‘xmlInitParser’

nsxml.c:2251: warning: implicit declaration of function ‘xmlSubstituteEntitiesDefault’

nsxml.c:2252: error: too many arguments to function ‘xsltSetGenericErrorFunc’

make: *** [nsxml.o] Error 1</pre>

Sweet! I somehow got it to work just by trying a few different attempts! Here's what worked:

<pre lang="bash">## $Header: /cvsroot/aolserver/nsxml/Makefile,v 1.3 2002/06/01 17:30:24 scottg Exp $## nsxml --##      Implements XML parser#
ifdef INST    NSHOME ?= $(INST)
else    NSHOME ?= /usr/lib/aolserver4
endif
LIBXML2   =  /usr
LIBXSLT   =  /usr
MOD       =  nsxml.so
OBJS      =  nsxml.o
HDRS      =
ifdef LIBXSLT    MODLIBS   = -L/usr/lib -lxml2 -lxslt    CFLAGS   += -DDO_XSLT -I/usr/include/libxml2 -I/usr/include
else    MODLIBS   = -L/usr/lib -lxml2    CFLAGS   += -I/usr/include/libxml2
endif
include  $(NSHOME)/Makefile.module
install:    mv *.so debian/nsxml/usr/lib/aolserver4/bin/.PHONY: install</pre>

This is very very cool! :-)

TODO: Add support for parsing XSLT files - this is an absolute must as most xsl templates use imports and includes these days.

