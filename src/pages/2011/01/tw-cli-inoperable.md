---
title: tw cli INOPERABLE
date: 2011-01-08
tags: 3ware,raid
---
It seemed like my RAID controller was running a little slow, so I was very concerned when I noticed an "INOPERABLE" message next to one of the units:

<pre class="sh_sh">
//pro-12-gl> /c4/u1 show status
/c4/u1 status = INOPERABLE
//pro-12-gl> /c4 show
Unit  UnitType  Status         %Cmpl  Stripe  Size(GB)  Cache  AVerify  IgnECC
------------------------------------------------------------------------------
u0    RAID-5    OK             -      64K     1117.52   ON     OFF      OFF
u1    RAID-5    INOPERABLE     -      64K     1117.52   OFF    OFF      OFF
Port   Status           Unit   Size        Blocks        Serial
---------------------------------------------------------------
p0     OK               u0     186.31 GB   390721968     5ND0V5PF
p1     OK               u0     186.31 GB   390721968     5ND0V5NX
p2     OK               u1     186.31 GB   390721968     5ND0VJLN
p3     OK               u0     186.31 GB   390721968     5ND0X7S6
p4     OK               u0     186.31 GB   390721968     5ND0XCVK
p5     OK               u0     186.31 GB   390721968     5ND0WGL6
p6     OK               u0     186.31 GB   390721968     5ND0Y5E0
p7     OK               u0     186.31 GB   390721968     5ND0X93L
</pre>

Turns out it was OK, there was some sort of confusion with the firmware. I deleted the unit and recreated it.

<pre class="sh_sh">
//pro-12-gl> maint deleteunit c4 u1
Deleting unit c4/u1 ...Done.
//pro-12-gl> /c4 show
Unit  UnitType  Status         %Cmpl  Stripe  Size(GB)  Cache  AVerify  IgnECC
------------------------------------------------------------------------------
u0    RAID-5    OK             -      64K     1117.52   ON     OFF      OFF
Port   Status           Unit   Size        Blocks        Serial
---------------------------------------------------------------
p0     OK               u0     186.31 GB   390721968     5ND0V5PF
p1     OK               u0     186.31 GB   390721968     5ND0V5NX
p2     OK               -      186.31 GB   390721968     5ND0VJLN
p3     OK               u0     186.31 GB   390721968     5ND0X7S6
p4     OK               u0     186.31 GB   390721968     5ND0XCVK
p5     OK               u0     186.31 GB   390721968     5ND0WGL6
p6     OK               u0     186.31 GB   390721968     5ND0Y5E0
p7     OK               u0     186.31 GB   390721968     5ND0X93L
//pro-12-gl> maint createunit c4 p2 rspare
Creating new unit on controller /c4 ...  Done. The new unit is /c4/u1.
//pro-12-gl> /c4 show
Unit  UnitType  Status         %Cmpl  Stripe  Size(GB)  Cache  AVerify  IgnECC
------------------------------------------------------------------------------
u0    RAID-5    OK             -      64K     1117.52   ON     OFF      OFF
u1    SPARE     OK             -      -       186.302   -      OFF      -
Port   Status           Unit   Size        Blocks        Serial
---------------------------------------------------------------
p0     OK               u0     186.31 GB   390721968     5ND0V5PF
p1     OK               u0     186.31 GB   390721968     5ND0V5NX
p2     OK               u1     186.31 GB   390721968     5ND0VJLN
p3     OK               u0     186.31 GB   390721968     5ND0X7S6
p4     OK               u0     186.31 GB   390721968     5ND0XCVK
p5     OK               u0     186.31 GB   390721968     5ND0WGL6
p6     OK               u0     186.31 GB   390721968     5ND0Y5E0
p7     OK               u0     186.31 GB   390721968     5ND0X93L
</pre>

