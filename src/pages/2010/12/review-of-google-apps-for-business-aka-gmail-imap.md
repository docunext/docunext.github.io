---
title: Review of Google Apps for Business aka GMail IMAP
date: 2010-12-04
tags: gmail,google,imap,microsoft,performance
---
I recently migrated one of my clients to the "Google Apps for Business" service, specifically the GMail IMAP service. Here is a quick review.

While I trust the service is reliable, I have to say I'm disappointed with the functionality and the performance.

First of all, the "All Mail" folder is simply not relevant to IMAP subscribers. Certainly the GMail "labels" feature beyond the simple folder functionality is not relevant either, but the "All Mail" folder just isn't right and causes major performance problems. Why is it even published to the IMAP protocol? Google even advises users to configure their client to exclude it.

Second of all, the GMail delete function does not work as an IMAP server should. AFAIK, the only way to get the IMAP server to behave as it should is to manually drag the email to the trash folder.

Lastly, and this has to do with Microsoft's support for IMAP, the combination of Google's IMAP service and Outlook is not acceptable. It seems like every open source IMAP client I have used can easily handle massive amounts of email over IMAP, but not Outlook, and the first issue I raised - the "All Mail" folder, causes it to utterly disappoint. My experience has led me to believe that volunteers are able to make higher performance software than Microsoft. What do you think of that?

As a solution, I'm planning on modifying my client's Outlook IMAP settings to change the way [Outlook synchronizes with the server](http://www.docunext.com/2010/05/outlook-offline-mode-for-imap-over-slow-connections/), including which folders to check for new messages, and which folders to subscribe to.

If that does not alleviate the situation, I'm not sure what else to do. Any ideas?

