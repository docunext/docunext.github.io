---
title: Samba Notes
date: 2007-05-15
---
&quot;Global parameter min protocol found in service section!&quot; - what does this mean? I had this in one of my share configurations:

<pre>max protocol = NT1

min protocol = lanman2</core></pre><hr />

Can't connect to Samba server from Mac and have it prompt for username and password for some reason. I am able to supply username and password as part of the address, but that is pretty lame.  This is the error:"Could not connect to the server because the name or password is not correct."

Looks like this happens from time to time, might be a restart issue? Oh my gosh it was!<hr />

Did a bunch of research on samba encrypted passwords and auth backends:

<a href="http://www.weltraumsofa.de/pam_mysql/doku_pamnssmysql_jh_en.html#9.5">http://www.weltraumsofa.de/pam_mysql/doku_pamnssmysql_jh_en.html#9.5</a>

<a href="http://www.oculon.org/hijinx/linux/samba.htm">http://www.oculon.org/hijinx/linux/samba.htm</a>

<a href="http://lists.samba.org/archive/samba/2004-June/086936.html">http://lists.samba.org/archive/samba/2004-June/086936.html</a>

<a href="http://www.macwindows.com/tiger.html#e">http://www.macwindows.com/tiger.html#e</a>

<a href="http://www.skippy.net/linux/2000/smb-howto.html">http://www.skippy.net/linux/2000/smb-howto.html</a>

<a href="http://forums.whirlpool.net.au/forum-replies-archive.cfm/518599.html">http://forums.whirlpool.net.au/forum-replies-archive.cfm/518599.html</a>

<a href="http://www.weltraumsofa.de/pam_mysql/doku_pamnssmysql_jh_en.html#9.5">http://www.weltraumsofa.de/pam_mysql/doku_pamnssmysql_jh_en.html#9.5</a>

Samba will not authenticate to a backend like MySQL, because the passwords it receives are already encrypted. The samba developers used to support mysql and postgres back ends (which I'm not sure would work with Windows clients), but no longer. It is also possible to use pam_mysql with samba, but you cannot do so with encrypted passwords, so it won't work with Windows clients.

The only remaining possibility for our situation is using an LDAP backend. However, since the passwords are pre-encrypted with lanman and nt encryption schemes, they would not match up against the more common crypt passwords. No matter what, when integrating linux and windows fileshares, you need to use the lanman or nt encryption schemes. This is pretty annoying, because this authentication setup is cleartext equivalent.

Other alternatives are to use sftpdrive, or use ssl enabled dav drives.

Another resource:

<a href="http://kennethhunt.com/archives/001086.html">http://kennethhunt.com/archives/001086.html</a>

Good explanation of Samba compared to Windows:

<a href="http://www.smallbusinesscomputing.com/testdrive/article.php/3522596">http://www.smallbusinesscomputing.com/testdrive/article.php/3522596</a><hr />

Or, you could simply have two password fields in the database:

<a href="http://pdbsql.sourceforge.net/">http://pdbsql.sourceforge.net/</a>

This would obviously require stricter password change code. For PHP, this includes:

<a href="http://www.horde.org/passwd/">http://www.horde.org/passwd/</a>

