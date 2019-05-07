# The &lt;embed&gt; and &lt;object&gt; elements

see [How to add Flash content within a webpage](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies#The_%3Cembed%3E_and_%3Cobject%3E_elements)

- &lt;embed&gt; and &lt;object&gt;, general purpose embedding tools
- UNLIKELY to use these elements very much

```html
EXAMPLE (embed - Flash):
<embed src="whoosh.swf" quality="medium"
       bgcolor="#ffffff" width="550" height="400"
       name="whoosh" align="middle" allowScriptAccess="sameDomain"
       allowFullScreen="false" type="application/x-shockwave-flash"
       pluginspage="http://www.macromedia.com/go/getflashplayer">
```

```html
EXAMPLE (object - PDF):
<object data="mypdf.pdf" type="application/pdf"
        width="800" height="1200" typemustmatch>
  <p>You don't have a PDF plugin, but you can <a href="mypdf.pdf">download the PDF file.</a></p>
</object>
```

## The case against plugins

- Broaden your reach to everyone.
- Give yourself a break from the extra accessibility headaches that come with Flash and other plugins.
- Stay clear of additional security hazards.