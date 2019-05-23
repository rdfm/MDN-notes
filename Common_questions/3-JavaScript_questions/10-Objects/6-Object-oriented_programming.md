# Object-oriented JavaScript for beginners

see [What is object-oriented programming?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS#Object-oriented_programming_from_10000_meters)

## Object-oriented programming — the basics

**Object-oriented programming** (OOP)

- Basic idea, to use objects to model real world things, to represent inside programs, and/or provide a simple way to access functionality.
- Objects can contain related data and code, which represent information about the thing trying to model, and functionality or behavior wanted
- Object data (and often, functions too) can be stored neatly (encapsulated) inside an object package (given a specific name, namespace)
- Objects are commonly used as data stores that can be easily sent across the network

### Defining an object template

**abstraction** = creating a simple model of a more complex thing, which represents its most important aspects in a way that is easy to work with for our program's purposes.

```vim
Class: Person
  Name [firstName, lastName]
  Age
  Gender
  Bio  { "[Name] is [Age] years old. They like [Interests]" }
  Greeting { "Hi! I'n [Name]". }
```

### Creating actual objects

**object instances** = objects that contain the data and functionality defined in the class (aka created from class)

**constructor function** = run to create object instance from class

**instantiation / instantiated** = process of creating an objecgt instance from a class

### Specialist classes

- Create new classes based on other classes — these new **child classes** can be made to **inherit** the data and code features of their **parent class**, so can reuse functionality common to all the object types rather than having to duplicate it

*NOTE*: **polymorphism** = the ability of multiple object types to implement the same functionality

- Can now create object instances from child classes