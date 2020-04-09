---
title: Transformation Pipelines
date: 2009-12-05
tags: datamapper,json,ruby,sinatra,xml,xsl
---
As I work on [Regdel, a (Ruby, Sinatra, Datamapper)-powered accounting web application](http://www.regdel.com/), I'm revamping the future of how I will develop web applications.

Today I rely heavily on raw SQL, XML,  XSL, and Javascript (mainly jQuery). In the future, I will definitely continue to leverage these awesome technologies, but I'm really getting into object-relational mappers, in particular DataMapper.

I taught myself how to develop software and object-oriented programming was a little vague for a long time. I did get into it with PHP when I figured out the [singleton concept](http://www.docunext.com/). With [Ruby, object-oriented programming is an entirely new experience - its "frickin' magnificent"](http://www.docunext.com/blog/).

To a large degree, SQL is out. I'm certain I'll still use it from time to time, but DataMapper does a very impressive job with what I've needed SQL for, even the nitty-gritty tasks, like associations (foreign key constraints).

What about XML and XSL? I'm definitely going to keep using XML and XSL, but in a slightly different manner: as steps in transformation pipelines. XML can be transformed by XSL to a couple of different formats, including XML again, and that's how I'm starting to use it. I'll take a very raw XML document, then transform it into a chunk of XHTML, which is then transformed again by XSL into the final result. That process may even need to repeat a few times!

Why do I think that is the right way for me to develop web applications? Because its **easy and fast**. Some may argue whether XSL is easy or not, and that's why I specify "for me" in the question! For me, its always been somewhat easy because its clear what XSL can and cannot do. **With transformation pipelines, its getting easier**. Its **fast** because it fits within existing HTTP caching frameworks, and when XSL documents are cached, the transformations are faster. Plus, in cases of high volume, dynamic results can be included with ESI, so the entire resulting document need not be re-published every time.

DataMapper has the ability to serialize objects to different formats too, which is nice, but the to_xml serializer doesn't yet support associations as of this writing. It does support JSON though, which is what I plan to use for populating forms. That's why I don't specify the transformation pipelines as strictly XSL in the title of this post - the transformation pipelines may include markdown or JSON, as well as XML and XHTML.

Surprisingly, I couldn't find any XSL tools for use with Sinatra or Rack, so I wrote [some](http://www.docunext.com/) (which was easy thanks to Ruby!). Now I'm working on publishing as gems.

I'm excited to see transformation pipelines and object-relational mappers come together within Datamapper, Sinatra, and Rack. Are you?

See also:

* <http://github.com/docunext/1bb02b59>

