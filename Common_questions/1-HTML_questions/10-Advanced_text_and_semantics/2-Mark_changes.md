# How to mark changes (added and removed text) — see the &lt;ins&gt; and &lt;del&gt; elements

## &lt;ins&gt; element

see [&lt;ins&gt; element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins)

**&lt;ins&gt;** element = represents a range of text that has been added to a document.

```html
HTML:

<p>“You're late!”</p>
<del>
    <p>“I apologize for the delay.”</p>
</del>
<ins cite="../howtobeawizard.html" datetime="2018-05">
    <p>“A wizard is never late …”</p>
</ins>
```

```css
CSS:
del,
ins {
    display: block;
    text-decoration: none;
    position: relative;
}

del {
    background-color: #fbb;
}

ins {
    background-color: #d4fcbc;
}

del::before,
ins::before {
    position: absolute;
    left: .5rem;
    font-family: monospace;
}

del::before {
    content: '−';
}

ins::before {
    content: '+';
}

p {
    margin: 0 1.8rem 0;
    font-family: Georgia, serif;
    font-size: 1rem;
}
```

### &lt;ins&gt; Attributes

- This element includes [global attributes].
- cite="" attribute
- datatime="" attribute

### &lt;ins&gt; Examples

```html
<ins>This text has been inserted</ins>
```

### &lt;ins&gt; Accessibility concerns

[ARTICLE: Short note on making your mark (more accessible)](https://developer.paciellogroup.com/blog/2017/12/short-note-on-making-your-mark-more-accessible/)

[ARTICLE: Tweaking Text Level Styles](http://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## &lt;del&gt;: The Deleted Text element

see [&lt;del&gt;: The Deleted Text element
](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del)

**&lt;del&gt;** element = represents a range of text that has been deleted from the document.

```html
HTML:
<blockquote>
    There is <del>nothing</del> <ins>no code</ins> either good or bad, but <del>thinking</del> <ins>running it</ins> makes it so.
</blockquote>
```

```css
del {
    text-decoration: line-through;
    background-color: #fbb;
    color: #555;
}

ins {
    text-decoration: none;
    background-color: #d4fcbc;
}

blockquote {
    padding-left: 15px;
    border-left: 3px solid #d7d7db;
    font-size: 1rem;
}
```

*NOTE*: This element is often (but need not be) rendered by applying a strike-through style to the text.

### &lt;del&gt; Attributes

- This element includes [global attributes].
- cite="" attribute
- datatime="" attribute

### &lt;del&gt; Examples

```html
<p><del>This text has been deleted</del>,
here is the rest of the paragraph.</p>
<del><p>This paragraph has been deleted.</p></del>
```

### &lt;del&gt; Accessibility concerns

[ARTICLE: Short note on making your mark (more accessible)](https://developer.paciellogroup.com/blog/2017/12/short-note-on-making-your-mark-more-accessible/)

[ARTICLE: Tweaking Text Level Styles](http://adrianroselli.com/2017/12/tweaking-text-level-styles.html)