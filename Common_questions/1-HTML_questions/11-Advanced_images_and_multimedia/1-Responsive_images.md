# Responsive images

see [How to add a responsive image to a webpage](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

- art direction problem
- resolution switching problem
- new features: srcset / sizes / &lt;picture&gt;

## How do you create responsive images?

[ARTICLE: Responsive Images 101, Part 8: CSS Images](https://cloudfour.com/thinks/responsive-images-101-part-8-css-images/)

### Resolution switching: Different sizes

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/responsive-images/responsive.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html)**

```html
EXAMPLE (srcset="" + sizes attribute)
<img srcset="elva-fairy-320w.jpg 320w,
             elva-fairy-480w.jpg 480w,
             elva-fairy-800w.jpg 800w"
     sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
     src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy">
```

**scrset="" attribute** (set of images and their sizes, a browser to choose between)

- image filename
- space
- inherent width in pixels (480w)

**sizes="" attribute** (set of media conditions)

- media condition
- space
- width of the slot

*NOTE*: In the &lt;head&gt;

```html
<meta name="viewport" content="width=device-width">
```

- forces mobile browsers to adopt their real viewport width for loading pages

### Useful developer tools

*FIREFOX*: Tools > Web Developer > Responsive Design View

*CHROME (NOTE)*: When testing in Chrome, disable the cache when DevTools is open by checking the box under Settings > Preferences > Network. Otherwise, Chrome will favor cached images over better-fitting ones.

### Resolution switching: Same size, different resolutionsSection

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html)**

```html
EXAMPLE (srcset w/ x-descriptors):
<img srcset="elva-fairy-320w.jpg,
             elva-fairy-480w.jpg 1.5x,
             elva-fairy-640w.jpg 2x"
     src="elva-fairy-640w.jpg" alt="Elva dressed as a fairy">

  *INCLUDING CSS:
  img {
    width: 320px;
  }
```

### Art direction

- involves wanting to change the image displayed to suit different image display sizes.

**&lt;picture&gt; element**

```html
EXAMPLE:
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg">
  <source media="(min-width: 800px)" srcset="elva-800w.jpg">
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva">
</picture>
```

### Why can't we jsut do this using CSS or JavaScript?

- download (preload) any images

### Use modern image formats boldly

- new image formats (low file size / high quality):
  - WebP
  - JPEG-2000

```html
EXAMPLE (w/ MIME types in type="" attribute):
<picture>
  <source type="image/svg+xml" srcset="pyramid.svg">
  <source type="image/webp" srcset="pyramid.webp">
  <img src="pyramid.png" alt="regular pyramid built from four equilateral triangles">
</picture>
```

## Active learning: Implementing your own responsive imagesSection

[ARTICLE: Responsive Images 101, Part 1: Definitions](https://cloudfour.com/thinks/responsive-images-101-definitions/)

[ARTICLE: Responsive Images: If you’re just changing resolutions, use srcset.](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/)

[MDN: &lt;img&gt;: The Image Embed element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)

[MDN: &lt;picture&gt;: The Picture element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)

[MDN: &lt;source>&gt;: The Media or Image Source element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source)