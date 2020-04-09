---
title: Lua XML and SQL
date: 2009-02-18
---
Though a little hard to find, there are some nice xml projects in lua. Here are two that caught my attention:

<a href="http://etree.luaforge.net/">http://etree.luaforge.net/</a> - includes the ability to output a lua data structure as XML. Nice, but uses Expat. Expat is fine, but most of the bindings I use these days connect with libxml2.

<a href="http://asbradbury.org/projects/lua-xmlreader/">http://asbradbury.org/projects/lua-xmlreader/</a> - Like the name suggests, implements the xmlreader functionality of libxml2. Its a great way of dealing with XML, but I'm not sure if it includes an output function. The author has also written lua cdb bindings - that is awesome.

While not a lua library or project, here's a post about lua tables and xml which includes an XSLT stylesheet which can convert XML into a lua data structure, very interesting!

<a href="http://www.latenightpc.com/blog/archives/2006/02/06/converting-simple-xml-to-lua-tables-with-xslt">http://www.latenightpc.com/blog/archives/2006/02/06/converting-simple-xml-to-lua-tables-with-xslt</a>

There are also some terrific SQL libraries, the one I'm trying out is even a database abstraction layer - LuaSQL. With the help of their examples, this actually works:

<pre class="lua">require "luasql.sqlite3"
env = assert (luasql.sqlite3())
con = assert (env:connect("luasql-test"))
res = con:execute"DROP TABLE metadata"
res = assert (con:execute[[  CREATE TABLE metadata(    id  int(11),    key varchar(50),    value varchar(50)  )]])
list = {  { id=1, key="month", value="May", },}
for i, p in pairs (list) do  res = assert (con:execute(string.format([[    INSERT INTO metadata    VALUES ('%s', '%s', '%s')]], p.id, p.key, p.value)  ))
end
cur = assert (con:execute"SELECT key,value from metadata")
row = cur:fetch ({}, "a")
while row do  print(string.format("Key: %s, Value: %s", row.key, row.value))  row = cur:fetch (row, "a")
end
cur:close()
con:close()
env:close()</pre>

