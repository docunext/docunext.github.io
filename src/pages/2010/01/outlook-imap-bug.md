---
title: Outlook IMAP Bug
date: 2010-01-12
tags: bugs,imap,outlook
---
As a result of the <a href="http://www.docunext.com//outlook/">Outlook</a> to PST migration I posted about recently, the Outlook IMAP bug reared its ugly head.

IMAP is great for a number of reasons, one of which is that the email store can be accessed from multiple clients.

## Read Receipts

User's often configure their email clients to never send "read receipts". Who doesn't? Personally I find requests for read receipts invasive and rude so I never use them or reply to them.

Unfortunately for those who agree with that sentiment *and* use Outlook with IMAP, there is an Outlook bug which under certain circumstances will cause Outlook to do just the opposite of what is desired and send out "not read" responses, without even prompting for permission.

In my experience using Outlook, readPST, and Thunderbird to migrate Outlook emails to IMAP, messages which had previously been read were marked as unread when uploaded to the imap server. If Outlook saw them as unread and they had a read receipt request, and then another client would mark the message as read and then delete it or move it, Outlook would send a "not read" response to the sender.

Since I was migrating tens of thousands of emails, Outlook was trying to send over a thousand messages before it was noticed. I took two measures - I marked additional messages as read *before* uploading to the IMAP server, and then as suggested on the Outlook bug report thread by Monaghans, I setup a Postfix header check to intercept the errant notices:

<pre class="sh_sh">
/^Subject:.Not read:/   REDIRECT example@example.com
</pre>

## Errant Message Header

<pre class="sh_sh">
Subject: Not read: blahblahblah
Date: Sat, 2 Jan 2010 14:06:13 -0500
Message-ID: <004201ca8bde$d160c0e0$742242a0$@com>
MIME-Version: 1.0
Content-Type: application/ms-tnef;
        name="winmail.dat"
Content-Transfer-Encoding: base64
Content-Disposition: attachment;
        filename="winmail.dat"
X-Priority: 1 (Highest)
X-MSMail-Priority: High
X-Mailer: Microsoft Office Outlook 12.0
Thread-Index: Acjmqn0MfZuP9DwfQRKVovz4Y9Pde2lNBqrA
X-MS-TNEF-Correlator: 000000001043424A784A894E8FBC74DB2524AEDE84CB4200
Importance: High
</pre>

## External Links

* [Read Receipts](http://www.slipstick.com/problems/rr_ndr.asp)
* [Outlook Sending Hundreds of Messages](http://groups.google.com/group/microsoft.public.outlook.general/browse_thread/thread/26894cca62509cff)
* [Outlook Wants You to Get Spam](http://coreygilmore.com/blog/2008/10/27/outlook-2007-wants-you-to-get-spam/)
* [Outlook Problems](http://office-outlook.com/outlook-forum/index.php/m/253821/)
* [Outlook IMAP Bug Reported to Microsoft](http://social.msdn.microsoft.com/forums/en-US/innovateonoffice/thread/82024df4-d5ec-4f89-b268-f824dc26c370/)
* [Is Outlook a Spammer?](http://www.simmonsconsulting.com/2008/10/26/my-outlook-is-sending-spam-but-not-really/)
* [Why is Outlook Sending Messages](http://microsoft-outlook-2007.blogspot.com/2009/05/problem-outlook-is-sending-unknown.html)
* [Critical Bug in Outlook](http://it.knightnet.org.uk/2009/03/critical-bug-in-outlook-2007.html)
* [Oulook Bug Remains Unfixed](http://blog.goyello.com/2009/09/24/microsoft-does-not-care-about-outlook-not-read-bug/)

