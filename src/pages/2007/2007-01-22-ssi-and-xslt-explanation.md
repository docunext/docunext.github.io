---
title: SSI and XSLT Explanation
date: 2007-01-22
tags: none
author: Albert Lash
---
I just sent this explanation to a colleague to explain XSL and SSI:

<blockquote>

You know how the html files on the "www" server are all one piece? Meaning they start with &lt;html&gt; and end with &lt;/html&gt; (or something like that)? In other words, you can open the file in a browser and it will display the entire page.

SSI and XSL will let us break the html files up into templates in a manageable way. If we opened up an XSL or SSI file, it would only show part of the page.

It is very popular for people to use HTML or XHTML with CSS. That is what the browser "reads" when it displays the page. The browser / user / visitor side of things is usually called the "client side", and the server, aptly called the "server side". Javascript renders on the client-side, which is good is some instances. Most other software processes on the server side, before information is transmitted to the client side.

On the server and developer side of things, we can use SSI or XSL to output a complete HTML document from different pieces of HTML code. For example, it is common to use these types of template pieces:

main or overall template

header

menu

body

footer

sidebar

That way, if we decide to change the menu for every page, we can do so, without having to update every html file. Usually what happens is there is a main template, which imports the other pieces of code to make the finished product.

I like to describe Nexista, the XSLT processor we use, like that Indian god with many arms, Kali. When a user requests a certain page, Kali will grab all the different template components to build that page, and then hand over the combination of them all - a complete html document. </blockquote>
