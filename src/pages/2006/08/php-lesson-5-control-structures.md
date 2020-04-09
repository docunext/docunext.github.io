---
title: PHP Lesson 5 Control Structures
date: 2006-08-15
tags: none
author: Albert Lash
---
<p>Control structures give you the ability to do more sophisticated tasks with your scripts. Say for example you have an Excel spreadsheet with a list of addresses in CSV format, and you wanted to enter the information into a database. You could do it manually (quite a laborious, inefficient, and expensive task), or you could have PHP do it for you. How can you get PHP to loop through all the information? You can use one of the following control structures:</p>

<ul>    <li>foreach</li>    <li>for</li>    <li>while</li></ul><p>Say you wanted to skip addresses that aren't located in the United States. How can you get PHP to differentiate between the data? Using conditionals of course! The following terms represent some conditional statements in PHP:</p>

<ul>    <li>if</li>    <li>else </li>    <li>elseif</li>    <li>case</li>    <li>switch</li></ul><p>With conditionals, you need to use operators to test your conditions. Here are some examples:</p>

<ul>    <li>== the two items are equal</li>    <li>!= the two items are not equal</li></ul><p>As well as:</p>

<ul>    <li>&amp;&amp; and</li>    <li>|| or</li></ul><p>A conditional mostly tests for truth. For example, the following code is asking whether what is between the parentheses is true:

<pre><span style="color: #000000"><span style="color: #0000BB">&lt;?php</span><span style="color: #007700">if(</span><span style="color: #0000BB">5</span><span style="color: #007700">==</span><span style="color: #0000BB">2</span><span style="color: #007700">) { </span><span style="color: #FF8000">// then...</span><span style="color: #007700">}</span><span style="color: #0000BB">?&gt;</span></span></pre></p>
<p>In this case the condition is not true, so PHP will not execute what is between the curly brackets. Along these lines, you can use functions that return a boolean value of true of false. For example, the function:</p>

<pre><span style="color: #000000"><span style="color: #0000BB">&lt;?php</span><span style="color: #007700">isset()</span><span style="color: #0000BB">?&gt;</span></span></pre><p>returns a true/false value depending on whether a variable is set.</p>
<p><strong>PHP Tasks</strong>:</p><ol>    <li>Please write some code using the above concepts to loop 10 times and pring &quot;Hello world!&quot; to a browser window. </li>    <li>Once you have successfully completed task 1, add an if statement within the loop to skip loop number 7.</li>    <li>Post your completed and working code to this page. </li></ol><p><strong>PHP Resources</strong>:

<a href="http://devzone.zend.com/node/view/id/628" rel="nofollow">http://devzone.zend.com/node/view/id/628</a>

<a href="http://www.quepublishing.com/articles/article.asp?p=381922&rl=1" rel="nofollow">http://www.quepublishing.com/articles/article.asp?p=381922&rl=1</a>

<a href="http://www.developer.com/lang/php/article.php/947911" rel="nofollow">http://www.developer.com/lang/php/article.php/947911</a></p>
