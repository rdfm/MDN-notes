# Object member summary

see [When should you use inheritance in JavaScript?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance#Object_member_summary)

Three types of property/method:

1. Those defined inside a constructor function that are given to object instances. Easy to spot, members defined inside a constructor using the this.x = x; in built in browser code, they are the members only available to object instances (usually created by calling a constructor using the new keyword, e.g. var myInstance = new myConstructor()).

2. Those defined directly on the constructor themselves, that are available only on the constructor. These are commonly only available on built-in browser objects, and are recognized by being chained directly onto a constructor, not an instance. For example, Object.keys().

3. Those defined on a constructor's prototype, which are inherited by all instances and inheriting object classes. These include any member defined on a Constructor's prototype property, e.g. myConstructor.prototype.x().