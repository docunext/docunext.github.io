---
title: Flash Bitmap API Notes
date: 2006-12-17
tags: none
author: Albert Lash
---
I've successfully attached a bitmap to a movie clip using this code:

<pre>sprite.test = new flash.display.BitmapData(30,30,true,0x00FFCC00);

createEmptyMovieClip('mc', getNextHighestDepth());

mc.attachBitmap(sprite.test, getNextHighestDepth());</pre>

However, when I duplicate that movie clip, the bitmap doesn't come along. What gives?"<strong>Method A</strong>"

<pre>duplicateMovieClip (mc,'newone',getNextHighestDepth());

newone.startDrag('false');</pre>

If I attach a new instance of the bitmap to a newly created movie clip, it works, but I can't get it to get attached at the current location of the mouse pointer, which is creating the event to make all this happen. "<strong>Method B</strong>"

<pre>createEmptyMovieClip('newone', getNextHighestDepth());

newone._x = _root._mousex;

newone._y = _root._mousey;

newone.startDrag('false');

newone.attachBitmap(sprite.test, getNextHighestDepth());</pre>

As the code suggests, I've even tried positioning the new movieclip even before attaching the bitmap. Hmmm. Aha, I simply changed the code to reference a different y position, and it works. "<strong>Method B</strong>"

<pre>createEmptyMovieClip('newone', getNextHighestDepth());

newone._y = mc._y;

newone.startDrag('false');

newone.attachBitmap(sprite.test, getNextHighestDepth());</pre>

Now I need to get the new movieclip centered on the mouse pointer. Got it, I needed to use:

<pre>newone.startdrag(lock);</pre>

instead of:

<pre>newone.startdrag('false');</pre>

Awesome!

Also finding that loadvariables hangs upon a post to the server, "Transferring data from... "

Trying to send a php header to close the process:

<pre>header("Content-Type: application/x-www-form-urlencoded");</pre>

That doesn't work, so now I'm exploring the loadVars object instead of loadVariables, however I cant get it to simply POST the variables and leave it at that. It seems to require opening a new window, or refreshing the current one with the response from the server. Ah, OK, this explains it: "You must specify the target parameter to ensure that the script or application at the specified URL will be executed. If you omit the target parameter, the function will return true, but the script or application will not be executed.""A successful send() method call will always open a new browser window or replace content in an existing window or frame. If you would rather send information to a server and continue playing your SWF file without opening a new window or replacing content in a window or frame, then you should use LoadVars.sendAndLoad()."

The naming convention doesn't make much sense to me, but what do I know?

http://www.actionscripts.org/forums/showthread.php3?t=115759

I just learned that Firefox disables javascript to update status bar messages by default, so that's why the "transferring data..." message remains even after the variables have loaded. I was worried that the connection was staying open.

http://www.codingforums.com/archive/index.php?t-49230.html

Now I'm trying to reduce the size of the movie, its about 36k which is actually really quite good, but this is a good exercise for getting to know the bitmap api better. Besides removing a bunch of unnecessary javascript, the rest is going to stay.

Now on to trying to remove an attached bitmap. Though I can't seem to find the differences between attachmovie and attachbitmap - I though I could create a bitmap, attach it to a movie clip, then add / remove that movie clip. However, its not working. What I'm doing instead is making the bitmap transparent instead of removing the movie clip. After that, I'm referencing the bitmap and disposing of it.

<pre>selected_highlight.dispose();</pre>

