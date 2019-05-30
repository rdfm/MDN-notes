# Controlling inheritance

see [How to control inheritance in CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance#Controlling_inheritance)

CSS provides four special universal property values for specifying inheritance:

## inherit

- property value same as parent element

## initial

- property value same for that element in the browser's default style sheet
- if no value set by browser, property value set to *inherit*

## unset

- resets property to its natural value
- if property naturally inherited acts like *inherit*
- otherwise acts like *initial*

## revert

- property's value set to the user stylesheet's value (if one is set), otherwise, the property's value is taken from the user agent's default stylesheet

**NOTE**: *initial* and *unset* are **NOT** supported in IE

Review: [MDN - Origin of CSS declarations](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade#Origin_of_CSS_declarations)

Review: [MDN - Introducing the CSS Cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)

**EXAMPLE**:

HTML:

```html
<ul>
  <li>Default <a href="#">link</a> color</li>
  <li class="my-class-1">Inherit the <a href="#">link</a> color</li>
  <li class="my-class-2">Reset the <a href="#">link</a> color</li>
  <li class="my-class-3">Unset the <a href="#">link</a> color</li>
</ul>
```

CSS:

```css
body {
  color: green;
}

.my-class-1 a {
  color: inherit;
}

.my-class-2 a {
  color: initial;
}

.my-class-3 a {
  color: unset;
}
```

### Resetting all property values

> The CSS shorthand property all can be used to apply one of these inheritance values to (almost) all properties at once. Its value can be any one of the inheritance values (inherit, initial, unset, or revert). It's a convenient way to undo changes made to styles so that you can get back to a known starting point before beginning new changes.