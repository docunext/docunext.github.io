---
title: Javascript Relative Date
date: 2009-04-24
---
This code is a reduced version of something Joey Hess from Debian wrote for ikiwiki and released to the public domain:

<pre>// Courtesy of Joey
// Public Domain Code
// http://joey.kitenet.net/blog/entry/relative_dates_in_html/

var timeUnits = new Array;
timeUnits['minute'] = 60;
timeUnits['hour'] = timeUnits['minute'] * 60;
timeUnits['day'] = timeUnits['hour'] * 24;
timeUnits['month'] = timeUnits['day'] * 30;
timeUnits['year'] = timeUnits['day'] * 364;
var timeUnitOrder = ['year', 'month', 'day', 'hour', 'minute'];

function relativeDate(date) {
    var now = new Date();
    var offset = date.getTime() - now.getTime();
    var seconds = Math.round(Math.abs(offset) / 1000);

    var ret = "";
    var shown = 0;
    for (i = 0; i &lt; timeUnitOrder.length; i++) {
        var unit = timeUnitOrder[i];
        if (seconds &gt;= timeUnits[unit]) {
            var num = Math.floor(seconds / timeUnits[unit]);
            seconds -= num * timeUnits[unit];
            if (ret)
                ret += "and ";
            ret += num + " " + unit + (num &gt; 1 ? "s" : "") + " ";

            if (++shown == 2)
                break;
        }
        else if (shown)
            break;
    }

    if (! ret)
        ret = "less than a minute "

    return ret + (offset &lt; 0 ? "ago" : "from now");
}
</pre>

I reduced it so that I could use jQuery selectors and manipulation techniques. Here's how I use it with the open source PhunkyBB forums software project:

<pre>      $(document).ready(function() {
        var mytime = "";
        var rltime = "";
        $(".reldate").each(function () {
          mytime = new Date($(this).text() + "(UTC)");
          rltime = relativeDate(mytime);
          $(this).attr("title",mytime);
          $(this).text(rltime);
        });
      });
</pre>

