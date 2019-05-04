---
title: Facebook Flux Notes 
date: 2015-06-04
---



http://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html

"This results in software that is more maintainable, adaptable, testable, and
easier for new engineering team members to understand."

"Problems arise, however, if we have circular dependencies. That is, if Store
A needs to wait for Store B, and Store B needs to wait for Store A, we could
wind up in an endless loop. The dispatcher now available in the Flux repo
protects against this by throwing an informative error to alert the developer
that this problem has occurred. The developer can then create a third store and
resolve the circular dependency."


