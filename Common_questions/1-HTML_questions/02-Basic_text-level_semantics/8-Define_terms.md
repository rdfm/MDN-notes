# Define terms with HTML

see [How to define terms with HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Define_terms_with_HTML)

## How to mark informal description

- HTML is NOT a visual medium, don't use bold
- use &lt;dfn&gt; element, for marking first occurence of keywords

*NOTE* : &lt;dfn&gt; tags go around word, NOT definition

```html
<dfn></dfn>
```

```html
EXAMPLE:
<p><dfn>Firefox</dfn> is the web browser created by the Mozilla Foundation.</p>
```

### Special case: Abbreviations

- use &lt;abbr&gt; for screen readers
- define abbreviations the first time they occur
- nest &lt;abbr&gt; tags in &lt;dfn&gt; tags

```html
EXAMPLE:
<p>
  <dfn><abbr>HTML</abbr> (hypertext markup language)</dfn>
   is a description language used to structure documents on the web.
</p>
```

### Improve accessibility

- definition consists of only one sentence rather than whole paragraph
- aria-describedby="" attribute
- associate term formally with its definition

```html
EXAMPLE:
<p>
  <span id="ff">
    <dfn aria-describedby="ff">Firefox</dfn>
    is the web browser created by the Mozilla Foundation.
  </span>
  You can download it at <a href="http://www.mozilla.org">mozilla.org</a>
</p>
```

## How to build a description list

- description list = a list of terms and their matching descriptions
- e.g. definition lists, dictionary entries, FAQs, and key-value pairs

```html
<dl>      // description list
  <dt>    // description title
    <dd>  // description data
```

```html
EXAMPLE (SIMPLE):
<dl>
  <dt>jambalaya</dt>
    <dd>
      rice-based entree typically containing chicken,
      sausage, seafood, and spices
    </dd>
  
  <dt>sukiyaki</dt>
    <dd>
      Japanese specialty consisting of thinly sliced meat,
      vegetables, and noodles, cooked in sake and soy sauce
    </dd>
    
  <dt>chianti</dt>
    <dd>
      dry Italian red wine originating in Tuscany
    </dd>
</dl>
```

## Improving the visual output

If want keywords to standout, add to CSS:

```css
dt {
  font-weight: bold;
}
```