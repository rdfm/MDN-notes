# Comments

see [How to write comments in CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Syntax#Comments)

Comments in CSS begin with /* and end with */.

```css
EXAMPLE:

/* Handle basic element styling */
/* -------------------------------------------------------------------------------------------- */
body {font: 1em/150% Helvetica, Arial, sans-serif; padding: 1em; margin: 0 auto; max-width: 33em;}
@media (min-width: 70em) {
  /* Let's special case the global font size. On large screen or window,
     we increase the font size for better readability */
  body {font-size: 130%;}
}

h1 {font-size: 1.5em;}

/* Handle specific elements nested in the DOM  */
/* -------------------------------------------------------------------------------------------- */
div p, #id:first-line {background-color: red; background-style: none}
div p                 {margin          :   0; padding         : 1em;}
div p + p             {padding-top     :   0;                       }
```
