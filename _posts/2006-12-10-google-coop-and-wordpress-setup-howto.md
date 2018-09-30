---
title: Google coop and Wordpress Setup Howto
comments:
  - author: admin
    email: albert.lash@savonix.com
    ip: 72.70.93.44
    url: http://www.docunext.com/
    date: 12/10/2006 02:19:42 PM
    text: >
      Another thought: Google coop = del.icio.us killer.
  - author: Nico
    email: nv@rezonova.com
    ip: 84.101.174.121
    url:
    date: 12/27/2006 10:17:49 AM
    text: >
      Hello,<br/><br/>for the last point can I do this when the url rewriting is activate ?<br/><br/>Thanx
  - author: admin
    email: albert.lash@savonix.com
    ip: 71.162.104.37
    url: http://www.docunext.com/
    date: 12/27/2006 10:24:06 AM
    text: >
      Yes. As an example of Google coop and Worpress pretty permalinks, visit <a href="http://www.informedbanking.com/resources/blog/?page_id=16" rel="nofollow">Informed Banking Search</a> and you'll see that the get variable will work, even with mod_rewrite, or pretty permalinks as wordpress puts it.<br/><br/>Then view the rest of the site to see the permalinks in action.
  - author: Nico
    email: nv@rezonova.com
    ip: 84.101.174.106
    url:
    date: 12/29/2006 07:08:54 AM
    text: >
      Ok, It's works perfectly. Thanks a lot.
date: 2006-12-10
---
<a href="http://www.google.com/coop/">Google coop</a> is a natural companion to <a href="http://wordpress.org/">Wordpress</a> (or other types of) blogs. Here's how I setup Google coop on the <a href="http://www.informedbanking.com/resources/blog/">Informed Banking Blog</a>:

1. Setup Google coop search engine, following their instructions

2. Create a new page template in Wordpress - I copied wordpress/wp-content/themes/default/page.php to ./google_search_coop.php, but you can just create a new file just as easily:

<pre>cd $your-wordpress-directory

cd wp-content/themes/

cd $your-current-theme

touch google_search_coop.php</pre>

3. Edit the page template so that you can edit it in the Wordpress Theme Editor:

<pre>&lt;?php/*

Template Name: Google Coop Search Setup*/?&gt;?</pre>

4. You'll probably want to add your theme's header and footer:

<pre>&lt;? php get_header(); ?&gt;</pre>

and

<pre>&lt;? php get_footer(); ?&gt;</pre>

5. Go back to Google coop, choose your custom search engine, then select control panel, click code, and the second option down is "Search box and search results code for your website", expand that, then enter the target url (I used my blog URL)


<pre>http://www.informedbanking.com/resources/blog/</pre>

6. Then click Save Changes, and then copy and paste the code from the text areas, and paste them into your new Wordpress page template, between the header and footer snibbets.

7. This is the key step: add a new page using the Wordpress "Write Page" tab, save an empty page using your new page template (expand the Page Template tab on the right hand side, and you should see your new template).


8. Once you've created your new page, click on "View page" and note the URL. If it has "?page_id=some_number", then you'll have to add that as a hidden input variable in the Google coop form. In my case, this is the element I use:

<pre>&lt;input type="hidden" name="page_id" value="16"/&gt;</pre>

I'm not sure if that last step is required, but I did it and it works. :-)

Last but not least, the working example:

<a href="http://www.informedbanking.com/resources/blog/?page_id=16&cx=002720505717700354312%3A_ljrxajcpvy&q=banks&sa=Search&cof=FORID%3A11#1355">Informed Banking Google coop Search Engine</a>

<a href="http://digg.com/software/Google_coop_and_Wordpress_Setup_Howto" style="border: 0px;">


¥

