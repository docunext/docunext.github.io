---
title: Pluggable Authentication Modules PAM 
date: 2007-02-01
tags: none
author: Albert Lash
---
PAM is a very flexible tool for authentication. I use it with Apache for realm-based authentication via MySQL with the help of pam_mysql, and I'm trying to set it up so that there is a "WHERE" clause in the SQL statement.

It goes like this:

<pre>auth required pam_mysql.so ignore_root user=user_name passwd=pass_key db=db_name table=table_name \

usercolumn=user_column_name passwdcolumn=password_column [where=another_column_name='value'] \

crypt=your_crypt_setting</pre>

Works like a charm!

