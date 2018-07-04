---
title: Yet Another Vim Arrow Key Fix
date: 2010-10-10
---
I just setup the awesome [vim_config](http://github.com/docunext/vim_config) resources available on github for super-charging vim, only to discover that the arrow keys were busted in edit mode.

*Instead of moving the cursor, they product A, B, C, or D!*

Reading up on the subject revealed that many developers prefer h,j,k, and l for navigation, and avoid navigating entirely in edit mode. Sounds good to me!

I disabled the arrow keys with these .vimrc commands:

<pre class="sh_sh">
inoremap  &lt;Up>     &lt;NOP>
inoremap  &lt;Down>   &lt;NOP>
inoremap  &lt;Left>   &lt;NOP>
inoremap  &lt;Right>  &lt;NOP>
noremap   &lt;Up>     &lt;NOP>
noremap   &lt;Down>   &lt;NOP>
noremap   &lt;Left>   &lt;NOP>
noremap   &lt;Right>  &lt;NOP>
</pre>

But I still couldn't get rid of those pesky letter, and I needed to because my muscle memory persists.

Thankfully, this [hint](http://hackaddict.blogspot.com/2008/03/fix-broken-arrow-keys-and-backspace-in.html) from a Mac OS X developer suggested setting the TERM environment variable to "linux". I set it in XFCE4 Terminal and ... YAY! It worked! Thanks!

Alas, while it fixed my arrow keys, it squashed my function keys. Nevertheless, I found another solution: remove autoclose from vim_config.

