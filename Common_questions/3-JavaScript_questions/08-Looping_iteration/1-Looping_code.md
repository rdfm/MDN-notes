# Looping code

see [How do you run the same bit of code over and over again?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code)

- loop = doing the same thing over and over again
- programming terms = **iteration**

*Loop* has one or more:

- **counter**:
  - initialized with a certain value
  - starting point of the loop
- **exit condition**:
  - criteria under which the loop stops
  - usually counter reaching a certain value
- **iterator**:
  - generally increments the counter by a small amount on each successive loop
  - until it reaches the exit condition

*Pseudocode*:

```javascript
loop(food = 0; foodNeeded = 10) {
  if (food >= foodNeeded) {
    exit loop;
    // We have enough food; let's go home
  } else {
    food += 2; // Spend an hour collecting 2 more food
    // loop will then run again
  }
}
```

**EXAMPLE**:

```javascript
for (let i = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.fillStyle = 'rgba(255,0,0,0.5)';
  ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
  ctx.fill();
}
```

## The standard for loop

*Pseudocode*:

```vim
for (initializer; exit-condition; final-expression) {
  // code to run
}
```

- **initializer**
  - usually a variable set to a number
  - which is incremented to count the number of times the loop has run
  - aka **counter variable**
- **exit-condition**
  - defines when the loop should stop looping
  - generally an expression featuring a comparison operator
- **final-expression**
  - always evaluated (or run) each time the loop has gone through a full iteration.
  - usually serves to increment (or in some cases decrement) the counter variable, to bring it closer to the exit condition value

**EXAMPLE**:

```javacript
const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let info = 'My cats are called ';
const para = document.querySelector('p');

for (let i = 0; i < cats.length; i++) {
  info += cats[i] + ', ';
}

para.textContent = info;
```

[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/basic-for-improved.html)

[LIVE VERSION](https://mdn.github.io/learning-area/javascript/building-blocks/loops/basic-for-improved.html)



