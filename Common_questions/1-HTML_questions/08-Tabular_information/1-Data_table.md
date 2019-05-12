# HTML table basics

see [How to create a data table](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics)

## What is a table?

**table** = structured set of data made up of rows and columns(tabular data

### How does a table work?

- a table is rigid
- information interpreted by making visual associations between row and column headers

**[SAMPLE DATA (TO USE)](https://nssdc.gsfc.nasa.gov/planetary/factsheet/)**

### Table styling

**[EXAMPLE (STYLE)](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html)**

[MDN: Styling tables](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Styling_tables)

### When you should NOT use HTML tables?

**DO NOT** use tables for layout.

1. Layout tables reduce accessibility for visually impaired users
2. Tables produce tag soup
3. Tables are NOT automatically responsive

## Creating your first table

```html
EXAMPLE
<table>
  // table row
  <tr>
    <td>table data</td>
    <td>table data</td>
  </tr>
  <tr>
    <td>table data</td>
    <td>table data</td>
  </tr>
</table>
```

## Adding headers with <th> elements

- &lt;th&gt;, default styling = bold and centered

```html
EXAMPLE:
<h1>Dogs Table</h1>

<table>
  <tr>
    <td>&nbsp;</td>
    <th scope="col">Knocky</th>
    <th scope="col">Flor</th>
    <th scope="col">Ella</th>
    <th scope="col">Juan</th>
  </tr>
  <tr>
    <th scope="row">Breed</th>
    <td>Jack Russell</td>
    <td>Poodle</td>
    <td>Streetdog</td>
    <td>Cocker Spaniel</td>
  </tr>
  <tr>
    <th scope="row">Age</th>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tr>
  <tr>
    <th scope="row">Owner</th>
    <td>Mother-in-law</td>
    <td>Me</td>
    <td>Me</td>
    <td>Sister-in-law</td>
  </tr>
  <tr>
    <th scope="row">Eating Habits</th>
    <td>Eats everyone's leftovers</td>
    <td>Nibbles at food</td>
    <td>Hearty eater</td>
    <td>Will eat till he explodes</td>
  </tr>
</table>
```

## Allowing cells to span multiple row and columns

```html
EXAMPLE:
<h1>Animals table</h1>

<table>
  <tr>
    <th colspan="2">Animals</th>
  </tr>
  <tr>
    <th colspan="2">Hippopotamus</th>
  </tr>
  <tr>
    <th rowspan="2">Horse</th>
    <td>Mare</td>
  </tr>
  <tr>
    <td>Stallion</td>
  </tr>
  <tr>
    <th colspan="2">Crocodile</th>
  </tr>
  <tr>
    <th rowspan="2">Chicken</th>
    <td>Hen</td>
  </tr>
  <tr>
    <td>Rooster</td>
  </tr>
</table>
```

## Providing common styling to columns

```html
EXAMPLE:
<table>
  <tr>
    <th>Data 1</th>
    <th style="background-color: yellow">Data 2</th>
  </tr>
  <tr>
    <td>Calcutta</td>
    <td style="background-color: yellow">Orange</td>
  </tr>
  <tr>
    <td>Robots</td>
    <td style="background-color: yellow">Jazz</td>
  </tr>
</table>
```