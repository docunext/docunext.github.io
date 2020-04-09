---
title: diffurl
date: 2007-02-04
tags: nagios
---
<pre>#!/bin/bash#  diFFurl (A website content checker.)
#  Version 0.2b (09062006)
#
#
#  TODO: Correct nagios error codes.
#
#  This is a site content check for Nagios,
#  this will grab index from sites specified
#  in .content-check-urls. Store MD5 hash if not
#  stored. Otherwise, it will compare with MD5 hash
#  on the machine. It will only output if a site's MD5
#  hash isn't the same as the stored version.

URL_FILE=/home/contentcheck/.content-check-urls

URL_DIR=/home/contentcheck/.content-check

if ! [ -d $URL_DIR ]; then    mkdir $URL_DIR

fi

if ! [ -f $URL_FILE ]; then    echo "new-content-check: $URL_FILE not found"    exit

fi

for URL in $(cat $URL_FILE);
do    MD5_FILE=$URL_DIR/$(echo $URL | md5sum | cut -d' ' -f1)
if [ -f $MD5_FILE ]; then
    links -dump "$URL" | md5sum &gt; $MD5_FILE.new
    if ! diff $MD5_FILE $MD5_FILE.new &amp;&gt;/dev/null; then
        echo "New content at $URL"
        mv -f $MD5_FILE.new $MD5_FILE
    else
        rm $MD5_FILE.new
        echo "No content has been changed."
        exit
    fi
else
    links -dump "$URL" | md5sum &gt; $MD5_FILE
fi
done</pre>

I'm not using this anymore, instead opting for a http_check of each virtual host. The content check is a difficult challenge that I'll need to do some more thinking on.

