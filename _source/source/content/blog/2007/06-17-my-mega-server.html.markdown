---
title: My Mega Server
date: 2007-06-17
tags: amd,debian,gentoo,power,servers
---

Over a year ago, I built our heavy duty mega-server. It has dual AMD Opteron chips, runs Debian and has a 1 TB RAID storage system. This was before I knew about high availability clustering, so I wanted something industrial grade that would last a long time. Its worked out very well. I had originally installed Gentoo amd64, but then I switched to Debian x86. I should probably use 64 bit to take advantage of all that memory, but I'm more concerned with reliability for now.

The only problem I've had with it is that one of the processor fans died about 6 months ago. It really annoyed me that such a minor piece of hardware could bring down such a beast. When this happened, I looked around for redundant fans and was also surprised I couldn't find any.

Memory:

<pre class="sh_sh">free             total       used       free     shared    buffers     cached
Mem:      12234288    3802196    8432092          0     249708    1739184-/+ buffers/cache:    1813304   10420984
Swap:      8008392          0    8008392</pre>

CPU Info:

<pre class="sh_sh">cat /proc/cpuinfo
processor       : 0
vendor_id       : AuthenticAMD
cpu family      : 15
model           : 33
model name      : Dual Core AMD Opteron(tm) Processor 275
stepping        : 2
cpu MHz         : 2192.100
cache size      : 1024 KB
physical id     : 0
siblings        : 2
core id         : 0
cpu cores       : 2
fpu             : yes
fpu_exception   : yes
cpuid level     : 1
wp              : yes
flags           : fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt lm 3dnowext 3dnow pni lahf_lm cmp_legacy
bogomips        : 4388.70
TLB size        : 1024 4K pages
clflush size    : 64
cache_alignment : 64
address sizes   : 40 bits physical, 48 bits virtual
power management: ts fid vid ttp
processor       : 1
vendor_id       : AuthenticAMD
cpu family      : 15
model           : 33
model name      : Dual Core AMD Opteron(tm) Processor 275
stepping        : 2
cpu MHz         : 2192.100
cache size      : 1024 KB
physical id     : 0
siblings        : 2
core id         : 1
cpu cores       : 2
fpu             : yes
fpu_exception   : yes
cpuid level     : 1
wp              : yes
flags           : fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt lm 3dnowext 3dnow pni lahf_lm cmp_legacy
bogomips        : 4384.61
TLB size        : 1024 4K pages
clflush size    : 64
cache_alignment : 64
address sizes   : 40 bits physical, 48 bits virtual
power management: ts fid vid ttp
processor       : 2
vendor_id       : AuthenticAMD
cpu family      : 15
model           : 33
model name      : Dual Core AMD Opteron(tm) Processor 275
stepping        : 2
cpu MHz         : 2192.100
cache size      : 1024 KB
physical id     : 1
siblings        : 2
core id         : 0
cpu cores       : 2
fpu             : yes
fpu_exception   : yes
cpuid level     : 1
wp              : yes
flags           : fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt lm 3dnowext 3dnow pni lahf_lm cmp_legacy
bogomips        : 4384.43
TLB size        : 1024 4K pages
clflush size    : 64
cache_alignment : 64
address sizes   : 40 bits physical, 48 bits virtual
power management: ts fid vid ttp
processor       : 3
vendor_id       : AuthenticAMD
cpu family      : 15
model           : 33
model name      : Dual Core AMD Opteron(tm) Processor 275
stepping        : 2
cpu MHz         : 2192.100
cache size      : 1024 KB
physical id     : 1
siblings        : 2
core id         : 1
cpu cores       : 2
fpu             : yes
fpu_exception   : yes
cpuid level     : 1
wp              : yes
flags           : fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt lm 3dnowext 3dnow pni lahf_lm cmp_legacy
bogomips        : 4384.58
TLB size        : 1024 4K pages
clflush size    : 64
cache_alignment : 64
address sizes   : 40 bits physical, 48 bits virtual
power management: ts fid vid ttp</pre>

#### Modules:

<pre class="sh_sh">
Module                  Size  Used by
ipv6                  294656  32
sch_tbf                11264  1
nf_conntrack_ipv4      24848  5
xt_limit                7808  1
xt_tcpudp               8064  781
xt_state                7168  5
nf_conntrack           73564  2 nf_conntrack_ipv4,xt_state
nfnetlink              11976  2 nf_conntrack_ipv4,nf_conntrack
iptable_filter          7808  1
ip_tables              24552  1 iptable_filter
x_tables               25224  4 xt_limit,xt_tcpudp,xt_state,ip_tables
ext2                   70544  1
dm_snapshot            21448  0
dm_mirror              25920  0
dm_mod                 65168  2 dm_snapshot,dm_mirror
w83627hf               33040  0
eeprom                 12688  0
lm85                   39588  0
hwmon_vid               7424  2 w83627hf,lm85
i2c_isa                10880  1 w83627hf
ide_generic             5760  0 [permanent]
ide_disk               20992  0
amd_rng                 7688  0
shpchp                 38684  0
i2c_amd8111            10752  0
i2c_amd756             12036  0
psmouse                44432  0
k8temp                 10752  0
pci_hotplug            37636  1 shpchp
serio_raw              12036  0
i2c_core               28544  6 w83627hf,eeprom,lm85,i2c_isa,i2c_amd8111,i2c_amd756
evdev                  15488  0
pcspkr                  7936  0
ext3                  137360  4
jbd                    68336  1 ext3
mbcache                14216  2 ext2,ext3
ide_cd                 45344  0
cdrom                  40360  1 ide_cd
ata_generic            13572  0
generic                10500  0 [permanent]
sd_mod                 26240  7
sata_sil               18056  0
e100                   41488  0
3w_9xxx                39172  6
libata                116000  2 ata_generic,sata_sil
scsi_mod              160824  3 sd_mod,3w_9xxx,libata
mii                    10368  1 e100
floppy                 67112  0
ohci_hcd               25092  0
tg3                   111748  0
amd74xx                19888  0 [permanent]
ide_core              149376  5 ide_generic,ide_disk,ide_cd,generic,amd74xx
thermal                20112  0
processor              39144  1 thermal
fan                     9864  0 </pre>

