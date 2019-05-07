# How to apply your CSS to your HTML

see [How to use CSS within a webpage](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works#How_to_apply_your_CSS_to_your_HTML)

3 Different ways to apply CSS to an HTML document

- External stylesheet
- Internal stylesheet
- Inline styles

## External stylesheet

- CSS written in a separate file with .css extension
- in HTML reference from &lt;link&gt; element

HTML file:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My CSS experiment</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first CSS example</p>
  </body>
</html>
```

CSS file (style.css):

```css
h1 {
  color: blue;
  background-color: yellow;
  border: 1px solid black;
}

p {
  color: red;
}
```

*NOTE* : Arguably the best method. Apply stylesheet to multiple documents. Update CSS in one place.

## Internal stylesheet

- NO external CSS file
- CSS place on HTML document, inside &lt;style&gt; element

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My CSS experiment</title>
    <style>
      h1 {
        color: blue;
        background-color: yellow;
        border: 1px solid black;
      }

      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first CSS example</p>
  </body>
</html>
```

*NOTE* : NOT as efficient as external stylesheets, CSS needs to be repeated across every page.

## Inline styles

- CSS declarations that affect one element ONLY, contained within a style="" attribute

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My CSS experiment</title>
  </head>
  <body>
    <h1 style="color: blue;background-color: yellow;border: 1px solid black;">Hello World!</h1>
    <p style="color:red;">This is my first CSS example</p>
  </body>
</html>
```

**WARNING** : **DO NOT** use inline styles.