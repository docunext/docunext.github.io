---
title: Another Gotcha with the Rails 3.1 Asset Pipeline Or Why Are My jquery ujs AJAX Requests Triggered Twice 
comments:
  - author: Ariel De La Rosa
    email: ariel@globalxolutions.com
    ip: 66.65.51.33
    url:
    date: 11/15/2011 12:19:02 AM
    text: >
      Hi Guys, I ran into the same problem.<br/><br/>At my end what I discovered is that as I was using rails 3.1.1 with Boiler-plate-html5 for resetting, boilerplate adds its own loading to jQuery and jQuery-ui. Therefore it appears twice at the time of submitting a remote-data post.<br/><br/>Hope it helps!
date: 2011-10-15
tags: asset pipeline,javascript,jquery,rails3
---
#### This gotcha with the Rails 3.1 Asset Pipeline is tricky!

Say you want to statically render your assets for your production environment, but don't want to use a digest.

**Watch out!** If you do so in the working directory of your development environment, you might end up including all your assets twice. You might not even notice unless **jquery-ujs powered ajax requests like form submits get triggered twice**.

Here's what happened to me:

1. I set config.assets.digest = false in config/environments/production.rb.
2. I ran rake assets:precompile from within my development working directory. This resulted in the files I specified in app/assets/javascripts/application.js to get bundled into a single file located in public/assets/application.js.
3. Then when I would run a development server from within that same development working environment, the assets pipeline would generate links to the javascript files I specified in app/assets/javascripts/application.js, including one for 'assets/application.js'.
4. The response for the request to 'assets/application.js' would be the static file in the public directory. **Uh-oh - that one already contains the bundle of all the files specified in 'app/assets/javascripts/application.js'**!
5. Sure, it makes sense to have RedBrick or Thin-based Rack servers serve static files in development mode, but perhaps, if the assets pipeline is on, it should skip serving the static files in public/assets/application.js or public/assets/application.css?

As a workaround, I set my config.assets.prefix in config/environments/development.rb to /devassets. Then of course I have to handle images for web-app-theme (and rails admin, too probably), so I created a folder in public called devassets and created symlink in it to public/images/web-app-theme.

Its a pain, sure, but I'm confident these asset pipeline issues will get sorted out soon enough.

I also discuss this at StackOverflow:

<blockquote><pre>
Thanks to this dialog:

https://github.com/rails/jquery-ujs/issues/208

I was able to discover that jquery and jquery_ujs were getting included twice.

I guess the jquery-rails gem automatically puts them into application.js, and then I had them included in application.js as well.

Seems like for whatever reason application.js automatically bundles everything in app/assets/javascripts/ - even when I remove all the requires.

So, if your :remote => true forms are getting submitted twice, try checking application.js.

Hope this helps!

UPDATE: I believe this might have had something to do with me pre-rendering my assets without using a digest, so then when my development environment adds script tags in the html head dynamically from the requires in app/assets/application.js, it also adds one for what should be an empty dynamic application.js, except the static one from public/assets gets loaded. Confusing? Yep!
</pre></blockquote>

Github:

<blockquote><pre>
I have an idea as to why this might happen more that we'd expect. Take this scenario:

Production env has assets digest turned off, rakes precompile assets, which creates application.js in public/assets/. Running in dev mode, the app/assets/javascripts/application.js seperately includes the files in isolated script tags, but also includes the default application.js file, which has the same path as the statically rendered one, which in this case bundles the already included files. I get around this by setting config.assets.prefix to '/devassets' in config/environments/development.rb.
</pre></blockquote>

¥

