# Changing background styles using CSS

see [How to control backgrounds](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Backgrounds)

## What exactly is a background?

- background of an element = area that sits underneath an element's content, padding, and border
- most browsers = default behavior
- newwer browsers, can alter area background takes up using **background-clip** property
- background **DOES NOT** sit underneath the margin, **margin DOES NOT** count as part of the element's area

Different properties can use to manipulate the element's background:

- **background-color**: Sets a solid color for the background.
- **background-image**: Specifies an image to appear in the background of the element. (Either static file OR generated gradient).
- **background-position**: Specifies the position that the background should appear inside the element background.
- **background-repeat**: Specifies whether the background should be repeated (tiled) or not.
- **background-attachment**: Specifies the behaviour of an element's background when its content scrolls (e.g. does it scroll with the content, or is it fixed?)
- **background**: Shorthand for specifying the above five properties on one line.
- **background-size**: Allows a background image to be resized dynamically

## The basics: color, image, position, repeat

### Background color

**background-color** property

- default background color for most elements is **transparent**
- if want child element background to be white, must set explicitly (#111)
- **IMPORTANT**: set a background color as a fallback

**EXAMPLE**:

HTML:

```html
<p>Exciting box!</p>
```

CSS:

```css
p {
  font-family: sans-serif;
  padding: 20px;
  /* background properties */
  background-color: yellow;
}
```

### Background image

**background-image** property

- specifies a background image to display in the background of an element
- use **url()** function — which takes the path to an image as a parameter

**EXAMPLE (CSS)**:

```css
p {
  font-family: sans-serif;
  padding: 20px;
  /* background properties */
  background-color: yellow;
  background-image: url(https://mdn.mozillademos.org/files/13026/fire-ball-icon.png);
}
```

**NOTE**: Can fix visual presentation with **background-repeat**

**NOTE**:

- background-image will be invisible to assistive technologies like screen readers
- NOT content images — just for decoration
- use &lt;img&gt; to include image as part of content

### Background repeat

**background-repeat** property

- specify how the background image is repeated
- default value = **repeat**
  - [EXAMPLE (Repeat)](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/repeating-background.html)

Common and widely supported values:

- **no-repeat**: image will NOT repeat at all: only be shown once.
- **repeat-x**: image will repeat horizontally all the way across the background.
- **repeat-y**: image will repeat vertically all the way down the background.
- **repeat**: image will repeat both vertically and horizontally.

**EXAMPLE (CSS)**:

```css
p {
  font-family: sans-serif;
  padding: 20px;
  /* background properties */
  background-color: yellow;
  background-image: url(https://mdn.mozillademos.org/files/13026/fire-ball-icon.png);
  background-repeat: no-repeat;
}
```

### Background position

**background-position** property

- position background image wherever wanted inside the background
- property takes two values: x, y
  - x = horizontal coordinates (across from left to right)
  - y = vertical coordinates (from top to bottom)

**NOTE**: Top left corner of the image is the origin (0,0)

Property value types:

- Absolute values like pixels — Ex. background-position: 200px 25px.
- Relative values like rems — Ex. background-position: 20rem 2.5rem.
- Percentages — Ex. background-position: 90% 25%.
- Keywords — Ex. background-position: right center.
  - These two values are intuitive, and can take values of left, center, right, and top, center, bottom, respectively.

**NOTE**: Can mix and match value types - Ex. background-position: 99% center

**NOTE**: If only specify one value, value = horizontal and vertical will default to **center**

**EXAMLE (CSS)**:

```css
p {
  font-family: sans-serif;
  padding: 20px;
  /* background properties */
  background-color: yellow;
  background-image: url(https://mdn.mozillademos.org/files/13026/fire-ball-icon.png);
  background-repeat: no-repeat;
  background-position: 99% center;
}
```

## Background image: gradients

- additional set of values for **background-image** property
- color gradient = smooth color transition across background
- two types of gradients (available):
  - linear gradient = go from one line straight across to another
  - radial gradient = radiate out from a single point (less common)

### linear-gradient() function

- at minimum, function needs to take three parameters (separated by commas)
  - direction of gradient
  - color at the beginning
  - color at the end

EXAMPLE:

```css
background-image: linear-gradient(to bottom, orange, yellow);
```

- Direction keywords:
  - **to bottom**
  - **to right**
  - **to bottom right**
  - etc.
- Direction degree values:
  - **0deg** = top
  - **90deg** = to right
  - up to **360deg** = to top (again)

**color stops** = specify points along the gradient where color defined (add as many as wanted)

EXAMPLE:

```css
background-image: linear-gradient(to bottom, yellow, orange 40%, yellow);
```

**EXAMPLE (CSS)**:

```css
p {
  font-family: sans-serif;
  padding: 20px;
  /* background properties */
  background-color: yellow;
  background-image: linear-gradient(to bottom, yellow, #dddd00 50%, orange);
}
```

Additional Resource: [CSS3 Linear Gradients](https://dev.opera.com/articles/css3-linear-gradients/)

### repeating-linear-gradient() function

EXAMPLE:

```css
background-image: repeating-linear-gradient(to right, yellow, orange 25px, yellow 50px);
```

Additional Resource: [CSS3 Radial Gradients](https://dev.opera.com/articles/css3-radial-gradients/)

## Background attachment

**background-attachment** property

- how background scrolls when content scrolls

Property value types:

- **scroll**: Causes the element's background to scroll when the page is scrolled. If the element content is scrolled, the background does not move. In effect, the background is fixed to the same position on the page, so it scrolls as the page scrolls.
- **fixed**: Causes an element's background to be fixed to the viewport, so that it doesn't scroll when the page or element content is scrolled. It will always remain in the same position on the screen.
- **local**: This value was added later on (it is only supported in Internet Explorer 9+, whereas the others are supported in IE4+) because the scroll value is rather confusing and doesn't really do what you want in many cases. The local value fixes the background to the element it is set on, so when you scroll the element, the background scrolls with it.

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/tree/master/css/styling-boxes/backgrounds)**

**[LIVE VERSION](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html)**

## Background shorthand

**background** property (shorthand)

EXAMPLE:

```css
background: yellow linear-gradient(to bottom, orange, yellow) no-repeat left center scroll;
```

- any property NOT specified will be assigned default values
- [MDN: background](https://developer.mozilla.org/en-US/docs/Web/CSS/background)

```css
background-color: yellow;
background-image: linear-gradient(to bottom, yellow, #dddd00 50%, orange);
background-repeat: no-repeat;
background-position: 99% center;

Replace with:

background: yellow linear-gradient(to bottom, yellow, #dddd00 50%, orange) no-repeat 99% center;
```

**EXAMPLE (CSS)**:

```css
p {
  font-family: sans-serif;
  padding: 20px;
  /* background properties */
  background: yellow linear-gradient(to bottom, yellow, #dddd00 50%, orange) no-repeat 99% center;
}
```

## Multiple backgrounds

- since IE 9, ability to attach multiple backgrounds to single element
- separate different background definitions with commas
- backgrounds are stacked on top of another (first appearing on top)

**NOTE**: Fallback background property in a separate declaration

EXAMPLE:

```css
background: url(image.png) no-repeat 99% center,
            url(background-tile.png),
            linear-gradient(to bottom, yellow, #dddd00 50%, orange);
background-color: yellow;
```

EXAMPLE (Can attach multiple values to specific background property, but shorthand recommended):

```css
background-image: url(image.png), url(background-tile.png);
background-repeat: no-repeat, repeat;
```

**EXAMPLE (CSS)**:

```css
p {
  font-family: sans-serif;
  padding: 20px;
  /* background properties */
  background-color: yellow;
  background: url(https://mdn.mozillademos.org/files/13026/fire-ball-icon.png) no-repeat 99% center,
              linear-gradient(to bottom, yellow, #dddd00 50%, orange);
}
```

**[FINAL - EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/backgrounds/index.html)**

**[FINAL - LIVE VERSION](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/)**

## Background size

**background-size** property

- dynamically alter the size of a background image so that it fits better into design
- **NOT** supported for IE 9 and below
- need to include two background size values
  - horizontal dimension
  - vertical dimension

EXAMPLE:

```css
background-image: url(myimage.png);
background-size: 16px 16px;
``

[MDN: Including icons on links](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_links#Including_icons_on_links)