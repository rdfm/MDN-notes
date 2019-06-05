# What is a URL?

see [What is a URL?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL)

> With Hypertext and HTTP, URL is one of the key concepts of the Web. It is the mechanism used by browsers to retrieve any published resource on the web.

**URL**: Uniform Resource Locator

- one of the key concepts of the Web, along with Hypertext and HTTP
- address of a given unique resource on the Web
- *in theory*: each valid URL points to a unique resource

## Deeper dive (URL)

### Basics: anatomy of a URL

Examples of URL's:

```html
https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn/
https://developer.mozilla.org/en-US/search?q=URL
```

*NOTE*: Any of those URLs can be typed into your browser's address bar to tell it to load the associated page (resource).

URL EXAMPLE:

```html
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

**http**:// => Protocol

- protocol is a set method for exchanging or transferring data around a computer network
- HTTP, usual protocol for websites
- HTTPS, secured version
- Browsers know how to handle other protocols:
  - **mailto:** (open a mail client)
  - **ftp:** (handle file transfer)

**www.example.com** => Domain Name

- indicates which Web server is being requested
- alternatively, possible to directly use IP address

**:80** => Port

- port / technical "gate"
- used to access resources on web server
- Usually omitted if web server uses standard ports
  - 80 for HTTP
  - 443 for HTTPS
- If port different, mandatory to add

**/path/to/myfile.html** => Path to the file

- path to the resource on the Web server
- early days represented physical location

**?key1=value1&key2=value2** => Parameters

- extra parameters provided to the Web server
- parameters are a list of key/value pairs separated by "&"
- each Web server has its own rules regarding parameters

**#SomewhereInTheDocument** => Anchor

- anchor to another part of the resource itself
- sort of a "bookmark"
- **NOTE**: the part after the #, also known as the fragment identifier, is never sent to the server with the request.

*NOTE*: [Extra rules and parts to URL](https://en.wikipedia.org/wiki/URL)

**ANALOGY**: URL is like a postal mail address

- protocol = postal service
- domain name = city / town
- port: zip code
- path: building where mail should go
- parameters: extra information, apt number
- anchor: actual person addressed to

### How to use URLs

- Type directly into browser address bar.

### Absolute URLs vs relative URLs

#### Examples of absolute URLs

Full URL (the same as the one we used before):

```html
https://developer.mozilla.org/en-US/docs/Learn
```

Implicit protocol

```html
//developer.mozilla.org/en-US/docs/Learn
```

Implicit domain name

```html
/en-US/docs/Learn
```

#### Examples of relative URLs

URL: https://developer.mozilla.org/en-US/docs/Learn

Sub-resources

```html
Skills/Infrastructure/Understanding_URLs
```

Trying to reach URL: https://developer.mozilla.org/en-US/docs/Learn/Skills/Infrastructure/Understanding_URLs

Going back in the directory tree

```html
../CSS/display
```

Trying to reach URL: https://developer.mozilla.org/en-US/docs/Learn/../CSS/display

Simplified as: https://developer.mozilla.org/en-US/docs/CSS/display

### Semantic URLs

- URLs represent a human-readable entry point for a Web site
- best practice to buld "semantic URLs"
- use works with inherent meaning, can be understood by anyone
- Learn more: [Clean URL](https://en.wikipedia.org/wiki/Clean_URL)