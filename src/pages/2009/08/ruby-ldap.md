---
title: Ruby LDAP
date: 2009-08-30
tags: ruby
---
This is example on how to use the ruby [LDAP][ldaplink] library:

<pre class="sh_ruby">
#!/usr/bin/ruby
require 'ldap'
$MYHOST = '127.0.0.11'
base = 'dc=example,dc=com'
scope = LDAP::LDAP_SCOPE_SUBTREE
filter = '(objectclass=person)'
attrs = ['sn', 'cn', 'mail']
conn = LDAP::Conn.new($MYHOST, LDAP::LDAP_PORT)
conn.set_option( LDAP::LDAP_OPT_PROTOCOL_VERSION, 3 )
begin
  conn.search(base, scope, filter, attrs) { |entry|
     p entry.dn
     p entry.attrs
     p entry.vals('sn')
     p entry.vals('mail')
     p entry.to_hash
  }
rescue LDAP::ResultError
  conn.perror("search")
  exit
end
conn.perror("search")
conn.unbind
</pre>

[ldaplink]: http://www.docunext.com/

