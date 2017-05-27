---
title: Install NCPL on Debian
date: 2007-02-03
tags: debian,mysql
---
<pre>cd /usr/src/
wget http://downloads.sourceforge.net/ncpl/NCPL-1.000.047.tar.gz?modtime=1167773851&amp;big_mirror=0
apt-get install -s perl
apt-get install libextutils-autoinstall-perl
apt-get install libmodule-depends-perl
tar -xzvf NCPL-1.000.047.tar.gz
cd NCPL-1.000047/</pre>

Responded with:

<pre>ExtUtils::MakeMaker v6.31, required for 'perl Makefile.PL' via CPAN
perl -MCPAN -e 'install ExtUtils::MakeMaker'</pre>

Then:

<pre>apt-get install libmodule-build-perl
Reading Package Lists... Done
Building Dependency Tree... Done
The following extra packages will be installed:  libarchive-tar-perl libcompress-zlib-perl libextutils-cbuilder-perl libextutils-parsexs-perl libio-zlib-perl
Suggested packages:  libio-string-perl
The following NEW packages will be installed:  libarchive-tar-perl libcompress-zlib-perl libextutils-cbuilder-perl libextutils-parsexs-perl libio-zlib-perl libmodule-build-perl
0 upgraded, 6 newly installed, 0 to remove and 113 not upgraded.
Need to get 356kB of archives.
After unpacking 1163kB of additional disk space will be used.
Do you want to continue? [Y/n] </pre>

Yes!

Still no go, following their step:

<pre>perl -MCPAN -e 'install ExtUtils::MakeMaker'</pre>

Results in:

<pre>Can't locate object method "install" via package "ExtUtils::MakeMaker" at -e line 1.</pre>

Bummer!

<pre>apt-get install libextutils-pkgconfig-perl</pre>

No go...

<pre>cpan</pre>... conf ...

<pre>install Bundle::CPAN</pre>

Cancelled - need make.

<pre>apt-get install make</pre>

<pre>cpan
install Bundle::CPAN</pre>

Hmm that didn't help, letting it run. No good. Need to fix config to reflect installed make

<pre>nano /etc/perl/CPAN/Config.pm</pre>

<pre>cpan
install Bundle::CPAN</pre>

Good to go! Builds are working...

<pre>cpan
install ExtUtils::MakeMaker</pre>
cpan is messed up, need to install these manually:
Warning: prerequisite CGI::Session 4.13 not found.
Warning: prerequisite CGI::Session::Driver::DBI  not found.
Warning: prerequisite CGI::Simple  not found.
Warning: prerequisite Config::General  not found.
Warning: prerequisite HTML::Entities  not found.
Warning: prerequisite IO::CaptureOutput  not found.
Warning: prerequisite Mail::Sendmail  not found.
Warning: prerequisite Tie::IxHash  not found.
</pre>

Done, running

<pre>perl Makefile.pm</pre>

Done. Not so bad.

Not yet working, now getting this error in Apache's error_log:

<pre>Can't locate NCPL.pm in @INC</pre>

Found it in the source:

<pre>cp /usr/src/NCPL-1.000047/lib/NCPL.pm /etc/perl/
cp -av /usr/src/NCPL-1.000047/lib/NCPL/ /etc/perl/NCPL</pre>

Worked, no db yet.

<pre>DBI connect('ncpl:localhost:3306','ncpl',...) failed: Client does not support authentication protocol requested by server; consider upgrading MySQL client at /etc/perl/NCPL/Database.pm line 146</pre>

<pre>apt-get install libdbd-mysql-perl</pre>

