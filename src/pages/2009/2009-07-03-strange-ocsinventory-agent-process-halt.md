---
title: Strange OCSInventory Agent Process Halt
comments:
  - author: Goneri
    email: goneri@rulezlan.org
    date: 09/06/2009 08:52:38 PM
    text: >
      Edit /etc/ocsinventory/modules.conf<br/><br/>and uncomment:<br/><br/>use Ocsinventory::Agent::Option::Download;<br/><br/>You should post on the forum instead:)
date: 2009-07-03
tags: debug
---
<!--
CLASS = 'sh_log'
PREFIX + CLASS + SUFFIX = '' + 'sh_log' + '.min.js'
                        = 'sh_log.min.js'
-->
I have no idea why this is happening on my laptop, but I found a lame-o workaround. When I would try and run ocsinventory-agent on my laptop, it would freeze, so I added the debug flag and noticed it was freezing here:

<pre class="sh_log">ocsinventory-agent --devlib --debug
[debug] Ocsinventory unified agent for UNIX and Linux1.0.1
[debug] Log system initialised (Stderr)
[debug] the --server passed doesn't have a protocle, assume http as default
[debug] Accountinfo file: /var/lib/ocsinventory-agent/http:__dev-4x.com_ocsinventory/ocsinv.adm
[debug] OCS Agent initialised
[debug] Calling handlers : `start_handler'
[debug] Compress::Zlib is avalaible.
[debug] sending XML
[debug] Calling handlers : `prolog_writers'
[debug] =BEGIN=SERVER RET======
[debug] $VAR1 = '<reply>
      <name>DOWNLOAD</name>
    <param frag_latency="10" period_latency="0" timeout="30" on="0" type="CONF" cycle_latency="60" period_length="10" />
    <response>SEND</response>
  <prolog_freq>24</prolog_freq></reply>';
[debug] =END=SERVER RET======
[debug] PROLOG_FREQ has not changed since last process[debug] Calling handlers : `prolog_reader'
[debug]  run func: `Ocsinventory::Agent::Option::Download::download_prolog_reader'
[debug] sending XML
[debug] Calling handlers : `inventory_handler'
[debug]  run func: `Ocsinventory::Agent::Option::Download::download_inventory_handler'
</pre>

I did an strace and noted that there was some sort of illegal seek going on, and an option to cancel or retry. I tried again without strace and simply pressed the "c" key whenever it halted. Finally the process went through to the end:

