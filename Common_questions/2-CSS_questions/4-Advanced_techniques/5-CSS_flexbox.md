# Basic concepts of flexbox

see [Using CSS flexible boxes](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

**The Flexible Box Module**, usually referred to as flexbox

- one-dimensional layout model
- a method that could offer space distribution between items in an interface
- powerful alignment capabilities

Reference: [CSS Grid Layout (two-dimensional model, columns and rows)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

## The two axes of flexbox

Need to think in terms of two axes:

- main axes
- cross axes

### The main axis

Defined by **flex-direction**, which has possible values:

- **row**
- **row-reverse**
- **column**
- **column-reverse**

EXAMPLES:

- row or row-reverse, main axis = inline direction (left <-> right)
- column or column-reverse, main axis = block direction (up and down)

### The cross axis

Runs perpendicular to the main axis

EXAMPLES:

- if main axis = row or row-reverse, cross axis runs down columns
- if main axis = column or column-reverse, cross axis runs along the rows

## Start and end lines

- consider flexbox and Writing Modes specification
- think "start and end", rather than "left and right"

EXAMPLES:

- flex-direction: row and English
  - start edge of the main axis will be on the left, the end edge on the right
- flex-direction: row and Arabic
  - start edge of my main axis would be on the right and the end edge on the left

## The flex container

**flex container** = an area of a document laid out using flexbox

- set **display** property to *flex* or *inline-flex*
- direct children of container become **flex items**
- **flex-direction** property default is *row*
- **flex-basis** set to *auto*
- **flex-wrap** set to *nowrap*

**EXAMPLE**:

HTML:

```html

```

CSS:

```css

```

### Changing flex-direction

**EXAMPLE**:

HTML:

```html

```

CSS:

```css

```

## Multi-line flex containers with flex-wrap

**EXAMPLE**:

HTML:

```html

```

CSS:

```css

```

## The flex-flow shorthand

**EXAMPLE**:

HTML:

```html

```

CSS:

```css

```

## Properties applied to flex items

- **flex-grow**
- **flex-shrink**
- **flex-basis**

### The flex-basis property

### The flex-grow property

### The flex-shrink property

### Shorthand values for the flex properties

**EXAMPLE**:

HTML:

```html

```

CSS:

```css

```

## Alignment, justification and distribution of free space between items

### justify-content

## Next steps