---
title: A more complicated .deb package
date: 2008-03-14
tags: debian,dpkg,packaging
---
I'm going to try and build a package for libapache2-mod-transform. I like it better than libapache2-modxslt, but only modxslt has a package in the debian repositories. Why don't I like modxslt? <a href="http://www.docunext.com/2007/10/apache2-xslt/">Read here</a>.

Whoa, just take a look inside the source package debian folder:

<pre>500modxslt.info                   libapache-modxslt.README.Debian
changelog                         libmodxslt0-dev.dirs
compat                            libmodxslt0-dev.install
control                           libmodxslt0-dev.manpages
copyright                         libmodxslt0.dirs
docs                              libmodxslt0.install
libapache2-modxslt.config         modxslt.libapache
libapache2-modxslt.dirs           modxslt.libapache2
libapache2-modxslt.prerm          modxslt.load
libapache2-modxslt.README.Debian  modxslt-tools.dirs
libapache-modxslt.config          modxslt-tools.install
libapache-modxslt.dirs            modxslt-tools.manpages
libapache-modxslt.install         patches
libapache-modxslt.postinst        rules
libapache-modxslt.postrm</pre>

Wow. That's some serious packaging. I wonder how much of it can be automated?  Maybe its not so bad, looks like a bunch of it is used for Apache 1.3, whereas only a few are for Apache 2+.

Here's the rules file, which is pretty sophisticated:

<pre>#!/usr/bin/make -f
# -*- makefile -*-
# Sample debian/rules that uses debhelper.
# GNU copyright 1997 to 1999 by Joey Hess.

export SHELL=bash
# Uncomment this to turn on verbose mode.
#export DH_VERBOSE=1

include /usr/share/dpatch/dpatch.make
# These are used for cross-compiling and for saving the configure script# from having to guess our platform (since we know it already)

DEB_HOST_GNU_TYPE   ?= $(shell dpkg-architecture -qDEB_HOST_GNU_TYPE)

DEB_BUILD_GNU_TYPE  ?= $(shell dpkg-architecture -qDEB_BUILD_GNU_TYPE)

CFLAGS = -Wall -g

ifneq (,$(findstring noopt,$(DEB_BUILD_OPTIONS)))    CFLAGS += -O0

else    CFLAGS += -O2

endif

ifeq (,$(findstring nostrip,$(DEB_BUILD_OPTIONS)))    INSTALL_PROGRAM += -s

endif

config.status: patch-stamp configure
dh_testdir    CFLAGS="$(CFLAGS)"./configure --host=$(DEB_HOST_GNU_TYPE) --build=$(DEB_BUILD_GNU_TYPE) \    --prefix=/usr --mandir=\$${prefix}/share/man --infodir=\$${prefix}/share/info \    --with-sapi=none --cache-file=cache.none --enable-exslt

build: build-stamp

build-stamp:  config.status    dh_testdir    # Add here commands to compile the package.     cd $(CURDIR)/lib && $(MAKE)     cd $(CURDIR)/utils && $(MAKE)    #/usr/bin/docbook-to-man debian/modxslt2.sgml > modxslt2.1    touch build-stamp

clean: unpatch    dh_testdir    dh_testroot    rm -f build-stamp    rm -rf $(CURDIR)/debian/apache1    rm -rf $(CURDIR)/debian/apache2    rm -rf $(CURDIR)/debian/apache-none    rm -rf `find . -name cache.none`    rm -rf  $(CURDIR)/debian/libmodxslt0    # Add here commands to clean up after the build process.    -$(MAKE) distclean    rm -rf sapi/apache1/modxslt-helpers.o    rm -rf sapi/apache1/modxslt.o    rm -rf sapi/apache1/mod_xslt.so

ifneq "$(wildcard /usr/share/misc/config.sub)" ""    cp -f /usr/share/misc/config.sub ./helpers/config.sub

endif

ifneq "$(wildcard /usr/share/misc/config.guess)" ""    cp -f /usr/share/misc/config.guess ./helpers/config.guess

endif    dh_clean

install: build    dh_testdir    dh_testroot    dh_clean -k    dh_installdirs    # Add here commands to install the package into debian/modxslt2.    mkdir $(CURDIR)/debian/tmp    @echo -e "Install for lib and bin\n"    cd $(CURDIR)/lib && $(MAKE) install-library DESTDIR=$(CURDIR)/debian/tmp    #cp debian/modxslt-perror.1 debian/modxslt-parse.1 $(CURDIR)/debian/modxslt-tools/usr/share/man/man1    cd $(CURDIR)/utils && $(MAKE) install DESTDIR=$(CURDIR)/debian/tmp    cd $(CURDIR)/lib/ && $(MAKE) install-headers DESTDIR=$(CURDIR)/debian/tmp    #cp debian/modxslt-config.1 $(CURDIR)/debian/libmodxslt0-dev/usr/share/man/man1    @echo -e  "Now I will compile for apache2\n"    ./configure --prefix=/usr --with-sapi=apache2 --enable-exslt    $(MAKE) SAPI_CC=gcc    $(MAKE) install DESTDIR=$(CURDIR)/debian/libapache2-modxslt    # remove the just installed manpages again - we do that different within debian    rm -rf $(CURDIR)/debian/libapache2-modxslt/usr/share/man/    cp debian/modxslt.load $(CURDIR)/debian/libapache2-modxslt/etc/apache2/mods-available/    cp $(CURDIR)/debian/modxslt.libapache2 $(CURDIR)/debian/libapache2-modxslt/etc/apache2/conf.d/modxslt    rm -rf $(CURDIR)/debian/libapache2-modxslt/usr/{bin,include,man} $(CURDIR)/debian/libapache2-modxslt/usr/lib/lib*    dh_install --sourcedir=debian/tmp# Build architecture-independent files here.

binary-indep: build install    dh_testdir    dh_testroot -i    mkdir -p $(CURDIR)/debian/modxslt-doc/usr/share/doc/modxslt-doc    cp -r  $(CURDIR)/doc/{manual,faq,misc}  $(CURDIR)/debian/modxslt-doc/usr/share/doc/modxslt-doc    mkdir -p $(CURDIR)/debian/modxslt-doc/usr/share/doc/modxslt-doc/examples    cp -r $(CURDIR)/doc/{site,xslt}  $(CURDIR)/debian/modxslt-doc/usr/share/doc/modxslt-doc/examples    rm -rf $(CURDIR)/debian/modxslt-doc/usr/share/doc/modxslt-doc/examples/xslt/LICENSE    dh_installdocs -i    dh_installchangelogs -i debian/changelog    dh_compress -i    dh_fixperms -i    dh_gencontrol -i    dh_md5sums -i    dh_builddeb -i# We have nothing to do by default.# Build architecture-dependent files here.

binary-arch: build install    dh_testdir -a    dh_testroot -a    dh_installchangelogs  -a    dh_installdocs -a    dh_installexamples -a    dh_installman -a    dh_link -a    dh_strip -a    dh_compress -a    dh_fixperms -a    dh_makeshlibs -a    dh_installdeb -a    dh_shlibdeps  -a    dh_gencontrol    dh_md5sums -a    dh_builddeb -a

binary: binary-indep binary-arch.PHONY: build clean binary-indep binary-arch binary install patch unpatch</pre>

Adding this " -DMXSLT_DISABLE_SIGNATURE" to the debian/rules removes the lame notice, and actually I do like that the If-modified-since 304 response works OK (doesn't with mod_transform in my experience).

