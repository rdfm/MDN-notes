# Comments

see [How do you add comments to JavaScript code?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#Comments)

**single line comment**: //

```javascript
// I am a comment
```

**multi-line comment**: /* */

```javascript
/*
  I am also
  a comment
*/
```

**EXAMPLE (JS Comments)**:

```javascript
// Function: creates a new paragraph and appends it to the bottom of the HTML body.

function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}

/*
  1. Get references to all the buttons on the page in an array format.
  2. Loop through all the buttons and add a click event listener to each one.

  When any button is pressed, the createParagraph() function will be run.
*/

const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}
```

*NOTE*: In general more comments is usually better than less, but you should be careful if you find yourself adding lots of comments to explain what variables are (your variable names perhaps should be more intuitive), or to explain very simple operations (maybe your code is overcomplicated).