---
title: Git and the Command Line
date: 2010-11-06
tags: git
---
Here are some git commands I use from the command line:

<pre class="sh_sh">
git st | grep js | awk '{print $2}' | xargs git add
</pre>

Doh! Now I have to remove some stuff:

<pre class="sh_sh">
[master c578dde] removing some stuff I think
 206 files changed, 33718 insertions(+), 0 deletions(-)
 create mode 100644 public/s/js/.svn/entries
 create mode 100644 public/s/js/.svn/format
 create mode 100644 public/s/js/.svn/text-base/flowplayer-3.1.2.min.js.svn-base
 create mode 100644 public/s/js/.svn/text-base/link-tracker.js.svn-base
 create mode 100644 public/s/js/.svn/text-base/mtos_first.js.svn-base
 create mode 100644 public/s/js/.svn/text-base/mtos_third.js.svn-base
 create mode 100644 public/s/js/.svn/text-base/xj_keepalive.js.svn-base
 create mode 100644 public/s/js/DD_roundies/DD_roundies_0.0.2a-min.js
 create mode 100644 public/s/js/excanvas_r3/AUTHORS
 create mode 100644 public/s/js/excanvas_r3/COPYING
 create mode 100644 public/s/js/excanvas_r3/README
 create mode 100644 public/s/js/excanvas_r3/examples/.svn/all-wcprops
 create mode 100644 public/s/js/excanvas_r3/examples/.svn/entries
 create mode 100644 public/s/js/excanvas_r3/examples/.svn/format
 create mode 100644 public/s/js/excanvas_r3/examples/.svn/prop-base/ff.jpg.svn-base
 create mode 100644 public/s/js/excanvas_r3/examples/.svn/text-base/example1.html.svn-base
 create mode 100644 public/s/js/excanvas_r3/examples/.svn/text-base/example2.html.svn-base
 create mode 100644 public/s/js/excanvas_r3/examples/.svn/text-base/example3.html.svn-base
 create mode 100644 public/s/js/excanvas_r3/examples/.svn/text-base/ff.jpg.svn-base
 create mode 100644 public/s/js/excanvas_r3/examples/example1.html
 create mode 100644 public/s/js/excanvas_r3/examples/example2.html
 create mode 100644 public/s/js/excanvas_r3/examples/example3.html
 create mode 100644 public/s/js/excanvas_r3/excanvas.compiled.js
 create mode 100644 public/s/js/excanvas_r3/excanvas.js
 create mode 100644 public/s/js/excanvas_r3/testcases/.svn/all-wcprops
 create mode 100644 public/s/js/excanvas_r3/testcases/.svn/entries
 create mode 100644 public/s/js/excanvas_r3/testcases/.svn/format
 create mode 100644 public/s/js/excanvas_r3/testcases/.svn/prop-base/overflow.html.svn-base
 create mode 100644 public/s/js/excanvas_r3/testcases/.svn/text-base/arc.html.svn-base
 create mode 100644 public/s/js/excanvas_r3/testcases/.svn/text-base/clearpath.html.svn-base
 create mode 100644 public/s/js/excanvas_r3/testcases/.svn/text-base/drawimage.html.svn-base
 create mode 100644 public/s/js/excanvas_r3/testcases/.svn/text-base/gradient.html.svn-base
 create mode 100644 public/s/js/excanvas_r3/testcases/.svn/text-base/gradient2.html.svn-base
 create mode 100644 public/s/js/excanvas_r3/testcases/.svn/text-base/linewidth.html.svn-base
 create mode 100644 public/s/js/excanvas_r3/testcases/.svn/text-base/overflow.html.svn-base
 create mode 100644 public/s/js/excanvas_r3/testcases/.svn/text-base/quadraticcurve.html.svn-base
 create mode 100644 public/s/js/excanvas_r3/testcases/.svn/text-base/resizing.html.svn-base
 create mode 100644 public/s/js/excanvas_r3/testcases/.svn/text-base/saverestorepath.html.svn-base
 create mode 100644 public/s/js/excanvas_r3/testcases/.svn/text-base/stroke-scale-rotate.html.svn-base
 create mode 100644 public/s/js/excanvas_r3/testcases/.svn/text-base/stroke-should-not-close-path.html.svn-base
 create mode 100644 public/s/js/excanvas_r3/testcases/arc.html
 create mode 100644 public/s/js/excanvas_r3/testcases/clearpath.html
 create mode 100644 public/s/js/excanvas_r3/testcases/drawimage.html
 create mode 100644 public/s/js/excanvas_r3/testcases/gradient.html
 create mode 100644 public/s/js/excanvas_r3/testcases/gradient2.html
 create mode 100644 public/s/js/excanvas_r3/testcases/linewidth.html
 create mode 100644 public/s/js/excanvas_r3/testcases/overflow.html
 create mode 100644 public/s/js/excanvas_r3/testcases/quadraticcurve.html
 create mode 100644 public/s/js/excanvas_r3/testcases/resizing.html
 create mode 100644 public/s/js/excanvas_r3/testcases/saverestorepath.html
 create mode 100644 public/s/js/excanvas_r3/testcases/stroke-scale-rotate.html
 create mode 100644 public/s/js/excanvas_r3/testcases/stroke-should-not-close-path.html
 create mode 100644 public/s/js/flowplayer-3.1.2.min.js
 create mode 100644 public/s/js/flowplayer-3.1.4.min.js
 create mode 100644 public/s/js/jquery/.svn/entries
 create mode 100644 public/s/js/jquery/.svn/format
 create mode 100644 public/s/js/jquery/.svn/prop-base/jquery.js.svn-base
 create mode 100644 public/s/js/jquery/.svn/text-base/jquery-1.2.3.js.svn-base
 create mode 100644 public/s/js/jquery/.svn/text-base/jquery-1.3.2.js.svn-base
 create mode 100644 public/s/js/jquery/.svn/text-base/jquery-1.3.2.min.js.svn-base
 create mode 100644 public/s/js/jquery/.svn/text-base/jquery.js.svn-base
 create mode 100644 public/s/js/jquery/jquery-1.2.3.js
 create mode 100644 public/s/js/jquery/jquery-1.3.2.js
 create mode 100644 public/s/js/jquery/jquery-1.3.2.min.js
 create mode 100644 public/s/js/jquery/jquery-1.4.2+pir+corner.min.js
 create mode 100644 public/s/js/jquery/jquery-1.4.2+pir+corners+mtos.min.js
 create mode 100644 public/s/js/jquery/jquery-1.4.2.min.js
 create mode 100644 public/s/js/jquery/jquery-1.4.2.pir.min.js
 create mode 120000 public/s/js/jquery/jquery.js
 create mode 100644 public/s/js/jquery/plugins/.svn/entries
 create mode 100644 public/s/js/jquery/plugins/.svn/format
 create mode 100644 public/s/js/jquery/plugins/.svn/text-base/jquery.cookie.js.svn-base
 create mode 100644 public/s/js/jquery/plugins/.svn/text-base/jquery.pir.js.svn-base
 create mode 100644 public/s/js/jquery/plugins/.svn/text-base/jquery.pir.min.js.svn-base
 create mode 100644 public/s/js/jquery/plugins/.svn/text-base/jquery.pir.thickbox.js.svn-base
 create mode 100644 public/s/js/jquery/plugins/.svn/text-base/jquery.swf.js.svn-base
 create mode 100644 public/s/js/jquery/plugins/.svn/text-base/jquery.url.packed.js.svn-base
 create mode 100644 public/s/js/jquery/plugins/.svn/text-base/thickbox-compressed.js.svn-base
 create mode 100644 public/s/js/jquery/plugins/droppy/.svn/entries
 create mode 100644 public/s/js/jquery/plugins/droppy/.svn/format
 create mode 100644 public/s/js/jquery/plugins/droppy/.svn/text-base/LICENSE.svn-base
 create mode 100644 public/s/js/jquery/plugins/droppy/.svn/text-base/README.svn-base
 create mode 100644 public/s/js/jquery/plugins/droppy/.svn/text-base/project.yml.svn-base
 create mode 100644 public/s/js/jquery/plugins/droppy/LICENSE
 create mode 100644 public/s/js/jquery/plugins/droppy/README
 create mode 100644 public/s/js/jquery/plugins/droppy/docs/.svn/entries
 create mode 100644 public/s/js/jquery/plugins/droppy/docs/.svn/format
 create mode 100644 public/s/js/jquery/plugins/droppy/docs/.svn/text-base/droppy.css.svn-base
 create mode 100644 public/s/js/jquery/plugins/droppy/docs/.svn/text-base/index.html.svn-base
 create mode 100644 public/s/js/jquery/plugins/droppy/docs/.svn/text-base/jquery-1.2.3.min.js.svn-base
 create mode 100644 public/s/js/jquery/plugins/droppy/docs/.svn/text-base/jquery.droppy.js.svn-base
 create mode 100644 public/s/js/jquery/plugins/droppy/docs/.svn/text-base/project-page.css.svn-base
 create mode 100644 public/s/js/jquery/plugins/droppy/docs/.svn/text-base/zero.css.svn-base
 create mode 100644 public/s/js/jquery/plugins/droppy/docs/droppy.css
 create mode 100644 public/s/js/jquery/plugins/droppy/docs/index.html
 create mode 100644 public/s/js/jquery/plugins/droppy/docs/jquery-1.2.3.min.js
 create mode 100644 public/s/js/jquery/plugins/droppy/docs/jquery.droppy.js
 create mode 100644 public/s/js/jquery/plugins/droppy/docs/project-page.css
 create mode 100644 public/s/js/jquery/plugins/droppy/docs/zero.css
 create mode 100644 public/s/js/jquery/plugins/droppy/project.yml
 create mode 100644 public/s/js/jquery/plugins/droppy/src/.svn/entries
 create mode 100644 public/s/js/jquery/plugins/droppy/src/.svn/format
 create mode 100644 public/s/js/jquery/plugins/droppy/src/javascripts/.svn/entries
 create mode 100644 public/s/js/jquery/plugins/droppy/src/javascripts/.svn/format
 create mode 100644 public/s/js/jquery/plugins/droppy/src/javascripts/.svn/text-base/jquery.droppy.js.svn-base
 create mode 100644 public/s/js/jquery/plugins/droppy/src/javascripts/jquery.droppy.js
 create mode 100644 public/s/js/jquery/plugins/droppy/src/stylesheets/.svn/entries
 create mode 100644 public/s/js/jquery/plugins/droppy/src/stylesheets/.svn/format
 create mode 100644 public/s/js/jquery/plugins/droppy/src/stylesheets/.svn/text-base/droppy.css.svn-base
 create mode 100644 public/s/js/jquery/plugins/droppy/src/stylesheets/droppy.css
 create mode 100644 public/s/js/jquery/plugins/jquery.cookie.js
 create mode 100644 public/s/js/jquery/plugins/jquery.corner.min.js
 create mode 100644 public/s/js/jquery/plugins/jquery.cornerz.0.6.js
 create mode 100644 public/s/js/jquery/plugins/jquery.dynacloud-5.js
 create mode 100644 public/s/js/jquery/plugins/jquery.jselect-1.3.1.js
 create mode 100755 public/s/js/jquery/plugins/jquery.metadata-2.1.js
 create mode 100644 public/s/js/jquery/plugins/jquery.metadata-2.1.min.js
 create mode 100644 public/s/js/jquery/plugins/jquery.metadata.2.1/.DS_Store
 create mode 100755 public/s/js/jquery/plugins/jquery.metadata.2.1/META.json
 create mode 100755 public/s/js/jquery/plugins/jquery.metadata.2.1/README
 create mode 100755 public/s/js/jquery/plugins/jquery.metadata.2.1/test/index.html
 create mode 100755 public/s/js/jquery/plugins/jquery.metadata.2.1/test/jquery.js
 create mode 100755 public/s/js/jquery/plugins/jquery.metadata.2.1/test/test.js
 create mode 100755 public/s/js/jquery/plugins/jquery.metadata.2.1/test/testrunner.js
 create mode 100755 public/s/js/jquery/plugins/jquery.metadata.2.1/test/testsuite.css
 create mode 100644 public/s/js/jquery/plugins/jquery.pir.js
 create mode 100644 public/s/js/jquery/plugins/jquery.pir.min.js
 create mode 100644 public/s/js/jquery/plugins/jquery.pir.thickbox.js
 create mode 100644 public/s/js/jquery/plugins/jquery.swf.js
 create mode 100644 public/s/js/jquery/plugins/jquery.url-1.0.js
 create mode 100644 public/s/js/jquery/plugins/jquery.url.packed.js
 create mode 100644 public/s/js/jquery/plugins/scrollto/jquery.scrollTo-1.4.2-min.js
 create mode 100644 public/s/js/jquery/plugins/tablesorter/.settings/.svn/entries
 create mode 100644 public/s/js/jquery/plugins/tablesorter/.settings/.svn/format
 create mode 100644 public/s/js/jquery/plugins/tablesorter/.settings/.svn/text-base/org.eclipse.core.resources.prefs.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/.settings/org.eclipse.core.resources.prefs
 create mode 100644 public/s/js/jquery/plugins/tablesorter/.svn/entries
 create mode 100644 public/s/js/jquery/plugins/tablesorter/.svn/format
 create mode 100644 public/s/js/jquery/plugins/tablesorter/.svn/text-base/jquery.metadata.js.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/.svn/text-base/jquery.tablesorter.js.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/.svn/text-base/jquery.tablesorter.min.js.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/addons/.svn/entries
 create mode 100644 public/s/js/jquery/plugins/tablesorter/addons/.svn/format
 create mode 100644 public/s/js/jquery/plugins/tablesorter/addons/pager/.svn/entries
 create mode 100644 public/s/js/jquery/plugins/tablesorter/addons/pager/.svn/format
 create mode 100644 public/s/js/jquery/plugins/tablesorter/addons/pager/.svn/text-base/jquery.tablesorter.pager.css.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/addons/pager/.svn/text-base/jquery.tablesorter.pager.js.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/addons/pager/icons/.svn/entries
 create mode 100644 public/s/js/jquery/plugins/tablesorter/addons/pager/icons/.svn/format
 create mode 100644 public/s/js/jquery/plugins/tablesorter/addons/pager/icons/.svn/prop-base/first.png.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/addons/pager/icons/.svn/prop-base/last.png.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/addons/pager/icons/.svn/prop-base/next.png.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/addons/pager/icons/.svn/prop-base/prev.png.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/addons/pager/icons/.svn/text-base/first.png.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/addons/pager/icons/.svn/text-base/last.png.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/addons/pager/icons/.svn/text-base/next.png.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/addons/pager/icons/.svn/text-base/prev.png.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/addons/pager/jquery.tablesorter.pager.css
 create mode 100644 public/s/js/jquery/plugins/tablesorter/addons/pager/jquery.tablesorter.pager.js
 create mode 100644 public/s/js/jquery/plugins/tablesorter/jquery.metadata.js
 create mode 100644 public/s/js/jquery/plugins/tablesorter/jquery.tablesorter.js
 create mode 100644 public/s/js/jquery/plugins/tablesorter/jquery.tablesorter.min.js
 create mode 100644 public/s/js/jquery/plugins/tablesorter/themes/.svn/entries
 create mode 100644 public/s/js/jquery/plugins/tablesorter/themes/.svn/format
 create mode 100644 public/s/js/jquery/plugins/tablesorter/themes/blue/.svn/entries
 create mode 100644 public/s/js/jquery/plugins/tablesorter/themes/blue/.svn/format
 create mode 100644 public/s/js/jquery/plugins/tablesorter/themes/blue/.svn/prop-base/asc.gif.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/themes/blue/.svn/prop-base/bg.gif.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/themes/blue/.svn/prop-base/blue.zip.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/themes/blue/.svn/prop-base/desc.gif.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/themes/blue/.svn/text-base/asc.gif.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/themes/blue/.svn/text-base/bg.gif.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/themes/blue/.svn/text-base/blue.zip.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/themes/blue/.svn/text-base/desc.gif.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/themes/blue/.svn/text-base/style.css.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/themes/blue/style.css
 create mode 100644 public/s/js/jquery/plugins/tablesorter/themes/green/.svn/entries
 create mode 100644 public/s/js/jquery/plugins/tablesorter/themes/green/.svn/format
 create mode 100644 public/s/js/jquery/plugins/tablesorter/themes/green/.svn/prop-base/asc.png.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/themes/green/.svn/prop-base/bg.png.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/themes/green/.svn/prop-base/desc.png.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/themes/green/.svn/prop-base/green.zip.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/themes/green/.svn/text-base/asc.png.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/themes/green/.svn/text-base/bg.png.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/themes/green/.svn/text-base/desc.png.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/themes/green/.svn/text-base/green.zip.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/themes/green/.svn/text-base/style.css.svn-base
 create mode 100644 public/s/js/jquery/plugins/tablesorter/themes/green/style.css
 create mode 100644 public/s/js/jquery/plugins/thickbox-compressed.js
 create mode 100644 public/s/js/link-tracker.js
 create mode 100644 public/s/js/mtos/.svn/entries
 create mode 100644 public/s/js/mtos/.svn/format
 create mode 100644 public/s/js/mtos/.svn/text-base/mtos_first.js.svn-base
 create mode 100644 public/s/js/mtos/.svn/text-base/mtos_third.js.svn-base
 create mode 100644 public/s/js/mtos/mtos_first.js
 create mode 100644 public/s/js/mtos/mtos_third.js
 create mode 100644 public/s/js/mtos_first.js
 create mode 100644 public/s/js/mtos_third.js
 create mode 100644 public/s/js/parseuri.js
 create mode 100644 public/s/js/pngfix.js
 create mode 100644 public/s/js/srcbrowser/.svn/entries
 create mode 100644 public/s/js/srcbrowser/.svn/format
 create mode 100644 public/s/js/srcbrowser/.svn/text-base/makepath.js.svn-base
 create mode 100644 public/s/js/srcbrowser/makepath.js
 create mode 100644 public/s/js/swfobject-1.5.min.js
 create mode 100644 public/s/js/xj_keepalive.js
</pre>

Why don't I already ignore <tt>.svn</tt>?

Nevertheless, this is why **awk** is sweet:

<pre class="sh_sh">
git st | grep opens | awk '{print $2}' |  xargs git add
</pre>

Can you dig it?

