# Exiting loops with break

see [How do you exit a loop before the end if a certain condition is met?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#Exiting_loops_with_break)

**break** statement= exit a loop before all the iterations have been completed

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
const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
  let searchName = input.value.toLowerCase();//so that case is not an issue while comparing
  input.value = '';
  input.focus();
  for (let i = 0; i < contacts.length; i++) {
    let splitContact = contacts[i].split(':');
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
      break;
    } else {
      para.textContent = 'Contact not found.';
    }
  }
});
```

[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/contact-search.html)

[LIVE VERSION](https://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)