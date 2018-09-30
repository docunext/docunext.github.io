---
title: Questions about Pycoon
date: 2008-01-01
tags: python
---
I just emailed Andrey some questions about pycoon:

OK, cool. Here are some notes I took while exploring:

The pycoon process:

<pre>
1. pycoon/__init__.py - main()
2. pycoon/wsgi/cherrypyserver.py - pycoonFactory()
3. pycoon/wsgi/__init__.py __init__
4. pycoon/wsgi/__init__.py __call__
5. pycoon/wsgi/__init__.py process
6. pycoon/environment.py - why environment? is it used for mount? or
for mapping to the filesystem?
</pre>

The initialization process seems a little bit confusing, but that
might be because I'm new to python. I did a bunch of tests and stuff
seems to work well. Can you give an example of what an action would
look like? In nexista I'd do something like this:

<pre class="sh_xml">
&lt;map:action type="redirect" params="/new-url/"/>
</pre>

Would data sources be accessed via action components? And what about

python scripts? Would it be possible to include a script in a pipeline

match? In nexista I'd do this:

<pre class="sh_xml">
&lt;map:script src="lib/simple_script.php"/>
</pre>

