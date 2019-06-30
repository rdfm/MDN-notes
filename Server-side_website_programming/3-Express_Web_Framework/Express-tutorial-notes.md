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




---
Express_3-Database_Mongoose.md

see [Express Tutorial Part 3: Using a Database (with Mongoose)]()

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