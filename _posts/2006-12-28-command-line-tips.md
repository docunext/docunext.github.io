---
title: Command Line Tips
date: 2006-12-28
tags: none
author: Albert Lash
---
Working with command line while at first intimidating is a simple and practical means to interact with the computer.

Basic Commands to get you started. follow each command by hitting enter

pwd - tells you where you are in the computer

ls - will list the files wherever you are. For example if you're on the desktop ls will show each folder on the desktop.

ls -la - will give a detailed list of the files in the current directory

cd directory name here - changes the directory. now's a good time to hit pwd you'll see you'll see you're in a new directory

cd .. - returns you to the previous directory

mkdir - creates a new folder in the current directory

rmdir - will delete files only if they are empty.

rm -rf - Will force delet if a folder contains other materials

control c - will stop a function

control z - will send it to the background

fg - brings the afore mentioned back to the fore ground

nano  - brings up a text editor. This is great if you want to create a series of commands for something like Image magick

cat - outputs the contents of a file"&gt;" - replaces data into a document"&gt;&gt;" - adds data to the end of the document

If you use the ls -la function you notice a string of letters interrupted by dashes to the left of each file. These letters indicates the privalages for the individual user, the group, and the owner.

W means someting is writable.

R means it is readable.

X means it is executable.

Using chmod and a series of 4 numbers you can change the privelags for the file.  "The first digit  selects       the  set  user  ID (4) and set group ID (2) and sticky (1) attributes.  The second digit selects permissions for the user who owns the file: read (4), write (2), and execute (1); the third       selects permissions for other users in the file's group, with the same values; and the fourth for other users not in the file's group, with the same values. (man chmod)"

