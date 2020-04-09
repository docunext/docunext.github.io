---
title: FPDF Landscape
comments:
  - author: anonhelper
    email: anonhelper@yahoo.com
    date: 01/04/2010 05:38:27 PM
    text: >
      well here is a better way to use landscape with fpdf<br/><a href="http://www.id.uzh.ch/cl/zinfo/fpdf/tutorial/tuto1.htm" rel="nofollow">http://www.id.uzh.ch/cl/zinfo/fpdf/tutorial/tuto1.htm</a><br/><br/>...actually i'm still not sure what fpdi is used for after looking through it for the "landscape" solution.
  - author: Sarah R. Lewis
    email: sarah@happyhumans.com
    url: http://metamorphevents.org
    date: 07/06/2010 12:44:43 AM
    text: >
      Thanks bunches for posting the solution. I'm working on an e-book that's in landscape orientation and this is exactly the piece I needed.
date: 2007-01-26
---
I need to make FPDF output a landscape PDF instead of a portrait PDF. I also use fpdi, so I was a little unsure of how to proceed. I found this page:

<a href="http://www.fpdf.de/forum/showthread.php?t=1524">http://www.fpdf.de/forum/showthread.php?t=1524</a>

which had this code:

<pre>$pdf= new fpdi("L","pt","A4");</pre>

It works, but the scale was messed up, so I ended up just using this code instead:

<pre>$pdf= new fpdi("L");</pre>

That is awesome, I'll be experimenting with that more.

¥

