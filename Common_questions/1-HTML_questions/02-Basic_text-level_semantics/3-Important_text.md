# Important text

see [How to indicate that text is important](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#Emphasis_and_importance)

## Strong importance

```html
<strong></strong>
```

- Recognized by screen readers and spoken out in a different tone of voice
- Browser style default = bold

*NOTE* : **DO NOT** use this tag for purely bold styling.
Instead use, &lt;span&gt; element with CSS, or &lt;b&gt;

```html
EXAMPLES:
<p>This liquid is <strong>highly toxic</strong>.</p>

<p>I am counting on you. <strong>Do not</strong> be late!</p>
```

```html
EXAMPLE (Nest strong and emphasis):
<p>This liquid is <strong>highly toxic</strong> —
if you drink it, <strong>you may <em>die</em></strong>.</p>
```