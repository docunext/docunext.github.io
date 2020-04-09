---
title: Solar Powered Slug
date: 2007-05-20
tags: energy,hardware,nslu2,slug,"solar power"
---
<table cellpadding="5">
<tbody>
<tr>
<td>
</td>
<td>
</td>
</tr>
</tbody>
</table>

I've been interested in building a solar powered slug for some time, and then it hit me - "Why not use automobile-based, commodity items?" One thing I love about computer parts is how ubiquitous and cheap they are - you really don't have to worry about finding replacement parts anymore. Same with cars. So many people own and rely on cars that there is a great big infrastructure to support their needs. Noticing and leveraging this is just smart business.

#### What is a slug?

A slug is more than a little snail-type thing you find in your garden. It can also be a Linksys NSLU2, preferably flashed with Debian linux. It consumes about 5 watts of power, and can run all sorts of cool servers, like web, jabber, or even a database.

#### So why a solar powered slug?

There are many reasons:

* Makes a good story - can power a website about the project. That would be cool!
* Environmentally friendly? Maybe, the requirement of a battery makes the operation less "green" due to the lead in the battery (<a href="http://www.neocarz.com/blog/2007/05/car-batteries/" title="Car Batteries">NeoCarz.com has a bit of research on the environmental impact of car batteries</a>.)
* It would save money due to lower energy consumption (maybe over 50 years or so!)
* It will be a learning process - and I love to learn.

#### Other solar powered slug attempts

<a href="http://chezphil.org/solarslug/">SolarSlug - A Solar Powered Slug
</a> - Let's learn from others too! This project used a 4.8W solar panel which turned out to just barely power the slug, and recommends using something more powerful.

<a href="http://www.nslu2-linux.org/wiki/HowTo/MakeASolarPoweredSlug">How to make a Solar-Powered Slug
</a> - This page links to the previous one mentioned, but adds that solar power is inherently unstable (especially here in New England where this slug will operate) and suggests using a battery to power the slug, and a solar panel to keep the battery charged. That's what I'm planning to do.

#### Possible components

#### Solar Panel

I was searching for a car battery charger this morning when I came across the
<a href="http://www.amazon.com/gp/product/B0006JO0X8?ie=UTF8&amp;tag=inforbanki-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B0006JO0X8">Sunforce 50032 15 Watt Solar Battery Charger
</a>
<img src="http://www.assoc-amazon.com/e/ir?t=inforbanki-20&amp;l=as2&amp;o=1&amp;a=B0006JO0X8" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />. At $99, its really not a bad price at all! According to the product description at Amazon.com, the manufacturer recommends using the
<a href="http://www.amazon.com/gp/product/B0006JO0XI?ie=UTF8&amp;tag=inforbanki-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B0006JO0XI">Sunforce 60012 7 Amp Charge Controller
</a>
<img src="http://www.assoc-amazon.com/e/ir?t=inforbanki-20&amp;l=as2&amp;o=1&amp;a=B0006JO0XI" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />, which I will do if I buy the Sunforce panel (see note lower down about the combo unit).

