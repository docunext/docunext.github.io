---
title: Spotlight on Packages tmux and atop
date: 2011-05-08
tags: packages
---
Today I am writing an article about two packages available for UNIX-like operating systems.

#### tmux

Tmux is a **terminal multiplexer**, similar to GNU screen. I've only used a couple of days, but I like it better - though I still have some "getting used to" it.

What does it do? It allows a console user to open multiple terminal emulators within one session - quite similar to GNU screen. There is an immediate difference: instead of CTRL-a, the command key sequence starts with CTRL-b, but that can be easily changed.

What is it good for? Many things! I used GNU screen for years simply to detach long running processes over ssh sessions. Then I came to learn it can be used for multiple terminal sessions, so I no longer had to use XFCE4 Terminal tabs. *Then* I learned that screens could be split, like in Vim!

But in GNU screen, they look lousy - there is a big line dividing the terminals. In researching that factor, I found **tmux**. On a superficial level, the splits are much cleaner.

As a side note, in an effort to keep my laptop cool, I decided to switch from the proprietary fglrx ATI video driver to the open source **radeon** driver. By doing so, I am able to use KMS, or kernel mode setting, which allows the kernel to set the video mode setting on boot. In turn, that makes raw tty terminals look great. Why do I care about that? Well, again on a superficial level, I can switch to a terminal and work directly there, without needing a graphical desktop environment - a raw TTY is *seriously* faster than an x-terminal-emulator within a graphical desktop environment. :-)

But what about gnome-session, gnome-keyring, and ssh-agent? With tmux, I can open a multiplexed terminal in a desktop environment, detach it, and re-attach from the console with <tt>tmux attach</tt>. SWEET!

One last note about tmux - it took me awhile to figure out how to scroll back, but its simple (and works great!) - its just CTRL-b (or whatever command key sequence), then PgUp.

#### atop

I installed atop awhile back, but I haven't used it much. It *does* provide a plethora of <del>pinatas</del> process information though. Just check out this screenshot of atop:

Nice, huh? Looking back, I remember installing it to diagnose what is causing my laptop to heat up. Still haven't isolated that issue yet, though...
