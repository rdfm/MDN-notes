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
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three
    <br>has
    <br>extra
    <br>text
  </div>
</div>
```

CSS:

```css
.box {
  display: flex;
}
```

### Changing flex-direction

**EXAMPLE**:

HTML:

```html
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

CSS:

```css
.box {
  display: flex;
  flex-direction: row-reverse;
}
```

## Multi-line flex containers with flex-wrap

**flex-wrap** property

Possible values:

- **wrap**
- **nowrap**

**EXAMPLE**:

HTML:

```html
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

CSS:

```css
.box {
  display: flex;
  flex-wrap: wrap;
}
```

Read: [MDN: Mastering Wrapping of Flex Items](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)

## The flex-flow shorthand

**flex-flow** property, combines:

- **flex-direction**
  - First - possible values: row, row-reverse, column, or column-reverse
- **flex-wrap**
  - Second - possible values: wrap or nowrap

**EXAMPLE**:

HTML:

```html
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

CSS:

```css
.box {
  display: flex;
  flex-flow: row wrap;
}
```

## Properties applied to flex items

- **flex-grow**
- **flex-shrink**
- **flex-basis**

Read: [MDN: Controlling Ratios of Flex Items Along the Main Axis](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)

Consider concept of **available space**

### The flex-basis property

- defines the size of that item in terms of the space it leaves as available space
- initial value: **auto**
  - browser looks to see if items have a size, used as flex-basis
  - if items don't have size, then content's size used as flex-basis

### The flex-grow property

- set to a positive integer
- flex items can grow along main axis from their flex-basis
- can distribute space in proportion (i.e. 1,1,1 or 2,1,1)

### The flex-shrink property

- deals with taking away space in the main axis
- if not enough space in the container to lay out items
- controls how taken away
- set to a postivie integer, item can become smaller than the flex-basis

### Shorthand values for the flex properties

**flex** shorthand, in this order: flex-grow, flex-shrink, flex-basis

**EXAMPLE**:

HTML:

```html
<div class="box">
    <div class="one">One</div>
    <div class="two">Two</div>
    <div class="three">Three</div>
</div>
```

CSS:

```css
.box {
    display: flex;
}

.one {
    flex: 1 1 auto;
}

.two {
    flex: 1 1 auto;
}

.three {
    flex: 1 1 auto;
}
```

Predefined shorthand values:

- **flex: initial**
- **flex: auto**
- **flex: none**
- **flex: &lt;positive-number&gt;**

**flex: initial**

- resets the item to the initial values of Flexbox
- same as flex: 0 1 auto

**flex: auto**

- same as flex: 1 1 auto
- everything as flex: initial
- but, items can grow and fill the container as well as shrink (if required)

**flex: none**

- create full inflexible flex items
- same as flex: 0 0 auto
- items cannot grow or shrink
- will be laid out with flex-basis: auto

**flex: &lt;positive-number&gt;**

- Examples:
  - flex: 1
  - flex: 2

## Alignment, justification and distribution of free space between items

**align-items** property:

- will align items on the cross axis (up/down)
- initial value = stretch (to the height of tallest item)
- Possible values:
  - **stretch**
  - **flex-start**
  - **flex-end**
  - **center**

**justify-content** property:

- used to align items on the main axis (left/right)
- initial value = flex-start (edge of container)
- Possible values:
  - **flex-start**
  - **flex-end**
  - **center**
  - **space-around**
  - **space-between**
  - **space-evenly**

Read: [MDN: Aligning Items in a Flex Container](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)

## Next steps

Read: [MDN: Relationship of flexbox to other layout methods](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods)