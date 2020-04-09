---
title: Manage Large Files with Git Annex by Joey Hess
comments:
  - author: Joey Hess
    email: joey@kitenet.net
    date: 03/01/2011 12:38:35 PM
    text: >
      git-annex certainly does support local "remotes".<br/><br/>My guess is that you confused it by pointing git clone at foo/.git, which is an unusual way to clone. I think you're basically lying to git here and it'll think it's cloned from a bare repoisitory, rather than from a non-bare repository. Git-annex only supports remotes that are not bare repositories.<br/><br/>git clone gitannextesting/.git testclone2<br/><br/>Probably this would have worked:<br/><br/>git clone gitannextesting testclone2<br/><br/>Yep, tested it and it's you're use of .git in the clone that confuses it. I will see if I can fix that buglet.
  - author: Albert
    email: albert.lash@savonix.com
    date: 03/01/2011 06:37:47 PM
    text: >
      Thanks Joey, you rock!
date: 2011-01-01
tags: documentation,git
---
I've been really looking forward to trying out git annex, an extension (is that the right term here?) to Git by Joey Hess.

In a nutshell, it allows large files to be stored in a git repository, without having to store different versions of those files (though changes can be tracked).

I'm running Ubuntu testing, so I *should* be able to install it OK. Doh! Looks like it is not available with the repositories I have setup on my notebook, and since I don't want to fuss with that, I'm creating an OpenVZ container to run Debian unstable.

#### Actually Using Git Annex
Now that I've installed <tt>git annex</tt> from the Debian Unstable repository, I've actually used it!

<pre class="sh_sh">
albertlash@dev-49-gl:~/gitannextesting$ ls
albertlash@dev-49-gl:~/gitannextesting$ mv /home/albertlash/my-cooking-video.avi ./
albertlash@dev-49-gl:~/gitannextesting$ ls
my-cooking-video.avi
albertlash@dev-49-gl:~/gitannextesting$ git annex add my-cooking-video.avi
add my-cooking-video.avi ok
(Recording state in git...)
albertlash@dev-49-gl:~/gitannextesting$ git commit -a -m "adding my cooking video to a git repository, whoa"
[master d87acee] adding my cooking video to a git repository, whoa
 2 files changed, 2 insertions(+), 0 deletions(-)
 create mode 100644 .git-annex/WORM:1293985717:3760032:my-cooking-video.avi.log
 create mode 120000 my-cooking-video.avi
albertlash@dev-49-gl:~/gitannextesting$ ls -lah
total 24K
drwxr-xr-x 4 albertlash albertlash 4.0K Jan  2 16:30 .
drwxr-xr-x 4 albertlash albertlash 4.0K Jan  2 16:29 ..
drwxr-xr-x 9 albertlash albertlash 4.0K Jan  2 16:30 .git
drwxr-xr-x 2 albertlash albertlash 4.0K Jan  2 16:30 .git-annex
-rw-r--r-- 1 albertlash albertlash   29 Jan  2 16:28 .gitattributes
lrwxrwxrwx 1 albertlash albertlash  108 Jan  2 16:30 my-cooking-video.avi -> .git/annex/objects/WORM:1293985717:3760032:my-cooking-video.avi/WORM:1293985717:3760032:my-cooking-video.avi
albertlash@dev-49-gl:~/gitannextesting$
</pre>

What does WORM mean? **W**rite **O**nce **R**ead **M**any.

Hmmm.... but let's look into what is going wrong when I try to clone the repository and access the annexed file:

<pre class="sh_sh">
albertlash@dev-49-gl:~$ git clone gitannextesting/.git testclone2
Cloning into testclone2...
done.
albertlash@dev-49-gl:~$ cd !$
cd testclone2
albertlash@dev-49-gl:~/testclone2$ git annex init "testing 234"
init testing 234 [master 2bfdf28] git annex init
 1 files changed, 1 insertions(+), 0 deletions(-)
ok
albertlash@dev-49-gl:~/testclone2$ git annex get my-cooking-video.avi
get my-cooking-video.avi
  I was unable to access these remotes: origin
  Try making some of these repositories available:
  	610205c6-168d-11e0-8b81-af933623854c  -- testing 123
failed
git-annex: 1 failed
albertlash@dev-49-gl:~/testclone2$ vim .git/config
albertlash@dev-49-gl:~/testclone2$ git pull origin master
From /home/albertlash/gitannextesting/
 * branch            master     -> FETCH_HEAD
