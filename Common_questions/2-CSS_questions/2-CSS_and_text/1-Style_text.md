# Fundamental text and font styling

see [How to style text](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals)

[MDN: The box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model)

*NOTE*: **&lt;br&gt;** element = force a line break manually

- **Font styles**:
  - Properties that affect the font that is applied to the text, affecting what font is applied, how big it is, whether it is bold, italic, etc
- **Text layout styles**:
  - Properties that affect the spacing and other layout features of the text, allowing manipulation of, for example, the space between lines and letters, and how the text is aligned within the content box

## Fonts

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/css/styling-text/fundamentals/index.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/css/styling-text/fundamentals/)**

### Color

**color** property = sets the color of the foreground content of the selected elements (which is usually the text)

```css
p {
  color: red;
}
```

### Font families

**font-family** property = allows to specify a font (or list of fonts) for the browser to apply to the selected elements

*NOTE*: If font is not available, browser will use *default font*

```css
p {
  font-family: arial;
}
```

#### Web safe fonts

**web safe fonts** = certain number of fonts that are generally available across all systems

List of actual web safe fonts:

- Arial (sans-serif)
- Courier New (monospace)
- Georgia (serif)
- Times New Roman (serif)
- Trebuchet MS (sans-serif)
- Verdana (sans-serif)

[RESOURCE: Maintained list of web safe fonts](https://www.cssfontstack.com/)

#### Default fonts

CSS defines five generic names for fonts:

- **serif**
- **sans-serif**
- **monospace**
- **cursive**
- **fantasy**

#### Font stacks

- browser has multiple fonts it can choose from
- *family-value* value consisting of multiple font names separated by commas

```css
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```

#### A font-family example

```css
p {
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

#### Font size

Most common units to size text:

- **px** (pixels)
  - number of pixels high want text to be
  - absolute unit - same final computed value
- **em**
  - 1em = font size of the parent element
  - specifically the width of a capital letter M contained inside the parent element
- **rem**
  - 1 rem = font size set onthe root element

*NOTE*: If need to support older browsers, can either stick to using ems or px, or use a polyfill such as [REM-unit-polyfill](https://github.com/chuckcarpenter/REM-unit-polyfill)

**font-size** of an element:

- inherited from that element's parent element
- starts with root element &lt;html&gt;
- set to 16px (standard across browsers)

#### A simple sizing example

```css
html {
  font-size: 10px;
}

h1 {
  font-size: 2.6rem;
}

p {
  font-size: 1.4rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

### Font style, font weight, text transform, and text decoration

CSS provides four common properties to alter the visual weight/emphasis of text:

- **font-style**: turn italic text on and off (rarely use)
  - normal: sets the text to the normal font (turns existing italics off)
  - italic: sets the text to use the italic version of the font if available; if not available
  - oblique: sets the text to use a simulated version of an italic font, created by slanting the normal version
- **font-weight**: sets how bold the text is (rarely use, except for normal and bold)
  - normal, bold: normal and bold font weight
  - lighter, bolder: sets the current element's boldness to be one step lighter or heavier than its parent element's boldness
  - 100–900: numeric boldness values that provide finer grained control than the above keywords
- **text-transform**: allows you to set font to be transformed
  - none: prevents any transformation
  - uppercase: transforms ALL TEXT TO CAPITALS
  - lowercase: transforms all text to lower case
  - capitalize: transforms all words to Have The First Letter Capitalized
  - full-width: transforms all glyphs to be written inside a fixed-width square, similar to a monospace font, allowing aligning of e.g. latin characters along with asian language glyphs
- text-decoration: sets/unsets text decorations on fonts (mainly use to unset the default underline on links)
  - none: unsets any text decorations already present
  - underline: underlines the text
  - overline: gives the text an overline
  - line-through: puts a strikethrough over the text

*NOTE*: **text-decoration** can accept multiple values at once, if you want to add multiple decorations simultaneously (Ex. text-decoration: underline overline)

*NOTE*: **text-decoration** is a shorthand property for **text-decoration-line**, **text-decoration-style**, and **text-decoration-color**

```css
html {
  font-size: 10px;
}

h1 {
  font-size: 2.6rem;
  text-transform: capitalize;
}

h1 + p {
  font-weight: bold;
}

p {
  font-size: 1.4rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

## Text layout

### Text alignment

**text-align** property = control how text is aligned within its containing content box

- left
- right
- center
- justify
  - Makes the text spread out, varying the gaps in between the words so that all lines of text are the same width

### Line height

**line-height** property = sets the height of each line of text

- can take most length and size units
- can also take a unitless value (acts as a multiplier)
  - considered best option
  - recommended line height is around 1.5–2 (double spaced)

```css
line-height: 1.5;
```

### Letter and word spacing

**letter-spacing** and **word-spacing** properties = set the spacing between letters and words in your text.

*NOTE*: **NOT** used very often.

```css
p::first-line {
  letter-spacing: 2px;
  word-spacing: 4px;
}
```

### Other properties worth looking at

Font styles:

- font-variant: Switch between small caps and normal font alternatives.
- font-kerning: Switch font kerning options on and off.
- font-feature-settings: Switch various OpenType font features on and off.
- font-variant-alternates: Control the use of alternate glyphs for a given font-face.
- font-variant-caps: Control the use of alternate capital glyphs.
- font-variant-east-asian: Control the usage of alternate glyphs for East Asian scripts, like Japanese and Chinese.
- font-variant-ligatures: Control which ligatures and contextual forms are used in text.
- font-variant-numeric: Control the usage of alternate glyphs for numbers, fractions, and ordinal markers.
- font-variant-position: Control the usage of alternate glyphs of smaller sizes positioned as superscript or subscript.
- font-size-adjust: Adjust the visual size of the font independently of its actual font size.
- font-stretch: Switch between possible alternative stretched versions of a given font.
- text-underline-position: Specify the position of underlines set using the text-decoration-line property underline value.
- text-rendering: Try to perform some text rendering optimization.

Text layout styles:

- text-indent: Specify how much horizontal space should be left before the beginning of the first line of the text content.
- text-overflow: Define how overflowed content that is not displayed is signaled to users.
- white-space: Define how whitespace and associated line breaks inside the element are handled.
- word-break: Specify whether to break lines within words.
direction: Define the text direction (This depends on the language and usually it's better to let HTML handle that part as it is tied to the text content.)
- hyphens: Switch on and off hyphenation for supported languages.
- line-break: Relax or strengthen line breaking for Asian languages.
- text-align-last: Define how the last line of a block or a line, right before a forced line break, is aligned.
- text-orientation: Define the orientation of the text in a line.
- word-wrap: Specify whether or not the browser may break lines within words in order to prevent overflow.
- writing-mode: Define whether lines of text are laid out horizontally or vertically and the direction in which subsequent lines flow.

## Font shorthand

**font** = shorthand property

- Order: font-style, font-variant, font-weight, font-stretch, font-size, line-height, and font-family
- font-size and font-family are required
- a forward slash has to be put in between the font-size and line-height properties

```css
font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
```