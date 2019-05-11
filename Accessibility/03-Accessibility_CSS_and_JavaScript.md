# [CSS and JavaScript accessibility best practices](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript)

## CSS and JavaScript are accessible?

- NOT same immediate importance for accessibility at HTML
- able to help or damage accessibility, depending on usage

## CSS

### Correct semantics and user expectation

- use the appropriate HTML semantic element for the job

**RULE OF THUMB** : "Can update the styling of a page feature to fit in your design, but don't change it so much that it no longer looks or behaves as expected."

#### "Standard" text content structure

```html
HTML
<h1>Heading</h1>

<p>Paragraph</p>

<ul>
  <li>My list</li>
  <li>has two items.</li>
</ul>
```

```css
CSS
h1 {
  font-size: 5rem;
}

p, li {
  line-height: 1.5;
  font-size: 1.6rem;
}
```

*SHOULD DO* :

- Select sensible font sizes, line heights, letter spacing, etc.
- Make text logical, legible, and comfortable to read.
- Headings stand out from body text, big and bold (like default)
- Lists should look like lists.
- Text color should contrast well with background color.

[MDN: Styling text](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text)

#### Emphasised text

```html
HTML:
<p>The water is <em>very hot</em>.</p>

<p>Water droplets collecting on surfaces is called <strong>condensation</strong>.</p>
```

```css
CSS (Add color to emphasized text):
strong, em {
  color: #a60000;
}
```

#### Abbreviations

```html
HTML:
<p>Web content is marked up using <abbr title="Hypertext Markup Language">HTML</abbr>.</p>
```

```css
CSS (Simple style):
abbr {
  color: #a60000;
}
```

*NOTE* : "The recognised styling convention for abbreviations is a dotted underline, and it is unwise to significantly deviate from this."

#### Links

```html
HTML:
<p>Visit the <a href="https://www.mozilla.org">Mozilla homepage</a>.</p>
```

```css
CSS (Simple link styling):
a {
  color: #ff0000;
}

a:hover, a:visited, a:focus {
  color: #a60000;
  text-decoration: none;
}

a:active {
  color: #000000;
  background-color: #a60000;
}
```

*NOTE* :

- give users feedback when interact with links
- something should happen when state change
- DO NOT get rid of poiner cursor or the outline (important for keyboard controls)

#### Form elements

```html
EXAMPLE:
<div>
  <label for="name">Enter your name</label>
  <input type="text" id="name" name="name">
</div>
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/accessibility/css/form-css.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/accessibility/css/form-css.html)**

*NOTE* : DO NOT "deviate too much from the expected visual feedback form elements receive when they are focused,"

#### Tables

- tables for presenting tabular data

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/accessibility/css/table-css.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/accessibility/css/table-css.html)**

*NOTE* :

- make table headers stand out (normally using bold)
- use zebra striping to make different rows easier to parse

### Color and color contrast

- make sure that the text (foreground) color contrasts well with the background color.
- DO NOT

[WebAIM's Color Contrast Checker](https://webaim.org/resources/contrastchecker/)

*NOTE* : "A high contrast ratio will also allow anyone using a smartphone or tablet with a glossy screen to better read pages when in a bright environment, such as sunlight."

- DO NOT rely on color alone for signposts/information
- Instead of marking required form fields in red, for example, mark them with an asterisk and in red.

### Hiding things

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/info-box.html)**

- DO NOT use, visibility: hidden OR display: none

[MDN: Invisible Content Just for Screen Reader Users](https://webaim.org/techniques/css/invisiblecontent/)

### Accept that users can override your styles

*NOTE* : "It is possible for users to override your styles with their own custom styles" via external custom style sheets, browser preferences, etc.

[How to use a custom style sheet (CSS) with Internet Explorer](https://www.itsupportguides.com/knowledge-base/computer-accessibility/how-to-use-a-custom-style-sheet-css-with-internet-explorer/)

[How to use a custom style sheet (CSS) with Firefox](https://www.itsupportguides.com/knowledge-base/computer-accessibility/how-to-use-a-custom-style-sheet-css-with-firefox/)

## JavaScript

### The problem with too much JavaScript

### Keeping it unobtrusive

*GOOD EXAMPLES* :

- Providing client-side form validation, which alerts users to problems with their form entries quickly, without having to wait for the server to check the data. If it isn't available, the form will still work, but validation might be slower.
- Providing custom controls for HTML5 &lt;video&gt;s that are accessible to keyboard-only users, along with a direct link to the video that can be used to access it if JavaScript is not available (the default &lt;video&gt; browser controls aren't keyboard accessible in most browsers).

**[EXAMPLE (CODE) - Form Validation](https://github.com/mdn/learning-area/blob/master/accessibility/css/form-validation.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/accessibility/css/form-validation.html)**

```html
EXAMPLE: HTML (Form label)
<label for="name">Enter your name:</label>
<input type="text" name="name" id="name">
```

```javascript
EXAMPLE (Form validatioon):
form.onsubmit = validate;

function validate(e) {
  errorList.innerHTML = '';
  for(var i = 0; i < formItems.length; i++) {
    var testItem = formItems[i];
    if(testItem.input.value === '') {
      errorField.style.left = '360px';
      createLink(testItem);
    }
  }

  if(errorList.innerHTML !== '') {
    e.preventDefault();
  }
}
```

```javascript
EXAMPLE (JS - errorList):
function createLink(testItem) {
  var listItem = document.createElement('li');
  var anchor = document.createElement('a');
  anchor.textContent = testItem.input.name + ' field is empty: fill in your ' + testItem.input.name + '.';
  anchor.href = '#' + testItem.input.name;
  anchor.onclick = function() {
    testItem.input.focus();
  };
  listItem.appendChild(anchor);
  errorList.appendChild(listItem);
}
```

```html
EXAMPLE (HTML - WAI-ARIA attributes):
<div class="errors" role="alert" aria-relevant="all">
  <ul>
  </ul>
</div>
```

[WebAIM's Usable and Accessible Form Validation and Error Recovery](https://webaim.org/techniques/formvalidation/)

### Other JavaScript accessibility concerns

#### mouse-specific events

- mouse-specific events: mouseover, mouseout, dblclick
- double up events with: focus and blur

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/accessibility/css/mouse-and-keyboard-events.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/accessibility/css/mouse-and-keyboard-events.html)**

```javascript
imgThumb.onmouseover = showImg;
imgThumb.onmouseout = hideImg;

imgThumb.onfocus = showImg;
imgThumb.onblur = hideImg;
```

[MDN: Building keyboard accessibility back in](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#Building_keyboard_accessibility_back_in)
