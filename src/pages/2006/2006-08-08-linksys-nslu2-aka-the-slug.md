---
title: Linksys NSLU2 aka the SLUG 
date: 2006-08-08
tags: none
author: Albert Lash
---
<h3 id="toc0">Experiments and usage of the Linksys NSLU2 (aka Slug) with Debian </h3><p>I immediately flashed my NSLU2 firmware and debootstrapped debian onto a Flash drive. I haven't de-underclocked it, and am not sure I want to try that at the risk of breaking my new toy.</p>
<p><strong>Results:</strong></p>

<ul>    <li>Processor speed is apparent when rysncing via ssh, my xfers max out at 500kB, but when I mount a samba share and rsync directly I get 2.5MB/s. </li>    <li>I tried connecting to USB drives with a USB 1.1 hub, and the transfer rate was very bad. I ordered a new USB 2.0 hub from Led Shoppe (ledshoppe.com), hopefully that will help!</li></ul><p><strong>Questions:</strong></p>

<ul>    <li>How can I tell if a USB device is using USB 2.0 or USB 1.1?</li>    <li>Do USB hubs work with it? </li></ul><p><strong>To-do: </strong></p><ol>    <li>Redo the installation process because I am running out of room on my root partition, and have plenty of room on the home partition. Though I may try to rearrange /home/ and /usr/ or something. </li></ol>
