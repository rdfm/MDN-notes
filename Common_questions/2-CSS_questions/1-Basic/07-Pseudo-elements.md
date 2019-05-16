# Pseudo-elements

see [How to use pseudo-elements](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements#Pseudo-elements)

- similar to pseudo-classes
- keywords preceded by two colons (::)
- added to the end of selectors
- select a certain part of an element

```
::after
::before
::first-letter
::first-line
::selection
::backdrop
```

## Example 1

**HTML**:

```html
<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Glossary/CSS">CSS</a> defined in the MDN glossary.</li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML">HTML</a> defined in the MDN glossary.</li>
</ul>
```

**CSS**:

```css
/* All elements with an attribute "href" with values
   starting with "http" will have an arrow added after their
   content (to indicate they are external links) */
[href^=http]::after {
  content: '⤴';
}
```

## Example 2

**HTML**:

```html
<p>This is my very important paragraph.
 I am a distinguished gentleman of such renown that my paragraph
 needs to be styled in a manner befitting my majesty. Bow before
my splendour, dear students, and go forth and learn CSS!</p>
```

**CSS**:

```css
p::first-line {
  font-weight: bold;
}

p::first-letter {
  font-size: 3em;
  border: 1px solid black;
  background: red;
  display: block;
  float: left;
  padding: 2px;
  margin-right: 4px;
}
```