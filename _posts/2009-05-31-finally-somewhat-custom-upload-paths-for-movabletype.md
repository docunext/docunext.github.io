---
title: Finally Somewhat Custom Upload Paths for MovableType
date: 2009-05-31
tags: movable type,templates
---
This was unfortunately much more difficult than I had hoped. What I wanted to do was supply an absolute path for the asset upload, and have the paths for thumbnails built automatically by MovableType.

I was able to hack this into being by specifying the static directives as the asset url and path, like this:

* set target static uri in mt-config.cgi
* override it in the templates:
    - include/archetype_editor.tmpl
    - include/header.tmpl
    - dialog/header.tmpl

First I tried this, but it wasn't what I wanted:* Edit /usr/share/perl5/MT/Asset.pm line 83:

<pre class="sh_perl">
: $1 eq 'r'           ? MT->instance->static_path
</pre>

Also line 62.

ACTUALLY NO - instead changed lines 1004 and 1009 in /usr/share/perl5/MT/CMS/Asset.pm

to %s instead of %r. This will move only the asset, not the thumbnail.

I also <a href="http://www.beausmith.com/mt/2008/04/default-upload-destination-in-movable-type.php" rel="nofollow">used this technique to specify the sub-directory of the static directives</a>.

And <a href="http://code.google.com/p/mediaurls/" rel="nofollow">MediaUrls</a> helps for general media resources.

