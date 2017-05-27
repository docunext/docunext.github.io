---
title: Host key verification failed.
date: 2010-06-19
tags: ssh
---
This error was greeting me when I'd try to ssh. Increasing the verbosity sheds some light:

<pre class="sh_sh">
debug1: SSH2_MSG_KEX_DH_GEX_REQUEST(1024<1024<8192) sent
debug1: expecting SSH2_MSG_KEX_DH_GEX_GROUP
debug2: dh_gen_key: priv key bits set: 128/256
debug2: bits set: 491/1024
debug1: SSH2_MSG_KEX_DH_GEX_INIT sent
debug1: expecting SSH2_MSG_KEX_DH_GEX_REPLY
debug2: no key of type 0 for host dev-48-gl
debug2: no key of type 2 for host dev-48-gl
debug1: read_passphrase: can't open /dev/tty: Permission denied
Host key verification failed.
</pre>

I did this as root:

<pre class="sh_sh">
chmod a+rw /dev/tty
</pre>

Which helped a little, but now I'm hanging here:

<pre class="sh_sh">
debug1: SSH2_MSG_KEX_DH_GEX_REQUEST(1024<1024<8192) sent
debug1: expecting SSH2_MSG_KEX_DH_GEX_GROUP
debug2: dh_gen_key: priv key bits set: 128/256
debug2: bits set: 512/1024
debug1: SSH2_MSG_KEX_DH_GEX_INIT sent
debug1: expecting SSH2_MSG_KEX_DH_GEX_REPLY
debug2: no key of type 0 for host dev-48-gl
debug2: no key of type 2 for host dev-48-gl
</pre>

Hmmmm. I rebooted and it was fixed... I think because I had installed udevd recently.

