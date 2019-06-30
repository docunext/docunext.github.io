---
title: Windows Subsystem Linux, tmux and vim
date: 2019-06-30
---

Phew! I had quite the adventure through an interesting array of tech yesterday,
and I'm pleased to report I survived, and the prognosis was sucessful (sic).

In other words, I was able to get debian runnning on Windows 10, via cmder.
But... then when using vim within tmux there were all sorts of nasty artifacts
left over when scrolling. My first thought it must be wsl related, but I found
many reports of tmux and vim having issues.

I'd seen some confusion surrounding tmux settings before, but the fix was
usually pretty easy, like telling tmux what type of terminal it should emulate.
I tried many settings, in tmux, and vim, to no avail, for a couple hours. For
example, I tried changing the term from xterm to xterm-256colors to
screen-256colors:

`set -g default-terminal "screen-256colors"`

I checked the locale:

`set -gq status-utf8 on`

And did a `dpkg-reconfigure locales`

Also tried `set ttyfast` in vim, and even fiddled with my nvidia card settings.
No luck. I love tmux and vim. Not a major deal but its bugged me :-)

I was able to get to the source of the problem, the underlying TERM setting
within the cygwin terminal of cmder. This is whats working for me:

```
if [ "$SHLVL" = "1" ] && [ "$is_wsl" = "1" ]; then
    export TERM=vwmterm
fi
```

(the is_wsl comes from a thread I found about standardizing a way to check if
a shell was running in Windows Linux):

```
is_wsl=0
read os </proc/sys/kernel/osrelease || :
if [[ "$os" == *Microsoft ]]; then
      is_wsl=1
fi
```

These resources may help other troubleshooters:

* https://github.com/Maximus5/ConEmu/issues/1738
* https://github.com/tmux/tmux/wiki/FAQ
* https://conemu.github.io/en/AnsiEscapeCodes.html
* https://unix.stackexchange.com/questions/201798/how-to-set-tmux-terminfo-to-screen-256color
* https://wiki.archlinux.org/index.php/tmux#Setting_the_correct_term
