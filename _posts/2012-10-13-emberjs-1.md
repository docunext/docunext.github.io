---
title: Ember.js
date: 2012-10-13
tags: javascript,rails
---
Ember.js is the glowing spark of an old flame: **SproutCore**.

#### SproutCore

I explored SproutCore a few years back and found it impressive, but too far from my scope at the time. It came up again recently at a lunch with some of my co-workers when we were talking about open-source projects that hit bumpy road, and that was the last I heard of it, until recently when I tried Backbone.js. It didn't do quite what I hoped, so I did some research, found Ember and, it seemed, did. Lo and behold: its the burning chars of SproutCore!

#### Ember and Rails

There are several remarkable parts of Ember - the router, attribute bindings, object observers, and the view hierarchy, but the data persistence layer needs attention as of late 2012 (note, it is under active development).

#### General Notes About Using Ember

* The controllers are just abstraction layers, mine and others I've reviewed don't contain any actual code. They apparently are just bridges between the data available in the router and the views that are used to render and bind to the templates. Note - like ActiveRecord, even an empty class that inherits ActiveRecord::Base can do SO MUCH right out of the box.
* Conversely, views connect the rendered templates in the browser back to the router via event delegation.
* Ember views are sorta like Rails controllers. Ember templates are like Rails views.
* Ember-data includes associations, but I want much better rails integration. I found it awkward (but doable) to connect an Ember hasMany to a nested pair of Rails resources.

#### Some Snibbets

Here are some generic code examples that resemble a personal project I'm working on, using Rails 3 (with the pipeline), Bootstrap, and the ember-rails gem (though that needs attention too - see footnote about this).

Without further delay, some Ember.js code examples!

#### An Ember.js Company Model

<pre class="sh_javascript">
App.Company = DS.Model.extend({
  name: DS.attr('string'),
  country: DS.attr('string'),
  employeeIds: DS.hasMany('App.Employee')
});
</pre>

Model Notes: I was unable to connect the above hasMany relationship to the same on the Rails side if they were nested, but it was easy to workaround.

#### An Ember.js View

<pre class="sh_javascript">
App.CompanyView = Em.View.extend({
  templateName: 'company',
  doubleClick: function() {
    this.showEdit();
  }
});
</pre>

View Notes: Remember, Ember views are kinda like Rails controllers.

#### An Ember.js Template

<pre class="sh_html">
&lt;div class="well" style="max-width: 340px; padding: 8px 0;">
{{view Bootstrap.NavList
  contentBinding="controller.content"
  selectionBinding="App.CompanyController.content"}}
&lt;/div>
</pre>

Template Notes: Views can be instantiated from the router (through a connectOutlets controller instantiation), but they can also be instantiated from a template. Handlebars are growing on me (soon they will be literally, thanks to Movember).

#### An Ember.js Router

<pre class="sh_javascript">
App.Router = Ember.Router.extend({
  location: 'history',
  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/',
      redirectsTo: 'companies'
    }),
  });
});
</pre>

Router Notes: The Ember.js router is a powerful tool, but its complicated. I hope that some of the complicity it contains can be delegated to controllers at some point. The sticking point may be that the Ember is more that just a Rails router, it contains the state machine that guides the session through the Ember application.

#### Stateful!

This is one aspect of front-end web development I've had a hard time adjusting to: statefulness. But I like it!

#### Questions

* Is the router the best place to put state transition method definitions?
* In nested routing a good idea - where there is a "root" path, and the sub-path specs are defined within it? (Note: in this case, the "root" of the sub-path can be "/", even though it isn't actually there. For example, the path "/companies" can have a sub-path of "/" which will match its root.)

#### Follow-Up

This [view guide](http://emberjs.com/guides/view_layer/) has the **VERY IMPORTANT** couple of paragraphs when discussing javascript objects, the DOM, and event delegation:

<blockquote><pre>
You are now faced with an uncomfortable choice: create a new view for each item and lose the benefits of event delegation, or create a single view for all of the items and have to store information about the underlying JavaScript object in the DOM.

In order to solve this problem, Ember delegates all events to the application's root element (usually the document body) using jQuery. When an event occurs, Ember identifies the nearest view that handles the event and invokes its event handler. This means that you can create views to hold a JavaScript context, but still get the benefit of event delegation.

Further, because Ember registers only one event for the entire Ember application, creating new views never requires setting up event listeners, making re-renders efficient and less error-prone. When a view has child views, this also means that there is no need to manually undelegate views that the re-render process replaces.
</pre></blockquote>

These paragraphs help me conceptualize Ember views; here's how I picture them:

* In client-side JS, you've got information objects, the DOM, and its manifest interface.
* The user interacts with the interface and manipulates the DOM, but they want to interact with the objects, too.
* There isn't an "official" connection between the DOM and the information objects, but the general strategy employed is to create maps of DOM elements and events to information objects.
* Ember tries to balance power and efficiency through the use of the incredibly flexible "view". From a few missteps and corrections I've made, it appears to be quite feasible to architect a sophisticated interface of information and functionality with concise and maintainable code.

<center>
<h1>Yay.</h1>
</center>

