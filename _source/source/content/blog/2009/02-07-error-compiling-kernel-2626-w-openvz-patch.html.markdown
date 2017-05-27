---
title: Compile Error 2.6.26 w OpenVZ patch fix 
date: 2009-02-07
tags: openvz,virtualization
---
<pre>  CC      arch/x86/kernel/process_32.o  CC      arch/x86/kernel/signal_32.o  AS      arch/x86/kernel/entry_32.o  CC      arch/x86/kernel/traps_32.o
arch/x86/kernel/traps_32.c:827: error: expected '=', ',', ';', 'asm' or '__attribute__' before 'nmi_ipi_callback'
arch/x86/kernel/traps_32.c: In function 'do_nmi':
arch/x86/kernel/traps_32.c:882: error: implicit declaration of function 'nmi_ipi_callback'
arch/x86/kernel/traps_32.c: At top level:
arch/x86/kernel/traps_32.c:889: error: expected ')' before 'callback'
arch/x86/kernel/traps_32.c: In function 'unset_nmi_ipi_callback':
arch/x86/kernel/traps_32.c:896: error: 'nmi_ipi_callback' undeclared (first use in this function)
arch/x86/kernel/traps_32.c:896: error: (Each undeclared identifier is reported only once
arch/x86/kernel/traps_32.c:896: error: for each function it appears in.)
make[1]: *** [arch/x86/kernel/traps_32.o] Error 1
make: *** [arch/x86/kernel] Error 2</pre>

Hmmmm. I read up on "do_nmi" and it appeared to have to do with multiple cpus, so I enabled Symmetric multi-processing support, tried again, and it appears to work now.

