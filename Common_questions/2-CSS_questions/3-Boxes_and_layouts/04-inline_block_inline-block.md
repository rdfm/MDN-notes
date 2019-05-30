# Types of CSS boxes

see [How do I define inline, block, and inline-block?](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model#Types_of_CSS_boxes)

- specified by **display** property
- three most common: **block**, **inline**, **inline-block**

**NOTE**: By default

- block level elements have **display: block;**
- inline level elements have **display: inline;**

## block

- defined as a box that's stacked upon other boxes
- (i.e. content before and after the box appears on a separate line)
- can have width and height set on it
- whole box model as described above applies to block boxes

## inline

- it flows with the document's text
- (i.e. appear on the same line as surrounding text and other inline elements, and its content will break with the flow of the text, like lines of text in a paragraph.)
- width and height settings have NO effect
- any padding, margin and border set on inline boxes will update the position of surrounding text
- will not affect the position of surrounding block boxes

## inline-block

- something in between the first two
- flows with surrounding text and other inline elements without creating line breaks before and after it unlike a block box, but it
- can be sized using width and height and maintains its block integrity like a block box.
- won't be broken across paragraph lines like an inline box.
- Ex. inline-block box goes onto the 2nd line of text while keeping the shape of a box as there is not enough space for it on the first line

## EXAMPLE

HTML:

```html
<p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   <span class="inline">Mauris tempus turpis id ante mollis dignissim.</span>
   Nam sed dolor non tortor lacinia lobortis id dapibus nunc.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <span class="block">Mauris tempus turpis id ante mollis dignissim.</span>
  Nam sed dolor non tortor lacinia lobortis id dapibus nunc.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <span class="inline-block">Mauris tempus turpis id ante mollis dignissim.</span>
  Nam sed dolor non tortor lacinia lobortis id dapibus nunc.
</p>
```

CSS:

```css
p {
  padding : 1em;
  border  : 1px solid black;
}

span {
  border  : 1px solid green;
  /* That makes the box visible, regardless of its type */
  background-color: yellow;
}

.inline       { display: inline;       }
.block        { display: block;        }
.inline-block { display: inline-block; }
```