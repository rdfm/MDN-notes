# Adding vector graphics to the web

see [How to add vector image to a webpage](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)

On the web, two types of images:

1. Raster image
    - defined by a grid of pixels
    - contains information (where each pixel placed and what color)
    - popular formats:
        - Bitmap (.bmp),
        - PNG (.png),
        - JPEG (.jpg),
        - GIF (.gif.)

2. Vector image
    - defined using algorithms
    - contains shape and path definitions
    - SVG format

[EXAMPLE (Vector vs. Raster)](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html)

## What is SVG?

**SVG** = Scalable Vector Graphic

- an XML-based language for describing vector images
- markup, like HTML
- defining the shapes and the effects applied
- for making graphics, NOT content
- Simple shapes: &lt;circle&gt;, &lt;rect&gt;>, etc.
- Advanced features: &lt;feColorMatrix&gt;, &lt;animate&gt;, &lt;mask&gt;

```html
EXAMPLE:
<svg version="1.1"
     baseProfile="full"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="black" />
  <circle cx="150" cy="100" r="90" fill="blue" />
</svg>
```

[ARTICLE: Inkscape: Guide to a Vector Drawing Program](http://tavmjong.free.fr/INKSCAPE/MANUAL/html/Web-Inkscape.html)

## Adding SVG to your page

### The quick way: &lt;img&gt;

- embed an SVG via an &lt;img&gt; element
- src="" attribure, reference file
- need width and height attributes

```html
EXAMPLE:
<img
    src="equilateral.svg"
    alt="triangle with all three sides equal"
    height="87px"
    width="100px" />
```

**Pros**:

- can make image into a hyperlink by nesting &lt;img&gt; inside &lt;a&gt;

**Cons**:

- CANNOT manipulate with JavaScript
- inline CSS styles, external stylesheets take no effect
- cannot restyle the image with CSS pseudoclasses (like :focus).

### Troubleshooting and cross-browser support

*NOTE*: For browsers that don't support SVG (IE 8 and below, Android 2.3 and below), can reference a PNG or JPG from src=""+ srcset=""attibute

```html
EXAMPLE:
<img src="equilateral.png" alt="triangle with equal sides" srcset="equilateral.svg">
```

```css
EXAMPLE (SVGs as CSS background images) :
background: url("fallback.png") no-repeat center;
background-image: url("image.svg");
background-size: contain;
```

### How to include SVG code inside your HTML

- open SVG in a texteditor, copy SVG code, and paste in HTML
- aka SVG inline, or inlining SVG.

**Pros**:

- SVG inline saves an HTTP request (thus reduce loading time)
- can assign classes and ids
- Inlining SVG allows use ofCSS interactions (like :focus) and CSS animations SVG images
- Can make into hyperlink by wrapping in an &lt;a&gt; element

**Cons**:

- SVG is only in one place, NO duplication
- SVG code increases the size of your HTML file
- browser cannot cache inline SVG as it would cache regular image assets.

### How to embed an SVG with an &lt;iframe&rt;

*NOTE*: **NOT** the best method to choose

```html
EXAMPLE:
<iframe src="triangle.svg" width="500" height="500" sandbox>
    <img src="triangle.png" alt="Triangle with three unequal sides" />
</iframe>
```

## Active Learning: Playing with SVG

```html
EXAMPLE:
<svg width="100%" height="100%">
    <rect width="100%" height="100%" fill="red" />
    <circle cx="100%" cy="100%" r="150" fill="blue" stroke="black" />
    <polygon points="120,0 240,225 0,225" fill="green"/>
    <text x="50" y="100" font-family="Verdana"          font-size="55"
        fill="white" stroke="black" stroke-width="2">
        Hello!
    </text>
</svg>
```

[MDN: A Simple SVG Example](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started)

[ARTICLE: Make SVG Responsive](http://thenewcode.com/744/Making-SVG-Responsive)

[ARTICLE: Making SVGs Responsive with CSS](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)

[W3C: Accessibility Features of SVG](https://www.w3.org/TR/SVG-access/)

[ARTICLE: How to Scale SVG](https://css-tricks.com/scale-svg/)