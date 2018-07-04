---
title: Amazon Glacier Tools for Debian Ubuntu Mint
date: 2012-12-06
tags: amazon,backups,s3
---
I've been using Amazon's S3 (simple storage service) for a couple years and find it to be very useful. I've used it for serving static assets for some websites I run as well as storage for file backups.

#### What do I like about S3?

* Cheap
* Reliable
* Extendable - useable with Amazon's cloudfront content delivery network

Amazon Glacier is an interesting service offering. Its perfect for television and movie studios, news agencies, and libraries who need to store massive amounts of archival data that is infrequently accessed.

I am interested in using it as a backup solution.

#### What interests me about Amazon Glacier?

* Cheaper than S3
* Not readily accessible (yes, I like that)
* Archived files are encrypted (though I am considering pre-encrypting them)

#### Amazon Glacier Clients

##### SAGU

So last week I was ready to give Glacier a try. I searched for an acccessible client and found Simple Amazon Glacier Uploader (SAGU).

Its a Java GUI application and it works fine. I prefer command line utilities, but this was just for evaluation so I tried it out.

The UI is a little annoying in that when you try and retrieve a file, the download window stays open for the four plus hours required to ready the data.

##### glacier-cli

Since I'm an avid git-annex user, I was thrilled to learn about glacier-cli. It is a python script built on top of boto that enables git-annex to use Amazon Glacier as a "special remote". Its still in the works, so although I have glacier-cli installed, I haven't gotten it integrated with git-annex yet.

Here's a quick and minimal example of using glacier-cli:

<pre>
all@hedless:~$ glacier vault list
svx-pre-2013
all@hedless:~$ glacier archive upload svx-pre-2013 myawesomearchive.dar
</pre>

I found another cli tool called amazon-glacier-cmd-interface. It requires an even newer version of boto than glacier-cli, so I haven't tried it out yet.

#### Summary

Glacier is still relatively new, so there aren't as many tools available for it as S3. My favorite S3 utility is the simple s3cmd tool. I have also used git-annex's S3 support. I wonder if that is built-in, or if it uses an external library like it is using for Glacier.

Also noteworthy it the odd pricing structure of Glacier. It might not be as inexpensive as it seems.

I'll likely keep trying out the service for the time being. I hope to be able to use it with git-annex soon.

