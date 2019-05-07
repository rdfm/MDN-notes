# Quotations and citations

see [How to add quotations and citations to web pages](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#Quotations)

## Quotations

### Blockquotes

- block level content (i.e. paragraph, multiple paragraphs, a list, etc.) is quoted
- wrap in &lt;blockquote&gt;
- cite="" atttibute include URL pointing to source

```html
EXAMPLE:
<blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
  <p>The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block
  Quotation Element</em>) indicates that the enclosed text is an extended quotation.</p>
</blockquote>
```

### Inline quotation

- use &lt;q&gt; element

```html
EXAMPLE:
<p>The quote element — <code>&lt;q&gt;</code> — is <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">intended for short quotations that don't require paragraph breaks.</q></p>
```

### Citations

- cite="" attribute, browsers, screenreaders, don't do much with it
- &lt;cite&gt; element
- contain title of resouce being quoted
- styled in italic by default

```html
EXAMPLES:
<p>According to the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
<cite>MDN blockquote page</cite></a>:
</p>

<blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
  <p>The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block
  Quotation Element</em>) indicates that the enclosed text is an extended quotation.</p>
</blockquote>

<p>The quote element — <code>&lt;q&gt;</code> — is <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">intended
for short quotations that don't require paragraph breaks.</q> -- <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">
<cite>MDN q page</cite></a>.</p>
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/advanced-text-formatting/quotations.html)**