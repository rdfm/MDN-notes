# Using multi-column layouts

see [Using CSS multi-column layouts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Columns/Using_multi-column_layouts)

**CSS Multi-column Layout Module** extends the *block layout mode* to allow the easy definition of multiple columns of text.

CSS3 specification: [W3C - CSS Multi-column Layout Module](https://www.w3.org/TR/css-multicol-1/)

## Using columns

### Column count and width

Two CSS properties control whether and how many columns will appear:

- **column-count**
  - sets the number of columns
- **column-width**
  - sets minimum desired column width

## Example 1

**HTML**:

```html
<div id="col">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua.
  </p>
  <p>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat.
  </p>
  <p>
    Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur.
  </p>
  <p>
    Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.
  </p>
</div>
```

**CSS**:

```css
#col {
  column-count: 2;
}
```

## Example 2

**HTML**:

```html
<div id="wid">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum
</div>
```

**CSS**:

```css
#wid {
  column-width: 100px;
}
```

### The columns shorthand

**NOTE**:

- The CSS declaration column-width: 12em can be replaced by columns: 12em.
- The CSS declaration column-count: 4 can be replaced by columns: 4.
- The two CSS declarations column-width: 8em and column-count: 12 can be replaced by columns: 12 8em.

## Example 3

**HTML**:

```html
<div id="col_short">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum
</div>
```

**CSS**:

```css
#col_short {
  columns: 12em;
}
```

## Example 4

**HTML**:

```html
<div id="columns_4">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum
</div>
```

**CSS**:

```css
#columns_4 {
  columns: 4;
}
```

## Example 5

**HTML**:

```html
<div id="columns_12">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum
</div>
```

**CSS**:

```css
#columns_12 {
  columns: 12 8em;
}
```

### Height Balancing

CSS properties:

- **height**
- **max-height**

### Column Gaps

- gap between columns
- recommended default is 1em
- size can be changed by applying the column-gap property to the multi-column block

## Example 6

**HTML**:

```html
<div id="column_gap">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum
</div>
```

**CSS**:

```css
#column_gap {
  column-count: 5;
  column-gap: 2em;
}
```

## Graceful Degradation

- column properties will just be ignored by non-columns-supporting browsers
- layout that will display in a single column in non-supporting browsers
- use multiple columns in supporting browsers