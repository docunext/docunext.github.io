---
title: Cannot start Microsoft Office Outlook Unable to open the Outlook window.
date: 2009-12-17
tags: errors,microsoft,outlook
---
A client called me this morning, reporting that he was unable to use his email.

He uses Microsoft Outlook 2007, and read me this error message:

**Cannot start Microsoft Office Outlook, Unable to open the Outlook window.**

We tried a couple of different things, but this is the fix that worked for him:

1. From the Start menu, he selected "Run..."
2. In the Run window, he entered this:

<pre class="sh_sh">
Outlook.exe /resetnavpane
</pre>

3. Then clicked OK

His Outlook 2007 then started OK, and for some reason he had a new folder titled "Unread Messages".

