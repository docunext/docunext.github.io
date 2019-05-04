---
title: openldap mysql documentation
date: 2006-10-31
tags: ldap,mysql,openldap
---

<strong>New effort as of Oct 2006</strong>

Made some very good progress:

<ol>
<li>Installed slapd
</li>
<li>Followed
<del datetime="2008-12-29T23:39:05+00:00">http://www.noofs.org/doc/ldap_sql.html#tth_sEc2.3
</del> (site is now spam unfortunately - backup available
<a href="http://www.docunext.com/archives/noofs/">here
</a>) and install odbc
</li>
<li>Read very helpful technical docs:
<ul>
<li>
<a href="http://www.openldap.org/devel/cvsweb.cgi/%7Echeckout%7E/servers/slapd/back-sql/rdbms_depend/mysql/backsql_create.sql?tag=HEAD" onclick="window.open(this.href, '_blank'); return false;">BackSQL Create for MySQL
</a>
</li>
<li>
<a href="http://www.openldap.org/devel/cvsweb.cgi/%7Echeckout%7E/servers/slapd/back-sql/rdbms_depend/mysql/testdb_metadata.sql?tag=HEAD" onclick="window.open(this.href, '_blank'); return false;">BackSQL Data for MySQL
</a>
</li>
<li>
<a href="http://www.openldap.org/software/man.cgi?query=ldapsearch&amp;apropos=0&amp;sektion=0&amp;manpath=OpenLDAP+2.0-Release&amp;format=html">OpenLDAP BackSQL Manpage
</a>
</li>
</ul>
</li>
<li>Imported the metadata database tables
</li>
<li>Fiddled with slapd.conf - you will have a database section which connects to the odbc driver using the database username and password. For example, if you are using mysql, the driver would likely be myodbc or myodbc3.
</li>
<li>Tested with:
</li>
</ol>

<pre>ldapsearch -x
</pre>
<strong>Metadata Database Tables</strong>

This is the most challenging part of the process for me, and I think a better understanding of ldap structures would help out immensely. You have to enter a bunch of terms like "inetorgperson" "organizationalUnit" and such, and there are rigid objects and attributes in ldap, like "o", "givenName", "name", etc. I like what I see, I just wish I was more familiar with it.

<strong>UPDATE!!</strong>

Flatmtn does a great job of explaining how to setup back-sql, however the document is outdated, and doesn't acknowledge that Mysql now supports views. So try this:

<pre>CREATE VIEW ldap_entries_test (id,dn,oc_map_id,parent,keyval) AS SELECT uid,CONCAT('uid=',uid,',ou=contacts,dc=docunext,dc=com'),2,1,uid FROM auth_user;</pre>

<strong>Extra help</strong>

<ul>    <li><a href="http://www.openldap.org/faq/data/cache/978.html" onclick="window.open(this.href, '_blank'); return false;">http://www.openldap.org/faq/data/cache/978.html</a></li>    <li><a href="http://www.flatmtn.com/computer/Linux-LDAP.html#LdapBacksql-3" onclick="window.open(this.href, '_blank'); return false;">http://www.flatmtn.com/computer/Linux-LDAP.html#LdapBacksql-3</a> - VERY helpful!</li>    <li><a href="http://www.bind9.net/ldap" onclick="window.open(this.href, '_blank'); return false;">http://www.bind9.net/ldap</a> - long list of links related to ldap</li>    <li><a href="http://www.zytrax.com/books/ldap/ch2/index.html#basic" onclick="window.open(this.href, '_blank'); return false;">http://www.zytrax.com/books/ldap/ch2/index.html#basic</a> - this may be the info I need to "get it"</li>    <li><a href="http://homex.subnet.at/%7Emax/ldap/" onclick="window.open(this.href, '_blank'); return false;">http://homex.subnet.at/~max/ldap/</a> - Good info on TLS</li></ul><hr>

<strong>Research and References</strong>

<a href="http://pacsec.jp/core05/psj05-barisani-en.pdf" onclick="window.open(this.href, '_blank'); return false;">http://pacsec.jp/core05/psj05-barisani-en.pdf</a>