<pre class="sh_log">[debug] Ocsinventory::Agent::Backend::IpDiscover check function failed
[debug] Ocsinventory::Agent::Backend::OS::AIX check function failed
[debug] Ocsinventory::Agent::Backend::OS::BSD check function failed
[debug] Ocsinventory::Agent::Backend::OS::Generic::Ipmi check function failed
[debug] Ocsinventory::Agent::Backend::OS::Generic::Packaging::BSDpkg check function failed
[debug] Ocsinventory::Agent::Backend::OS::Generic::Packaging::Gentoo check function failed
[debug] Ocsinventory::Agent::Backend::OS::Generic::Screen check function failed
[debug] Ocsinventory::Agent::Backend::OS::Linux::Archs::PowerPC check function failed
[debug] Ocsinventory::Agent::Backend::OS::Linux::Distro::NonLSB::Fedora check function failed
[debug] Ocsinventory::Agent::Backend::OS::Linux::Distro::NonLSB::Gentoo check function failed
[debug] Ocsinventory::Agent::Backend::OS::Linux::Distro::NonLSB::Knoppix check function failed
[debug] Ocsinventory::Agent::Backend::OS::Linux::Distro::NonLSB::Mandrake check function failed
[debug] Ocsinventory::Agent::Backend::OS::Linux::Distro::NonLSB::Mandriva check function failed
[debug] Ocsinventory::Agent::Backend::OS::Linux::Distro::NonLSB::Redhat check function failed
[debug] Ocsinventory::Agent::Backend::OS::Linux::Distro::NonLSB::Slackware check function failed
[debug] Ocsinventory::Agent::Backend::OS::Linux::Distro::NonLSB::SuSE check function failed
[debug] Ocsinventory::Agent::Backend::OS::Linux::Distro::NonLSB::Trustix check function failed
[debug] Ocsinventory::Agent::Backend::OS::Linux::Distro::NonLSB::Ubuntu check function failed
[debug] Ocsinventory::Agent::Backend::OS::Linux::Storages::3ware check function failed
[debug] Ocsinventory::Agent::Backend::OS::Linux::Storages::Adaptec check function failed
[debug] Ocsinventory::Agent::Backend::OS::Linux::Storages::HP check function failed
[debug] Ocsinventory::Agent::Backend::OS::Linux::Storages::Lsilogic check function failed
[debug] Ocsinventory::Agent::Backend::OS::Linux::Storages::ServeRaid check function failed
[debug] Ocsinventory::Agent::Backend::OS::MacOS check function failed
[debug] Ocsinventory::Agent::Backend::OS::Solaris check function failed
[debug] Ocsinventory::Agent::Backend::OS::Linux::Distro::NonLSB disabled because of a 'runMeIfTheseChecksFailed' in 'Ocsinventory::Agent::Backend::OS::Linux::Distro::NonLSB'
[debug] Ocsinventory::Agent::Backend::OS::Linux::Distro::NonLSB::Debian disabled because of a 'runMeIfTheseChecksFailed' in 'Ocsinventory::Agent::Backend::OS::Linux::Distro::NonLSB'
[debug] Running Ocsinventory::Agent::Backend::AccessLog
[debug] Running Ocsinventory::Agent::Backend::DeviceID
[debug] Running Ocsinventory::Agent::Backend::OS::Generic
[debug] Running Ocsinventory::Agent::Backend::OS::Generic::Dmidecode
[debug] Running Ocsinventory::Agent::Backend::OS::Generic::Dmidecode::Bios
[debug] Running Ocsinventory::Agent::Backend::OS::Generic::Dmidecode::Memory
[debug] Running Ocsinventory::Agent::Backend::OS::Generic::Dmidecode::Ports
[debug] Running Ocsinventory::Agent::Backend::OS::Generic::Dmidecode::Slots
[debug] Running Ocsinventory::Agent::Backend::OS::Generic::Hostname
[debug] Running Ocsinventory::Agent::Backend::OS::Generic::Lspci
[debug] Running Ocsinventory::Agent::Backend::OS::Generic::Lspci::Controllers
[debug] Running Ocsinventory::Agent::Backend::OS::Generic::Lspci::Modems
[debug] Running Ocsinventory::Agent::Backend::OS::Generic::Lspci::Sounds
[debug] Running Ocsinventory::Agent::Backend::OS::Generic::Lspci::Videos
[debug] Running Ocsinventory::Agent::Backend::OS::Generic::Packaging
[debug] Ocsinventory::Agent::Backend::OS::Generic::Packaging has no run() function -&gt; ignored
[debug] Running Ocsinventory::Agent::Backend::OS::Generic::Packaging::Deb
[debug] Running Ocsinventory::Agent::Backend::OS::Generic::Packaging::RPM
[debug] Running Ocsinventory::Agent::Backend::OS::Generic::Users
[debug] Running Ocsinventory::Agent::Backend::OS::Linux
[debug] Running Ocsinventory::Agent::Backend::OS::Linux::CPU
[debug] Running Ocsinventory::Agent::Backend::OS::Linux::Controllers
[debug] Running Ocsinventory::Agent::Backend::OS::Linux::Distro::LSB
[debug] Running Ocsinventory::Agent::Backend::OS::Linux::Domains
[debug] Running Ocsinventory::Agent::Backend::OS::Linux::Drives
[debug] Running Ocsinventory::Agent::Backend::OS::Linux::Mem
[debug] Running Ocsinventory::Agent::Backend::OS::Linux::Network::IPv4
[debug] Running Ocsinventory::Agent::Backend::OS::Linux::Network::Networks
[debug] Running Ocsinventory::Agent::Backend::OS::Linux::Sounds
[debug] Running Ocsinventory::Agent::Backend::OS::Linux::Storages
[debug] Running Ocsinventory::Agent::Backend::OS::Linux::Sys
[debug] Running Ocsinventory::Agent::Backend::OS::Linux::Uptime
[debug] Section BIOS has changed since last inventory
[debug] Section VIDEOS has changed since last inventory
[debug] Section HARDWARE has changed since last inventory
[debug] Section SOUNDS has changed since last inventory
[debug] Section SOFTWARES has changed since last inventory
[debug] Section MEMORIES has changed since last inventory
[debug] Section CONTROLLERS has changed since last inventory
[debug] Section STORAGES has changed since last inventory
[debug] Section NETWORKS has changed since last inventory
[debug] Section DRIVES has changed since last inventory
[debug] Section SLOTS has changed since last inventory
[debug] =BEGIN=SERVER RET======
[debug] $VAR1 = '<reply>  <response>NO_ACCOUNT_UPDATE</response></reply>';
[debug] =END=SERVER RET======
[debug] Calling handlers : `end_handler'[debug]  run func: `Ocsinventory::Agent::Option::Download::download_end_handler'
</pre>

¥

