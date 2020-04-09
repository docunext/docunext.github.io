---
title: Zenburn tmux
date: 2012-10-23
tags: vim
---
For many moons I've been using vim and tmux with the desert theme, but things just didn't seem right, especially when I would try using zenburn. The colors were *totally* off.

I can't remember where I found the solution, but this is what's working for me:

* Start tmux with TERM=xterm-256color
* No need for set -g default-terminal "xterm"
* set t_Co=256 in ~/.vim/config/display.vim (per vim_config layout)
* colorscheme zenburn in the same

Hope that helps.

### An Update and A Note Aside: "xterm stole my ctrl + shift key combo"

I had an odd computer occurrence recently - my ctrl + shift key combo stopped working, so I could not longer copy and paste to and from terminal emulator windows.

It turns out that when I was [troubleshooting zenburn](http://www.docunext.com/2012/10/zenburn-tmux/) I installed xterm to check out zenburn colors in it, and *that* was the culprit.

