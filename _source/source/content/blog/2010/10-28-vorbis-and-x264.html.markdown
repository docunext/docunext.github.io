---
title: libx264
date: 2010-10-28
tags: audio
---
I'm using new video conversion options:

<pre class="sh_sh">
ffmpeg -r 1 -i ~/Music/tmp.avi -f avi -acodec mp2 -ab 64k -ar 22050 -ac 1 -vcodec libx264 -vpre veryfast -b 768k -bt 768k -threads 2 ~/Music/tmp2.avi
</pre>

Additional bonus, rotate a video 90 degrees with mencoder:

<pre class="sh_sh">
mencoder -vf rotate=1 -o 2010-10-14_09-10-04_980_.3gp  -oac pcm -ovc raw 2010-10-14_09-10-04_980.3gp
</pre>

The "veryfast" preset doesn't come on Ubuntu by default:

<pre>
coder=1
flags=+loop
cmp=+chroma
partitions=+parti8x8+parti4x4+partp8x8+partb8x8
me_method=hex
subq=4
me_range=16
g=250
keyint_min=25
sc_threshold=40
i_qfactor=0.71
b_strategy=1
qcomp=0.6
qmin=10
qmax=51
qdiff=4
bf=3
refs=2
directpred=1
trellis=1
flags2=+bpyramid-mixed_refs+wpred+dct8x8+fastpskip
wpredp=1
rc_lookahead=20
</pre>

