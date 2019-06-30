# Setting up a Node development environment

see [Setting up a Node (Express) development environment](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment)

## Express development environment overview

### What is the Express development environment?

- NodeJS and npm package manager
- MVC pattern

### What operating systems are supported?

### What version of Node/Express should you use?

### What about databases and other dependencies?

## Installing Node

### Windows and macOS

### Testing your Nodejs and NPM installation

```vim 
$ node -v
```

```vim
$ npm -v
```

## Using NPM

```vim
$ mkdir myapp
$ cd myapp
$ npm init
$ npm install express
$ touch index.js
```

In index.js file:

```javascript
const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
```

```vim
$ node index.js
```

**On browser, go to**: http://127.0.0.1:8000/

### Adding dependencies

```vim
$ npm install eslint --save-dev
```

### Development dependencies

In package.json, refer to:

```vim
"devDependencies": {
    "eslint": "^4.12.1"
  }
```

### Running tasks

(Assuming that our application source is in a folder /src/js)

In package.json file, add:

```javascript
"scripts": {
  ...
  "lint": "eslint src/js"
  ...
}
```

Run task:

```vim
npm run-script lint

# OR (using the alias)

npm run lint
```

## Installing the Express Application Generator

```vim
$ npm install express-generator -g
```

Navigate to where you want to put your app

```vim
express helloworld
```

**NOTE**: If needed:

```vim
express --help
```

```vim
cd helloworld
npm install
```

Run helloworld on Linux/macOS:

```vim
$ DEBUG=helloworld:* npm start
```

On browser, go to: http://127.0.0.1:3000/
