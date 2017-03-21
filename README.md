`DDP._CurrentPublish` with current publish context
==================================================

Adding this package to your [Meteor](http://www.meteor.com/) application creates a `DDP._CurrentPublish`
environment variable which you can use to access current publish context (`this` inside publish function)
from anywhere in the server-side code, if that server-side code was called from a publish function.

It is similar to existing undocumented `DDP._CurrentInvocation` which does the same for method calls,
giving you access to the current context of a method call (`this` inside a method's body).

Server side only.

Installation
------------

```
meteor add peerlibrary:publish-context
```

After adding the package, you have to depend on, or import, Meteor's core `ddp` package to
get access to the `DDP` symbol.

Examples
--------

Implementing a `userId()` function on the server-side, which works in any code
called from methods or publish functions, can then be simply implemented as:

```javascript
function userId() {
  const currentInvocation = DDP._CurrentInvocation.get();
  if (currentInvocation) return currentInvocation.userId;

  const currentContext = DDP._CurrentPublish.get();
  if (currentContext) return currentContext.userId;

  throw new Error("userId() not invoked from a method or publish function.");
}
```

This is more or less what [peerlibrary:user-extra](https://github.com/peerlibrary/meteor-user-extra)
package does to provide `Meteor.userId()`.
