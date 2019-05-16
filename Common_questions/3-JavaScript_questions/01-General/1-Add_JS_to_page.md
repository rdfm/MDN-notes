# How do you add JavaScript to your page?

see [How do you add JavaScript to your page?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#How_do_you_add_JavaScript_to_your_page)

- HTML &lt;script&gt; element

## Internal JavaScript

Just before your closing &lt;/head&gt; tag, add:

```javascript
<script>

  // JavaScript goes here

</script>
```

**EXAMPLE (Internal JS)**:

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <title>Apply JavaScript example</title>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
        function createParagraph() {
            let para = document.createElement('p');
            para.textContent = 'You clicked the button!';
            document.body.appendChild(para);
        }

        const buttons = document.querySelectorAll('button');

        for(let i = 0; i < buttons.length ; i++) {
            buttons[i].addEventListener('click', createParagraph);
        }
        });
    </script>
  </head>
  <body>
    <button>Click me</button>
  </body>
</html>
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)**

## External JavaScript

- JavaScript in an external file

**HTML**:

```html
<script src="script.js" async></script>
```

**JAVASCRIPT**:

```javascript
function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)**

**[LIVE VERSION](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/script.js)**

## Inline JavaScript handlers

**WARNING**: **DO NOT DO THIS**, considered bad practice

**HTML**:

```html
<button onclick="createParagraph()">Click me!</button>
```

**JAVASCRIPT**:

```javascript
function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}
```

## Script loading strategies

- HTML on a page is loaded in the order in which it appears.
- *NOTE*: Code won't work if the JavaScript is loaded and parsed before the HTML
- event listener => "DOMContentLoaded"
- modern JS feature => "async" attribute
- old fashioned solution => put script elment at the bottom (but major performance issues)


### async and defer

>  bypass the problem of the blocking script

**async**:

- scripts will download the script without blocking rendering the page
- will execute it as soon as the script finishes downloading. 
- **NO** guarantee that scripts will run in any specific order
- will not stop the rest of the page from displaying
- *NOTE*: Best to use async when the scripts in the page run independently from each other and depend on no other script on the page

```javascript
<script async src="js/vendor/jquery.js"></script>

<script async src="js/script2.js"></script>

<script async src="js/script3.js"></script>
```

**defer**:

- run the scripts in the order they appear in the page and execute them as soon as the script and content are downloaded
- will load in the order they appear on the page

```javascript
<script defer src="js/vendor/jquery.js"></script>

<script defer src="js/script2.js"></script>

<script defer src="js/script3.js"></script>
```

**SUMMARY**:

- in &lt;head&gt; element, add async or defer attributes to &lt;script&gt; tags
- *Use async*: Scripts don't need to wait for parsing and can run independently without dependencies
- *Use defer*: Scripts need to wait for parsing and depend on other scripts and put their corresponding &lt;script&gt; elements in the order want the browser to execute them