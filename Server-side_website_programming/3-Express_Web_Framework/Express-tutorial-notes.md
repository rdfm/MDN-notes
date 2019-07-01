1-Express_Node_intro.md

see [Express/Node introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)

**[Fully developed version on GitHub](https://github.com/mdn/express-locallibrary-tutorial)**

[Version: package.json file](https://github.com/mdn/express-locallibrary-tutorial/blob/master/package.json)

---
2-Node_Express_dev_environment.md

see [Setting up a Node (Express) development environment](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment)

---
Express_1-Local_Library_site.md

see [Express Tutorial: The Local Library website]()

---
Express_2-Skeleton_site.md

see [Express Tutorial Part 2: Creating a skeleton website]()

**[Express application generator](https://expressjs.com/en/starter/generator.html)**

## Using the application generator

```vim
$ npm install express-generator -g
```

```vim
express --help
```

```vim
> express --help

    Usage: express [options] [dir]


  Options:

        --version        output the version number
    -e, --ejs            add ejs engine support
        --pug            add pug engine support
        --hbs            add handlebars engine support
    -H, --hogan          add hogan.js engine support
    -v, --view <engine>  add view <engine> support (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
        --no-view        use static html instead of view engine
    -c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git            add .gitignore
    -f, --force          force on non-empty directory
    -h, --help           output usage information
```

### What view engine should I use?

Popular view/templating engines:

- EJS
- Hbs
- Pug (Jade) -> Default
- Twig
- Vash

### What CSS stylesheet engine should I use?

- CSS (Default)
- LESS
- SASS
- Compass
- Stylus

### What database should I use?

[Database integration](https://expressjs.com/en/guide/database-integration.html)

## Creating the project

```vim
$ express express-locallibrary-tutorial --view=pug
```

```vim
change directory:
$ cd express-locallibrary-tutorial

install dependencies:
$ npm install

run the app (linux/macOS):
$ DEBUG=express-locallibrary-tutorial:* npm start
```

**On browser, go to**: http://127.0.0.1:3000/

**NOTE**: Could use *$ npm start*, but specifying the DEBUG variable as shown enables console logging/debugging.

## Enable server restart on file changes

[npm tool: nodemon](https://github.com/remy/nodemon)

Install in root directory of project:

```vim
$ npm install --save-dev nodemon
```

Install nodemon globally on machine:

```vim
$ sudo npm install -g nodemon
```

Verify in package.json, look for:

```javascript
"devDependencies": {
    "nodemon": "^1.18.10"
}
```

Go to package.json, add:

```javascript
"scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www"
  },
```

On macOS or Linux, use this command:

```vim
$ DEBUG=express-locallibrary-tutorial:* npm run devstart
```

**On browser, go to**: http://127.0.0.1:3000/

**NOTE**:

## The generated project

### Directory structure

```javascript
/express-locallibrary-tutorial
    app.js
    /bin
        www
    package.json
    package-lock.json
    /node_modules
        [about 6700 subdirectories and files]
    /public
        /images
        /javascripts
        /stylesheets
            style.css
    /routes
        index.js
        users.js
    /views
        error.pug
        index.pug
        layout.pug
```

### package.json

```javascript
{
  "name": "express-locallibrary-tutorial",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www"
  },
  "dependencies": {
    "cookie-parser": "~1.4.3",
    "debug": "~2.6.9",
    "express": "~4.16.0",
    "http-errors": "~1.6.2",
    "morgan": "~1.9.0",
    "pug": "2.0.0-beta11"
  },
  "devDependencies": {
    "nodemon": "^1.18.10"
  }
}
```

**NOTE**: Useful npm packages in many web applications:

- express
- nodemon
- cookie-parser
- debug
- morgan
- http-errors

**NOTE**: In package.json, using nodemon in scripts

```javascript
"scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www"
  },
```

### www file

- The file **/bin/www** is the application entry point!
- The very first thing this does is require() the "real" application entry point (app.js, in the project root)
- sets up and returns the **express() application object**

```javascript
#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../app');
```

**NOTE**: [nodeJS: require()](https://nodejs.org/api/modules.html#modules_require_id)

### app.js

App entry point:

```javascript
var express = require('express');
var app = express();
...
module.exports = app;
```

Add node libraries:

```javascript
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
```

Routes:

```javascript
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
```

Views:

```javascript
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
```

Add the middleware libraries into the request handling chain.

```javascript
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
```

Router handling:

```javascript
app.use('/', indexRouter);
app.use('/users', usersRouter);
```

Handler methods for errors and HTTP 404 responses

```javascript
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
```

The Express application object (app) is now fully configured:

```javascript
module.exports = app;
```

### Routes

**Go to**: /routes

Refer to /routes/users.js

```javascript
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
```

**TEST**: Go to http://localhost:3000/users/

- Result should display 'respond with a resource'

### Views (templates)

**Go to**: /views

- refer to files with .pug extension
- [Express: Response.render()](https://expressjs.com/en/4x/api.html#res.render)

## Challenge

> Create a new route in /routes/users.js that will display the text "You're so cool" at URL /users/cool/. Test it by running the server and visiting http://localhost:3000/users/cool/ in your browser

---
Express_3-Database_Mongoose.md

see [Express Tutorial Part 3: Using a Database (with Mongoose)]()

## Overview

Database: [MongoDB](https://www.mongodb.com/)
Database access / front-end: [Mongoose](https://mongoosejs.com/)

**CRUD**: *C*reate, *R*ead, *U*pdate and *D*elete

### What databases can I use?

Popular options: PostgreSQL, MySQL, Redis, SQLite, and MongoDB

### What is the best way to interact with a database?

Two approaches:

- Using the databases' native query language (e.g. SQL)
- Using ODM/ORM
  - **ODM**: Object Data Model
  - **ORM**: Object Relational Model
  - represents website data as JavaScript objects
  - mapped to database

### What ORM/ODM should I use?

Popular options:

- Mongoose
- Waterline
- Bookshelf
- Objection
- Sequelize
- Node ORM2
- JugglingDB

### Using Mongoose and MongoDb for the LocalLibrary

**NOTE**: MongoDB

- an open source NoSQL database that uses a document-oriented data model
- a “collection” of “documents”
- analogous to a “table” of “rows” in a relational database

## Designing the LocalLibrary models

- separate models for every "object" (a group of related information).
- use models to represent selection-list options (e.g. like a drop-down list of choices)

## Mongoose primer

[Mongoose docs](https://mongoosejs.com/docs/guide.html)

### Installing Mongoose and MongoDB

```vim
$ npm install mongoose
```

**NOTE**: Verify install in package.json, under "dependencies"

### Connecting to MongoDB

```javascript
//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
```

### Defining and creating models

- Models are defined using the Schema interface.

#### Defining schemas

```javascript
//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date
});
```

#### Creating a model

```javascript
// Define schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date
});

// Compile model from schema
var SomeModel = mongoose.model('SomeModel', SomeModelSchema );
```

#### Schema types (fields)

```javascript
var schema = new Schema(
{
  name: String,
  binary: Buffer,
  living: Boolean,
  updated: { type: Date, default: Date.now() },
  age: { type: Number, min: 18, max: 65, required: true },
  mixed: Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  array: [],
  ofString: [String], // You can also have an array of each of the other types too.
  nested: { stuff: { type: String, lowercase: true, trim: true } }
})
```

#### Validation

EXAMPLE:

```javascript
var breakfastSchema = new Schema({
  eggs: {
    type: Number,
    min: [6, 'Too few eggs'],
    max: 12,
    required: [true, 'Why no eggs?']
  },
  drink: {
    type: String,
    enum: ['Coffee', 'Tea', 'Water',]
  }
});
```

Refer to: [Mongoose Docs - Validation](https://mongoosejs.com/docs/validation.html)

#### Virtual properties

#### Methods and query helpers

### Using models

#### Creating and modifying documents

```javascript
// Create an instance of model SomeModel
var awesome_instance = new SomeModel({ name: 'awesome' });

// Save the new model instance, passing a callback
awesome_instance.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
```

OR (use create())

```javascript
SomeModel.create({ name: 'also_awesome' }, function (err, awesome_instance) {
  if (err) return handleError(err);
  // saved!
});


// Access model field values using dot notation
console.log(awesome_instance.name); //should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name="New cool name";
awesome_instance.save(function (err) {
   if (err) return handleError(err); // saved!
});
```

#### Searching for records

```javascript
var Athlete = mongoose.model('Athlete', yourSchema);

// find all athletes who play tennis, selecting the 'name' and 'age' fields
Athlete.find({ 'sport': 'Tennis' }, 'name age', function (err, athletes) {
  if (err) return handleError(err);
  // 'athletes' contains the list of athletes that match the criteria.
})
```

EXAMPLE:

```javascript
// find all athletes that play tennis
var query = Athlete.find({ 'sport': 'Tennis' });

// selecting the 'name' and 'age' fields
query.select('name age');

// limit our results to 5 items
query.limit(5);

// sort by age
query.sort({ age: -1 });

// execute the query at a later time
query.exec(function (err, athletes) {
  if (err) return handleError(err);
  // athletes contains an ordered list of 5 athletes who play Tennis
})
```

EXAMPLE: 

```javascript
Athlete.
  find().
  where('sport').equals('Tennis').
  where('age').gt(17).lt(50).  //Additional where query
  limit(5).
  sort({ age: -1 }).
  select('name age').
  exec(callback); // where callback is the name of our callback function.
```

Get all matching records: find()

Methods query for single record:

- findById()
- findOne()
- findByIdAndRemove()
- findByIdAndUpdate()
- findOneAndRemove()
- findOneAndUpdate()

#### Working with related documents — population

(ADD)

### One schema/model per file

(ADD)

---

## Setting up the MongoDB database

[MongoDB Atlas](https://www.mongodb.com/cloud/atlas): free cloud-hosted sandbox database

- Build a Cluster
- Create New Cluster
- Select Azur
- Select "FREE TIER AVAILABLE"
- Click: Create Cluster
- Click: Collections
- Click: Add my own data
  - DATABASE NAME: local_library
  - COLLECTION NAME: Collection0
- Click: Command Line Tools
- Click: Connect Instructions
- Click: Add a Different IP address
    - IP Adddress, enter: 0.0.0.0/0
    - Click Add IP Address button
- Create a MongoDB User
    - User: raulfm
    - Password: reorange3
    - Click: Create User
- Click: Choose a connection method
  - Click: Connect Your Application
- Under Connection String Only
  - Click: Copy

**NOTE**:

- replace "password" with password
- replace "test" with "local_library"

mongodb+srv://raulfm:<password>@cluster0-bkgpo.azure.mongodb.net/test?retryWrites=true&w=majority

---

## Install Mongoose

```vim
$ npm install mongoose
```

## Connect to MongoDB

**Go to**: /app.js

Add:

- after line var app = express();
- Replace the database url string ('insert_your_database_url_here') with the location URL

```javascript
//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'insert_your_database_url_here';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
```

## Defining the LocalLibrary Schema


---
Express_4-Routes_and_controllers.md

see [Express Tutorial Part 4: Routes and controllers]()

---
Express_5-Display_library_data.md

see [Express Tutorial Part 5: Displaying library data]()

---
Express_6-Forms.md

see [Express Tutorial Part 6: Working with forms]()

---
Express_7-Deploy.md

see [Express Tutorial Part 7: Deploying to production]()