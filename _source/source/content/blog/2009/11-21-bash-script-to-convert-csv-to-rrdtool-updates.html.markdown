---
title: Bash Script to Convert CSV to RRDTool Updates
date: 2009-11-21
tags: awk,bash
---
Before I learned how to use RRDTool, I stored some time lapse data in a simple CSV file.

When I learned how to use RRDTool, I had to convert the old CSV data to the rrd file.

To do so, I used this bash script:

<pre class="sh_sh">
while read LINE; do
    ts=$(date -d "`echo $LINE | awk '{print $1, $2, $3, $4, $5, $6 }' | sed s/,//`" +%s)
+%s | sed -r s/$/:/
    temp=`echo "$LINE" | awk '{print $7}'`
    echo "rrdtool update temps_take_2.rrd ${ts}:${temp}"
done < temps.csv
</pre>

I first changed the human-readable date-time to a UNIX timestamp (number of seconds since January 1, 1970) and set the variable "ts" to its value.

Then I set another variable with the temperature value, and assembled a command to update the rrd database with rrdtool.

This bash script doesn't do it all by any means. I streamed the old CSV data into it with cat and a pipe (STDIN), and then redirected the output (STDOUT) to another file I named "commands.sh". I then executed the commands.sh file with "sh commands.sh".

Most of the above explanation is obvious to some, but I'm explaining what I did in extreme detail for those who may appreciate it, but also for my own understanding. I'm trying to gain a better understanding of UNIX philosophies, one of which is the idea of passing data streams through chains of filters (awk, sed, etc.) connected by pipes (stdin, stdout, file descriptors).

I'm hoping to get a extend my understanding from pipes to forks soon! :-)

