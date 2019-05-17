# Express web framework (Node.js/Java​Script)

see [Express/Node introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)

## Introducing Node

**Node** (formally known as *Node.js*)

- Open-source, cross-platform, runtime environment
- Allows developers to create all kinds of server-side tools and applications in JavaScript
- Runtime is intended for use outside of a browser context (i.e. running directly on a computer or server OS)
- Environment omits browser-specific JavaScript APIs and adds support for more traditional OS APIs including HTTP and file system libraries

*Benefits*:

- Great performance!
- Code is written in "plain old JavaScript"
- Compile/convert into JavaScript (i.e. TypeScript, CoffeeScript, ClojureScript, Scala, LiveScript, etc.)
- **npm** = node package manager
- Available on Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS, and NonStop OS.

### Hello Node.js

1: TERMINAL (Create folder)

```
$ mkdir test-node
$ cd test-node
```

2: CREATE FILE (hello.js):

```javascript
// Load HTTP module
var http = require("http");

// Create HTTP server and listen on port 8000 for requests
http.createServer(function(request, response) {

   // Set the response HTTP header with HTTP status and Content type
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body "Hello World"
   response.end('Hello World\n');
}).listen(8000);

// Print URL for accessing server
console.log('Server running at http://127.0.0.1:8000/');
```

3: TERMINAL (Run command)

```
$ node "hello.js"
```

