---
title: Bash Functions Rock 
date: 2010-10-10
tags: ruby
---
I've created my share of bash scripts and they are all well and good, but now that I've learned about bash functions, I'm definitely going to be writing more of them.

For example, I was interested in making a quick and easy way to switch my PATH settings to use either Ruby 1.8 or Ruby 1.9. To do so, I tried a bash script to modify a file my .bashrc file was sourcing. It worked, but I had to log out and log back in again.

By using a function I added to .bashrc, the shell remained the same, and the PATH environment variable could be changed.

