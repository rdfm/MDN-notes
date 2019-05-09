# How to structure an HTML form

see [How to structure a Web form](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form)

## The &lt;form&gt; element

- many assistive technologies or browser plugins can discover &lt;form&gt; tags

*NOTE* : **DO NOT** nest a form inside another form.

## The &lt;fieldset&gt; and &lt;legend&gt; elements

```html
EXAMPLE:
<form>
  <fieldset>
    <legend>Fruit juice size</legend>
    <p>
      <input type="radio" name="size" id="size_1" value="small">
      <label for="size_1">Small</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_2" value="medium">
      <label for="size_2">Medium</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_3" value="large">
      <label for="size_3">Large</label>
    </p>
  </fieldset>
</form>
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/html/forms/html-form-structure/fieldset-legend.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/html/forms/html-form-structure/fieldset-legend.html)**

*NOTE* : A screen reader will speak,

- "Fruit juice size small" for the first widget
- "Fruit juice size medium" for the second widget
- "Fruit juice size large" for the third widget

**RECOMMENDED** : Each time you have a set of radio buttons, nest them inside a &lt;fieldset&gt; element

**TESTING** : Listen to how a screen reader interprets

[DOWNLOAD - NV Access (Non-visual software for Mac)](https://www.nvaccess.org/)

## The &lt;label&gt; element

```html
EXAMPLE:
<label for="name">Name:</label> 
<input type="text" id="name" name="user_name">

OR

<label for="name">
  Name: <input type="text" id="name" name="user_name">
</label>
```

*NOTE* :

- &lt;label&gt; associated correctly (for="" attribute + id), screen reader states "Name, edit text"
- &lt;label&gt; NOT associated correctly, screen reader states "Edit text blank"

**BEST PRACTICE** : set the for="" attribute, because some assistive technologies **DO NOT** understand implicit relationships.

### Labels are clickable, too!

```html
EXAMPLE:
<form>
  <p>
    <label for="taste_1">I like cherry</label>
    <input type="checkbox" id="taste_1" name="taste_cherry" value="1">
  </p>
  <p>
    <label for="taste_2">I like banana</label>
    <input type="checkbox" id="taste_2" name="taste_banana" value="2">
  </p>
</form>
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/html/forms/html-form-structure/checkbox-label.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/html/forms/html-form-structure/checkbox-label.html)**

### Multiple labels

*NOTE*: Can do, but **NOT** a good idea to.

```html
EXAMPLE:
<p>Required fields are followed by <abbr title="required">*</abbr>.</p>

<!-- So this: -->
<div>
  <label for="username">Name:</label>
  <input type="text" name="username">
  <label for="username"><abbr title="required">*</abbr></label>
</div>

<!-- would be better done like this: -->
<div>
  <label for="username">
    <span>Name:</span>
    <input id="username" type="text" name="username">
    <abbr title="required">*</abbr>
  </label>
</div>

<!-- But this is probably best: -->
<div>
  <label for="username">Name: <abbr title="required">*</abbr></label>
  <input id="username" type="text" name="username">
</div>
```

## Common HTML structures used with forms

**REMEMBER**: Forms are just HTML

**COMMON PRACTICE** :

- wrap a &lt;label&gt; and it's widget with a &lt;div&gt;
- &lt;p&gt; elements
- HTML lists (structuring multiple checkboxes or radio buttons)
- in addition to &lt;fieldset&gt;
  - HTML titles (&lt;h1&gt;, &lt;h2&gt;, etc)
  - &lt;section&gt;

### Active learning: building a form structure

**[HTML (blank template)](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html)**

**[CSS (form)](https://github.com/mdn/learning-area/blob/master/html/forms/html-form-structure/payment-form.css)**

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/html/forms/html-form-structure/payment-form.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/html/forms/html-form-structure/payment-form.html)**

**[CODEPEN: FINAL / SUMMARY EXAMPLE](https://codepen.io/rdfm/pen/NmJPrx?&editable=true)**