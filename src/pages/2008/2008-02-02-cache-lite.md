---
title: Cache Lite
date: 2008-02-02
---
I noticed on the RoundCube trac recently that they've been changing their code to use POST when anything is updated or changed - this is a good thing! It will provide the ability to use Cache_Lite.

I noticed that a lot of the AJAX requests are served data which seems like it could be cached. It appears that some of the HTML that is delivered directly to the client is cached, but not the AJAX data streams. Granted, this is a tricky thing to cache, the data will most likely change quite often.

However, if freshness is revalidated and the cache purged upon every POST, then theoretically it shouldn't be a problem.

I setup Cache_Lite to try it out and it doesn't do much, mainly because the client still has to do a lot of javascript operations. In some ways, I think that CircleBox performance can also be improved by not doing complex DOM updates via AJAX. If the entire page is rendered and cached, the client won't have to re-parse the AJAX response and updated the document. Granted, its no good for the cool drag-and-drop functions that RoundCube has got going on, but I won't touch those. All I'm trying to do is speed up browsing. I'll have to try it out and see how it goes.
