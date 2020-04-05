---
title: Tickless Kernel
date: 2007-10-04
---
C1: type[C1] promotion[C2] demotion[--] latency[000] usage[00006830]*C2: type[C2] promotion[C3] demotion[C1] latency[080] usage[00015316]

C3: type[C3] promotion[--] demotion[C2] latency[800] usage[00000014]</code></pre>

There is hardly anything running:

<pre><code>  PID TTY          TIME CMD    1 ?        00:00:28 init    2 ?        00:00:00 kthreadd    3 ?        00:00:00 ksoftirqd/0    4 ?        00:00:00 watchdog/0    5 ?        00:00:00 events/0    6 ?        00:00:00 khelper   22 ?        00:00:00 kblockd/0   23 ?        00:00:00 kacpid   24 ?        00:00:00 kacpi_notify  103 ?        00:00:00 kseriod  120 ?        00:00:00 pdflush  121 ?        00:00:00 pdflush  122 ?        00:00:00 kswapd0  123 ?        00:00:00 aio/0 1578 ?        00:00:00 ksuspend_usbd 1579 ?        00:00:00 khubd 1805 ?        00:00:00 scsi_eh_0 1806 ?        00:00:00 usb-storage 3408 ?        00:00:00 dhclient3 3650 ?        00:00:00 klogd 3696 ?        00:00:00 sshd 3844 tty1     00:00:00 getty 3942 ?        00:00:00 sshd 3946 ?        00:00:00 sshd 3947 pts/0    00:00:00 bash 3960 pts/0    00:00:00 ps</code></pre>

And very few modules:

<pre><code>lsmod

Module                  Size  Used byaf_packet              21896  2 loop                   18052  0 ext2                   64392  1 mbcache                 8452  1 ext2sd_mod                 29328  3 usb_storage            71872  2 libusual               17552  1 usb_storageide_generic             1408  0 [permanent]scsi_mod              146828  2 sd_mod,usb_storageehci_hcd               34828  0 via_rhine              24328  0 mii                     5888  1 via_rhineuhci_hcd               25360  0 usbcore               135576  5 usb_storage,libusual,ehci_hcd,uhci_hcdvia82cxxx               9348  0 [permanent]generic                 5124  0 [permanent]processor              23596  0</code></pre>

This explains a lot:

<pre><code># dmesg | grep ACPI.*supports[   72.174255] ACPI: (supports S0 S5)[   95.480410] ACPI: Processor [CPU0] (supports 2 throttling states)</code></pre>
