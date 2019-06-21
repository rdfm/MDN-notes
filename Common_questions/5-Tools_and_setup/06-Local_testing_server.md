# How do you set up a local testing server?

see [How do you set up a local testing server?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server)

> This article explains how to set up a simple local testing server on your machine, and the basics of how to use it.

## Local files vs. remote files

**file://** follwed by path to the file

**http://** web address

## The problem with testing local files

- They feature asynchronous requests
- They feature a server-side language

## Running a simple local HTTP server

Python's **SimpleHTTPServer** module

```
// In terminal
$ python -v
$ mkdir python_server
$ cd python_server 

// python 3.x
$ python3 - m http.server

// python 2.x
$ python -m SimpleHTTPServer

// GO TO URL, http://0.0.0.0:8000/
```

## Running server-side languages locally

- [MDN: Django Web Framework (Python)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django)
- [MDN: Express web framework (Node.js/JavaScript)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
- [php Built-In web server](https://php.net/manual/en/features.commandline.webserver.php)

```php
$ cd path/to/your/php/code
$ php -S localhost:8000
```