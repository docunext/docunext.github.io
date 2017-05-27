---
title: Recently Used Documents in Ubuntu Gnome OpenOffice Margins and Printing from the Command Line
date: 2010-08-30
tags: bash,gnome,openoffice,printing,ubuntu
---
## Recently Used Documents in Ubuntu Gnome

I don't like having my recently used documents get saved across Gnome. I prefer to set individual application preferences. For instance, in jEdit I like to record up to 80 recent documents.

Its a bit tricky to do this, and to be safe I'm using two different methods:

* Making ~/.recently-used.xbel not modifiable
<pre class="sh_sh">
rm ~/.recently-used.xbel
touch ~/.recently-used.xbel
sudo chattr +i ~/.recently-used.xbel
</pre>

* Setting GTK preferences in ~/.gtkrc-2.0
<pre class="sh_sh">
gtk-recent-files-max-age=0
gtk-recent-files-limit=0
</pre>

## OpenOffice Page Margins

Took me forever to find the page margin settings in OpenOffice. Hope it helps others, but I know I'll come back here to remember!

Its not in any print dialogs, its under Format->Page. Easy as pie, once I found it!

## Printing from the Command Line

Since I use a laptop ([Lenovo g555](http://www.my-tech-deals.com/blog/2010/08/review-of-the-lenovo-g555.html)), I'm not always connected to a printer. I wanted to print my documents to a PDF, then batch print them later. Rather than manually opening up the PDFs and then printing each one, I figured it could be done via the command line shell, in my case - bash.

Thanks to <a href="http://tkjacobsen.wordpress.com/2008/04/25/print-pdf-files-from-bash/" rel="nofollow">tkjacobsen</a>, I'm trying out this function:

<pre class="sh_sh">
function printpdf ()
{
for i in $@; do
if [ "$1" != "$i" ]; then
dt=`date +%y%m%d%H%M%S`
pdftops $i temp-print${dt}.ps
lpr -P $1 temp-print${dt}.ps
rm temp-print${dt}.ps
fi
done
}
</pre>

I haven't tried it, but I'm about to!

