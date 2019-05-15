# White space

see [How to use whitespace in CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Syntax#White_space)

*White space* = actual spaces, tabs, and new lines

- for readability
- same as HTML, browser tends to ignore whitespace

```css
EXAMPLE (w/ whitespace - Good way to write CSS):

body {
  font: 1em/150% Helvetica, Arial, sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  body {
    font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}

div p, #id:first-line {
  background-color: red;
  background-style: none
}

div p {
  margin: 0;
  padding: 1em;
}

div p + p {
  padding-top: 0;
}
```

```css
EXAMPLE (w/o whitespace):

body {font: 1em/150% Helvetica, Arial, sans-serif; padding: 1em; margin: 0 auto; max-width: 33em;}
@media (min-width: 70em) { body {font-size: 130%;} }

h1 {font-size: 1.5em;}

div p, #id:first-line {background-color: red; background-style: none}
div p {margin: 0; padding: 1em;}
div p + p {padding-top: 0;}
```

```css
BE CAREFUL:

margin: 0 auto;
padding-left: 10px;
```