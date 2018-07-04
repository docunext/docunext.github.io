---
title: Duplicity Error
date: 2007-01-31
---
<pre>
Traceback (most recent call last):  File "/usr/src/duplicity/duplicity-bin", line 373, in ?    if __name__ == "__main__": main()  File "/usr/src/duplicity/duplicity-bin", line 366, in main    if not sig_chain: full_backup(col_stats)  File "/usr/src/duplicity/duplicity-bin", line 142, in full_backup    bytes_written = write_multivol("full", tarblock_iter, globals.backend)  File "/usr/src/duplicity/duplicity-bin", line 91, in write_multivol    tdp.delete()  File "/usr/src/duplicity/duplicity/dup_temp.py", line 92, in delete    path.DupPath.delete(self)  File "/usr/src/duplicity/duplicity/path.py", line 468, in delete    else: os.unlink(self.name)

OSError: [Errno 2] No such file or directory: '/tmp/tmpUzWvD3'</pre>

This results in:

<pre>Warning, found incomplete backup sets, probably left from aborted session</pre>

which isn't cool.