As a comparison, Sears has the ICP Solar Technologies, Inc. Marine Solar Charger SE-400 (which is a 6-watt, 400 mA panel, though they don't tell you that at Sears.com - I had to search elsewhere for that info!) for $90.

Is this a good deal for a solar panel in general? I think so. Most evaluations of value for solar panels have to do with cost per watt. The 15 watt Sunforce panel works out to be approximately $6.67 / watt. Sounds like a lot considering you can buy a thousand watt hours from the utility company from anywhere between $0.08 and $0.50 (I'm being very liberal with that range considering the varying costs of electricity over time and location). However, from what I've found in m research is that $4 is a very low price per watt when it comes to solar power. Considering the Sunforce is only $99, and includes connectors for a battery and a 12-V car accessory outlet, its a pretty good deal.

Beyond this minimal example, when considering solar power value, you also have to consider how much space it will take up. So think about dollars and square footage per watt if you are doing a larger installation.

#### Battery

I have an extra car battery in my Mercedes 280SL which I only rarely drive. I won't mind taking it out to use with this project. In general, car batteries can cost anywhere from $40 to well over $200, depending on the brand, quality, and application requirements.

#### Inverter

I just happened to buy the
<a href="http://www.amazon.com/gp/product/B000EJQIX0?ie=UTF8&amp;tag=inforbanki-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B000EJQIX0">Black &amp; Decker 200-Watt Inverter #VEC1045BD
</a>
<img src="http://www.assoc-amazon.com/e/ir?t=inforbanki-20&amp;l=as2&amp;o=1&amp;a=B000EJQIX0" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> from Amazon.com a few days ago for $17.99 because the last inverter I bought was an el-cheapo model which kicked the bucket. I actually used that one all the time so it made sense to buy a better one.

**Combo Unit?**

I'm also checking out these combo units:
<a href="http://www.amazon.com/gp/product/B000E6LEIC?ie=UTF8&amp;tag=inforbanki-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B000E6LEIC">Xantrex 852-2000 XPower Powerpack 600HD Portable Backup Power Source
</a>
<img src="http://www.assoc-amazon.com/e/ir?t=inforbanki-20&amp;l=as2&amp;o=1&amp;a=B000E6LEIC" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> The description makes it sound like this unit cannot overcharge, removing the $24 cost for the one from SunForce. It also includes an inverter and plug outlet, removing the need for the $18 power inverter. I just might get one of these instead once I confirm that the charge monitor actually does something rather than display its current charge so you can unplug it when its full.

**Charge Maintenance Issues**

If you've ever had rechargeable batteries, you know about the issues caused by overcharging them. That's why I want to make sure I don't have to manually monitor any setup. I searched for information about Xantrex portable power devices, and here's what I found out:

From donrowe.com about the XPower Powerpack 400 Plus (not the one I'm thinking of buying):

<blockquote>from your vehicle as you drive. By plugging the DC Charge Cable into your vehicle's cigarette lighter socket, XPower 400 can be recharged while you drive in only 1 to 3 hours. There is no need to wait for available utility power. Vehicle voltage regulators will ensure that XPower is not overcharged.
</blockquote>

From sundancesolar.com about the 600HD (the one I'm thinking of buying):

<blockquote>The Xantrex PowerPack 600 HD hasa hard protective plastic frame, three ground AC outlets to power several items at once, a digital display showing AC output and battery capacity, microprocessor controlled charing to prevent overcharge, am/fm radio, cable for jumpstarting any vehicle, recharges via home ac outlet/auto/solar panel, 250A replaceable fuse,digital alarm clock, light. Includes the AC charger and DC charging cables.
</blockquote>

The words "microprocessor controlled" are what I'm looking for. Good. I might try to confirm that with Xantrex directly to save myself some hassle.

**Purchase Made**

I went ahead and bought the solar panel and the Xantrex portable power unit. These items will be useable even if the solar powered plug doesn't work out exactly as planned.

Here's what I ultimately bought:

<table align="center">
<tbody>
<tr>
<td>
<iframe src="http://rcm.amazon.com/e/cm?t=inforbanki-20&amp;o=1&amp;p=8&amp;l=as1&amp;asins=B000E6LEIC&amp;fc1=000000&amp;IS2=1&amp;lt1=_blank&amp;lc1=0000FF&amp;bc1=000000&amp;bg1=FFFFFF&amp;f=ifr" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0">
</iframe>
</td>
<td>
<iframe src="http://rcm.amazon.com/e/cm?t=inforbanki-20&amp;o=1&amp;p=8&amp;l=as1&amp;asins=B0006JO0X8&amp;fc1=000000&amp;IS2=1&amp;lt1=_blank&amp;lc1=0000FF&amp;bc1=000000&amp;bg1=FFFFFF&amp;f=ifr" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0">
</iframe>
</td>
</tr>
</tbody>
</table>

#### UPDATE May 24, 2007:

The supplies arrived from Amazon.com today. I'm impressed with everything so far. The only concern I have so far is that the "charge indicator" is not turning on when I plug the Xantrex portable power device into the AC charger. I'll give it the benefit of the doubt and let it charge overnight as they recommend (though I did read the manual and it didn't say anything about the green indicator not turning on right away. It does say that if the green light doesn't turn on, check the AC power, which I did and its good, as well as replace the charger, but I tested the charger and its working).

I just checked their website and they have a pretty good troubleshooting guide. Although they stop short of saying its OK that the charging light is not on yet, they do say this:

<blockquote>
DC voltage good. Battery charging?

Let the Powerpack charge with the AC charger for a minimum of 48 hours. Unplug the charger, let it rest for about 15 minutes then press the Battery Status button.
</blockquote>

#### UPDATE May 29, 2007:

After charging for 48 hours, leaving the power pack unplugged for 15 minutes, the charge indicator is still not working. I've emailed Amazon.com to request a replacement:

<blockquote>After following exact instructions contained in user manual(charge for at least 48 hours, unplug from charger for 15 minutes), item will not display "charge" indicator, nor charge amount.
</blockquote>

#### UPDATE May 31, 2007:

I'm happy to report that Amazon.com replaced the power pack at no charge, and that the new one that arrived today works! When I plug it in, the "charging" light starts to blink. So now I'm going to let it charge for 48 hours, then try out the slug!

#### UPDATE September 29, 2007:

<a href="http://www.docunext.com/2007/08/solar-powered-dectop/">Solar Powered Dectop</a>

#### References:

<a href="http://www.ecobusinesslinks.com/solar_panels.htm" rel="nofollow">http://www.ecobusinesslinks.com/solar_panels.htm
</a>

