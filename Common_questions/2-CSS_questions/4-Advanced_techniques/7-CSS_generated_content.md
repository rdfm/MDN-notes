# Using CSS generated content

see [Using CSS generated content](https://developer.mozilla.org/en-US/docs/Learn/CSS/Howto/Generated_content)

- ways to use CSS to add content when a document is displayed
- modify stylesheet to add text content

**NOTE**: Content specified in a stylesheet does not become part of the DOM.

## Examples

### Text content

- CSS can insert text content :before or :after an element
- Add:
  - ::before
  - ::after
- in declaration, specify **content** property

HTML:

```html
A text where I need to <span class="ref">something</span>
```

CSS:

```css
.ref::before {
  font-weight: bold;
  color: navy;
  content: "Reference ";
}
```

### Image content

- To add an image before or after an element
- can specify the URL of an image file in the value of the **content** property.

HTML:

```html
<a href="developer.mozilla.org" class="glossary">developer.mozilla.org</a>
```

CSS:

```css
a.glossary::after {
   content: " " url("https://mdn.mozillademos.org/files/16322/glossary-icon.gif");
}
```