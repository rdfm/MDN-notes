# Tips for authoring fast-loading HTML pages

see [How to author fast-loading HTML pages](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Author_fast-loading_HTML_pages)

## Tips

### Reduce page weight

### Minimize the number of files

### Use a Content Delivery Network (CDN)

### Reduce domain lookups

### Cache reused content

### Optimally order the components of the page

### Reduce the number of inline scripts

### Use modern CSS and valid markup

### Chunk your content

### Minify and compress SVG assets

### Minify and compress your images

### Specify sizes for images and tables

### Choose your user-agent requirements wisely

### Use asynce and defer, if possible

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