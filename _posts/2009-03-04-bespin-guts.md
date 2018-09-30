---
title: Bespin Guts
date: 2009-03-04
tags: mozilla
---
Here are some notes I'm taking about the cool Bespin editor from Mozilla labs:

<ul>
<li>
Divided into two parts: frontend and backend</li>
<li>
Runs as a python web server, uses sqlite3 (awesome!) as a database for user (and file?) storage, build from WSGI components (Paste, SQLAlchemy)</li>
<li>
I would like to set strictlines on permanently</li>
<li>
<del>
It runs locally unless: paver server.open=1 server.port=8000 start</del>
 - format has changed to use server.address=...</li>
</ul>

Questions:

<ul>
<li>
I'd like to create my own backend using other components: NGINX, DAV, Apache2, or something along those lines, especially DAV.</li>
<li>
I'd like to try manipulating some of the editor behavior - like closing tags, using spaces for tabs, etc., maybe even make it more like vim!</li>
</ul>

Database Tables:

<pre class="sql">
CREATE TABLE directories (	id INTEGER NOT NULL, 	project_id INTEGER NOT NULL, 	name VARCHAR(700) NOT NULL, 	parent_id INTEGER, 	PRIMARY KEY (id), 	 FOREIGN KEY(project_id) REFERENCES projects (id) ON DELETE cascade, 	 UNIQUE (project_id, name), 	 FOREIGN KEY(parent_id) REFERENCES directories (id) ON DELETE cascade);
CREATE TABLE files (	id INTEGER NOT NULL, 	project_id INTEGER NOT NULL, 	name VARCHAR(700) NOT NULL, 	created TIMESTAMP, 	modified TIMESTAMP, 	saved_size INTEGER, 	data BLOB, 	edits BLOB, 	dir_id INTEGER, 	PRIMARY KEY (id), 	 FOREIGN KEY(project_id) REFERENCES projects (id) ON DELETE cascade, 	 UNIQUE (project_id, name), 	 FOREIGN KEY(dir_id) REFERENCES directories (id) ON DELETE cascade);
CREATE TABLE filestatus (	user_id INTEGER NOT NULL, 	file_id INTEGER NOT NULL, 	read_only BOOLEAN, 	PRIMARY KEY (user_id, file_id), 	 FOREIGN KEY(user_id) REFERENCES users (id) ON DELETE cascade, 	 FOREIGN KEY(file_id) REFERENCES files (id) ON DELETE cascade);
CREATE TABLE members (	project_id INTEGER, 	user_id INTEGER, 	 FOREIGN KEY(user_id) REFERENCES users (id) ON DELETE cascade, 	 FOREIGN KEY(project_id) REFERENCES projects (id) ON DELETE cascade);
CREATE TABLE migrate_version (	repository_id VARCHAR(255) NOT NULL, 	repository_path TEXT, 	version INTEGER, 	PRIMARY KEY (repository_id));
CREATE TABLE projects (	id INTEGER NOT NULL, 	name VARCHAR(60) NOT NULL, 	user_id INTEGER NOT NULL, 	PRIMARY KEY (id), 	 FOREIGN KEY(user_id) REFERENCES users (id) ON DELETE cascade, 	 UNIQUE (user_id, name));
CREATE TABLE users (	id INTEGER NOT NULL, 	username VARCHAR(128), 	email VARCHAR(128), 	password VARCHAR(20), 	settings BLOB, 	quota INTEGER, 	amount_used INTEGER, 	PRIMARY KEY (id), 	 UNIQUE (username));</pre>

I'm working on a page in the wiki here: <a href="http://www.docunext.com/wiki/Bespin">
Bespin at the Docunext Wiki</a>

