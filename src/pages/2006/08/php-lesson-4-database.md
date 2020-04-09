---
title: PHP Lesson 4 Database
date: 2006-08-15
tags: none
author: Albert Lash
---
<p>PHP has a lot of database functions, which greatly contributed to its popularity. The goal of this lesson is to see how this can work for a simple example. To do so, we will need to complete the following steps:</p><ol>    <li>Connect to a database - hopefully you have a mysql database running already, and you know a user and password to use. Use mysql_connect() function for this. </li>    <li>Query the database, asking it for some information you would like to get. Use mysql_query function for this. </li>    <li>One the database has given you the information, you're not quite ready yet. You will need to access the object and format the rows to a more normalized method. You can use the mysql_fetch_row function to do so. </li></ol>
