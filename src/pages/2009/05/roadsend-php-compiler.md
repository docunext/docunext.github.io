---
title: Roadsend PHP Compiler
date: 2009-05-27
---
The Roadsend PHP Compiler is a tool to parse PHP files and convert them into C code for compilation into standalone binaries. Its a pretty amazing concept, and it does indeed work.

I tried it out sometime last year, and I had hoped to gain a substantial speed boost in the process. I didn't get the speed boost I was looking for, so I put the project on the shelf.

Today I was looking for ways to leverage the setuid capability of unix binaries. The obstacle of not being able to use setuid with shell scripts outweighed its convenience, so I was about to give up when I remembered the Roadsend PHP compiler.

I'm going to try it out and see how it goes.
