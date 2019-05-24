# Active learning: Basic DOM manipulation

see [How do you manipulate the DOM (e.g. adding or removing elements) using JavaScript?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#Active_learning_Basic_DOM_manipulation)

1.
HTML: [dom-example.html page](https://github.com/mdn/learning-area/blob/master/javascript/apis/document-manipulation/dom-example.html)

IMAGE: [Dinosaur Image](https://github.com/mdn/learning-area/blob/master/javascript/apis/document-manipulation/dinosaur.png)

2.
Add &lt;script&gt;&lt;/script&gt; just above &gt;/body&lt;

3.

- MDN: HTMLAnchorElement
- MDN: HTMLElement
- MDN: Node
- MDN: Node.textContent

```javascript
var link = document.querySelector('a');
```

4.

```javascript
link.textContent = 'Mozilla Developer Network';
```

5.

```javascript
link.href = 'https://developer.mozilla.org';
```

*Select an element* (**Recommended modern approach**):

- MDN: Document.querySelector()
- MDN: Document.querySelectorAll()

*Select an element* (Older methods):

- MDN: Document.getElementById()
- MDN: Document.getElementsByTagName()

## Creating and placing new nodes

1.

```javascript
var sect = document.querySelector('section');
```

2.

- MDN: Document.createElement()

```javascript
var para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
```

3.

- MDN: Node.appendChild();

```javascript
sect.appendChild(para);
```

4.

- MDN: Document.createTextNode();

```javascript
var text = document.createTextNode(' — the premier source for web development knowledge.');
```

5.

```javascript
var linkPara = document.querySelector('p');
linkPara.appendChild(text);
```

## Moving and removing elements

1.

```javascript
sect.appendChild(linkPara);
```

2.

- MDN: Node.cloneNode()
- MDN: Node.removeChild()

```javascript
sect.removeChild(linkPara);
```

```javascript
linkPara.parentNode.removeChild(linkPara);
```

## Manipulating styles

- MDN: Document.stylesheets
- MDN: CSSStyleSheet
- MDN: HTMLElement.style

*EXAMPLE*: Add to &lt;script&gt;

```javascript
para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';
```

*EXAMPLE*: Page Inspector/DOM Inspector, created

```html
<p style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">We hope you enjoyed the ride.</p>
```

### Common way to dynamically manipulate styles

HTML: &lt;head&gt;

```html
<style>
.highlight {
  color: white;
  background-color: black;
  padding: 10px;
  width: 250px;
  text-align: center;
}
</style>
```

MDN: Element.setAttribute()

```javascript
para.setAttribute('class', 'highlight');
```

**[FINISHED - EXAMPLE (CODE](https://github.com/mdn/learning-area/blob/master/javascript/apis/document-manipulation/dom-example-manipulated.html)**

**[FINISHED - LIVE VERSION](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example-manipulated.html)**