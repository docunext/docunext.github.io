---
title: ClamAV installation and configuration notes
date: 2006-09-12
---
<p>ClamAV</p>
<p>Step 1) apt-get install clamsmtp clamav-freshclam</p>
<p>Step 2) Edit the /etc/clamsmtpd.conf file and change:</p>
<p>OutAddress: 10025 to OutAddress: 10026

Listen: 127.0.0.1:10026 to Listen: 127.0.0.1:10025</p>
<p>Step 3) Add the following to /etc/postfix/main.cf

<pre>
content_filter = scan:127.0.0.1:10025

receive_override_options = no_address_mappings</pre></p>
<p>Step 5) Add the following to /etc/postfix/master.cf

<pre># AV scan filter (used by content_filter)

scan      unix  -       -       n       -       16      smtp        -o smtp_send_xforward_command=yes# For injecting mail back into postfix from the filter

127.0.0.1:10026 inet  n -       n       -       16      smtpd        -o content_filter=        -o receive_override_options=no_unknown_recipient_checks,no_header_body_checks        -o smtpd_helo_restrictions=        -o smtpd_client_restrictions=        -o smtpd_sender_restrictions=        -o smtpd_recipient_restrictions=permit_mynetworks,reject        -o mynetworks_style=host        -o smtpd_authorized_xforward_hosts=127.0.0.0/8</pre></p>
<p>Testing:</p>
<p>1) apt-get install clamav-testfiles

2) the test files are in /usr/share/clamav-testfiles/

3) Try sending these, you should see somewhere in the logs. These below error messages were for sending the clam.exe through.</p>
<p>Tue Sep 12 15:10:48 2006 -&gt; /var/spool/clamsmtp/clamsmtpd.ej4e58: Broken.Executable FOUND

Tue Sep 12 15:27:20 2006 -&gt; /var/spool/clamsmtp/clamsmtpd.68z8Hr: Broken.Executable FOUND</p>

