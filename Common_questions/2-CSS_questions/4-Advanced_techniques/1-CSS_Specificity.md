# Specificity

see [How to calculate specificity of a CSS selector](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance#Specificity)

**specificity**:

- mearsure of how specific a selector is
- how many elements could match
- ID selector > class selector > element selector
- to win against all, use **!important**

1. Thousands = +1, inline styles, inside *style* attribute, no selectors (1000)
2. Hundreds = +1, each ID selector (0100)
3. Tens = +1, each class, attribute, or pseudo-class selector (001))
4. Ones = +1, each element, or pseudo-element (0001)

**NOTE**: Universal selector (*), combinators (+, >, ~, ' ') and negation pseudo-class (:not) have no effect on specificity.

**EXAMPLES**:

- 0001: h1
- 0003: h1 + p::first-letter
- 0022: li > a[href*="en-US"] > .inline-warning
- 0100: #identifier
- 1000: No selector, with a rule inside an element's style attribute

**NOTE**: If multiple selectors have the same importance and specificity, which selector wins is decided by which comes later in the **source order**.

**EXAMPLE**:

HTML:

```html
<div id="outer" class="container">
  <div id="inner" class="container">
    <ul>
      <li class="nav"><a href="#">One</a></li>
      <li class="nav"><a href="#">Two</a></li>
    </ul>
  </div>
</div>
```

CSS:

```css
/* specificity: 0101 */
#outer a {
  background-color: red;
}

/* specificity: 0201 */
#outer #inner a {
  background-color: blue;
}

/* specificity: 0104 */
#outer div ul li a {
  color: yellow;
}

/* specificity: 0113 */
#outer div ul .nav a {
  color: white;
}

/* specificity: 0024 */
div div li:nth-child(2) a:hover {
  border: 10px solid black;
}

/* specificity: 0023 */
div li:nth-child(2) a:hover {
  border: 10px dashed black;
}

/* specificity: 0033 */
div div .nav:nth-child(2) a:hover {
  border: 10px double black;
}

a {
  display: inline-block;
  line-height: 40px;
  font-size: 20px;
  text-decoration: none;
  text-align: center;
  width: 200px;
  margin-bottom: 10px;
}

ul {
  padding: 0;
}

li {
  list-style-type: none;
}
```

**Reference**: [MDN - CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

## Source order

- if multiple competing selectors have the same importance and specificity
- third factor decides: source order
  - "later rules will win over earlier rules"

**EXAMPLES**:

```css
p {
  color: blue;
}

/* This rule will win over the first one */
p {
  color: red;
}
```

```css
/* This rule will win */
.footnote {
  color: blue;
}

p {
  color: red;
}
```

## A note on rule mixing

- cascade happens at the property level
  - properties override other properties
- **DO NOT** get rules overriding other rules

**EXAMPLE**:

HTML:

```html
<p>I'm <strong>important</strong></p>
```

CSS:

```css
/* specificity: 0002 */
p strong {
  background-color: khaki;
  color: green;
}

/* specificity: 0001 */
strong {
  text-decoration: underline;
  color: red;
}
```