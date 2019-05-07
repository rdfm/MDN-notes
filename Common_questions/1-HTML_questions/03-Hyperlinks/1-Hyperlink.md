# Creating hyperlinks

see [How to create a hyperlink](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)

## Hyperlink

- allow us to link our documents to any other document (or other resource)
- link to specific parts of documents
- make app available at simple web address
- &lt;a&gt; element
- href="" attribute (aka **Hypertext Reference**, or **target**)

```html
EXAMPLE (w/ title attribute):
<p>I'm creating a link to
<a href="https://www.mozilla.org/en-US/"
   title="The best place to find more information about Mozilla's
          mission and how to contribute">the Mozilla homepage</a>.
</p>
```

### Block level links

```html
EXAMPLE:
<a href="https://www.mozilla.org/en-US/">
  <img src="mozilla-image.png" alt="mozilla logo that links to the mozilla homepage">
</a>
```

## URL and paths

**URL** = Uniform Recourse Locator
- root
- same directory
- down to sub-directories
- up parent directories
- e.g. ../../../complex/path/to/my/file.html

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/tree/master/html/introduction-to-html/creating-hyperlinks)**

### Document fragments

- link to specific part of an HTML document

```html
EXAMPLE:
<h2 id="Mailing_address">Mailing address</h2>
```

```html
EXAMPLE:

<p>The <a href="#Mailing_address">company mailing address</a> can be found at the bottom of this page.</p>

OR

<p>Want to write us a letter? Use our <a href="contacts.html#Mailing_address">mailing address</a>.</p>
```

### Absolute versus relative URLs

**absolute** URL = points to absolute location http://www.example.com/projects/pdfs/project-brief.pdf

**relative URL** = points to location relative to file linking from pdfs/project-brief.pdf

## Link best practices

### Use clear linking words

```html
Bad:
<p><a href="https://firefox.com/">Click here</a> to download Firefox</p>

Good:
<p><a href="https://firefox.com/">Download Firefox</a></p>
```

*NOTE* : Use relative links wherever possible

### Linking to non-HTML resources - leave clear signposts

```html
EXAMPLES:
<p><a href="http://www.example.com/large-report.pdf">
  Download the sales report (PDF, 10MB)
</a></p>

<p><a href="http://www.example.com/video-stream/" target="_blank">
  Watch the video (stream opens in separate tab, HD quality)
</a></p>

<p><a href="http://www.example.com/car-game">
  Play the car game (requires Flash)
</a></p>
```

### Use the download attributewhen linking to a download

```html
EXAMPLE:
<a href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
   download="firefox-latest-64bit-installer.exe">
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>
```

## E-mail links

- links or buttons, when clicked open a new outgoing email message
- &lt;a&gt; element with mailto: URL scheme

```html
EXAMPLE:
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

```html
EXAMPLE (includes a cc, bcc, subject and body):
<a href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

**Sample mailto URLs** :

- mailto:
- mailto:nowhere@mozilla.org
- mailto:nowhere@mozilla.org,nobody@mozilla.org
- mailto:nowhere@mozilla.org?cc=nobody@mozilla.org
- mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=This%20is%20the%20subject