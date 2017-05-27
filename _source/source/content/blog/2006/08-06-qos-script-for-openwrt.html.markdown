---
title: QOS Script for OpenWRT
date: 2006-08-06
tags: networking,scripts
---
I have a 768 / 128 kbps naked (no telephone service), and this is the QOS (quality of service) script I use on my OpenWRT wireless router. I use the g729 codec for voice, which uses only 24k of bandwidth. Theorhetically this should be no problem for this low speed DSL. This, along with the free (only $2.95 for FCC fees) voip service from Galaxy Voice, is by far the cheapest ISP and voice service available.

<pre class="sh_sh">#!/bin/ash
TC=/usr/sbin/tc
DEV=vlan1
DOWNLINK=732
RATE=104
CEIL=100
CEIL1=88
CEIL2=8
CEIL3=4
insmod /lib/modules/2.4.30/sch_tbf.o
insmod /lib/modules/2.4.30/sch_htb.o
insmod /lib/modules/2.4.30/sch_prio.o
insmod /lib/modules/2.4.30/sch_ingress.o
insmod /lib/modules/2.4.30/sch_sfq.o
insmod /lib/modules/2.4.30/cls_u32.o# low priority OUTGOING traffic - you can leave this blank if you want# low priority source netmasks
NOPRIOHOSTSRC=# low priority destination netmasks
NOPRIOHOSTDST=# low priority source ports
NOPRIOPORTSRC="21 22 80 137 138 139 443 548"# low priority destination ports
NOPRIOPORTDST="21 22 80 137 138 139 443 548"
if [ "$1" = "status" ]
then
       $TC -s qdisc ls dev $DEV
       $TC -s class ls dev $DEV
       exit
fi
# clean existing down- and uplink qdiscs, hide errors
$TC qdisc del dev $DEV root    2> /dev/null > /dev/null$TC qdisc del dev $DEV ingress 2> /dev/null > /dev/null
if [ "$1" = "stop" ]
then exit
fi
#### uplink - doubled latency to 60 to try and reduce jitter
$TC qdisc add dev ${DEV} root handle 1: tbf rate ${RATE}kbit burst 4k latency 60ms$TC qdisc add dev ${DEV} parent 1: handle 10: prio bands 2 priomap 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
$TC qdisc add dev ${DEV} parent 10:1 handle 100: pfifo
$TC qdisc add dev ${DEV} parent 10:2 handle 200: htb
$TC class add dev ${DEV} parent 200: classid 200:1 htb rate ${CEIL}kbit burst 3k$TC class add dev ${DEV} parent 200:1 classid 200:10 htb \
  rate ${CEIL1}kbit ceil ${CEIL}kbit burst 2k prio 1
$TC class add dev ${DEV} parent 200:1 classid 200:20 htb \
  rate ${CEIL2}kbit ceil ${CEIL}kbit burst 2k prio 2
$TC class add dev ${DEV} parent 200:1 classid 200:30 htb \
  rate ${CEIL3}kbit ceil ${CEIL}kbit burst 2k prio 3
$TC qdisc add dev ${DEV} parent 200:10 handle 2001: sfq perturb 10                                $TC qdisc add dev ${DEV} parent 200:20 handle 2002: sfq perturb 10                                $TC qdisc add dev ${DEV} parent 200:30 handle 2003: sfq perturb 10                                # VoIP traffic always get first in line (Asterisk set to tag them with TOS 0xb8)                  $TC filter add dev ${DEV} parent 10:0 prio 3 protocol ip u32 \
  match ip tos 0xb8 0xff \                                                                          flowid 10:1
#                                                                                                 # All non VoIP traffic on band 2                                                                  $TC filter add dev ${DEV} parent 10:0 prio 5 protocol ip u32 \
  match ip src 0.0.0.0/0 \                                                                          flowid 10:2
# TOS Minimum Delay                                                                               $TC filter add dev ${DEV} parent 200: protocol ip prio 10 u32 \                     match ip tos 0x10 0xff \
  flowid 200:10
# ICMP (ip protocol 1) in the interactive class                                                   $TC filter add dev ${DEV} parent 200: protocol ip prio 11 u32 \                                           match ip protocol 1 0xff flowid 200:10
# To speed up downloads while an upload is going on, put ACK packets in                           # the interactive class:                                                                          $TC filter add dev ${DEV} parent 200: protocol ip prio 12 u32 \
  match ip protocol 6 0xff \
  match u8 0x05 0x0f at 0 \
  match u16 0x0000 0xffc0 at 2 \
  match u8 0x10 0xff at 33 \
  flowid 200:10
# some traffic however suffers a worse fate
for a in $NOPRIOPORTDST
do
  $TC filter add dev $DEV parent 200: protocol ip prio 20 u32 \
  match ip dport $a 0xffff \
  flowid 200:30
done
for a in $NOPRIOPORTSRC
do
  $TC filter add dev $DEV parent 200: protocol ip prio 21 u32 \
  match ip sport $a 0xffff \
  flowid 200:30
done
for a in $NOPRIOHOSTSRC
do
  $TC filter add dev $DEV parent 200: protocol ip prio 22 u32 \
  match ip src $a \
  flowid 200:30
done
for a in $NOPRIOHOSTDST
do
  $TC filter add dev $DEV parent 200: protocol ip prio 23 u32 \
  match ip dst $a \
  flowid 200:30
done                                                                                              # rest is 'non-interactive' ie 'bulk' and ends up in the default queue
$TC filter add dev ${DEV} parent 200: protocol ip prio 30 u32 \
  match ip src 0.0.0.0/0 \
  flowid 200:20
###### downlink #########                                                                 # slow downloads down to somewhat less than the real speed  to prevent          # queuing at our ISP. Tune to see how high you can set it.                        # ISPs tend to have *huge* queues to make sure big downloads are fast                             #                                                                                                 # attach ingress policer:                                                                         $TC qdisc add dev $DEV handle ffff: ingress                                       # filter *everything* to it (0.0.0.0/0), drop everything that's                                   # coming in too fast
$TC filter add dev $DEV parent ffff: protocol ip prio 50 u32 match ip src \
  0.0.0.0/0 police rate ${DOWNLINK}kbit burst 10k drop flowid :1
</pre>

