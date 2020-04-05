---
title: Sorting in prepared queries
date: 2006-11-26
---
I'm trying to get prepared queries to take an order by sort parameter, either ASC or DESC. The problem I am running into is that both ASC and DESC are not integers, but the shouldn't get quoted when passed to the database. I've gotten around this in the past by calling it an integer, but I guess MDB2 checks the type (no it doesn't). Argh. I'm looking at bindValue or bindParam as a possibility, but I don't think that will work.

From what I've gathered, MySQL simply doesn't support wildcard substitution of the ASC or DESC keywords. That's kind lame, but I imagine it was a "bug" in metabase that allowed me to do it before.
