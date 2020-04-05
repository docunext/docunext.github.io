---
title: Kernel Oops
date: 2009-07-15
tags: none
author: Albert Lash
---
Just keeping this for reference:

 <pre>mount -t aufs -o dirs=/rw:/ro=ro aufs /opt
 dev-48-gl kernel: [29940.627517] Oops: 0000 [#1] SMP-
 dev-48-gl kernel: [29940.627983] Process aufsd (pid: 11122, ti=f0aa4000 task=f086aca0 task.ti=f0aa4000)
 dev-48-gl kernel: [29940.628006] Stack: 00000000 f09f4cc0 f0ad0aa8 f0ad0ac0 00000000 c01b934d c016f8ff 01000000-
 dev-48-gl kernel: [29940.628019]        00000000 f0aa5e20 00000000 f0ad0b08 01000000 f0ad0bb4 001200d2 00000000-
 dev-48-gl kernel: [29940.628019]        00000000 00000000 00000000 00001000 00000000 00000000 00001000 c0157504-
 dev-48-gl kernel: [29940.628019] Call Trace:
 dev-48-gl kernel: [29940.628019]  [<c01b934d>] security_vm_enough_memory+0x17/0x18
 dev-48-gl kernel: [29940.628019]  [<c016f8ff>] shmem_getpage+0x3e1/0x55e
 dev-48-gl kernel: [29940.628019]  [<c0157504>] generic_file_buffered_write+0xef/0x553
 dev-48-gl kernel: [29940.628019]  [<c01cbc4a>] cap_inode_need_killpriv+0x25/0x35
 dev-48-gl kernel: [29940.628019]  [<c01b94a8>] security_inode_need_killpriv+0xc/0xd
 dev-48-gl kernel: [29940.628019]  [<c01564e9>] remove_suid+0x15/0x44
 dev-48-gl kernel: [29940.628019]  [<c0157dd0>] __generic_file_aio_write_nolock+0x468/0x4cb
 dev-48-gl kernel: [29940.628019]  [<c0157e85>] generic_file_aio_write+0x52/0xa9
 dev-48-gl kernel: [29940.628019]  [<c017410a>] do_sync_write+0xbf/0x100
 dev-48-gl kernel: [29940.628019]  [<c01318dc>] autoremove_wake_function+0x0/0x2d
 dev-48-gl kernel: [29940.628019]  [<c0134356>] hrtimer_start+0xf7/0x110
 dev-48-gl kernel: [29940.628019]  [<c011d3d2>] hrtick_set+0x8f/0xd8
 dev-48-gl kernel: [29940.628019]  [<c017404b>] do_sync_write+0x0/0x100
 dev-48-gl kernel: [29940.628019]  [<f8b4331d>] do_xino_fwrite+0x29/0x47 [aufs]
 dev-48-gl kernel: [29940.628019]  [<c017404b>] do_sync_write+0x0/0x100
 dev-48-gl kernel: [29940.628019]  [<f8b45df2>] wkq_func+0x0/0x4a [aufs]
 dev-48-gl kernel: [29940.628019]  [<f8b43355>] call_do_xino_fwrite+0x1a/0x21 [aufs]
 dev-48-gl kernel: [29940.628019]  [<f8b45dfb>] wkq_func+0x9/0x4a [aufs]
 dev-48-gl kernel: [29940.628019]  [<c012ef4e>] run_workqueue+0x74/0xf2
 dev-48-gl kernel: [29940.628019]  [<c012f629>] worker_thread+0x0/0xbd
 dev-48-gl kernel: [29940.628019]  [<c012f6dc>] worker_thread+0xb3/0xbd
 dev-48-gl kernel: [29940.628019]  [<c01318dc>] autoremove_wake_function+0x0/0x2d
 dev-48-gl kernel: [29940.628019]  [<c013181b>] kthread+0x38/0x5d
 dev-48-gl kernel: [29940.628019]  [<c01317e3>] kthread+0x0/0x5d
 dev-48-gl kernel: [29940.628019]  [<c01044f3>] kernel_thread_helper+0x7/0x10
 dev-48-gl kernel: [29940.628019]  =======================
 dev-48-gl kernel: [29940.628019] Code: 00 ba 64 00 00 00 89 d5 31 d2 29 c3 0f af 1d 20 5f 35 c0 89 d8 f7 f5 85 ff 89 c1 75 05 c1 e8 05 29 c1 8b 14 24 03 0d 24 05 41 c0 &lt;8b&gt; 42 64
 dev-48-gl kernel: [29940.628019] EIP: [<c0167087>] __vm_enough_memory+0xb3/0xdb SS:ESP 0068:f0aa5d4c
</c0167087></c01044f3></c01317e3></c013181b></c01318dc></c012f6dc></c012f629></c012ef4e></f8b45dfb></f8b43355></f8b45df2></c017404b></f8b4331d></c017404b></c011d3d2></c0134356></c01318dc></c017410a></c0157e85></c0157dd0></c01564e9></c01b94a8></c01cbc4a></c0157504></c016f8ff></c01b934d></pre>
