---
title: MTOS Publishing Queue on Debian Uploads and Asset Paths
date: 2009-05-30
tags: debian,"movable type",thickbox
---
I setup a cronjob for:

/usr/share/movabletype/tools/run-periodic-tasks

to be run as www-data.

I also symlinked /etc/movabletype-opensource/mt-config.cgi to that directory.

What's more, I have hacked up a few things which should really be configurable. For example, the template for pop-up windows of image thumbnails is in /usr/share/perl5/MT/Asset/Image.pm (on Debian). I changed it to use thickbox:

<pre>
&lt; q|&lt;a href="%s" class="thickbox">%s&lt;/a>|,
&lt;                 MT::Util::encode_html( $asset-&gt;url ),
---
&gt; q|&lt;a href="%s" onclick="window.open('%s','popup','width=%d,height=%d,scrollbars=no,resizable=no,toolbar=no,directories=no,location=no,menubar=no,status=no,left=0,top=0'); return false">%s&lt;/a>|,
&gt;                 MT::Util::encode_html( $popup-&gt;url ),
&gt;                 MT::Util::encode_html( $popup-&gt;url ),
&gt;                 $asset-&gt;image_width,
&gt;                 $asset-&gt;image_height,
</pre>

Then I was trying to get my Multiblog MT install to publish its static resources to a central repository, similarly with uploaded assets. This has proved practically impossible, unfortunately. There is a way I found to do it in a somewhat logical manner... the database stores the asset with a prefix of "%r" which is the blog path. Its possible to use "%s" as the static path, or "%a" for the archive path.

I want better control over the publishing paths for assets and such for caching as well as file distribution. It makes sense from time to time to serve large files like images differently than small html / javascript / css.

I do have to say that the assets functionality it pretty awesome. They've done some really impressive work on managing images - great work Six Apart!

