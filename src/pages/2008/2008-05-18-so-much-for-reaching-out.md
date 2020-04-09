---
title: So Much for Reaching Out
comments:
  - author: Russell Coker
    email: russell@coker.com.au
    url: http://etbe.coker.com.au/
    date: 05/20/2008 04:06:48 AM
    text: >
      Don't get too disheartened by that.  It's just one person who's probably having a bad day.  Dealing with the GnuCash upstream that they describe could also be the cause of some bad attitude too.<br/><br/>Why not just fork GnuCash or write a replacement?
  - author: Albert
    email: albert.lash@savonix.com
    date: 05/20/2008 11:17:18 AM
    text: >
      Hi Russell, thank you for the reassurance, it helps! Its odd, but with computers I keep trying until I "push the right button". With people, I push one wrong button and I give up.<br/><br/>So here's my story with GnuCash, I've been working on PBooks for about 4 years, primarily for my own use, but then decided to open source it. I did a lot of research and felt that there was a window for small business, web-based accounting packages. Furthermore, I felt it would help to try and "play nicely" with the data formats that GnuCash has come up with. Similar to how NetBSD benefits from being able to run on so many platforms, I figure it would also benefit PBooks to review a project which has been around for a lot longer.<br/><br/>GnuCash does have a relational back end via gda, and it is currently being worked on and tested by a few people, including myself. I've been able to get sqlite to work a little (and supposedly MySQL and postgres work with a little effort), and was able to view the data model created by gnucash and gda.<br/><br/>Even if PBooks can act as a remote interface for reading GnuCash data, I'd be thrilled that PBooks is able to be leveraged by another project.<br/><br/>I guess what bothered me so much about the response from Neil was that he judged the quality of the code without examining it. In fact, PBooks is hardly written in PHP. It runs on top of PHP, but is primarily written in XSL, XML, and SQL. I chose to write it that way so that it would be easy to run on top of other programming languages, like python or java.
  - author: Bill
    email: osprey@tranquilpenguin.com
    url: http://tranquilpenguin.com
    date: 04/30/2009 12:25:05 PM
    text: >
      While I admit PHP has it's issues, it's not fair to call a SERVER-side scripting language insecure... He has poor code mistaken for a poor language.<br/><br/>As for GNUCash... My business model is based on FOSS. I can track accounts and write invoices.<br/><br/>As for the backend... I'll cross that bridge when I come to it.
  - author: Albert
    email: albert.lash@savonix.com
    date: 04/30/2009 06:05:56 PM
    text: >
      Hi Bill, thanks for commenting. He couldn't have mistaken poor code because he didn't even look at the code, he judged it without seeing it - what it commonly referred to as "prejudice".<br/><br/>I don't use GNUCash but I'm still very impressed by it. I continue to develop and use PBooks:<br/><br/><a href="http://www.pbooks.org/blog/" rel="nofollow">http://www.pbooks.org/blog/</a><br/><br/>Cool website by the way.
date: 2008-05-18
---
In my effort to reach out and connect with other developers, I've been reminded of how un-fun the process can be, thanks to Neil Williams. I posted a small comment on his blog:

My comment:

<blockquote>

Hi Neil, I've been delving into GnuCash lately in an effort to align PBooks, the Affero GPL v3 accounting program I've been working on for a few years, to mesh better with the GnuCash db. Looking over CashUtil, it might be easier to work with and still get the benefit of being able to examine and explore the GnuCash data model and objects. Just wanted to say hi and introduce myself, I haven't checked out and built cashutil yet, but will do so today. If you want to take a look at PBooks, I'd appreciate it:</blockquote>

to which he responded with this via email:

<blockquote>

I don't know how often I'm going to have to say this, but:** THERE IS NO GNUCASH DATABASE **

Sorry, there it is. GnuCash has data but that data is not free, it is not accessible to anything else and trying to do so will simply break GnuCash. GnuCash upstream want it that way and do what they can to ensure it stays that way. "Import/Export is too difficult so we don't do it (and haven't a clue where to start)" was one response. (I was a GnuCash developer for two years.)