4: BROWSER (Go to: http://localhost:8000)

## Web Frameworks

- Other common web-development tasks are **NOT** directly supported by Node
- Use a web framework to:
  - add specific handling for different HTTP verbs (e.g. GET, POST, DELETE, etc.)
  - separately handle requests at different URL paths ("routes")
  - serve static files
  - use templates to dynamically create the response

## Introducing Express

*Express* = the most popular *Node* web framework

[List of other Node web frameworks](https://expressjs.com/en/resources/frameworks.html)

- Write handlers for requests with different HTTP verbs at different URL paths (routes).
- Integrate with "view" rendering engines in order to generate responses by inserting data into templates.
- Set common web application settings like the port to use for connecting, and the location of templates that are used for rendering the response.
- Add additional request processing "middleware" at any point within the request handling pipeline.

[Express Middleware Packages](https://expressjs.com/en/resources/middleware.html)

## Where did Node and Express come from?

**Node**:

- 2009: Initially released for Linux only.
- 2010: NPM package manager released
- 2012: Native Windows support
- Current LTS release: Node v10.13.0
- Latest release: Node 11.2.0

**Express**:

- 2010 (November): Initially released
- Current version: 6.8.0

## How popular are Node and Express?

[Hot Frameworks](http://hotframeworks.com/)

## Is Express opinionated?

> Web frameworks often refer to themselves as "opinionated" or "unopinionated".

- opions about the "right way" to handle any particular task
- Express is unopinionated.
- can insert almost any compatible middleware into the request handling chain, in almost any order
- can structure the app in one file or multiple files, and using any directory structure

## What does Express code look like?

**Traditional data-driven website**:

- Web app waits for HTTP requests from web browser (or other client)
- When a request received
  - app works out what action is needed based on the URL pattern and/or associated info contained in POST / GET data
- Depending on requirements of request, may read or write info from a database or perform other tasks required
- App will return a response to the web browser
  - dynamically creating an HTML page for the browser to display by inserting the retrieved data into placeholders in an HTML template

**Express provides**:

- Methods to specify what function is called for a particular HTTP verb (GET, POST, SET, etc.) and URL pattern ("Route")
- Methods to specify 
  - what template ("view") engine is used
  - where template files are located
  - what template to use to render a response
- can use Express middleware to add support for cookies, sessions, and users, getting POST/GET parameters, etc.

### Helloworld Express

[Express Hello World Example](https://expressjs.com/en/starter/hello-world.html)

1: TERMINAL (Create folder)

```
$ mkdir express_hello_world
$ cd express_hello_world
```

2: CREATE FILE (app.js)

```javascript
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
```

OR

```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

3: TERMINAL (Run command)

```
$ npm init
$ npm install express --save
$ node app.js
```

4: BROWSER (Go to: http://localhost:3000)

### Importing and creating modules

- Import code using Node's require() function
- Express itself is a module

```javascript
var express = require('express');
var app = express();
```

**TIP**: Create your own modules, because this allows you to organise your code into managable parts — a monolithic single-file application is hard to understand and maintain. Using modules also helps you manage your namespace, because only the variables you explicitly export are imported when you use a module.

**EXPORT**: square.js module

```javascript
exports.area = function(width) { return width * width; };
exports.perimeter = function(width) { return 4 * width; };
```

**IMPORT**: square.js into app.js using require()

```javascript
var square = require('./square'); // Here we require() the name of the file without the (optional) .js file extension
console.log('The area of a square with a width of 4 is ' + square.area(4));
```

*NOTE*: If you want to export a complete object in one assignment instead of building it one property at a time, assign it to module.exports as shown below (you can also do this to make the root of the exports object a constructor or other function):

```javascript
module.exports = {
  area: function(width) {
    return width * width;
  },
  perimeter: function(width) {
    return 4 * width;
  }
};
```

[Modules (Node API docs)](https://nodejs.org/api/modules.html#modules_modules)

### Using asynchronous APIs

- **synchronous API** is one in which each operation must complete before the next operation can start.
- **asynchronous API** is one in which the API will start an operation and immediately return (before the operation is complete). Once the operation finishes, the API will use some mechanism to perform additional operations.

[ARTICLE: Callback Hell](http://callbackhell.com/)

[async](https://www.npmjs.com/package/async)

[MDN: Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

[ARTICLE: The Node.js Way - Understanding Error-First Callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)

### Creating route handlers

[Express: reponse methods](https://expressjs.com/en/guide/routing.html#response-methods)

[Express: Routing](https://expressjs.com/en/guide/routing.html#route-handlers)

[http module](https://nodejs.org/api/http.html#http_http_methods)

[express.Router](https://expressjs.com/en/guide/routing.html#express-router)

[MDN: Express Tutorial Part 4: Routes and controllers](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)

### Using middleware

*NOTE*: The middleware can perform any operation, execute any code, make changes to the request and response object, and it can also end the request-response cycle. If it does not end the cycle then it must call next() to pass control to the next middleware function (or the request will be left hanging).

[List of middleware packages maintained by Express team](https://expressjs.com/en/resources/middleware.html)

[3rd Party: morgan HTTP request logger middleware](https://expressjs.com/en/resources/middleware/morgan.html)

**EXAMPLE** How you can add the middleware function using both methods, and with/without a route.

```javascript
var express = require('express');
var app = express();

// An example middleware function
var a_middleware_function = function(req, res, next) {
  // ... perform some operations
  next(); // Call next() so Express will call the next middleware function in the chain.
}

// Function added with use() for all routes and verbs
app.use(a_middleware_function);

// Function added with use() for a specific route
app.use('/someroute', a_middleware_function);

// A middleware function added for a specific HTTP verb and route
app.get('/', a_middleware_function);

app.listen(3000);
```

### Serving static files

[Express: express.static middleware](https://expressjs.com/en/4x/api.html#express.static)

- serve static files (including images, CSS, and JavaScript)
- static() is the only middleware function that is part of Express

**EXAMPLE**: Serve static files in a directory named 'public' at the same level you call node

```javascript
app.use(express.static('public'));
```

*NOTE*: Any files in the public directory are served by adding their filename (relative to the base "public" directory) to the base URL

```
http://localhost:3000/images/dog.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/about.html
```

[Express: Serving static files](https://expressjs.com/en/starter/static-files.html)

### Handling errors

Errors are handled by one or more special middleware functions that have four arguments, instead of the usual three: (err, req, res, next)

```javascript
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```

[Express: Error Handling](https://expressjs.com/en/guide/error-handling.html)

### Using databases

- Express apps can use any database mechanism supported by Node
- Options: PostgreSQL, MySQL, Redis, SQLite, MongoDB, etc.
- CRUD = create, read, update, and delete

INSTALL: MongoDB

```
$ npm install mongodb
```

EXAMPLE (MongoDB):

```javascript
//this works with older versions of  mongodb version ~ 2.2.33
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/animals', function(err, db) {
  if (err) throw err;

  db.collection('mammals').find().toArray(function (err, result) {
    if (err) throw err;

    console.log(result);
  });
});


//for mongodb version 3.0 and up
let MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/animals', function(err, client){
   if(err) throw err;
   
   let db = client.db('animals');
   db.collection('mammals').find().toArray(function(err, result){
     if(err) throw err;
     console.log(result);
     client.close();
   });
});
```

**ORM** = Object Relational Mapper

- popular approach to access database indirectly
- define your data as "objects" or "models"
- and the ORM maps these through the underlying database format

[Express: Database integration](https://expressjs.com/en/guide/database-integration.html)

### Rendering data (views)

- Template engines (referred to as "view engines" by Express)
- Templates are often used to create HTML
- [Template Engines - supported by Express](https://github.com/expressjs/express/wiki#template-engines)
- RESEARCH: Pug (formerly Jade)

**EXAMPLE**:

```javascript
var express = require('express');
var app = express();

// Set directory to contain the templates ('views')
app.set('views', path.join(__dirname, 'views'));

// Set view engine to use, in this case 'some_template_engine_name'
app.set('view engine', 'some_template_engine_name');
```

```javascript
app.get('/', function(req, res) {
  res.render('index', { title: 'About dogs', message: 'Dogs rock!' });
});
```

[Express: Using template engines](https://expressjs.com/en/guide/using-template-engines.html)

### File structure

[MDN: MVC (Model-View-Controller)](https://developer.mozilla.org/en-US/docs/Glossary/MVC)