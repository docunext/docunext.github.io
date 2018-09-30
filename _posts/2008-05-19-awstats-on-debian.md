---
title: AWStats on Debian
date: 2008-05-19
tags: apache,configuration,debian
---
Ran into an issue where logrotate makes Apache server logs owned by root. Found a fix here:

<a href="http://ubuntuforums.org/showthread.php?t=45879" rel="nofollow">http://ubuntuforums.org/showthread.php?t=45879</a>

<pre lang="bash">/var/log/apache2/*.log {
    weekly
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 640 root www-data
    sharedscripts
    postrotate
        if [ -f "`. /etc/apache2/envvars ; echo ${APACHE_PID_FILE:-/var/run/apache2.pid}`" ]; then
            /etc/init.d/apache2 reload &gt; /dev/null
        fi
    endscript
}</pre>

