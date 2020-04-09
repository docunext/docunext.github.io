---
title: Perl Perl Perl Perl Perl Perl Perl
comments:
  - author: Frank
    email: dearfrankg@gmail.com
    date: 06/21/2008 09:14:07 PM
    text: >
      Nice blog - come code examples would be nice :)
  - author: Albert
    email: albert.lash@savonix.com
    date: 06/24/2008 11:30:50 AM
    text: >
      Hi Frank, thanks! I'm working on an open source perl program, so it will all be released soon!
date: 2008-06-21
tags: mod_perl,perl
---
Yup. My world is currently consumed by Perl.
<h4>References</h4>

I think I've finally figured out what's up with references. In PHP, stuff gets created and destroyed on most requests, so there isn't as much opportunity for stuff to persist. When using mod_perl, object can get created, and <em>saved</em>, for future use. In that case, its helpful to keep the objects organized, and to do so I've been using hash references. Why? Well hash references are better than having to copy the object, using twice as much memory. While there is more to it, I've been thinking about references as "bookmarks", "shortcuts", "aliases" or "symbolic links" to the real object. Is this what a pointer is in C? Hope so! That would make a lot of sense.

For example, let's say we're working on a program to manage a school. We've got some data, some interfaces, yada yada yada. We start up our program, and we create a few classrooms:

<pre>
SCHOOL -&gt; CLASSROOM -&gt; 1

SCHOOL -&gt; CLASSROOM -&gt; 2

SCHOOL -&gt; CLASSROOM -&gt; 3</pre>

Then we assign a teacher to a classroom:

<pre>
SCHOOL -&gt; CLASSROOM -&gt; 1 -&gt; Mrs. Crabapple</pre>

So far so good, you still with me? Well let's say we have some information about Mrs. Crabapple. What subject does she teach? Perl programming, OK? Bear with me.

In our program, we're doing something which requires us to find out that information, and maybe some other stuff too. We need to access Mrs. Crabapple's record in relation to the classroom she's in. We use the path previously described:

<pre>
SCHOOL -&gt; CLASSROOM -&gt; 1 -&gt; Mrs. Crabapple</pre>

That's pretty lengthy, huh? Well its worth it, because when you start to have a program running for awhile, its going to have created a lot of objects in memory, and keeping them systematically organized and logically accessible is tantamount. But does that mean we have to keep typing out that long string to get to Mrs. Crabapple's file? NO! Of course not, that would be too difficult. Let's use a reference!

Now here's some perl, the syntax is a little more involved than the pseudo-code above:

<pre lang="perl">$room_teacher = $school-&gt;{ CLASSROOM }-&gt;{ 1 }-&gt;-{ TEACHER }-&gt;{ crabapple }</pre>

In this case, "room_teacher" is the reference. We can then access information about crabapple without having to use the full monty. OK.... what's the big deal. Without knowing too much about perl, persistence, objects, and so on, I often found myself doing this:

<pre lang="perl">
my $room_teacher = $school-&gt;{ CLASSROOM }-&gt;{ 1 }-{ TEACHER }-&gt;{ crabapple }</pre>

The "my" at the beginning tells perl that I want to create something new, called room_teacher, and to fill it with crabapple - in essence, a copy, after which we have two crabapples, requiring twice as much memory.

Don't get me wrong, this <strong>*has*</strong> to be done from time to time. When deciding whether or not to use a reference or not, I ask myself:

<ul><li>Am I going to change this and want to leave the original alone?</li><li>Am I dealing with a regular ( non- singleton ) object?</li><li>Is the original likely to change during the scope of my dealings with it, but I need its characteristics to remain the same which I'm interacting with it?</li></ul>

If I can answer yes to all three, I'll try to use a reference.

Since I don't feel 100% comfortable in my understanding of references, my programs still crash or behave erratically as I add or omit "my" here and there. And I welcome some comments or feedback on the above diatribe on perl references.
<h4>Singletons</h4>

In PHP, I've used singleton classes, but now in mod_perl, they really make sense. I've been thinking of it like this: if there is an object I want to create and be the only one during the creation of your program, a singleton is the way to go. Why would I want to do this? Again its sort of a question of references and memory. If objects of a class will always be or should always be the same, I don't need to create new copies of itself, and worrying about keeping the other copies in-sync. If an object of a class already exists, the class will simply only dish out references to that original object. Thankfully the usefulness of this practice has been recognized, and doing this is pretty simple nowadays.

Alright, I'll give an example. An easy one is a program's configuration. A running program usually only has one way to be configured, so there is no need to have several configurations being created during the life of the program. It can definitely be modified during the running of the program, but there should only be one active version of the configuration at any time. Compare this with the classroom objects I wrote about earlier in the references part. There is a class called classroom, create an object from it called classroom 1, give it some characteristics, then create another classroom object, and give it some different characteristics. Yes, that is logical, it makes sense to have multiple instances of classes, but with a configuration, I only want one.
<h4>Callbacks</h4>

This is the next step of my progress in perl / mod_perl. Again I've used callbacks in PHP, but I just found <a href="http://search.cpan.org/perldoc?Params::CallbackRequest">Params::CallbackRequest</a> which explains callbacks in a different light when it comes to shared memory:

<blockquote>

If you run your templating system under mod_perl, callbacks are just Perl subroutines in modules loaded at server startup time. Thus the memory they consume is all in the Apache parent process, and shared by the child processes. For code that executes frequently, this can be much less resource-intensive than code in templates, since templates are loaded separately in each Apache child process on demand.</blockquote>

That sounds great, but I'm still learning about the intricacies of shared memory with mod_perl 2.0 and apache2-mpm-worker, so I'm not sure if it will affect the program I'm working on. I'm hoping that by creating some of the sub-routines I'm using as callbacks, they'll consume less memory. At this point, I'm still foggy on the scenario, so I'll start experimenting and include my findings here.

¥

