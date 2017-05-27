---
title: jQuery Tablesorter Pager Cookie Widget Bug Fix
date: 2009-06-26
tags: xbox
---
Wow that's a mouthful!

The cookie widget for the awesome jQuery tablesorter pager extension wouldn't go back to page 1 for me. I debugged it endlessly until I finally figured it out - the zero page confused it. I hacked a fix that works for me and sent it to the author:

<blockquote>
Nice plugin. When I use it w/ pager, move to first page breaks due to wacky numbering. This fix works for me:
</blockquote>
<pre>if ( pageNum &gt;= 1 ) {
    tablesorterCookieJar.set($(table).attr('id')+'-page', pageNum);
} else if ( pageNum == 0 ) {
} else {
   var pageNum = tablesorterCookieJar.get($(table).attr('id')+'-page');
   if (pageNum &amp;&amp; pageNum &gt; 1) {
       table.config.page = pageNum;
        jQuery(table).trigger('sorton',[0,0]);
   }
}</pre>

Woops, actually that doesn't work, but I think this does:
<pre>var pageNum = table.config.page;
var totalRows = table.config.totalRows;
if ( totalRows &gt; 0 ) {
    tablesorterCookieJar.set($(table).attr('id')+'-page', pageNum);
} else {
   table.config.totalRows = 1;
   var pageNum = tablesorterCookieJar.get($(table).attr('id')+'-page');
   if (pageNum &amp;&amp; pageNum &gt; 1) {
       table.config.page = pageNum;
       jQuery(table).trigger('sorton',[0,0]);
   }
}
</pre>
I'm using totalRows as an initialization marker of sorts.

HA! Actually that change does nothing. Turns out I was just avoiding calling the update from the cookie - which is what was preventing the page from getting reset to 0. Instead, I've removed that part:

<pre>            var pageNum = table.config.page;
            if ( pageNum > 0 ) {
                tablesorterCookieJar.set($(table).attr('id')+'-page', pageNum);
            }</pre>

and instead using this to initialize the tablesorter:
<pre>
        var tablesorterCookieJar = $.cookieJar('tablesorter', {
            cookie: {
                path: '/'
            }
        });
        var mypage = tablesorterCookieJar.get('table-page');
        $("#table").tablesorter(
            {
              widthFixed: true
              widgets:['zebra','cookie']
            }
          ).tablesorterPager(
              {
                  container: $("#table-pager"),
                  positionFixed: false,
                  size: 20,
                  page: mypage
              }
          );
</pre>

