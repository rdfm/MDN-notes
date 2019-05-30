# Box properties

see [How to size CSS boxes](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model#Box_properties)

- Every element within a document is structured as a rectangular box inside the document layout

## width and height

- sets the **width** and **height** of the content box
- absolute size
- **content box**
  - area in which the content of the box is displayed
  - content includes
    - text content
    - other boxes representing nested child elements

**NOTE**: Setting size constraints, use

- **min-width**
- **max-width**
- **min-height**
- **max-height**

## padding

- **padding** refers to the inner margin of a CSS box
- between:
  - outer edge of content box and
  - inner edge of the border
- shorthand: **padding**
  - **padding-top**
  - **padding-right**
  - **padding-bottom**
  - **padding-left**

## border

- between:
  - outer edge of the padding and
  - inner edge or the margin

- shorthand: border
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

## margin

- surrounds a CSS box
- pushes up against other CSS boxes
- behaves like **padding**

- shorthand: **margin**
  - **margin-top**
  - **margin-right**
  - **margin-bottom**
  - **margin-left**

NOTE: **margin collapsing** = when two boxes touch against one another, the distance between them is the value of the largest of the two touching margins, and not their sum.