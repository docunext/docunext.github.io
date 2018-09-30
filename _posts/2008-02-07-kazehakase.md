---
title: Kazehakase
date: 2008-02-07
tags: errors,webkit
---
I'm writing this post from a new browser I'm trying out: Kazehakase. Its actually really nice, but it crashes when I try to adjust the settings:

<pre class="sh_sh">
Gtk-WARNING **:Refusing to add non-unique action 'TabStop' to action group 'KzWindowTabPopup'/usr/share/kazehakase/ext/ruby/kz/actions.rb: line 109
Gtk-CRITICAL **:gtk_tree_store_get_value: assertion `VALID_ITER (iter, tree_store)' failed/usr/share/kazehakase/ext/ruby/kz/actions.rb: line 109
GLib-GObject-WARNING **:/build/buildd/glib2.0-2.14.5/gobject/gtype.c:3339: type id `0' is invalid/usr/share/kazehakase/ext/ruby/kz/actions.rb: line 109
GLib-GObject-WARNING **:can't peek value table for type `<invalid>' which is not currently referenced
Segmentation fault
</pre>

