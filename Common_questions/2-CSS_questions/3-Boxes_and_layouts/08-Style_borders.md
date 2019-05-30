# Styling borders using CSS

see [How to control borders](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Borders)

## Border recap

- border sits between element's
  - outer edge of the padding and
  - inner edge or the margin
- default border size = 0 (invisible)

### Border shorthand

**border** property (shorthand), sets all four sides at once

**EXAMPLE**:

HTML:

```html
<p>I have a red border!</p>
```

CSS:

```css
p {
  padding: 10px;
  background: yellow;
  border: 2px solid red;
}
```

### Longhand options

- shorthand: **border**
  - **border-top**
  - **border-right**
  - **border-bottom**
  - **border-left**

- only one style (all four sides)
  - **border-width**
  - **border-style**
  - **border-color**

- only one style (one side)
  - **border-top-width**
  - **border-top-style**
  - **border-top-color**

**EXAMPLE (CSS)**:

```css
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

div {
  width: 220px;
  padding: 20px;
  margin: 10px;
  line-height: 2;
  background-color: yellow;
  text-align: center;
  display: inline-block;
}

.complete {
  border-style: solid;
}

.written {
  border-style: dashed;
}

.incomplete {
  border-style: dotted;
}

.writing, .review {
  border-bottom: 6px solid red;
}
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/borders/border-longhand.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/css/styling-boxes/borders/border-longhand.html)**

## Border radius

- **border-radius** property, to make rounded corners on boxes
- supported in IE 9+

EXAMPLES:

```css
border-radius: 20px;
```

```css
/* 1st value is top left and bottom right corners,
   2nd value is top right and bottom left  */
border-radius: 20px 10px;
/* 1st value is top left corner, 2nd value is top right
   and bottom left, 3rd value is bottom right  */
border-radius: 20px 10px 50px;
/* top left, top right, bottom right, bottom left */
border-radius: 20px 10px 50px 0;
```

EXAMPLE: Create elliptical corners

```css
border-radius: 10px / 20px;
border-radius: 10px 30px / 20px 40px;
```

**NOTE**: Can use any length units to specify border radii (e.g. pixels, rems, percentages)

**NOTE**: Can set the border radius of each corner individually

- **border-top-left-radius**
- **border-top-right-radius**
- **border-bottom-left-radius**
- **border-bottom-right-radius**

## Border images

**border-image**:

- achieve complex patterned borders
- supported by modern browsers and IE 11+
- corner images inserted to corners (4)
- top, right, bottom, left => filled by stretching or repeating
- use **background-clip** to make any background color only fill area under content and padding
  - NOT extend under the border

```css
border: 30px solid black;
background-clip: padding-box;
```

**NOTE**: Always include **border** definition along side any use of **border-image**, as fallback if browser doesn't support feature.

**border-image-source** property:

- specify source image for border image
- works exactly the same way as *background-image*
  - able to accept **url()** function or gradient value

```css
border-image-source: url(border-image.png);
```

**border-image-slice** property:

- One value: all four sides
- Two values: top and left, right amd bottom
- Three values: top, left and right, bottom
- Four values: top, left, right, bottom

- Image (Raster graphic - .png, .jpg), value in terms of pixels
- Image (Vector graphic - .svg), value in terms of coordinates

For more info: [MDN: border-image-slice](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice)

*NOTE*: By default ninth slice (center piece) is omitted, if want center of border images use keyword *fill*

**border-image-repeat** property:

- stretch: (default) side images stretched to fill the borders (NOT recommended - looks terrible)
- repeat: side images repeated until borders filled (Might be left with unsightly image fragments)
- round: side images repeated until borders filled, stretched slightly so NO fragments appear
- space: side images repeated until borders filled, and a small amount of spacing is added between each copy, no fragments appear.
  - value only supported in Safari (9+) and Internet Explorer (11+).

### Putting this all together

**HTML**:

```html
<div>
  <p>Border image</p>
</div>
```

**CSS**:

```css
div {
  width: 300px;
  padding: 20px;
  margin: 10px auto;
  line-height: 3;
  background-color: #f66;
  text-align: center;
  /* border-related properties */
  border: 20px solid black;
  background-clip: padding-box;
  border-image-source: url(https://mdn.mozillademos.org/files/13060/border-image.png);
  border-image-slice: 40;
  border-image-repeat: round;
}
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/borders/border-image.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/css/styling-boxes/borders/border-image.html)**

### Other properties

Two less commonly used border image properties:

- **border-image-width**
- **border-image-outset**

### Shorthand

**border-image** property (shorthand):

```css
border-image-source: url(border-image.png);
border-image-slice: 40;
border-image-repeat: round;

/* Can be replaced by: */

border-image: url(border-image.png) 40 round;
```