# Preventing default behavior

see [How do you prevent default event behaviour?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Preventing_default_behavior)

- May come across a situation where you want to stop an event doing what it does by default.
- Common Examples:
  - web form
  - custom registration form
  - when user has NOT submitted the data correctly

**EXAMPLE**:

HTML:

```html
<form>
  <div>
    <label for="fname">First name: </label>
    <input id="fname" type="text">
  </div>
  <div>
    <label for="lname">Last name: </label>
    <input id="lname" type="text">
  </div>
  <div>
     <input id="submit" type="submit">
  </div>
</form>
<p></p>
```

JAVASCRIPT:

```javascript
var form = document.querySelector('form');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var submit = document.getElementById('submit');
var para = document.querySelector('p');

form.onsubmit = function(e) {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
}
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/preventdefault-validation.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/javascript/building-blocks/events/preventdefault-validation.html)**

*NOTE*: Examples have pretty weak form validation — it wouldn't stop the user validating the form with spaces or numbers entered into the fields, for example — but it is ok for example purposes.