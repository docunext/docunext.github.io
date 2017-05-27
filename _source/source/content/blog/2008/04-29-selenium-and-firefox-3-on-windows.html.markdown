---
title: Selenium and Firefox 3 on Windows
comments:
  - author: KIRAN
    email: kiran.r@brioinfotech.com
    ip: 192.168.8.200
    url: http://www.rpath.org/rbuilder/project/windmill/releases
    date: 10/03/2008 04:37:15 AM
    text: >
      i just read an article in the forum regarding windmill..can anyone who are aware of windmill can provide the information about the tool and it's features and how to implement the tool.plz reply back
date: 2008-04-29
---
I downloaded the Selenium Core onto my computer in order to test Pbooks some more.  I was having a heck of a time getting the tests to pass.  The tests would run into all sorts of problems, and then about a third of the way through, I would get a message saying Selenium failure.

I then downloaded the beta version of Firefox 3, and then attempted to run through the tests using the core. The tests ran much smoother and selenium managed to make its way through the suite without the failure error.  Nine of the tests still failed.  All but two of the tests failed on the same step.  assertElementPresent  	content  	false.  The functioning CSV import test failed on the following step click  	id=functions  	Element id=functions not found.  And the core account balances step failed here clickAndWait  	//a[@id='functions']  	Element //a[@id='functions'] not found.

¥

