---
title: More Wake Up Requirements
date: 2007-08-16
tags: none
author: Albert Lash
---
I'm researching the D945GCCR intel motherboard, and the manual says this: <blockquote>For LAN wake capabilities, the +5 V standby line for the power supply must be capable of providing adequate +5 V standby current.  Failure to provide adequate standby current when implementing LAN wake capabilities can damage the power supply. </blockquote>

I just did a search on this subject: "+5 V standby current power supply", but actually a better search term is "5VSB":

<a href="http://www.duxcw.com/faq/ps/ps1.htm">ATX Power Supply Power-On Switch</a> - this page is actually very helpful! It explains how the power on switch works.

Finally found the wikipedia page on power supplies, which had these helpful tables:

<table style="border-width: 1px; border-style: solid; border-color: #AAA;"><caption>24-pin ATX power supply connector
(20-pin omits the last 4: 11, 12, 23 and 24)</caption><tr><th>Color</th><th>Signal</th><th>Pin</th><th>Pin</th><th>Signal</th><th>Color</th></tr><tr><td style="background:orange; color:black"></td><td align="right">+3.3 V</td><td align="center">1</td><td align="center">13</td><td>+3.3 V sense</td><td style="background:sienna"></td></tr><tr><td style="background:orange; color:black"></td><td align="right">+3.3 V</td><td align="center">2</td><td align="center">14</td><td>-12 V</td><td style="background:blue"></td></tr><tr><td style="background:black; color:white"></td><td align="right">Ground</td><td align="center">3</td><td align="center">15</td><td>Ground</td><td style="background:black"></td></tr><tr><td style="background:red; color:black"></td><td align="right">+5 V</td><td align="center">4</td><td align="center">16</td><td>Power on</td><td style="background:green"></td></tr><tr><td style="background:black; color:white"></td><td align="right">Ground</td><td align="center">5</td><td align="center">17</td><td>Ground</td><td style="background:black"></td></tr><tr><td style="background:red; color:black"></td><td align="right">+5 V</td><td align="center">6</td><td align="center">18</td><td>Ground</td><td style="background:black"></td></tr><tr><td style="background:black; color:white"></td><td align="right">Ground</td><td align="center">7</td><td align="center">19</td><td>Ground</td><td style="background:black"></td></tr><tr><td style="background:grey; color:black"></td><td align="right">Power good</td><td align="center">8</td><td align="center">20</td><td>-5 V</td><td style="background:white"></td></tr><tr><td style="background:purple; color:black"></td><td align="right">+5 V standby</td><td align="center">9</td><td align="center">21</td><td>+5 V</td><td style="background:red"></td></tr><tr><td style="background:yellow; color:black"></td><td align="right">+12 V</td><td align="center">10</td><td align="center">22</td><td>+5 V</td><td style="background:red"></td></tr><tr><td style="background:yellow; color:black"></td><td align="right">+12 V</td><td align="center">11</td><td align="center">23</td><td>+5 V</td><td style="background:red"></td></tr><tr><td style="background:orange; color:black"></td><td align="right">+3.3 V</td><td align="center">12</td><td align="center">24</td><td>Ground</td><td style="background:black"></td></tr></table>

Also found this interesting but unrelated page:

<a href="http://www.wikihow.com/Convert-a-Computer-ATX-Power-Supply-to-a-Lab-Power-Supply">How to Convert a Computer ATX Power Supply to a Lab Power Supply</a>

