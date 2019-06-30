---
title: Powertop Details irqbalance and dynticks
date: 2009-04-02
---
I'm trying to get my laptop to be cooler. I've just run powertop and identified some processes which are keeping the CPU in an active state:

<pre>  41.9% ( 65.7)       <interrupt> : uhci_hcd:usb6, wifi0   17.9% ( 28.1)              java : futex_wait (hrtimer_wakeup)   13.3% ( 20.9)       firefox-bin : futex_wait (hrtimer_wakeup)   11.8% ( 18.5)       <interrupt> : extra timer interrupt </pre>

Just out of curiosity, I've started up irqbalance to see if it would have any effect. Not so far, but I rmmod'ed uhci_hcd to calm that down a bit. If I need it, I'll modprobe it.

I'm downloading the source for 2.6.26-1-openvz-amd64 to see if it has dynticks enabled. I might recompile it with kernel irq balancing disabled.

UPDATE: It does have dynticks enabled.
