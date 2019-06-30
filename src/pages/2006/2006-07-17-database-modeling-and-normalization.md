---
title: Database Modeling and Normalization
date: 2006-07-17
---
I'm studying database normalization techniques. This is something I should have done a long time ago. However, I didn't have access to, or the skill set to operate software which could truly take advantage of a properly designed, fully normalized database model. Since I may soon, I'd better hit the books!

So far I've got a good grasp on the first three levels of database normalization. These work great for the type of data I'm working with. Also, I use MySQL, currently setup with MyISAM tables, but I should probably switch to using InnoDB tables, these support referential integrity, which I understand to prevent of orphans in lowest common denominator tables.

However, one thing I am stuck on and having a hard time digesting is the concept of dynamic attributes. For example, if I were to create a data type entitled "assets", I would create a table called assets, and each entry would share a certain set of standard attributes, such as asset_id (primary key), created, destroyed, asset_type_id. The asset_type_id would then relate to the type of asset_type, for example, computer, desk, or office building. I keep thinking that all these asset types should share a table reference of attributes, so that they could all be stored in the same table, and their attribute would then be dymanically assembled from the reference table.

To explain, say we have a desk and a computer. These obviously have different attributes, but do they need to be stored in different tables? Maybe not. We could have a table like this:

<pre>
asset_id | attribute_id | attribute_value

5        | 1            | Red</pre>

We'd get the asset type from the asset table, then get the attributes for that asset_type_id from an xml file, and then go from there. While this is nice in concept, I foresee it being a nightmare for developers. There would be so many complicated joins and loops I don't think it would be worth it. Exactly, because what happens when you get a situation where you have two values for one attribute, like a computer can have two operating systems on it, or two ip numbers attached to it, several peripherals, and these may want to be further normalized.

However, it would be nice to be able to create a new asset type in XML, and simply drop it in and go. But I guess you could do that with a rich-in-metadata XML schema file, too. **Database modeling is a balance between abstraction and specification.**
