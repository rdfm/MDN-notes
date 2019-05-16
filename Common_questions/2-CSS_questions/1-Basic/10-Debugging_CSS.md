# Debugging CSS

see [How to debug CSS in the browser](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Debugging_CSS)

- CSS is permissive, read [MDN: Permissive code](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML#Permissive_code)
  - Do something wrong in the code
  - Browsers parse permissively, still displays even with syntax errors
  - **Syntax errors** = spelling
  - **Logical errors** = code **NOT** correct result
- If CSS declaration invalid (contains a syntax error or the browser doesn't support), the browser just ignores it and moves on to the next line)
- If selector invalid, rule does **NOT** run, browser moves on to next rule

## Inspecting the DOM and CSS

Browser Tools (same kind of tools in all browsers, available in slightly different places):

- DOM inspector
- CSS editor

*EXAMPLE (Firefox)*:

- Cmd/Ctrl + Shift + I
- OR Tools > Web Developer > Inspector

**NOTE**: Each property has a checkbox next to it, which can be checked/unchecked to allow to enable/disable your CSS property by property.

## CSS validation

[W3C: CSS Validator](https://jigsaw.w3.org/css-validator/)

[CSS Lint](http://csslint.net/)