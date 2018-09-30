---
title: Rails ActiveRecord has and belongs to many
date: 2010-12-28
tags: activerecord,datamapper,rails
---
I'm back working on a Rails application and since its Rails 2.x, I'm using ActiveRecord. That is of course fine, but most of my experience has been with DataMapper, which plays nicely with Merb and Rails 3.

Yesterday I was working on some models and their associations, starting with the generation of the models:

<pre class="sh_sh">
script/generate model Company name:string
script/generate model Industry name:string
</pre>

Then I got to the step where I indicated in the model that each object could be associated with any number of its associated objects and so of course I used something like this:

<pre class="sh_ruby">
class Company
  has_and_belongs_to_many :industries
end
class Industry
  has_and_belongs_to_many :companies
end
</pre>

That is good, but what about the database migrations for a many-to-many ActiveRecord association for Rails? Turns out that since the existing migrations were automatically created *prior* to the associations, at least one needed to be edited prior to being run via rake. I added something like this to the migration that was automatically generated when I created the industry model:

<pre class="sh_ruby">
create_table :companies_industries, :id => false do |t|
  t.references :company, :industry
end
</pre>

After that, I ran:

<pre class="sh_sh">
rake db:migrate
</pre>

It worked like a charm!

