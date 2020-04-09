---
title: Rails 3 and jQuery by Example
date: 2011-10-15
tags: jquery,rails3
---
I'm finally digging into the jQuery setup with Rails 3.1. As you are all likely aware, jQuery is the new default javascript language in Rails 3.1. This is great, in my opinion. I really like jQuery - so much that I leaned away from Rails 2.x for awhile because of its tight integration with Prototype.

jQuery and Rails are paired by default, but I am also digging into jquery-ujs - an ubobtrusive scripting adapter for jQuery.

Specifically, this means:

* The ability to use ":remote => true" with Rails form\_for and link\_to helpers.
* AJAX updates!
* The prevention of double form submits.
* The ability to make POST, PUT, and DELETE requests from hyperlinks.

Sweet! Especially with regard to AJAX updates, and that's what I've been working with recently.

## jQuery and Rails 3 AJAX Form Submission and Flash Update

Here's an example of an AJAX form submission and a response to update the page flash. It requires several components:

* The form view
* The controller action
* The javascript response

#### The AJAX Form Submission: ":remote => true"

All that's required for a form to use AJAX is the :remote argument set to true. Here's an example of a Rails 3 form that is set to submit via AJAX:

<pre class="terminal">
    = form_for(Comment.new, :remote => true) do |f|
      = f.hidden_field :commentable_id, :value => resource.id
      = f.hidden_field :commentable_type, :value => resource.class
      = f.label :comment
      %br/
      = f.text_area :comment, :rows => 2
      %br/
      = f.submit "Post Comment"
</pre>

#### Using The Rails 3 Controller "respond\_to" Method

First I placed this line at the top of my CommentsController:

<pre class="sh_ruby">
respond_to :js, :html
</pre>

Then the create action:

<pre class="sh_ruby">
  def create
    params[:comment][:user_id] = current_user || -1
    @comment = Comment.new(params[:comment])
    flash[:notice] = "Comment created. It will need to be approved by a moderator." if @comment.save
    respond_with( @comment, :layout => !request.xhr? )
  end
</pre>

#### The ERB Powered Javascript Response

Now comes the jQuery part! I created a create.js.erb file, like this:

<pre class="sh_html">
&lt;% if @comment.errors.any? %&gt;
&lt;% else %&gt;
  $("#flash_messages").append('&lt;%= escape_javascript(render(:partial =&gt; 'flash', :locals =&gt; {:flash =&gt; flash, :flush_flash =&gt; true})) %&gt;');
&lt;% end %&gt;
</pre>

