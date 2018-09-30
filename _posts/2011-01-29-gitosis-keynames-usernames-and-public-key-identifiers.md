---
title: Gitosis Keynames Usernames and Public Key Identifiers
date: 2011-01-29
---
Somehow when using ssh-keygen on Debian / Ubuntu to create a public / private key pair, and then importing that key into gitosis, the hostname is appended to the username in the id_dsa.pub file.

That is fine, but for some applications like Gitosis, which relies upon public key infrastructure, it doesn't make total sense to name the user and the keyfile with the hostname, too.

Thankfully, the identifier inside the id_dsa.pub does does not need to match the name used in gitosis.conf. For example, if the id_dsa.pub is something like this:

<pre class="sh_sh">
ssh-dss ...dklfjdkfjshdf... joeschmoe@mylocalhost
</pre>

The keyfile in gitosis-admin/keydir/can be name joeschmoe.pub, instead of joeschmoe@mylocalhost.pub. Note: the name used in gitosis.conf must match the name of the keyfile, minus the ".pub"; in this example: "joeschmoe".

Also noted is the fact that Gitosis does not remove the public key from the authorized_keys file in the gitosis user's .ssh folder when the user is no longer listed in gitosis.conf. In my usage, I switched from using the equivalent of joeschmoe@mylocalhost as the username to just joeschmoe. Since gitosis and ssh use the public key to identify the git-specific user, my usage with joeschmoe was failing because gitosis did not remove the first entry. I removed the authorized_keys entry manually, and then I was able to use joeschmoe. W00t!

