# Simple selectors

see [How to select elements via element name, class or ID](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Simple_selectors)

## Type selectors aka element selectors

- Case-insensitive match between the selector name and a given HTML element name
- Simplest way to target all elements of a given type

```css
/* All p elements are red */
p {
  color: red;
}

/* All div elements are blue */
div {
  color: blue;
}
```

## Class selectors

- Consists of a dot, '.', followed by a class name
- class name = HTML class attribute name
- *NOTE*: Multiple elements in a document can have the same class name
- *NOTE*: Single HTML element can have multiple class names (sepatrated by white space).

### Simple example

**HTML**:

```html
<ul>
  <li class="first done">Create an HTML document</li>
  <li class="second done">Create a CSS style sheet</li>
  <li class="third">Link them all together</li>
</ul>
```

**CSS**:

```css
/* The element with the class "first" is bolded */
.first {
  font-weight: bold;
}

/* All the elements with the class "done" are strikethrough */
.done {
  text-decoration: line-through;
}
```

## ID selectors

- Consists of a hash/pound symbol (#), followed by the ID name 
- ID name = HTML ID name set with id attribute
- *NOTE*: ONLY one unique ID name per element
- Most efficient way to select a single element

**HTML**:

```html
<p id="polite"> — "Good morning."</p>
<p id="rude"> — "Go away!"</p>
```

**CSS**:

```css
#polite {
  font-family: cursive;
}

#rude {
  font-family: monospace;
  text-transform: uppercase;
}
```

## Universal selector

- unviversal selector (*)
- Allows selecting all elements on a page.
- *RARELY* used to apply a style to every element on a page
- *OFTEN* used in combination with other selectors
- *NOTE*: Impact on performance as it applys to all elements

**HTML**:

```html
<div>
  <p>I think the containing box just needed
  a <strong>border</strong> or <em>something</em>,
  but this is getting <strong>out of hand</strong>!</p>
</div>
```

**CSS**:

```css
* {
  padding: 5px;
  border: 1px solid black;
  background: rgba(255,0,0,0.25)
}
```