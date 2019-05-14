# Tips for authoring fast-loading HTML pages

see [How to author fast-loading HTML pages](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Author_fast-loading_HTML_pages)

## Tips

### Reduce page weight

**TOOL**: [HTML Tidy](http://www.html-tidy.org/)

- strip leading whitespace and extra blank lines

### Minimize the number of files

- Reduce number of files referenced
- Lowers the number of HTTP requests required to download a page
- Use CSS image sprites for background images

### Use a Content Delivery Network (CDN)

**CDN** = Content Delivery Network

- reduce physical distance between server and vistor
- geographically distributed network of servers
- shorten distance between user and website

[ARTICLE: Understanding CDNs](https://www.imperva.com/learn/performance/what-is-cdn-how-it-works/?utm_campaign=Incapsula-moved)

### Reduce domain lookups

*TRY*: To use ONLY the minimum necessary number of different domains in your page.

### Cache reused content

*MAKE SURE*: Content can be ...

- cached
- is cached
- with appropriate expiration times

*PAY ATTENTION*: To Last-Modified header

**More information**:

1. [HTTP Conditional Get for RSS Hackers](https://fishbowl.pastiche.org/2002/10/21/http_conditional_get_for_rss_hackers)
2. [HTTP 304: Not Modified](https://annevankesteren.nl/2005/05/http-304)
3. [HTTP ETag on Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag)
4. [Caching in HTTP](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)

### Optimally order the components of the page

- Download page content first (along CSS or JavaScript)  required for initial display
  - User gets the quickest apparent response during page loading.
- Text compression in transit
- Initially disabled (dynamic features), and then enabled after the page has loaded
  - Causes JavaScript to be loaded after page contents

### Reduce the number of inline scripts

- Inline scripts can be expensive for page loading scripts
- Reduce inline scripts
- Reducing the use of document.write()
- Use modern AJAX methods to manipulate page content for modren browsers

### Use modern CSS and valid markup

**TOOL**: [HTML Tidy](http://www.html-tidy.org/)

### Chunk your content

- **WARNING**: **DO NOT** use tables for layouts
- Layouts utilizing: floats, positioning, flexbox, or grids

Avoid nesting tables, use non-nested tables or divs:

```html
<table>...</table>
<table>...</table>
<table>...</table>
```

[CSS Flexible Box Layout](https://www.w3.org/TR/css-flexbox-1/)
[CSS Grid Layout](https://www.w3.org/TR/css-grid-1/)

### Minify and compress SVG assets

- Unnecessary metadata can be removed

### Minify and compress your images

- Compress images before addingto page.

**TOOLS** :
[Compress Jpeg](https://compressjpeg.com/)
[Tiny PNG](https://tinypng.com/)

### Specify sizes for images and tables

- height and width should be specified for images

```html
table-layout: fixed;
```

- specify widths of columns using the &lt;col&gt; and the &lt;colgroup&gt; elements.

### Choose your user-agent requirements wisely

- Firefox, Internet Explorer, Google Chrome, Opera, and Safari.

### Use async and defer, if possible

- async="" attribute
- defer="" attribute

## Example page structure

```html
· HTML
  
  · HEAD
    
    · LINK ...
    CSS files required for page appearance. 
    Minimize the number of files for performance 
    while keeping unrelated CSS in separate files 
    for maintenance.
    
    · SCRIPT ...
    JavaScript files for functions required during 
    the loading of the page, but not any DHTML that 
    can only run after page loads.

    Minimize the number of files for performance 
    while keeping unrelated JavaScript in separate 
    files for maintenance.

· BODY
User visible page content in small chunks (tables/
divs) that can be displayed without waiting for the 
full page to download.

  · SCRIPT ...
  Any scripts which will be used to perform DHTML. 
  DHTML script typically can only run after the 
  page has completely loaded and all necessary 
  objects have been initialized. There is no need 
  to load these scripts before the page content. 
  That only slows down the initial appearance of 
  the page load.

  Minimize the number of files for performance 
  while keeping unrelated JavaScript in separate 
  files for maintenance.

  If any images are used for rollover effects, you 
  should preload them here after the page content 
  has downloaded.
```

## Related Links

- Book: ["Speed Up Your Site" by Andy King](http://www.websiteoptimization.com/)
- [Best Practices for Speeding Up Your Web Site (Yahoo!)](https://developer.yahoo.com/performance/rules.html)
- Tools for analyzing and optimizing performance: [Google PageSpeed Tools](https://developers.google.com/speed/)
- [MDN: Paint Flashing Tool](https://developer.mozilla.org/en-US/docs/Tools/Paint_Flashing_Tool)