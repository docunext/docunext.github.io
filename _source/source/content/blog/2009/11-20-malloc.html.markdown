---
title: Malloc
date: 2009-11-20
---
In GD over FastCGI, malloc is used with the cdb functions.

<pre class="sh_c">
        /* Word color */
        if (cdb_find(&cdb, color, klen) > 0) { /* if search successful */
            vpos = cdb_datapos(&cdb); /* position of data in a file */
            vlen = cdb_datalen(&cdb); /* length of data */
            val = malloc(vlen); /* allocate memory */
            cdb_read(&cdb, val, vlen, vpos); /* read the value into buffer */
            temp = strtok (val, delimiters);
            red = atoi(temp);
            temp = strtok (NULL, delimiters);
            green = atoi(temp);
            temp = strtok (NULL, delimiters);
            blue = atoi(temp);
            free(val);
        }
</pre>

Malloc refers to memory allocation.

