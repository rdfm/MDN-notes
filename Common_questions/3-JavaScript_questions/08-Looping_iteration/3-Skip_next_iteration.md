# Skipping iterations with continue

see [How do you skip to the next iteration of a loop if a certain condition is met?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#Skipping_iterations_with_continue)

**continue** statement = skips to the next iteration of the loop

**EXAMPLE**:

HTML:

```html
<label for="search">Search by contact name: </label>
<input id="search" type="text">
<button>Search</button>

<p></p>
```

JAVASCRIPT:

```javascript
let num = input.value;

for (let i = 1; i <= num; i++) {
  let sqRoot = Math.sqrt(i);
  if (Math.floor(sqRoot) !== sqRoot) {
    continue;
  }

  para.textContent += i + ' ';
}
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/integer-squares.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)**