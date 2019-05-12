# How to represent numeric and code values with HTML

## Superscript and subscript

see [Superscript and Subscript](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#Superscript_and_subscript)

- marking up dates, chemical formulae, mathematical equations
- &lt;sup&gt; element = superscript
- &lt;sub&gt; element = subscript

```html
EXAMPLES:
<p>My birthday is on the 25<sup>th</sup> of May 2001.</p>
<p>Caffeine's chemical formula is C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.</p>
<p>If x<sup>2</sup> is 9, x must equal 3 or -3.</p>
```

## Representing computer code

see [Representing computer code](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#Representing_computer_code)

- **&lt;code&gt;**
  - generic pieces of code
- **&lt;pre&gt;**
  - retain white space (code blocks)
- **&lt;var&gt;**
  - marking upvariable names
- **&lt;kbd&gt;**
  - marking up keyboard (and other types) input entered
- **&lt;samp&gt;**
  - marking up the output

```html
EXAMPLES:
<pre><code>var para = document.querySelector('p');

para.onclick = function() {
  alert('Owww, stop poking me!');
}</code></pre>

<p>You shouldn't use presentational elements like <code>&lt;font&gt;</code> and <code>&lt;center&gt;</code>.</p>

<p>In the above JavaScript example, <var>para</var> represents a paragraph element.</p>


<p>Select all the text with <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
```

**[EXAMPLE (other-semantics.html)](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/advanced-text-formatting/other-semantics.html)**