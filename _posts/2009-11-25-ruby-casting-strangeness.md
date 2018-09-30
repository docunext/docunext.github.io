---
title: Ruby Casting Strangeness
comments:
  - author: Albert
    email: albert.lash@docunext.com
    ip: 74.94.149.33
    url: http://www.docunext.com/
    date: 11/25/2009 01:06:57 PM
    text: >
      I tried to post this at another blog but got flagged as spam:<br/><br/>I ran into this last night while trying out some accounting concepts in Ruby:<br/><br/>http://www.docunext.com/blog/2009/11/ruby-casting-strangeness.html<br/><br/>In irb:<br/><br/>("1298.34".to_f * 100).to_i<br/><br/>returns 129833 while<br/><br/>"1298.34".to_f * 100<br/><br/>returns 129834.0<br/><br/>The reason why I'm multiplying by 100 in the first place is that I know I only need two points of precision when it comes to floats, and I don't want to have to deal with storing and manipulating floats, so I'm changing the floats to integers upon input, and vice verse for display.<br/><br/>I'm was hoping to simply use ceil instead of to_i, but<br/><br/>("1298.66".to_f * 100).ceil<br/><br/>returns 129867. Argh!
  - author: Colby Gutierrez-Kraybill
    email: colby@astro.berkeley.edu
    ip: 70.100.31.22
    url: http://shrewdraven.com
    date: 03/02/2010 12:11:06 AM
    text: >
      <br/>This is happening because there is a residual from the imprecision of the float type, which cannot exactly represent 1298.66 down to the precision that would enable you to use ceil without it pushing up to the next integer.  You can see the residual by doing:<br/><br/>"%.25g" % ("1298.66".to_f * 100)<br/><br/>Why not just use to_i?
  - author: Albert
    email: albert.lash@savonix.com
    ip: 96.240.136.9
    url:
    date: 03/02/2010 09:31:55 AM
    text: >
      Hi Colby, Thanks for commenting!! Its been awhile since I've worked on this issue, but if I recall correctly, I ended up switching to BigDecimal, which worked swimmingly.
date: 2009-11-25
tags: ruby,strings
---
This one has had me chasing my tail for the past hour... and I finally found a reproducible example:

<pre class="sh_ruby">
$ irb1.8
irb(main):074:0> amt = "1298.34"
=> "1298.34"
irb(main):075:0> amt.to_f
=> 1298.34
irb(main):076:0> (amt.to_f * 100).to_i
=> 129833
irb(main):077:0> (amt.to_f * 100)
=> 129834.0
irb(main):078:0> amtf = (amt.to_f * 100)
=> 129834.0
irb(main):079:0> amtf.to_i
=> 129833
irb(main):080:0> amt2 = 129834.0
=> 129834.0
irb(main):081:0> amt2
=> 129834.0
irb(main):082:0> amt2.to_i
=> 129834
</pre>

In general, I realize that Float arithmetic is different than what I'd expect it to be, but that's a little ridiculous.

¥

