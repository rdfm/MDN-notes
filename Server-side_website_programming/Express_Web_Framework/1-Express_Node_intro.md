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

```vim
mkdir test-node
cd test-node
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

```vim
node "hello.js"
```

## Web Frameworks

## Introducing Express

## Where did Node and Express come from?

## How popular are Node and Express?

## Is Express opinionated?

## What does Express code look like?

### Helloworld Express

### Importing and creating modules

### Using asynchronous APIs

### Creating route handlers

### Using middleware

### Serving static files

### Handling errors

### Using databases

### Rendering data (views)

### File structure


