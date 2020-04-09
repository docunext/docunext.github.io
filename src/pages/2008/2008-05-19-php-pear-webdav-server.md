---
title: PHP PEAR WebDAV Server
comments:
  - author: adam
    email: akronymn@hotmail.com
    date: 07/16/2008 02:22:44 PM
    text: >
      Since you seem to have had some success with this wrapper I was hoping maybe you could help me out by posting an example or at least some suggestions. What I am trying to do is upload a video from the server my website is hosted on to a remote server with webdav. My local server has WinNT, php 4.3 and apache 2.0. currently I am doing something along the lines of:<br/><br/>$strm = new HTTP_WebDAV_Client_Stream;<br/>$tmp_vid_loc = $_FILES['newVid']['tmp_name'];<br/>$target_vid_path = 'webdav://user:pass@stream.address.com/WMRoot/ce/' . $full_tid . '.wvx';<br/><br/>$opts = array();<br/>$opened = array();<br/>$strm-&gt;stream_open($target_vid_path, 'w', $opts, $opened);<br/><br/>$src = fopen($tmp_vid_loc, 'rb');<br/>$content = fread($src, filesize( $tmp_vid_loc));<br/>fclose($src);<br/><br/>$strm-&gt;stream_write($content);<br/>$strm-&gt;stream_close();<br/><br/> I get no errors from this but I have checked and found that both stream_open and stream_write are returning false. Upon further investigation I have found that stream_write is failing because of something to do with the options parameter. I find this especially confusing because the (very) limited documentation only says this parameter is "not used here" which is why I pass an empty array.<br/><br/> Thanks in advance for any help. Also if there is any other info I can provide I am more than happy to.
  - author: Albert
    email: albert.lash@savonix.com
    date: 07/20/2008 10:34:31 PM
    text: >
      Hi Adam, I'm more familiar with the dav server than the client. And I think that there is a webdav extension which I found to have helpful documentation:<br/><br/><a href="http://php-webdav.pureftpd.org/project/php-webdav" rel="nofollow">http://php-webdav.pureftpd.org/project/php-webdav</a><br/><br/>But back to your situation, a stream wrapper should work the same way the rest of php streams work. Here's a few examples:<br/><br/><a href="http://www.php.net/manual/en/stream.examples.php" rel="nofollow">http://www.php.net/manual/en/stream.examples.php</a><br/><br/>So if you register the webdav wrapper as "webdav", you should then be able to simple copy the uploaded file to your webdav server, like with file_put_contents, for example:<br/><br/><a href="http://www.php.net/manual/en/function.file-put-contents.php" rel="nofollow">http://www.php.net/manual/en/function.file-put-contents.php</a><br/><br/>Hope that helps! Let me know if that helps, if not, I can try again. :-)
  - author: Marc
    email: marc.hanisch@googlemail.com
    date: 03/24/2009 10:08:49 AM
    text: >
      Hey Albert,<br/>although Adam seems to be busy, I tried your suggestion because I was wondering why the HTTP_WebDAV_Client_Stream Class seems to be so 'unhandy' - and yes! it works!<br/>Just register with the webdav protocal with HTTP_WebDAV_Client_Stream::register()<br/>and you can use the file_* functions with your webdav server!<br/><br/>Thank you so much! :-)<br/>Best regards,<br/>Marc
  - author: ngungo
    email: ngungo@56degrees.com
    date: 12/24/2009 10:18:14 PM
    text: >
      Hi everyone,<br/>I could not make this piece of code work.<br/><pre> require_once "HTTP/WebDAV/Client/Stream.php";<br/> if (!HTTP_WebDAV_Client_Stream::register()) echo "couldn't register WebDAV stream wrappers";<br/> else echo 'hello dav!';</pre><br/><br/>I've checked that the PEAR's HTTP_WebDAV_Client and it appears as following:<br/><pre> # cd /usr/local/lib/php/PEAR<br/># pear list HTTP_WebDAV_Client<br/>Installed Files For HTTP_WebDAV_Client<br/>==================================<br/>Type Install Path<br/>php /usr/local/lib/php/HTTP/WebDAV/Client/Stream.php<br/>php /usr/local/lib/php/HTTP/WebDAV/Tools/_parse_lock_response.php<br/>php /usr/local/lib/php/HTTP/WebDAV/Tools/_parse_propfind_response.php<br/>php /usr/local/lib/php/HTTP/WebDAV/Client.php </pre><br/><br/>Please help! thanks in advance.<br/>
date: 2008-05-19
tags: dav,pear,php
---
This package looks terrific. I tried it once years ago, and am now trying again.

<pre class="sh_sh">
pear install HTTP_WebDAV_Server
vim /usr/share/php/docs/HTTP_WebDAV_Server/db/Fileserver.sql</pre>
I installed the database, and then tried the simple script offered here:

<a href="http://blog.keyphrene.com/keyphrene/index.php/2006/09/16/9-how-to-install-a-webdav-server-in-php">How to install a webdav server in php</a>

Since I run PHP as a CGI script, I had to add this snibbet I found at the php.net website:
<pre class="sh_php">
if (!function_exists('apache_request_headers')) {
    eval('
        function apache_request_headers() {
            foreach($_SERVER as $key=>$value) {
                if (substr($key,0,5)=="HTTP_") {
                    $key=str_replace(" ","-",ucwords(strtolower(str_replace("_"," ",substr($key,5)))));
                    $out[$key]=$value;
                }
            }
            return $out;
        }
  ');
}</pre>

Reading through the docs again, the Server/Filesystem.php file is just an example of how the Server.php class can be extended. I copied this file to my working directory, started to make a few changes, and some cool ideas came to mind:

* use MDB2 for file locking instead of only mysql
* combine with jquery.fileTree for user-friendly navigation
* combine with pecl svn php extension for versioning support

There are many opportunities for coolness here. I'm going to get started on something boring yet important: file uploads. To do this I'm actually going to use the HTTP_WebDAV_Client package from PEAR as well. It simply registers the webdav: and webdavs: protocols so you can do stuff like this:

<pre class="sh_php">$httpfile  = file_get_contents("webdav://www.example.com/foo.txt");</pre>

¥

