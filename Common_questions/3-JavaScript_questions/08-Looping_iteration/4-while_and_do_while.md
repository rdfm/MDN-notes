# while and do ... while

see [How do you use while and do ... while loops?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#while_and_do_..._while)

## while loop

- checks condition before iteration of the loop

*Pseudocode*:

```vim
initializer
while (exit-condition) {
  // code to run

  final-expression
}
```

**EXAMPLE**:

```javascript
let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }

  i++;
}
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/while.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/javascript/building-blocks/loops/while.html)**

## do ... while loop

- checks the condition after the execution of the statements inside the loop (runs once)

*Pseudocode*:

```vim
initializer
do {
  // code to run

  final-expression
} while (exit-condition)
```

**EXAMPLE**:

```javascript
let i = 0;

do {
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }

  i++;
} while (i < cats.length);
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/do-while.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html)**
