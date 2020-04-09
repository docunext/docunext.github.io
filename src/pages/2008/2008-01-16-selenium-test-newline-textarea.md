---
title: Selenium Test Newline Textarea
comments:
  - author: Alexandra
    email: alexa_g48@yahoo.com
    date: 03/10/2008 09:08:23 AM
    text: >
      Hi!<br/>I am having some trouble with the newline character behind a button:<br/><br/>My test runs perfectly with Selenium IDE, but when i include it in a suite, it fails with "Element not found error", because it tries to find a text containig "\n" instead of<br/>Have you encountered such a situation? Is there any solution besides working with a button with no "newline" character behind?<br/>10x in advance
  - author: Albert
    email: albert.lash@savonix.com
    date: 03/10/2008 07:02:43 PM
    text: >
      Hi Alexandra,<br/><br/>I'm not sure what you mean by a newline character behind a button. Could you be more specific?<br/><br/>Have you tried putting "&lt;br /&gt;" in the test suite instead of "\n"?
  - author: Alexandra
    email: alexa_g48@yahoo.com
    date: 03/11/2008 03:30:11 AM
    text: >
      Hi ALbert!<br/>!0x for your quick answer.<br/>Yes i have tried putting .<br/>I included my code in the previous comment, but since it is html, it doesn't appear...<br/>The link that is behind my button is generated in such a manner that it contains a newline character:<br/>---input type="submit" onclick="enableUpdate(true);HERE IS A NEWLINE CH<br/>setFields('75','bearer6','','','[]','5',this.form); setAction('populate');" ---<br/>Run on its own from the IDE the character is interepreted as &gt;br/
  - author: Alexandra
    email: alexa_g48@yahoo.com
    date: 03/11/2008 03:31:31 AM
    text: >
      but when included in a suite it is interpreted as \n an no match is found....<br/>Hope this is a bit more clear<br/>Alexandra
  - author: Albert
    email: albert.lash@savonix.com
    date: 03/11/2008 10:25:37 PM
    text: >
      So the newline is in a bit of javascript code in an onclick attribute of the button element?<br/><br/>You could move the javascript code into a function somewhere else on the page, then not have a newline in the button...<br/><br/>Also, you could try using a character entity reference for the newline, which I believe is "&amp;#10;".
  - author: Alexandra
    email: alexa_g48@yahoo.com
    date: 03/12/2008 10:55:20 AM
    text: >
      Hello again!<br/>I don't have access to the code, nore the right to modify it... My boss asked for a solution that doesn't modify the code...<br/>I have finally made it by reffering to my button element through an xpath expression buitl differently tha the one Selenium IDE geenrated for me.<br/>I did that using Firebug-&gt;InspectElement-&gt;copy as xpath which gave a reference to my button that looks something like this: "//html/body/center/table/tbody/tr[3]/td/table/tbody/tr/td/div/div/form/div[2]/table/tbody/tr[6]/td/nobr/input".<br/>This does the trick for me! It now works in every way that I need it: as a suite inside the browser and in my Java test classes...<br/>thank you so much for your time!<br/>When i finish my task i will try your last hint and get back to you to tell you if it worked...<br/>Kind regards,<br/>Alexandra
  - author: Albert
    email: albert.lash@savonix.com
    date: 03/12/2008 04:25:29 PM
    text: >
      Great - glad to hear you figured it out and thanks for keeping me informed of the solution.
  - author: renji
    email: renj143@rediffmail.com
    date: 05/05/2008 04:32:47 AM
    text: >
      testing
date: 2008-01-16
---
I just had a tough time figuring out how to get a newline into a textarea with selenium core. It should have been obvious, but I was thinking too deep.

Selenium reads the HTML output, not the text of the source. So to create a newline for a textarea, you have to use &lt;br/&gt;!

This reminds me that the other day I tried creating a dynamic test with a PHP file and of course it worked fine. I should also be able to create the test with XSL, which would be terrific.

¥

