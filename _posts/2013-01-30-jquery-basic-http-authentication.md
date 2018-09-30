---
title: jQuery Basic HTTP Authentication
date: 2013-01-30
tags: jquery, authentication, security
---
I've finally got Basic HTTP authentication working in a manner that is
relatively secure, user-friendly, and has a logout.

### Description
This solution uses jQuery to send credentials supplied in an HTML for as a 
Basic Authorization header to NGINX using ajax. It doesn't look like HTTP auth
from the user perspective - it doesn't even revert back to it if the auth fails.

It is secure because there are actually two ajax requests; one to get a random
salt from the server (updating the db in the process), and another to send the
authorization header. The first request is to prevent replay attacks. Before the
second ajax request, the salt and the password are hashed so that the password
is never sent in the clear.

### Ingredients

1. Nginx with the lua module
2. libpam-pgsql library 
3. Postgres with the pgcrypto extension
4. jQuery
5. Concepts and js encryption code from [Paj][paj]
6. Concepts from [Peej][peej] about HTTP Authentication

### Configuration and Code Examples

### Nginx

Nginx is capable of overriding the status of an error, in this case, the 401
status code gets changed to 403, not authorized, to avoid having the browser
prompt the user for their credentials again.

    location = /cgi-bin/authenticate.cgi {
      auth_pam "Login";
      default_type text/plain;
      error_page 401 =403 @hmm;
      echo '';
    }
    location @hmm {
      echo '';
    }
    location /cgi-bin/salt.cgi {
      access_log off;
      content_by_lua_file '/usr/local/lib/salt.lua';
    }

### Lua
The <tt>/usr/local/lib/salt.lua</tt> file:

    luasql = require "luasql.postgres"
    json = require "json"
    mysalt = math.random(1000,10000).."h"
    envv = assert (luasql.postgres())
    con = assert (envv:connect("dbname", "dbuser", "dbpass", "127.0.0.1", 5432))
    res = assert(con:execute("UPDATE account SET salt = '"..mysalt.."' WHERE email = '"..ngx.req.get_uri_args()["email"].."' OR  username = '"..ngx.req.get_uri_args()["email"].."'"))
    con:close()
    envv:close()
    ngx.header.content_type = "application/json"
    ngx.say(json.encode( {salt=mysalt} ))

### jQuery
<pre><code>
// courtest of stack overflow...
function make_base_auth(user, password) {
  var tok = user + ':' + password;
  var hash = btoa(tok);
  return "Basic " + hash;
}

$('#userLogin').submit(function(e) {
  e.preventDefault();

  var username = $('#inputEmail').val();

  $.ajax({
    url      : '/cgi-bin/salt.cgi',
    type     : 'GET',
    async    : false,
    data     : { email: username },
    dataType : 'json' 
  }).done(function(json) {

    var salt = json["salt"];
    var hash = hex_sha256($('#inputPassword').val());
    var password = hex_hmac_sha256(salt, hash);

    $.ajax({
      url      : '/cgi-bin/authenticate.cgi',
      type     : 'GET',
      headers  : { Authorization: make_base_auth(username, password) },
      success  : function(){
        setTimeout(function() { window.location = '/'; }, 2000);
      },
      error    : function(){ console.log('error'); }
    });

  });

});

$(".logout").live('click', function(e) {
  e.preventDefault();
  
  $.ajax({
    url      : '/cgi-bin/authenticate.cgi',
    type     : 'GET',
    username : 'anony',
    password : 'mouse'
  });
});
</code></pre>

### Postgres and libpam
Part of the <tt>/etc/pam_pgsql.conf</tt> file:

<pre><code>
pw_type=clear
auth_query = select encode(hmac(password, salt, 'sha256'),'hex') as password \
  from account where (username = %u OR email = %u) and email_confirmed IS NOT FALSE
</code></pre>

The password is stored in the database as a sha256 hash, but I set it as clear
in the conf file so that I can do the hmac in the auth query.

### Feedback
Security is best when scrutinized. I'd welcome your feedback, questions, or
concerns.

### Update Mar 27, 2013
I'm not using this solution anymore, but it was fun to explore - doing so taught
me a lot about security. I am using something similar now:

* No HTTP authentication, I've switch to using Rails for authentication using
  bcrypt to store the password
* The Rails app creates a PKI key, based on [these concepts from Josh][josh],
  the PEM key of which is stored in the Rails encrypted and signed cookie
* The login form includes the PKI modulus and initialization vector
* Javascript from [TWJ][twj] encrypts the raw password with the public key
* Rails uses the pem key stored in the cookie to decrypt the password, which it
  then uses to authenticate the user

I probably *will* buy an SSL certificate at some point, but I'd rather not.
I really don't see them as being much more secure. There are many websites where 
the only truly private data that gets transferred or not stored in plaintext on
the server is the password.

[paj]: http://pajhome.org.uk/crypt/md5/index.html
[peej]: http://www.peej.co.uk/articles/http-auth-with-html-forms.html
[josh]: http://iamjosh.wordpress.com/2008/03/18/encrypting-login-password-without-ssl-in-ruby-on-rails/
[twj]: http://www-cs-students.stanford.edu/~tjw/jsbn/
