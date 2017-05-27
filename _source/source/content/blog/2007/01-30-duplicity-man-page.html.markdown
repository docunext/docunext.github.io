---
title: Duplicity Man Page
date: 2007-01-30
---
For my own reference: <H2><A NAME="sect4" HREF="#toc4">Options</A></H2><DL><DT><B>--allow-source-mismatch</B> </DT><DD>Do not abort on attempts to use the same archive

dir or remote backend to back up different directories.  duplicity will

tell you if you need this switch. </DD><DT><B>--archive-dir </B><I>path</I> </DT><DD>When restoring, specify

the local archive directory.  This option is not necessary, but if hash

data is found locally in <I>path</I> it will be checked against remote files. </DD><DT><B>--cleanup</B></DT><DD>Delete the extraneous duplicity files on the given backend. Non-duplicity

files, or files in complete data sets will not be deleted.  This should

only be necessary after a duplicity session fails or is aborted prematurely.</DD><DT><B>--encrypt-key </B><I>key</I> </DT><DD>When backing up, encrypt to the given public key, instead

of using symmetric (traditional) encryption.  Can be specified multiple

times. </DD><DT><B>--exclude </B><I>shell_pattern</I> </DT><DD>Exclude the file or files matched by <I>shell_pattern</I>.

If a directory is matched, then files under that directory will also be

matched.  See the <B>FILE SELECTION</B> section for more information. </DD><DT><B>--exclude-device-files</B></DT><DD>Exclude all device files.  This can be useful for security/permissions reasons

or if rdiff-backup is not handling device files correctly. </DD><DT><B>--exclude-filelist</B><I>filename</I> </DT><DD>Excludes the files listed in  <I>filename</I> See the <B>FILE SELECTION</B>

section for more information. </DD><DT><B>--exclude-filelist-stdin</B> </DT><DD>Like <B>--exclude-filelist,</B>

but the list of files will be read from standard input.  See the <B>FILE SELECTION</B>

section for more information. </DD><DT><B>--exclude-globbing-filelist </B>filename </DT><DD>Like <B>--exclude-filelist</B>

but each line of the filelist will be interpreted according to the same

rules as <B>--include</B> and <B>--exclude.</B> </DD><DT><B>--exclude-other-filesystems</B> </DT><DD>Exclude files on file

systems (identified by device number) other than the file system the root

of the source directory is on. </DD><DT><B>--exclude-regexp </B><I>regexp</I> </DT><DD>Exclude files matching

the given regexp.  Unlike the <B>--exclude</B> option, this option does not match

files in a directory it matches. See the <B>FILE SELECTION</B> section for more

information. </DD><DT><B>--file-to-restore </B><I>path</I> </DT><DD>This option may be given in restore mode,

causing only <I>path</I> to be restored instead of the entire contents of the

backup archive. <I>path</I> should be given relative to the root of the directory

backed up. </DD><DT><B>-f</B>, <B>--full</B> </DT><DD>Indicate full backup.  If this is set, perform full backup

even if signatures are available. </DD><DT><B>--force</B> </DT><DD>Proceed even if data loss might

result.  Duplicity will let the user know when this option is required. </DD><DT><B>-i</B>,<B>--incremental</B> </DT><DD>If this is set, duplicity will abort if old signatures cannot

be found.  The default is to switch to full backup under these conditions.</DD><DT><B>--include </B><I>shell_pattern</I> </DT><DD>Similar to <B>--exclude</B> but include matched files instead. Unlike <B>--exclude</B>, this option will also match parent directories of matched

files (although not necessarily their contents).  See the <B>FILE SELECTION</B>

section for more information. </DD><DT><B>--include-filelist </B><I>filename</I> </DT><DD>Like <B>--exclude-filelist</B>,

but include the listed files instead.  See the <B>FILE SELECTION</B> section for

more information. </DD><DT><B>--include-filelist-stdin</B> </DT><DD>Like <B>--include-filelist</B>, but read the

list of included files from standard input. </DD><DT><B>--include-globbing-filelist </B><I>filename</I></DT><DD>Like <B>--include-filelist</B> but each line of the filelist will be interpreted

according to the same rules as <B>--include</B> and <B>--exclude.</B> </DD><DT><B>--include-regexp </B><I>regexp</I></DT><DD>Include files matching the regular expression <I>regexp</I>. Only files explicitly

matched by <I>regexp</I> will be included by this option.  See the <B>FILE SELECTION</B>

section for more information. </DD><DT><B>--list-current-files</B> </DT><DD>Lists the files currently

backed up in the archive.  The information will be extracted from the signature

files, not the archive data itself.  Thus the whole archive does not have

to be downloaded, but on the other hand if the archive has been deleted

or corrupted, this command may not detect it. </DD><DT><B>--no-encryption</B> </DT><DD>Do not use GnuPG

to encrypt files on remote system.  Instead just write gzipped volumes. </DD><DT><B>--no-print-statistics</B></DT><DD>By default duplicity will print statistics about the current session after

a successful backup.  This switch disables that behavior. </DD><DT><B>--null-separator</B> </DT><DD>Use

nulls (\0) instead of newlines (\n) as line separators, which may help when

dealing with filenames containing newlines.  This affects the expected format

of the files specified by the --{include|exclude}-filelist[-stdin] switches

as well as the format of the directory statistics file. </DD><DT><B>--scp-command </B><I>command</I></DT><DD>This option only matters when using the ssh/scp backend.  There <I>command</I>

will be used instead of scp to send or receive files. <I>command</I> must have

the same syntax as scp.  This option can also be used to give extra arguments

to scp, for instance "--scp-command 'scp -i foo'".  The default is "scp". </DD><DT><B>--sign-key</B><I>key</I> </DT><DD>This option can be used when backing up or restoring.  When backing

up, all backup files will be signed with keyid <I>key</I>. When restoring, duplicity

will signal an error if any remote file is not signed with the given keyid.<I>key</I> should be an 8 character hex string, like AA0E73D2. </DD><DT><B>--ssh-command </B><I>command</I></DT><DD>Use <I>command</I> instead of "ssh" to execute commands on the remote side.  This

only matters when using the ssh/scp backend.  See <B>--scp-command</B> for more information.</DD><DT><B>--remove-older-than </B><I>time</I> </DT><DD>Delete all backup sets older than the given time.

If old backup sets will not be deleted if backup sets newer than <I>time</I> depend

on them.  See the  <B>TIME FORMATS</B> section for more information. </DD><DT><B>--short-filenames</B></DT><DD>If this option is specified, the names of the files duplicity writes will

be shorter (about 30 chars) but less understandable.  This may be useful

when backing up to MacOS or another OS or FS that doesn't support long filenames.</DD><DT><B>-t</B><I>time</I><B>, --restore-time </B><I>time</I> </DT><DD>When restoring, specify the time to restore to.</DD><DT><B>-v</B><I>[0-9]</I><B>, --verbosity </B><I>[0-9]</I> </DT><DD>Specify verbosity level (0 is total silent, 3 is

the default, and 9 is noisiest). </DD><DT><B>--verify</B> </DT><DD>Enter verify mode instead of restore. If the --file-to-restore option is given, restrict verify to that file or

directory.  duplicity will exit with a non-zero error level if any files

are different.  On verbosity level 4 or higher, log a message for each file

that has changed. <P> <P> </DD></DL>

