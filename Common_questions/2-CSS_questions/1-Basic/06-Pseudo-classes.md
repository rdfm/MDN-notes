# Pseudo-classes

see [How to use pseudo-classes](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements#Pseudo-classes)

- is a keyword added to the end of a selector
- preceded by a colon (:)
- specify to style selected element, ONLY in a certain state
- **EXAMPLES**:
  - Style a link element only when it is being hovered over by the mouse pointer
  - Style a checkbox when it is disabled or checked
  - Style an element that is the first child of its parent in the DOM tree

```
:active
:checked
:default
:dir
:disabled
:empty
:enabled
:first
:first-child
:first-of-type
:fullscreen
:focus
:focus-within
:hover
:indeterminate
:in-range
:invalid
:lang
:last-child
:last-of-type
:left
:link
:matches()
:not
:nth-child
:nth-last-child
:nth-last-of-type
:nth-of-type
:only-child
:only-of-type
:optional
:out-of-range
:read-only
:read-write
:required
:right
:root
:scope
:target
:valid
:visited
```

**HTML Snippet**:

```html
<a href="https://developer.mozilla.org/" target="_blank">Mozilla Developer Network</a>
```

**CSS**:

```css
/* These styles will style our link
   in all states */
a {
  color: blue;
  font-weight: bold;
}

/* We want visited links to be the same color
   as non visited links */
a:visited {
  color: blue;
}

/* We highlight the link when it is
   hovered over (mouse over), activated (mouse down)
   or focused (keyboard) */
a:hover,
a:active,
a:focus {
  color: darkred;
  text-decoration: none;
}
```
