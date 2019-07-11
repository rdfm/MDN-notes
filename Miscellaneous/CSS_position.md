# position

## Types of positioning

- positioned element
- relatively positioned element
- absolutely positioned element
- stickily positioned element

## Syntax

### Values

**static**

- element is positioned according to the normal flow of the document.
- No effect: top, right, bottom, left, and z-index
- **default value**

**relative**

- element is positioned according to the normal flow of the document
- offset relative to itself 
- values: top, right, bottom, left

**absolute**

- element is removed from the normal document flow
- no space is created for the element in the page layout
- positioned relative to its closest positioned ancestor
- values: top, right, bottom, left

**fixed**

- element is removed from the normal document flow
- no space is created for the element in the page layout
- positioned relative to the initial containing block established by the viewport
- values: top, right, bottom, left

**sticky*

- element is positioned according to the normal flow of the document
- then offset relative to its nearest scrolling ancestor and containing block (nearest block-level ancestor)
- values: top, right, bottom, left

#### Formal syntax

```vim
static | relative | absolute | sticky | fixed
```

## Examples
