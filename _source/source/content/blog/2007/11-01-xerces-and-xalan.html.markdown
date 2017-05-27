---
title: Xerces and Xalan
date: 2007-11-01
tags: xml
---

I'm trying to setup ApacheModuleXslt on debian.

<pre class="sh_sh">sudo apt-get install xalan
cd /usr/src/
sudo apt-get source xalan
sudo apt-get source libxerces27
export XERCESCROOT="/usr/src/xerces27/c"
export XALANCROOT="/usr/src/xalan-1.10/c"./runConfigure -p linux -c gcc -x g++
make</pre>

Well I got that to work, but not the ApacheModuleXSLT. It looks for apxs instead of apxs2. I changed it, but it fails... then I read <a href="http://www.ohloh.net/projects/3478?p=Xalan+%28C%2B%2B%29">this</a>. Hmm.

