# Colors

see [How to specify colors in CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Values_and_units#Colors)

- standard color system available in modern computers is 24 bit
- allows the display of about 16.7 million distinct colors
- via a combination of different red, green and blue channels
- with 256 different values per channel  (256 x 256 x 256 = 16,777,216)

[HSL to RGB / RGB to HSL / Hex Colour Converter](https://serennu.com/colour/hsltorgb.php)

## Keywords

- color keywords = simplest, oldest color types in CSS
- specific strings representing particular color values

**HTML**:

```html
<p>This paragraph has a red background</p>
```

**CSS**:

```css
p {
  background-color: red;
}
```

## Hexadecimal values

- hexadecimal colors aka hex codes
- Each hex value consists of a hash/pound symbol (#) followed by six hexadecimal numbers
  - Each hex number has a value between 0 and f (which represents 15) => 0123456789abcdef
- Each pair of values represents one of the channels — red, green and blue
- Allows to specify any of the 256 available values for each (16 x 16 = 256)

**HTML**:

```html
<p>This paragraph has a red background</p>
<p>This paragraph has a blue background</p>
<p>This paragraph has a kind of pinky lilac background</p>
```

**CSS**:

```css
/* equivalent to the red keyword */
p:nth-child(1) {
  background-color: #ff0000;
}

/* equivalent to the blue keyword */
p:nth-child(2) {
  background-color: #0000ff;
}

/* has no exact keyword equivalent */
p:nth-child(3) {
  background-color: #e0b0ff;
}
```

## RGB

- RGB value is a function — rgb()
  - Given three parameters that represent the red, green and blue channel values
  - Each channel is represented by a decimal number between 0 and 255

**HTML**:

```html
<p>This paragraph has a red background</p>
<p>This paragraph has a blue background</p>
<p>This paragraph has a kind of pinky lilac background</p>
```

**CSS**:

```css
/* equivalent to the red keyword */
p:nth-child(1) {
  background-color: rgb(255,0,0);
}

/* equivalent to the blue keyword */
p:nth-child(2) {
  background-color: rgb(0,0,255);
}

/* has no exact keyword equivalent */
p:nth-child(3) {
  background-color: rgb(224,176,255);
}
```

*NOTE*: Both Hex and RBG are well supported by browsers. But, RGB values are arguably a bit more intuitive and easier to understand.

## HSL

- Slightly less supported (NOT on old versions of IE)
- Implemented after interest from designers
- hsl() function accepts hue, saturation, and lightness values
- 16.7 million colors (in a different way)

**hue**: the base shade of the color.

- Takes a value between 0 and 360
- Presenting the angles round a color wheel

**saturation**: how saturated is the color?

- Takes a value from 0-100%
- 0 is no color (appear as a shade of grey)
- 100% is full color saturation

**lightness**: how light or bright is the color?

- Takes a value from 0-100%
- 0 is no light (appear completely black)
- 100% is full light (appear completely white)

[ARTICLE: HSL (w/ HSL cylinder) and HSV](https://en.wikipedia.org/wiki/HSL_and_HSV#Basic_principle)

**HTML**:

```html
<p>This paragraph has a red background</p>
<p>This paragraph has a blue background</p>
<p>This paragraph has a kind of pinky lilac background</p>
```

**CSS**:

```css
/* equivalent to the red keyword */
p:nth-child(1) {
  background-color: hsl(0,100%,50%);
}

/* equivalent to the blue keyword */
p:nth-child(2) {
  background-color: hsl(240,100%,50%);
}

/* has no exact keyword equivalent */
p:nth-child(3) {
  background-color: hsl(276,100%,85%);
}
```

**EXAMPLE**: Monochrome color scheme (designer intuitive color model)

```css
/* three different shades of red*/
background-color: hsl(0,100%,50%);
background-color: hsl(0,100%,60%);
background-color: hsl(0,100%,70%);
```

## RGBA and HSLA

- RGB corresponding mode — RGBA
- HSL corresponding mode — HSLA
- Set color + **transparency**
- Corresponding rgb() + hsl() functions take the same parameters
- Plus fourth value (**alpha channel**)
- Range 0–1 — which sets the transparency
  - 0 = completely transparent
  - 1 = completely opaque

**HTML**:

```html
<p>This paragraph has a transparent red background</p>
<p>This paragraph has a transparent blue background</p>
```

**CSS**:

```css
p {
  height: 50px;
  width: 350px;
}

/* Transparent red */
p:nth-child(1) {
  background-color: rgba(255,0,0,0.5);
  position: relative;
  top: 30px;
  left: 50px;
}

/* Transparent blue */
p:nth-child(2) {
  background-color: hsla(240,100%,50%,0.5);
}
```

## Opacity

- opacity property
- Another way to specify transparency via CSS
- Instead of setting the transparency of a particular color, this sets the transparency of all selected elements and their children

**HTML**:

```html
<p>This paragraph is using RGBA for transparency</p>
<p>This paragraph is using opacity for transparency</p>
```

**CSS**:

```css
/* Red with RGBA - ONLY semi-transparent background*/
p:nth-child(1) {
  background-color: rgba(255,0,0,0.5);
}

/* Red with opacity - background including text is transparent*/
p:nth-child(2) {
  background-color: rgb(255,0,0);
  opacity: 0.5;
}
```

**EXAMPLES**:

- **RGBA** => Create an overlaid image caption where the image shows through the caption box but the text is still readable.
- **Opacity** => Create an animation effect where a whole UI element goes from completely visible to hidden