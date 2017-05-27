---
title: Some Ubuntu Customizations I m Using with Lucid Lynx 10.04
date: 2010-08-22
tags: laptop,ubuntu
---
I've installed Ubuntu version 10.04 aka Lucid Lynx on my [Lenovo G555](http://www.my-tech-deals.com/blog/2010/08/review-of-the-lenovo-g555.html) and I've just about got it setup how I want, though I definitely made some changes!

## Awesome Window Manager

I kept the Gnome default install and setup Awesome following the instructions provided on the [Awesome wiki](http://awesome.naquadah.org/wiki/Quickly_Setting_up_Awesome_with_Gnome):

<pre class="sh_sh">
apt-get install awesome awesome-extra
gconftool-2 --type bool --set /apps/nautilus/preferences/show_desktop False
 # Still disable the buggy Nautilus desktop thing
 gconftool-2 --type string --set /desktop/gnome/session/required_components/windowmanager awesome
 # sets awesome as wm
</pre>

**~/.local/share/applications/awesome.desktop**
<pre class="sh_sh">
[Desktop Entry]
 Version=1.0
 Type=Application
 Name=Awesome
 Comment=The awesome launcher!
 TryExec=awesome
 Exec=awesome
</pre>

Then I customized my .config/awesome/rc.lua file as I have done in the past.

So far Gnome Keyring is working, so I'll stick with gdm. I moved the bottom panel, opting for the Awesome wiibox, then put the top Gnome panel on the bottom with auto-hide turned on.

## Removing Ubuntu One, Shutting Down Unused Services

I removed [Ubuntu One following the instructions mentioned in the Docunext wiki](/wiki/Ubuntu_One), and then stopped a whole bunch of stuff I don't use in Preferences -> Startup Applications, such as bluetooth.

## Pam Environment

I added pam_env to /etc/pam.d/common-session so I could set some environment variables upon login via gdm / xdm / ssh whatever.

