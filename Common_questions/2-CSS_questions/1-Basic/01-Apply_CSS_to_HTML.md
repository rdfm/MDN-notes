# How to apply your CSS to your HTML

see [How to apply CSS to HTML](https://developer.mozilla.org/en-US/Learn/CSS/Introduction_to_CSS/How_CSS_works#How_to_apply_your_CSS_to_your_HTML)

## External stylesheet

- CSS written in a separate file with a .css extension
- reference it from an HTML &lt;link&gt; element
- best method: one stylesheeet to style mutliple documents
- update in one place

```html
HTML:
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

```css
CSS file (style.css):
h1 {
  color: blue;
  background-color: yellow;
  border: 1px solid black;
}

p {
  color: red;
}
```

## Internal stylesheet

- place CSS inside a &lt;style&gt; element, contained inside the HTML &lt;head&gt;

```html
EXAMPLE:
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

## Inline styles

**WARNING**: **DO NOT** use this method.

- CSS declarations that affect one element **ONLY**
- contained with an element's style="" attribute

```html
EXAMPLE:
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