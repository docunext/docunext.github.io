---
title: Aufs OpenVZ Squashfs Oops 
date: 2009-02-07
tags: openvz,squashfs
---
<pre class="sh_sh">
Message from syslogd@exp-248-gl at Feb  8 01:29:58 ... kernel:[  271.242739] invalid opcode: 0000 [#1] SMP
Message from syslogd@exp-248-gl at Feb  8 01:29:58 ... kernel:[  271.244168] Process ls (pid: 1372, veid: 0, ti=c6fac000 task=c6f159e0 task.ti=c6fac000)
Message from syslogd@exp-248-gl at Feb  8 01:29:58 ... kernel:[  271.244168] Stack: c3304200 c892e7d6 c77ec000 c3304200 c6f765c0 c77a3748 c6f76540 c6ffe9a0
Message from syslogd@exp-248-gl at Feb  8 01:29:58 ... kernel:[  271.244168]        00000000 00000037 c017afd2 c6f76540 c77a3a18 c3301fe8 c3301000 c02845c0
Message from syslogd@exp-248-gl at Feb  8 01:29:58 ... kernel:[  271.244168]        c6ffe9a0 c6f76570 c017d503 000003ee b7faf012 c6f0eae0 c6ffe9c0 00000012
Message from syslogd@exp-248-gl at Feb  8 01:29:58 ... kernel:[  271.244168]  Call Trace:
Message from syslogd@exp-248-gl at Feb  8 01:29:58 ... kernel:[  271.244168]  [&lt;c017afd2>] &lt;0> [&lt;c017d503>] &lt;0> [&lt;c017d365>] &lt;0> [&lt;c0166836>] &lt;0> [&lt;c0166c4e>] &lt;0> [&lt;c0102b6e>] &lt;0> =======================
Message from syslogd@exp-248-gl at Feb  8 01:29:58 ... kernel:[  271.244168] Code: e8 1b 5f 87 f7 85 c0 0f 8e 53 02 00 00 8b 46 0c b9 0d 00 00 00 ba 00 e7 92 c8 83 e8 0d 89 46 0c 03 06 e8 33 eb 8a f7 85 c0 74 10 &lt;0f> 0b eb fe ba 0e e7 92 c8 89 f0 e8 0b 56 87 f7 f7 c5 04 00 00
Message from syslogd@exp-248-gl at Feb  8 01:29:58 ... kernel:[  271.244168] EIP: [&lt;c89076e7>]  SS:ESP 0068:c6facf00</pre>

<pre class="sh_sh">
[  271.241771] ------------
[ cut here ]------------
[  271.242272] Kernel BUG at c89076e7
[verbose debug info unavailable]
[  271.242739] invalid opcode: 0000
[#1] SMP
[  271.243193] Modules linked in: vzethdev vznetdev simfs vzrst vzcpt tun vzdquota vzmon vzdev xt_tcpudp xt_length ipt_ttl xt_tcpmss xt_TCPMSS iptable_mangle iptable_filter xt_multiport xt_limit xt_dscp ipt_REJECT ip_tables x_tables ipv6 ib_iser rdma_cm ib_cm iw_cm ib_sa ib_mad ib_core ib_addr iscsi_tcp libiscsi scsi_transport_iscsi serio_raw i2c_piix4 i2c_core sg nfs nfs_acl lockd sunrpc ehci_hcd usb_storage usbcore via_rhine 8139cp aufs exportfs squashfs zlib_inflate mii loop ext3 ext2 mbcache ide_disk ide_generic ide_pci_generic ide_core ata_generic ata_piix libata dock sd_mod scsi_mod jbd
[  271.244168]
[  271.244168] Pid: 1372, comm: ls Not tainted (2.6.26.8 #1 chekhov)
[  271.244168] EIP: 0060:
[&lt;c89076e7>] EFLAGS: 00000286 CPU: 0
[  271.244168] EAX: ffffffdb EBX: c30cd3b0 ECX: c892e700 EDX: ffffffdb
[  271.244168] ESI: c6ffe9a0 EDI: c30cd3a0 EBP: 00000991 ESP: c6facf00
[  271.244168]  DS: 007b ES: 007b FS: 00d8 GS: 0033 SS: 0068
[  271.244168] Process ls (pid: 1372, veid: 0, ti=c6fac000 task=c6f159e0 task.ti=c6fac000)
[  271.244168] Stack: c3304200 c892e7d6 c77ec000 c3304200 c6f765c0 c77a3748 c6f76540 c6ffe9a0
[  271.244168]        00000000 00000037 c017afd2 c6f76540 c77a3a18 c3301fe8 c3301000 c02845c0
[  271.244168]        c6ffe9a0 c6f76570 c017d503 000003ee b7faf012 c6f0eae0 c6ffe9c0 00000012
[  271.244168]  Call Trace:
[  271.244168]
[&lt;c017afd2>] &lt;0>
[&lt;c017d503>] &lt;0>
[&lt;c017d365>] &lt;0>
[&lt;c0166836>] &lt;0>
[&lt;c0166c4e>] &lt;0>
[&lt;c0102b6e>] &lt;0> =======================
[  271.244168] Code: e8 1b 5f 87 f7 85 c0 0f 8e 53 02 00 00 8b 46 0c b9 0d 00 00 00 ba 00 e7 92 c8 83 e8 0d 89 46 0c 03 06 e8 33 eb 8a f7 85 c0 74 10 &lt;0f> 0b eb fe ba 0e e7 92 c8 89 f0 e8 0b 56 87 f7 f7 c5 04 00 00
[  271.244168] EIP:
[&lt;c89076e7>]  SS:ESP 0068:c6facf00
[  271.264362] ---
[ end trace 160d0d87cc2660c4 ]---
</pre>