You might want to look at Homebank and Grisbi for financial programs to replace GnuCash but neither are quite double-entry. Unfortunately, GnuCash uses the double-entry mantra to batter people into submission rather than actually improving the code.

There is no means of data export for GnuCash that covers more than 50% of the available data. There is no means of data import into GnuCash that is supported with any degree of reliability. The SQL backend has been all but abandoned. I've been battling with gnucash for so many years now that I've given up and moved on to more rewarding topics. I can only suggest that you do the same - I am fairly sure that the GnuCash developers are not going to be particularly friendly to a PHP implementation.

Quite how you'd use cashutil code in a PHP application I have no idea.

As noted in the blog post, gpe-cash (meant to be derived from cashutil) is stalled. cashutil is almost dead. I don't think I've even looked at the cashutil code for over a year.

I'm not at all sure that it does build anymore - can't remember when I last tried. It certainly won't build with the next version of QOF because I need to remove a lot of decrepit code that is still used by GnuCash. CashUtil hasn't been able to load GnuCash data files reliably since GnuCash 2.0.0 and there is zero prospect of GnuCash ever stabilising the data format. As I said, not a rewarding area of development.

Well, I did but there were problems:

1. I will never trust PHP for anything more vital than blogs/wikis

2. I will never trust financial data to the WWW - only https:// to sites with more than a clue about security.

3. The one element I need is invoices and the pbooks demo doesn't appear to allow testing of invoices. (Worse, the page linked from the menu appears to require me to calculate quantity multiplied by price which is frankly bizarre - why use a computer if I need to use a calculator?? - can you work out 37.42 * 7.25 in your head?

4. I have no idea why you commented on a blog post about Emdebian with details of a PHP application - how on earth do you expect an embedded device to use a PHP application???? We're talking about iPAQs and routers here, not servers with gigabytes of space for MySQL or Apache. Web 2.0 was dead before it was even created IMNSHO.

I can only think that you didn't notice or understand that Emdebian is only concerned with Embedded Debian. Sigh.

If you were hoping for a positive response, I'm sorry. I really hate PHP. IMNHSO PHP is the single most insecure language ever devised (and I speak as someone who has written my fair share of PHP). I would be happy to see php.net vanish into the blackhole of it's own hype and take every "package" containing <?php.*?> with it. Memory management doesn't exist, database connectivity is a security nightmare and the gammut of PHP that I've seen whilst in Debian would put anyone off using <? ?> ever again. PHP is just about acceptable in bespoke deployments where the only person writing the code is also the only person with root access. Any distributed PHP is doomed to a life of security bugs. (Honestly, PHP in my book is little better than IE in terms of security - in fact, sometimes I'd rather use IE on a simple HTML/CSS site than PHP in any browser.) My only recommendation is to forget PBooks and make it CBooks instead - not that I expect that to be a welcome suggestion.

Also, there seems little point pursuing Gnucash with libgda2 because libgda3 is already the stable version and has completely changed the API.

PS: Don't expect an easy time trying to get PBooks into Debian - I certainly wouldn't want to see it in Debian, sorry. (A monolithic distribution model is a very bad idea too from a distribution point-of-view - many packages are rejected purely because the upstream have adopted a monolithic model. If you don't understand the security implications of the monolithic model then I really don't have time to explain them.)

I don't accept comments that amount to a request for help on the blog so your comment was deleted. I'm really sorry this is quite so negative but you've hit on my three pet hates: inappropriate blog comments, PHP and gnucash. I didn't think anyone would manage to hit all three but there's always someone.....</blockquote>

It appears I've somehow offended him by reaching out and saying hello. I didn't mean to upset you, sorry Neil! Don't get so angry, you'll live longer! :-) And if for some reason you end up reading this non-response, check out m0n0wall, its a FreeBSD derived firewall appliance which uses PHP.

Thinking again about how I don't see software as a team sport, I stopped enjoying soccer as a youth when the players became so competitive that they started being mean to each other. Its difficult to want to involve yourself with other people when you get a response like this. :(

NOTE: Coincidentally, this is the 1000th post on docunext.com!

¥

