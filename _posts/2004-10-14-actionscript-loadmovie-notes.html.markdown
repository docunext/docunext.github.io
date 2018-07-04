---
title: Actionscript loadMovie Notes
date: 2004-10-14
tags: Actionscript
---
In actionscript, you cannot reference a movie until it is loaded. Code to work around that (for loadmovienum):

<pre>
function preloadLevel() {    if (_level5 != undefined) {        trace("level 5 loaded");        delete this.onEnterFrame;    }}_root.onEnterFrame = preloadLevel;

loadMovieNum("external.swf", 5); // load something into level 5</pre>

Code for XML:<verbatim>// Create new XML object

SP_XML = new XML();

SP_XML.ignoreWhite = true;//  load the XML data - the gate will take care of the// location_id, all that jazz.//SP_XML.load("/acc/link/loc/view/sp/xml/");

SP_XML.load("/main/swf/sample_space_plan.xml");// Render the space plan - load the SWF movies and// arrange them as necessary.//SP_XML.onLoad = renderSpacePlan;

SP_XML.onLoad = function(success:Boolean) {	if (success) {		space_plan_id = this.firstChild.attributes.id;		trace("id"+space_plan_id);		// Set array SpEquipment to the equipment arrays.		SpEquipment = this.firstChild.childNodes;		//loadMovieNum("/acc/link/loc/sp_server/&location_space_plan_id="+space_plan_id, 0);		//loadMovieNum("/acc/link/types/symbol_server/&equipment_type_symbol_id=3",2);		for (var i = 0; i<SpEquipment.length; i++) {			asset_x = SpEquipment[i].attributes.x;			asset_y = SpEquipment[i].attributes.y;			asset_type_id = SpEquipment[i].attributes.asset_type;			j=i+2;			//_root.createEmptyMovieClip("eqp"+j, j);			_root.eqp.duplicateMovieClip("eqp"+j, j);			_root["eqp"+j]._onClic			_root["eqp"+j]._x = asset_x;			_root["eqp"+j]._y = asset_y;			_root["eqp"+j].loadMovie("/acc/link/types/symbol_server/&equipment_type_symbol_id=" + asset_type_id);			//_root["eqp"+j].loadMovie("/main/swf/kiosk.swf");		}	} else {		trace("xml failed to load.");	}};_root.eqp.onLoad = function(success:Boolean) {	if (success) {		duplicateMovieClip(_root.eqp, "eqp2", 3);		_root.eqp2._x = 65;	}};// this sucks

function preloadLevel() {	//Assuming a loop needs to be run here to evaluate each level load status!	//Definitely want a "Now constructing the space plan... please stand by screen."	if (_level2 != undefined) {		_level2._x = 150;		_level2._y = 125;		_level2._rotation = 45;		newclip = duplicateMovieClip(_level2, blah, 33);		newclip._x = 45;		delete this.onEnterFrame;	}}_root.onEnterFrame = preloadLevel;</pre>

