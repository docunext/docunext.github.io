---
title: Publishing a wiki with Git or Subversion
date: 2009-02-24
tags: git,subversion
---
Git keeps catching my attention, and I found <a href="http://hjemli.net/git/" rel="nofollow">cgit</a> today. I was surprised to find that it isn't (as far as I can tell) fastcgi compatible. Too bad, but it is implemented in C, so its bound to be pretty quick. And based upon my limited experience with fastcgi and c, it wouldn't be too difficult to make it fastcgi friendly. (UPDATE - I was able to get cgit to run in fastcgi mode, but not well at all. It performs really well as a normal CGI script, so its not a big deal other than the fact that NGINX doesn't have built in CGI support. Of course its super easy to proxy to another server which does have CGI support, or alternatively use a fastcgi / cgi wrapper.)

I really like the idea of using a real revision control system for a wiki, I just haven't found a setup that I really like. Ikiwiki has caught my attention too, and its cool that it uses Markdown, as that's been very interesting to me lately too. However, instead of compiling wiki pages with ikiwiki, it seems like it might be easier to simply write markdown pages, store them in subversion, have mod_dav serve the files, and have an apache external filter convert the markdown to html on the fly. The pages could then even be transformed by XSL, if so desired. Sounds like a good plan to me!

As I think about this idea which is new to me, I wonder: Git or Subversion? Subversion has worked really well for me over the past few years, but I do like to try new things. Hmmm. I'm not aware of how Git can publish raw files to the web though, I'll have to figure that out before I continue considering it.

Related: <a rel="nofollow" href="http://search.cpan.org/~gnustavo/SVN-Hooks-0.14.21/lib/SVN/Hooks.pm">http://search.cpan.org/~gnustavo/SVN-Hooks-0.14.21/lib/SVN/Hooks.pm</a>
