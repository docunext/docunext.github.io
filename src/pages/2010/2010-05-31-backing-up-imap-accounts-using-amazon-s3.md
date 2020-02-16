---
title: Backing Up IMAP Accounts Using Amazon S3
date: 2010-05-31
tags: amazon,backups,imap,s3
---
I'm setting up backup procedures for a client to store weekly backups of their email on Amazon's S3 service.

The IMAP directories use about 50GB of data. At first I thought it might be best to tar and compress all the imap directories using bzip2, but then I realized I'd be transferring much of the same data over and over again. Instead, I'm using gzip to recursively compress each email (though I probably should have checked if bzip2 can do recursion first... doesn't look like it), and then using s3cmd to sync the directories.

The s3cmd tool has some amazing features... its almost like rsync, but I'm not sure if it uses checksums, last modified dates, or both to check for file equivalence. If it uses both, I'll have to do some pre-s3cmd rsync magic before uploading. As it stands, I'm currently using rsync to create a local copy of the imap directories, then using gzip to compress all the emails, and then synchronizing that resulting directory. Yes, its a lot of work locally, but a that's no problem for a late night cron job to reduce the expense of transferring and storing the data.

The really cool thing about s3cmd is that it can transparently use gpg to encrypt the files - surely something necessary for situations like this.

I'd definitely considered using backup-manager - it has support for Amazon s3, but I don't think it can do the individual file compression process I've chosen. Maybe a feature suggestion for them?