<a href="http://wiki.kaspersandberg.com/doku.php?id=howtos:openldap" onclick="window.open(this.href, '_blank'); return false;">http://wiki.kaspersandberg.com/doku.php?id=howtos:openldap</a> - this one looks very promising.<p><strong>Test Steps</strong></p><ol>    <li>Added "odbc" to /etc/make.conf</li>    <li>Code:</li></ol><p></p><pre>
host user # emerge -pv pam_ldap

These are the packages that I would merge, in order:

Calculating dependencies ...done![ebuild     U ] sys-libs/db-4.2.52_p2-r1 [4.2.52_p2] -bootstrap -doc -java -nocxx -tcltk 3,980 kB [ebuild  N    ] dev-db/unixODBC-2.2.6  -gnome -qt 2,128 kB [ebuild  N    ] net-nds/openldap-2.2.28-r3  +berkdb +crypt -debug -gdbm -ipv6 -kerberos -minimal +odbc +perl -readline +samba -sasl (-selinux) -slp +ssl +tcpd 4,565 kB [ebuild  N    ] sys-auth/pam_ldap-180  +ssl 124 kB

Total size of downloads: 10,798 kB</pre><hr>---------

OLD NOTES:

SETTING UP OPENLDAP WITH MYSQL BACKEND

author: TBONIUS

OpenLDAP is an X.500 Lightweight Directory Access Server used for centralized authentication and directory lookups. This article covers configuring this service to utilize SQL services in order to store its data object. Having these objects stored in a SQL database allow for third party applications access to manage these objects.

PORTS THAT ARE NEEDED:

MySQL 4.x server : /usr/ports/databases/mysql41-server

MySQL 4.x client : /usr/ports/databases/mysql41-client

LibIODBC 3.x : /usr/ports/databases/libiodbc

MyODBC 3.x : /usr/ports/databases/myodbc

OpenLDAP 2.x : /usr/ports/databases/openldap21-server WITH_ODBC="YES"

CONFIGURING THE MYSQL SERVER

OpenLDAP has the option to use many different kinds of databases, in this case we will use MySQL. The first step in setting this up is to create a MySQL database for which OpenLDAP will use.

root@host # mysqladmin create ldap

Next we will create a MySQL account that OpenLDAP will use for our newly created ldap database

root@host # mysql

Welcome to the MySQL monitor.  Commands end with ; or \g.

Your MySQL connection id is 10 to server version: 4.0.18

Type 'help;' or '\h' for help. Type '\c' to clear the buffer.

mysql&gt;grant all privileges on ldap.* to 'ldap'@'localhost'    -&gt;identified by 'password' with grant option;

Query OK, 0 rows affected (0.13 sec)

We of course want to substitute 'password' with the actual password we wish to use for this particular user account

CONFIGURING LIBIODBC TO USE THE MYODBC DRIVER

Quite simply we need to edit two file here to get LibODBC to use the MyODBC driver in accessing the MySQL server.

Take a look at the /usr/local/etc/libiodbc/odbcinst.ini file and make the following changes[ODBC Drivers]

MySQL = Installed[MySQL]

Description=ODBC for MySQL

Driver=/usr/local/lib/libmyodbc3.so

Take a look at the /usr/local/etc/libiodbc/odbc.ini and make the following changes[ODBC Data Sources]

ldap = MySQL LDAP DSN[ldap]

Driver          = /usr/local/lib/libmyodbc3.so

Description     = OpenLDAP Database

Host            = localhost

ServerType      = MySQL

Port            = 3306

FetchBufferSize = 99

User            = ldap

Password        = password

Database        = ldap

ReadOnly        = no

Socket          = /tmp/mysql.sock[ODBC]

InstallDir=/usr/local/lib

Again, substitute password for the actual password we created for the ldap user of the MySQL database.

We can test our current configuration before installing and configuring OpenLDAP. LibIODBC provides a test utility to check DSN configurations.(Note from darxpryte: Upon following this tutorial I've found that iodbctest was not built automatically. This may be fixed later but if you find this to be the case you'll need to do the following:

cd /usr/ports/databases/libiodbc/

make extract

cd work/libiodbc-3.52.2/samples

make install This will install iodbctest into /usr/local/bin/)

Once you install iodbctest, you can do the following to test your connection:

root@host # iodbctest

iODBC Demonstration program

This program shows an interactive SQL processor

Driver Manager: 03.51.0001.0908

Enter ODBC connect string (? shows list): ?

