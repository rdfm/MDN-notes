# [HTML: A good basis for accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)

## HTML and accessibility

*Common Theme*: importance of using semantic HTML

**POSH** = Plain Old Semantic HTML

Using the correct HTML elements for their correct purpose.

```html
EXAMPLE:
<button>Play video</button>
```

- built-in keyboard accessibility
- can be tabbed between
- activated using Return/Enter

**Semantic HTML benefits** :

1. Easier to develop with
2. Better on mobile
3. Good for SEO

*NOTE* : For testing, good to have a screenreader set up on your local computer

[MDN: Screenreaders Guide](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Screenreaders)

## Good semantics

"Use the right HTML element for the right job."

### Text content

- One of the best accessibility aids a screenreader user can have is a good content structure of headings, paragraphs, lists, etc.

```html
GOOD SEMANTIC EXAMPLE:
<h1>My heading</h1>

<p>This is the first section of my document.</p>

<p>I'll add another paragraph here too.</p>

<ol>
  <li>Here is</li>
  <li>a list for</li>
  <li>you to read</li>
</ol>

<h2>My subheading</h2>

<p>This is the first subsection of my document. I'd love people to be able to find this content!</p>

<h2>My 2nd subheading</h2>

<p>This is the second subsection of my content. I think is more interesting than the last one.</p>
```

**[LIVE VERSION (Test: With screenreader)](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)**

#### Using clear language

- Don't use dashes if you can avoid it. Instead of writing 5–7, write 5 to 7.
- Expand abbreviations — instead of writing Jan, write January.
- Expand acronyms, at least once or twice. Instead of writing HTML in the first instance, write Hypertext Markup Language.

### Page layouts

**WARNING** : **DO NOT** use table layouts.

**[LIVE VERSION (Modern Website Structure Example)](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/)**

```html
EXAMPLE (Modern Structure):
<header>
  <h1>Header</h1>
</header>

<nav>
  <!-- main navigation in here -->
</nav>

<!-- Here is our page's main content -->
<main>

  <!-- It contains an article -->
  <article>
    <h2>Article heading</h2>

    <!-- article content in here -->
  </article>

  <aside>
    <h2>Related</h2>

    <!-- aside content in here -->
  </aside>

</main>

<!-- And here is our main footer that is used across all the pages of our website -->

<footer>
  <!-- footer content in here -->
</footer>
```

[MDN: Content sectioning](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Content_sectioning)

*READ* : [Screen Reader Support for new HTML5 Section Elements](http://www.weba11y.com/blog/2016/04/22/screen-reader-support-for-new-html5-section-elements/)

### UI controls

- main parts of web documents that users interact with
  - buttons, links, and form controls
- by default, browsers allow them to be manipulated by the keyboard

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)**

**[LIVE VERSION (Test: Press tab key)](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)**

[MDN: Using native keyboard accessibility](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Using_native_keyboard_accessibility)

```html
EXAMPLE:
<h1>Links</h1>

<p>This is a link to <a href="https://www.mozilla.org">Mozilla</a>.</p>

<p>Another link, to the <a href="https://developer.mozilla.org">Mozilla Developer Network</a>.</p>

<h2>Buttons</h2>

<p>
  <button data-message="This is from the first button">Click me!</button>
  <button data-message="This is from the second button">Click me too!</button>
  <button data-message="This is from the third button">And me!</button>
</p>

<h2>Form</h2>

<form>
  <div>
    <label for="name">Fill in your name:</label>
    <input type="text" id="name" name="name">
  </div>
  <div>
    <label for="age">Enter your age:</label>
    <input type="text" id="age" name="age">
  </div>
  <div>
    <label for="mood">Choose your mood:</label>
    <select id="mood" name="mood">
      <option>Happy</option>
      <option>Sad</option>
      <option>Angry</option>
      <option>Worried</option>
    </select>
  </div>
</form>
```

#### Building keyboard accessibility back in

- tabindex="" attribute allows tabbable elements to have a custom tab order (positive numerical order), instead of default source order.

*Add tabindex="0" to &lt;div&gt;'s)*:

```html
<div data-message="This is from the first button" tabindex="0">Click me!</div>
<div data-message="This is from the second button" tabindex="0">Click me too!</div>
<div data-message="This is from the third button" tabindex="0">And me!</div>
```

*Add JavaScript*:
```javascript
document.onkeydown = function(e) {
  if(e.keyCode === 13) { // The Enter/Return key
    document.activeElement.click();
  }
};
```

*NOTE* : "Better to just use the right element for the right job in the first place."

#### Meaningful text labels

```html
EXAMPLE:
<p>Whales are really awesome creatures. <a href="whales.html">Find out more about whales</a>.</p>
```

**[LIVE VERSION (Good Links)](https://mdn.github.io/learning-area/accessibility/html/good-links.html)**

```html
EXAMPLE (From Label):
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name">
</div>
```

**[LIVE VERSION (Good Forms)](https://mdn.github.io/learning-area/accessibility/html/good-form.html)**

## Accessible data tables

```html
EXAMPLE (Basic Data Table):
<table>
  <tr>
    <td>Name</td>
    <td>Age</td>
    <td>Gender</td>
  </tr>
  <tr>
    <td>Gabriel</td>
    <td>13</td>
    <td>Male</td>
  </tr>
  <tr>
    <td>Elva</td>
    <td>8</td>
    <td>Female</td>
  </tr>
  <tr>
    <td>Freida</td>
    <td>5</td>
    <td>Female</td>
  </tr>
</table>
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/styling-tables/punk-bands-complete.html)**

[MDN: HTML table advanced features and accessibility](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced)

## Text alternatives

- multimedia content — image/video content cannot be seen by visually-impaired people, and audio content cannot be heard by hearing-impaired people.

```html
EXAMPLE:
<img src="dinosaur.png">

<img src="dinosaur.png"
     alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth.">

<img src="dinosaur.png"
     alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth."
     title="The Mozilla red dinosaur">

<img src="dinosaur.png" aria-labelledby="dino-label">

<p id="dino-label">The Mozilla red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth.</p>
```

**[LIVE VERSION](https://mdn.github.io/learning-area/accessibility/html/accessible-image.html)**

**WARNING** : NEVER include text content inside an image, screen readers CAN NOT access.

*NOTE* : Use CSS to display images that are decoration ONLY.