Already up-to-date.
albertlash@dev-49-gl:~/testclone2$ ls -lah
total 24K
drwxr-xr-x 4 albertlash albertlash 4.0K Jan  2 16:35 .
drwxr-xr-x 5 albertlash albertlash 4.0K Jan  2 16:35 ..
drwxr-xr-x 9 albertlash albertlash 4.0K Jan  2 16:36 .git
drwxr-xr-x 2 albertlash albertlash 4.0K Jan  2 16:35 .git-annex
-rw-r--r-- 1 albertlash albertlash   29 Jan  2 16:35 .gitattributes
lrwxrwxrwx 1 albertlash albertlash  108 Jan  2 16:35 my-cooking-video.avi -> .git/annex/objects/WORM:1293985717:3760032:my-cooking-video.avi/WORM:1293985717:3760032:my-cooking-video.avi
albertlash@dev-49-gl:~/testclone2$ git annex get my-cooking-video.avi
get my-cooking-video.avi
  I was unable to access these remotes: origin
  Try making some of these repositories available:
  	610205c6-168d-11e0-8b81-af933623854c  -- testing 123
failed
git-annex: 1 failed
albertlash@dev-49-gl:~/testclone2$
</pre>

Apparently git-annex does not support file-system based origin remotes? That can't be right because the git annex walkthrough includes the use of a removable USB drive as a remote. I must have missed a step or something, because when I instead cloned the repository using an ssh remote, <tt>git annex get my-cooking-video.avi</tt> worked fine.

<pre class="sh_sh">
albertlash@dev-49-gl:~$ git clone ssh://localhost/home/albertlash/gitannextesting/ ./testclone3
Cloning into ./testclone3...
remote: Counting objects: 12, done.
remote: Compressing objects: 100% (8/8), done.
remote: Total 12 (delta 1), reused 0 (delta 0)
Receiving objects: 100% (12/12), done.
Resolving deltas: 100% (1/1), done.
albertlash@dev-49-gl:~$ cd !$
cd ./testclone3
albertlash@dev-49-gl:~/testclone3$ ls -lah
total 24K
drwxr-xr-x 4 albertlash albertlash 4.0K Jan  2 16:41 .
drwxr-xr-x 5 albertlash albertlash 4.0K Jan  2 16:41 ..
drwxr-xr-x 8 albertlash albertlash 4.0K Jan  2 16:41 .git
drwxr-xr-x 2 albertlash albertlash 4.0K Jan  2 16:41 .git-annex
-rw-r--r-- 1 albertlash albertlash   29 Jan  2 16:41 .gitattributes
lrwxrwxrwx 1 albertlash albertlash  108 Jan  2 16:41 my-cooking-video.avi -> .git/annex/objects/WORM:1293985717:3760032:my-cooking-video.avi/WORM:1293985717:3760032:my-cooking-video.avi
albertlash@dev-49-gl:~/testclone3$ git annex init "test clone 123"
init test clone 123 [master fdc4c32] git annex init
 1 files changed, 1 insertions(+), 0 deletions(-)
ok
albertlash@dev-49-gl:~/testclone3$ ls -lah
total 24K
drwxr-xr-x 4 albertlash albertlash 4.0K Jan  2 16:41 .
drwxr-xr-x 5 albertlash albertlash 4.0K Jan  2 16:41 ..
drwxr-xr-x 9 albertlash albertlash 4.0K Jan  2 16:41 .git
drwxr-xr-x 2 albertlash albertlash 4.0K Jan  2 16:41 .git-annex
-rw-r--r-- 1 albertlash albertlash   29 Jan  2 16:41 .gitattributes
lrwxrwxrwx 1 albertlash albertlash  108 Jan  2 16:41 my-cooking-video.avi -> .git/annex/objects/WORM:1293985717:3760032:my-cooking-video.avi/WORM:1293985717:3760032:my-cooking-video.avi
albertlash@dev-49-gl:~/testclone3$ git annex get my-cooking-video.avi
get my-cooking-video.avi (getting UUID for origin...) (copying from origin...)
WORM:1293985717:3760032:my-cooking-video.avi
     3760032 100%   31.73MB/s    0:00:00 (xfer#1, to-check=0/1)
sent 30 bytes  received 3760601 bytes  2507087.33 bytes/sec
total size is 3760032  speedup is 1.00
ok
(Recording state in git...)
albertlash@dev-49-gl:~/testclone3$ ls -lah
total 24K
drwxr-xr-x 4 albertlash albertlash 4.0K Jan  2 16:41 .
drwxr-xr-x 5 albertlash albertlash 4.0K Jan  2 16:41 ..
drwxr-xr-x 9 albertlash albertlash 4.0K Jan  2 16:41 .git
drwxr-xr-x 2 albertlash albertlash 4.0K Jan  2 16:41 .git-annex
-rw-r--r-- 1 albertlash albertlash   29 Jan  2 16:41 .gitattributes
lrwxrwxrwx 1 albertlash albertlash  108 Jan  2 16:41 my-cooking-video.avi -> .git/annex/objects/WORM:1293985717:3760032:my-cooking-video.avi/WORM:1293985717:3760032:my-cooking-video.avi
</pre>

#### See Also

* [Here is another quality blog post by Joey Hess about his work on Git Annex, and the factors involved with "coding late".](http://kitenet.net/~joey/blog/entry/on_not_coding_late/)
* <a href="http://lwn.net/Articles/418337/" rel="nofollow">Here is an article at LWN.net titled "Large file management with git-annex".</a>

¥

