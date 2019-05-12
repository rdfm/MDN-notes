# Using data attributes

see [How to use data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

- data-* attributes = allow to store extra information on standar, semantic HTML elements

## HTML syntax

*NOTE*:  Any attribute on any element whose attribute name starts with data- is a data attribute.

```html
EXAMPLE:
<article
  id="electric-cars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
...
</article>
```

## JavaScript access

- in JavaScript can read values of attributes
- use getAttribute()
- [MDN: DOMStringMap](https://developer.mozilla.org/en-US/docs/Web/API/DOMStringMap)
- can read out via "dataset" property

```javascript
EXAMPLE:
const article = document.querySelector('#electric-cars');
 
article.dataset.columns // "3"
article.dataset.indexNumber // "12314"
article.dataset.parent // "cars"
```

*NOTE*: Each "dataset" property is a string, can be read and written.

## CSS access

*NOTE*: data attributes are plain HTML

```css
EXAMPLE (Using attr() function):
article::before {
  content: attr(data-parent);
}
```

```css
EXAMPLE (Use attribute selectors):
article[data-columns='3'] {
  width: 400px;
}
article[data-columns='4'] {
  width: 600px;
}
```

[JSBin Example](https://jsbin.com/ujiday/2/edit)

[WATCH: HTML5 data attributes (Screencast)](https://www.youtube.com/watch?v=On_WyUB1gOk)

[JSBin Example 2](https://jsbin.com/atawaz/3/edit)

## Issues

Refer to: [MDN: dataset issues](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes#Issues)