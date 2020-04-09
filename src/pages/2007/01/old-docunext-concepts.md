---
title: Old Docunext Concepts
date: 2007-01-06
---
<strong>The Development Process </strong>

The developer must first of all model the database. The capabilities of the first version of this tool are 1 dimensional, meaning only one table can be supported. However, future versions are planned so that multiple tables can be used. The developer will describe this database table using a Docunext formatted XML file. They also must manually create the metabase compatible XML schema. Hopefully these two files can be merged somehow. The developer must also create the display XSL files for the form and record interface. Presumably, there will be an index listing, a record table, an empty form, and a form containing data for editing for a total of four XSL files which need to be fabricated for proper Docunext utilization. The nice part of the Docunext tool is the reusable PHP files that connect to the database. No matter what form

you are using, these files will allow you to update, delete, view, and create records.

<strong>The Administration Process </strong>

Docunext administration is somewhat undefined at this point. Many times forms are completed by users and can only be accessed and edited by their owners. Sometimes other users can view records they do not own. Additionally, admins can view all, edit all, among other options. At this point, this will probably be the best use for the administration side of the tool. Future versions may integrate this facet of the tool into the actual interface of the website, but it is unclear whether this is more logical. The admin part of Enfolio is truly geared towards admins, not necessarily developers. Chances are, once the developer has created the form for the admin, they won't need to change it very often, but will need to view, maintain and upkeep the data.
