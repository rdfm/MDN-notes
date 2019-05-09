# Simple Web form

see [How to create a simple Web form](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Your_first_HTML_form)

## What are HTML forms?

- one of the main points of interaction between a user and a web site/application
- allow users to send data to the web site
- made of one or more widgets:
  - i.e. text fields, single OR multiline, select boxes, buttons, checkboxes, or radio buttons
  - mostly paired with a label (describes their purpose)

## Designing your form

[ARTICLE: Smashing Magazine - Forms](https://www.smashingmagazine.com/category/forms)

[ARTICLE: An Extensive Guide To Web Form Usability](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/)

[ARTICLE: 7 Basic Best Practices for Buttons](https://www.uxmatters.com/mt/archives/2012/05/7-basic-best-practices-for-buttons.php)

[ARTICLE: Pagination in Web Forms | Evaluating the Effectiveness of Web Forms](https://www.uxmatters.com/mt/archives/2010/03/pagination-in-web-forms-evaluating-the-effectiveness-of-web-forms.php)

## Active learning: Implementing our form HTML

```html
HTML elements: <form>, <label>, <input>, <textarea>, and <button>
```

[MDN: index.html template](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html)

### The &lt;form&gt; element

```html
<form action="/my-handling-form-page" method="post">
</form>
```

**BEST PRACTICE (At least)** :

- action attribute - URL where form's collected data should be when submitted.
- method attribute - defines HTTP method ("get" or "post")

### The &lt;label&gt;, &lt;input&gt;, and &lt;textarea&gt; elements

```html
EXAMPLE:
<form action="/my-handling-form-page" method="post">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="user_name">
  </div>
  <div>
    <label for="mail">E-mail:</label>
    <input type="email" id="mail" name="user_mail">
  </div>
  <div>
    <label for="msg">Message:</label>
    <textarea id="msg" name="user_message"></textarea>
  </div>
</form>
```

**for="" attribute in &lt;label&gt;** :

- links label to a form widget
- references id of the corresponding widget

**type="" attribute in &lt;input&gt;** :

- defines how &lt;input&gt; element behaves
- EXAMPLES:
  - type="text"
  - type="email"

**&lt;input&gt;** :

```html
<input type="text" value="by default this element is filled with this text" />
```

**&lt;textarea>&lt;/textarea&gt;** :

```html
<textarea> by default this element is filled with this text </textarea>
```

**The &lt;button&gt; element** :

- send data once form filled out

```html
EXAMPLE (Add <button></button> above </form>):

<form>
  ...
  <div class="button">
    <button type="submit">Send your message</button>
  </div>
</form>
```

*NOTE* : Can use: &lt;input type="submit"&gt; , but &lt;button&gt; allows full HTML content for more complex + creative text.

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/html/forms/your-first-HTML-form/first-form.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/html/forms/your-first-HTML-form/first-form.html)**

## Basic form styling

*NOTE* : "Forms are notoriously tricky to style nicely."

```css
ADD CSS (for HTML form)

form {
  /* Just to center the form on the page */
  margin: 0 auto;
  width: 400px;
  /* To see the outline of the form */
  padding: 1em;
  border: 1px solid #CCC;
  border-radius: 1em;
}

form div + div {
  margin-top: 1em;
}

label {
  /* To make sure that all labels have the same size and are properly aligned */
  display: inline-block;
  width: 90px;
  text-align: right;
}

input, textarea {
  /* To make sure that all text fields have the same font settings
     By default, textareas have a monospace font */
  font: 1em sans-serif;

  /* To give the same size to all text fields */
  width: 300px;
  box-sizing: border-box;

  /* To harmonize the look & feel of text field border */
  border: 1px solid #999;
}

input:focus, textarea:focus {
  /* To give a little highlight on active elements */
  border-color: #000;
}

textarea {
  /* To properly align multiline text fields with their labels */
  vertical-align: top;

  /* To give enough room to type some text */
  height: 5em;
}

.button {
  /* To position the buttons to the same position of the text fields */
  padding-left: 90px; /* same size as the label elements */
}

button {
  /* This extra margin represent roughly the same space as the space
     between the labels and their text fields */
  margin-left: .5em;
```

## Sending form data to your web server

**&lt;form&gt; element** :

- action="" attribute
- method="" attribute
- name="" attribute (name the data)

```html
EXAMPLE:
<form action="/my-handling-form-page" method="post">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="user_name" />
  <div>
  <div>
    <label for="mail">E-mail:</label>
    <input type="email" id="mail" name="user_email" />
  </div>
  <div>
    <label for="msg">Message:</label>
    <textarea id="msg" name="user_message"></textarea>
  </div>
  ...
```

**[CODEPEN: FINAL / SUMMARY EXAMPLE](https://codepen.io/rdfm/pen/LvqXYW?&editable=true)**