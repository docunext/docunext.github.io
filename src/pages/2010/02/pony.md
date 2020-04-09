---
title: Pony Easy Emailing with Ruby
date: 2010-02-21
tags: email,gems,sinatra
---
I just found out about Pony, a Ruby gem for sending emails.

The cool thing about Pony is how simple it is. Good work, people!

<pre class="sh_ruby">
  Pony.mail(:to => 'email@example.com', :via => :smtp, :smtp => {
    :host     => 'smtp.example.com',
    :port     => '25',
    :user     => 'username',
    :password => 'passkey',
    :auth     => :plain,
    :domain   => "example.com"
  },
  :from => 'me@example.com', :subject => 'hi', :body => 'Hello there.')
</pre>

I'm planning on using this with Sinatra, but I'll probably end up using it with some Ruby scripts as well.

<div class="rtfl"><iframe src="http://rcm.amazon.com/e/cm?t=inforbanki-20&o=1&p=8&l=as1&asins=1590598210&fc1=000000&IS2=1&lt1=_blank&m=amazon&lc1=0000FF&bc1=000000&bg1=FFFFFF&f=ifr" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe></div>
Speaking of which, I bought a book about using Ruby for systems administration awhile back. It had some really cool ideas in it, but I wasn't as comfortable with Ruby back then as I am now.

I definitely have to give this book a review!

More information: <a href="http://www.docunext.com/">Ruby Pony @ Docunext</a>

