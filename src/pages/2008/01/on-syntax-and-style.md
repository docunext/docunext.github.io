---
title: On Syntax and Style
date: 2008-01-21
tags: syntax,xpath
---

<div>I've been thinking about syntax just now - especially CamelCase, sentences_with_underscores, and sentences-with-hyphens. Here are my thoughts:
</div>

#### CamelCase

Good because it keeps strings short and sweet. Bad because when you double click a portion of the string, the entire string is selected.

#### sentences_with_underscores

Can be a little harsh on the eyes, too much contrast in a way. Good because in many editors when you double click on a portion of the string, the underscore is used as a delimiter separating the rest of the string. Bad because lots of words make these strings really long.

#### sentences-with-hyphens

This has a smoother visual appeal. The hyphens sort of carry the string along. However, double clicking often leads to selecting the entire string. This method also leads to longer strings.

#### Related: Abbreviations

In my experience as programmer, I've often tried to keep things concise. But one day, a programmer much more skilled and experienced than I explained that long strings representing variables are OK - in fact they are desirable as because they contain more information that other developers can use to figure out what they represent. Case in point, does the variable named emp_id represent empire id, employee id, or employer id? Why not just use employer_id?

With the advent of copy and paste, we don't have to worry about typing too much, do we? But that's not the only problem, page width is also a problem. Code readability can be an issue if soft-wrap (or hard wrap) is used, or if the code reader is constantly scrolling left and right chasing a line of logic.

With object oriented and xpath syntax I find myself stringing together long explicitly named paths, like:

<pre>/__ROOT__/_get/get_employer_by_id/employer_name</pre>

Its easy for other developers to understand, but it makes for code that is simply hard to read. In this case, I'm starting to use variables to represent path target and / or object target. It seems to be fairly common with python to substitute names for imports, as well as nested object and module properties, so why not xpath?