DSN                            | Description---------------------------------------------------------------

ldap                           | MySQL LDAP DSN

Enter ODBC connect string (? shows list):DSN=ldap

Driver: 03.51.06

SQL&gt;show tables;

Tables_in_ldap---------------------

authors_docs

documents

institutes

ldap_attr_mappings

ldap_entries

ldap_entry_objclasses

ldap_oc_mappings

ldap_referrals

persons

phones

result set 1 returned 10 rows.

This shows us that the DSN is configured correctly for LibIODBC to use the MyODBC driver in order to connect to our ldap database we set up on our MySQL Server

If you have problems displaying the DSN names defined in the odbc.ini file via the test program, try exporting the following shell environmental variable:

For csh or tcsh:

setenv ODBCINI /usr/local/etc/libiodbc/odbc.ini

For sh or bash:

export ODBCINI=/usr/local/etc/libiodbc/odbc.ini

CONFIGURING OPENLDAP TO USE MYSQL

During the build of OpenLDAP, we need to pass the WITH_ODBC="YES" option so that the server build the appropriate SQL configurations

After the make install process, we will copy over the slapd.conf file that is configured to use a SQL backend. This file is buried under the OpenLDAP ports directory in the following path:

work/openldap-2.1.30/servers/slapd/back-sql/rdbms_depend/mysql

Change to this directory, from the ports directory of OpenLDAP, and copy the configuration file over&gt; cp slapd.conf /usr/local/etc/openldap

Then we can import the back SQL file from this directory into our running MySQL server database

root@host # mysql &lt; backsql_create.sql ldap

root@host # mysql &lt; testdb_create.sql ldap

Optionally we can import the testdb_data and testdb_metadata files into the database so that we can have example data with which to work

Next we need to edit the /usr/local/etc/openldap/slapd.conf file and make the protper adjustments. We need to setup the slapd service to use a SQL backend under the "SQL database definitions" section

database        sql

suffix          "o=sql,c=RU"

rootdn          "cn=root,o=sql,c=RU"

rootpw          secret

dbname          ldap

dbuser          ldap

dbpasswd        password

subtree_cond    "ldap_entries.dn LIKE CONCAT('%',?)"

insentry_query  "INSERT INTO ldap_entries (dn,oc_map_id,parent,keyval) VALUES (?,?,?,?)"

Go ahead and comment out or delete any other example configurations for alternate SQL connectors such as Postgres and/or MsSQL settings. (Unless of course you are using a Postgres or MsSQL server as your backend

POST INSTALLATION CONFIGURATION

Next, we need to edit the /etc/rc.conf and configure the OpenLDAP server to star on boot by making the following changes

slapd_enable="YES"

slapd_flags='-h "ldapi://%2fvar%2frun%2fopenldap%2fldapi/ ldap://0.0.0.0/"'

slapd_sockets="/var/run/openldap/ldapi"

And finally we need to edit the OpenLDAP startup script and setup the ODBC path for the server to use. Edit /etc/rc.d/slapd file and add the following line:

export ODBCINI=/usr/local/etc/libiodbc/odbc.ini

Just as we performed the iodbctest, this variable is essential for OpenLDAP to know where the configuration file to use for ODBC connectivity

Now we are ready to try and bring up our OpenLDAP server. Let us start by running slapd manually in debug mode to see the output of startup:

root@host # /usr/local/libexec/slapd -d 1

We should see the following at the end of the debug output:&lt;==load_schema_map()&lt;==backsql_get_db_conn()==&gt;backsql_free_db_conn()

backsql_free_db_conn(): closing db connection==&gt;backsql_close_db_conn()&lt;==backsql_close_db_conn()&lt;==backsql_free_db_conn()&lt;==backsql_db_open(): test succeeded, schema map loaded

slapd starting

If this is the given output then it looks like our configuration is correct and we are ready to start up OpenLDAP normally for operation./etc/rc.d/slapd start

This will startup the OpenLDAP server and we can verify it is running with the following command:

root@host # sockstat |grep slapd

ldap     slapd      71838 5  dgram  -&lt; /var/run/log

ldap     slapd      71838 8  stream /var/run/openldap/ldapi

ldap     slapd      71838 9  tcp4   *:389                 *:*

From here, use any OpenLDAP Administration tool of your choice to add, edit and remove data from your LDAP server

