# From object to iframe — other embedding technologies

see [How to embed a webpage within another webpage](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)

Elements that allow to embed conent:

```html
<iframe>
<embed>
<object>
```

## A short history of embedding

- mid to late 90's: frames + frameset
- late 90's to early 2000's: plugin technologies (Java Applets, Flash)
- Finally, &lt;iframe&gt;, &lt;canvas&gt;, &lt;video&gt;, etc.

## Active learning: classic embedding uses

EXAMPLE:

  1. Youtube video
  2. Button: Share
  3. Select: Embed (Given &lt;iframe&gt; code)
  4. Insert code to project

EXAMPLE: Google Maps (Share / embed map option)

## Iframes in detail

EXAMPLE (Commenting System): [Disqus](https://disqus.com/)

```html
EXAMPLE (Include MDN glossary on web page):
<iframe src="https://developer.mozilla.org/en-US/docs/Glossary"
        width="100%" height="500" frameborder="0"
        allowfullscreen sandbox>
  <p> <a href="https://developer.mozilla.org/en-US/docs/Glossary">
    Fallback link for browsers that don't support iframes
  </a> </p>
</iframe>
```

- **allowfullscreen**
  - if set, &lt;iframe&gt; able to be in fullscreen mode (uses Full Screen API)

- **frameborder**
  - set to 1: draw border
  - set to 0: removes border
  - **NOT recommened** anymore, use CSS border: none;

- **src**
  - path to the URL of document to be embedded
    - To improve speed, set src="" attribute with JavaScript (after main content done loading)
    - Makes page usable sooner and decreases official page load time (SEO metric)

- **width and height**
  - width and height of iframe

- **Fallback Content**
  - between &lt;iframe&gt;&lt;/iframe&gt;
  - i.e. Link to the document
  - NOT likely, most browsers support &lt;iframe&gt;

- **sandbox**
  - works more on modern browsers (e.g. IE 10 and above)
  - requests heightend security settings

### Security concerns

- iframes are a common target (official term: attack vector)
- Common iframe attack: Clickjacking
  - hackers embed an invisible iframe into your document
  - OR embed your document into their own malicious website
  - use it to capture users' interactions

**[EXAMPLE (Code, attempting to embed entire MDN Glossary)]( https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html)**

**[LIVE VERSION (Check out, console)]( https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html)**

### Only embed when necessary

**RULE OF THUMB (Web Security)** : "You can never be too cautious. If you made it, double-check it anyway. If someone else made it, assume it's dangerous until proven otherwise."

[RESOURCE](https://commons.wikimedia.org/wiki/Main_Page)

[Best practices for attribution](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution)

### Use HTTPS

HTTPS is the encrypted version of HTTP

- requires a security certificate
- RESOURCE: [Let's Encrypt](https://letsencrypt.org/)

1. Reduces the chance that remote content has been tampered with in transit.
2. Prevents embedded content from accessing content in your parent document, and vice versa.

**WARNING**: "No matter what the cost, you must never embed third-party content with HTTP."

*NOTE* : Github pages allow content to be served via HTTPS by default

### Always use the sandbox attribute

**[sandbox (computer security)](https://en.wikipedia.org/wiki/Sandbox_(computer_security))**

- give embedded content only permissions needed for doing its job.
- a container for code where it can be used appropriately, or for testing, but can't cause any harm to the rest of the codebase (either accidental or malicious).
- using sandbox attribute with no parameters impose all available restrictions

*NOTE* : Never add both allow-scripts and allow-same-origin to sandbox attribute

### Configure CSP directives

**CSP** = Content Security Policy

- provides a set of HTTP Headers
- (metadata sent along with web pages when served from a server)

[POST: On the X-Frame-Options Security Header](
https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/)