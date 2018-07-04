---
title: Screen is Not Only for Long Running Processes 
date: 2010-10-29
---
I've been using screen for several years now, but I have to admit, not extensively.

In the past, Vim has been so useful to me as a way to start and continue long running processes on remote servers without needing to stay logged in via SSH.

I used it like this:

1. SSH into remote server
2. Start screen by typing <tt>screen</tt>
3. Start my long running process, for example <tt>tail /var/log/syslog</tt>
4. Exit out of the "virtual shell" by typing C-d (Ctrl-d)
5. Logout of the server with <tt>exit</tt>
6. Login to the server at some later time or date
7. Enter back into the "virtual shell" by typing <tt>screen -r</tt>

As I said, it served me well - for years. Why did I just now want more? Vim!

I've been using Vim for years, too, but more and more throughout that time. And more recently, thanks to vim_config, I'm using it a *lot* more, including buffer switching. So I thought, can screen do this? **Yes! Like Vim, GNU screen can also switch between buffer-style virtual shells.**

How? In a nutshell, its like this:

1. SSH into remote server
2. Start screen by typing <tt>screen</tt>
3. Start my long running process, for example <tt>tail /var/log/syslog</tt>
4. Start a new screen by <tt>C-a c</tt>
5. Celebrate!

Similar to <tt>:b1</tt> and friends, I can switch between screens with <tt>C-a n</tt> and <tt>C-a p</tt>.

