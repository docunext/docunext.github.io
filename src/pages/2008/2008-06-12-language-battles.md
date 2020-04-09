---
title: Language Battles
comments:
  - author: John Lepikhin
    email: john@5070.info
    date: 06/13/2008 12:23:23 PM
    text: >
      Well you compared languages environment (communities, libraries, projects written on it), but not the languages itself and not it's realizations.<br/><br/> - Current PHP interpreter is extremely slow. Even simple programs like empty cycle (for (0..1000){}) perl computes 2 times faster (python is a little faster than PHP, Ocaml is 6 times faster).<br/><br/> - Perl 6, Python and Ocaml can be compiled into bytecode or native code. It makes this languages rather more effective.<br/><br/> - Ocaml like many other functional languages is lazy language. It will not compute expression until it's value is required. For example (on PHP/Perl): $a = some_function_that_takes_much_CPU(). PHP/Perl/Python/Ruby will call this function even if $a will not be used in the future. But not Ocaml. Also, it will not calculate that empty cycle if its value isn't required (yes, cycles have values in functional languages).<br/><br/> - Perl 6, Python, Ocaml, Ruby allows to develop in functional, imperative, object-oriented paradigms. PHP only imperative (PHP 5 has some minimal possibilities to object-oriented paradigm).<br/><br/> - Perl, Python, Ruby and PHP has dynamic type-checking. It allows fast programming, but it much slower on run and allows much more hidden mistakes in code. Ocaml has static implicit typing system.<br/><br/> - PHP language developers have some strange understanding of objects/modules and its usage. In PHP objects are usable for namespacing only.<br/><br/> - In PHP there is no difference between array and hash table. In PHP every array is hash table and vice versa. Yes, this is easier for programmers, but it also slow down interpreter.<br/><br/> - PHP, Ocaml (have no information about Python and Ruby) do not know anything about characters, charsets and languages. They work with bytes and byte sequences. Perl knows it. For example, russian language is widely use charsets koi8-r, cp1251, cp866 and iso8859-5. I can say to Perl: this opened file is in cp1251, program text (strings in it) is in UTF-8. Perl will convert them all into some internal charset. Developer is able to use national characters in regexps, all string functions etc.<br/><br/> - Perl programs can be written on any language. You can use chinese hieroglyphs to name your variables and functions.<br/><br/> - Ocaml and Perl have language preprocessors. It allows to easily extend language syntax and even develop preprocessor to compile your very own language. For example, with camlp4 (Ocaml pre-processor pretty printer) I developed extension which allows to write SQL expressions right in Ocaml code; SQL syntax and types are checked at program compile time.<br/><br/>Web-programming is not depend on language syntax or features. It depends on what technologies language can provide. Most important are XML+XSL, databases engines communications, preloaded/daemon work (FastCGI or Apache module). Almost all languages have bindings to libxml2, libxsl2, libmysqlclient, libpq, libfcgid, etc. Ocaml even have its own webserver with very nice features - Ocsigen.
  - author: Albert
    email: albert.lash@savonix.com
    date: 06/13/2008 05:01:11 PM
    text: >
      Hi John, Thanks so much for commenting. You're right about my omission on language specific - its because I don't know enough about computer programming to clearly understand the differences between static, imperative, and dynamic type-checking characteristics.<br/><br/>I'm glad you said that about web programming! I've chosen my development strategies around those points: using xsl and xml via libxml2 and libxslt, standard sql (prepared in xml format), database abstraction layer, and mod_fcgid. The little programming I do in PHP consists of caching (http headers), authentication and sessions (I want to eventually use http auth instead though), and stream editing for stuff like manipulating dates.<br/><br/>It is possible to compile PHP with the Roadsend PHP Compiler.<br/><br/>I saw ocsigen - looks really cool, but I think OCAML is over my head.<br/><br/>Perl 6 looks very interesting, and I like what I know about perl so far, so I'll likely use it more in the future.
date: 2008-06-12
tags: perl,php,python,ruby,sql,xslt
---
Every once in a while, someone's PHP bashing gets the best of me, and I review some other languages: python, ruby, ocaml, perl, and c mostly. I've dabbled a bit with most except ocaml, and I don't really have a preference. I started using PHP based upon a suggestion from a friend of mine many years ago, and just kept going because it was the path of least resistance.

Amongst the interpreted languages, I've tried out python, perl, and ruby all with reasonable success, and so I'm pretty much planning to continuing to use them all as the situation dictates. Its probably a good idea to be flexible like that.

So how am I feeling about situation dictation?

#### Python

I'm feeling that python is good when you want to hunker down and build a big sophisticated program which can do everything on its own pretty well. The pluses - wsgi, cross platform, awesome community. The downsides (for me), the barrier to entry is still a little high. Its definitely more of a real programming language than perl or php, which can be scripted and run without too much specificity. I'm still at the plowing ahead stage of programming, not so much as the plan-before-build stage. For me, its a lot about convenience. I really like how python can run as a daemon and keep accounting of things - like with fail2ban. That's the kicker for me, if I were to create a monitoring system which needed to keep track of changing dynamics, I'd use python.

#### Perl

I like perl. Its a lot like php in the its easy to get going. Its readily available, has an awesome community, and has tons of libraries out there. However, like python, it lives just outside the web world for me, back in the command line, shell world. Now that I'm using mod_fcgid instead of mod_php, that is less true, but I still have a bit of a tough time using either python and perl with apache.

What's impressed me so much about perl is the work that brad fitzpatrick has done with it - like memcached and djabberd, as well as the spamassassin project. The mod_perl community is also really impressive. There are some pretty amazing mod_perl modules out there, and I'm impressed with how well they work with Apache.

I guess if I were to create a network socket server or an apache module prototype, I'd use perl.

#### Ruby

Of perl, python, and ruby, I'm least familiar with ruby. I've used it on the command line and it seems to have some cool stuff and a good community, so I'm sure I'll be using more of it. Ruby appears to have a lot of web use cases, but I've missed the boat in that regard. Mongrels and ruby on rails is foreign to me, but I'm definitely interested. The RoR stuff and MVC reminds me of Java, which doesn't thrill me. I'd rather write in C, and only concern myself with running the code on free operating systems like FreeBSD and GNU/Linux.

#### PHP

So what about PHP? Well as I've said before, I don't really write much in PHP. I maintain <a href="http://www.nexista.org/blog/">Nexista</a>, but most of the applications which run on it are written in XML, XSLT, and SQL, leveraging the libxml2 and libxslt libraries which have PHP bindings.

Inasmuch, I've thought a lot about rewriting Nexista as an optimized Apache application server, and I might just do that someday. I've started on a python port, but haven't made it too far. It might be possible to get parts of it working on Apache using existing modules like mod_sqil and mod_xslt, and then fill in the gaps with customized c-based modules, or maybe ever mod_perl modules.

¥

