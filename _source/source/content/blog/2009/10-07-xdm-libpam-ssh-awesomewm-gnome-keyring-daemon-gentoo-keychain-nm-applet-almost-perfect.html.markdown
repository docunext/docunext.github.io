---
title: XDM libpam ssh AwesomeWM gnome keyring daemon gentoo keychain nm applet Almost Perfect
date: 2009-10-07
tags: gnome,gnome-keyring-daemon
---
<span style="display: inline;">

I've been hot on the trail of getting my login and authentication worked out since I switched to awesomewm (awesome window manager) a few months ago.

I chose slim as my display manager because I read it was lightweight. I was unable to get it to use libpam_ssh as the login mechanism though, so I switched to xdm.

Xdm works perfectly, but it is a little rough on the eyes, so I'm doing some reading on how to jazz it up a little.

But first, I want to write down my current setup, as its working pretty good for me.

* I'm using Debian Squeeze.
* XDM display manager.
* Awesome window manager - initialized by ~/.Xsession.
* /etc/X11/Xsession.options has "use-ssh-agent" removed.
* I [disabled ssh-agent in the gnome-keyring-daemon via gconf2](http://live.gnome.org/GnomeKeyring/Ssh) - I might try turning this back on, as I read somewhere that slim wasn't setting the SSH_AUTH_SOCK environment variable due to a d-bus communications problem.
* I use keychain to activate the ssh-agent that is started by XDM. Keychain is available in the debian repositories, but I mention it is from the gentoo project to be more specific.

The only thing left I want to do is automatically [unlock the default keyring upon login](http://live.gnome.org/GnomeKeyring/Pam).

**UPDATE:** SWEET! I finally got this setup right somehow. I think all I had to do was edit /etc/pam.d/common-auth:

<pre class="sh_sh">
auth sufficient pam_ssh.so try_first_pass
auth    optional        pam_gnome_keyring.so
# here are the per-package modules (the "Primary" block)
auth    [success=1 default=ignore]      pam_unix.so nullok_secure
# here's the fallback if no module succeeds
auth    requisite                       pam_deny.so
# prime the stack with a positive return value if there isn't one already;
# this avoids us returning an error just because nothing sets a success code
# since the modules above will each just jump around
auth    required                        pam_permit.so
# and here are more per-package modules (the "Additional" block)
# end of pam-auth-update config
</pre>

and:

<pre class="sh_sh">
session optional        pam_gnome_keyring.so  auto_start
# here are the per-package modules (the "Primary" block)
session [default=1]                     pam_permit.so
# here's the fallback if no module succeeds
session requisite                       pam_deny.so
# prime the stack with a positive return value if there isn't one already;
# this avoids us returning an error just because nothing sets a success code
# since the modules above will each just jump around
session required                        pam_permit.so
# and here are more per-package modules (the "Additional" block)
session required        pam_unix.so
# end of pam-auth-update config
session optional pam_ssh.so
</pre>

Oh yes, I also read up on /usr/share/doc/libpam-ssh/README.Debian which explained how I had to create ~/.ssh/login-keys.d/ and symlink the private keys I wanted to let pam.d use to authenticate logins with.

Would this work with slim now? I'm not going to worry about it for the moment!

UPDATE: I almost forgot to make note of the significant effects that these changes made. I only noticed them a few days later. For some reason, xdm doesn't read /etc/profile or /etc/environment. I tried numerous ways to figure it out and finally found a suggestion to change ~/.Xsession. Here's my current file:

<pre class="sh_sh">
set -a
. /etc/environment
wmname LG3D
xsetroot -cursor_name dmz
exec awesome
</pre>

I used to have the information in /etc/profile, but /etc/environment seems simpler for some reason. Here's what I have in /etc/environment:
<pre class="sh_sh">
all_proxy="http://127.0.0.1:3128/"
GIMP2_DIRECTORY="~/.config/gimp-2.6"
</pre>

Then of course there are all the ~/.profile, ~/.bashrc and so on files. Ugh. What a mess!

From what I read, it appears that most of these configuration options are making their way into pam modules, which I think is a great idea. I read up on pam_env, but couldn't get it to work with xdm.

Now back to customizing the look of the xdm greeter, as well as my desktop background.

