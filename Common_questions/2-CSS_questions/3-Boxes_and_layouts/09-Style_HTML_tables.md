# Styling tables

see [How to style an HTML table](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Styling_tables)

## A typical HTML table

```html
<table>
  <caption>A summary of the UK's most famous punk bands</caption>
  <thead>
    <tr>
      <th scope="col">Band</th>
      <th scope="col">Year formed</th>
      <th scope="col">No. of Albums</th>
      <th scope="col">Most famous song</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Buzzcocks</th>
      <td>1976</td>
      <td>9</td>
      <td>Ever fallen in love (with someone you shouldn't've)</td>
    </tr>
    <tr>
      <th scope="row">The Clash</th>
      <td>1976</td>
      <td>6</td>
      <td>London Calling</td>
    </tr>
       
      ... some rows removed for brevity

    <tr>
      <th scope="row">The Stranglers</th>
      <td>1974</td>
      <td>17</td>
      <td>No More Heroes</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Total albums</th>
      <td colspan="2">77</td>
    </tr>
  </tfoot>
</table>
```

## Active learning: Styling our table

- [Sample Markup - unstyled](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/styling-tables/punk-bands-unstyled.html)
- Images: [noise](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/styling-tables/noise.png) and [leopardskin](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/styling-tables/leopardskin.jpg)
- Create file: style.css
- In HTML &lt;head&gt; include

```html
<link href="style.css" rel="stylesheet" type="text/css">
```

### Spacing and layout

ADD (CSS):

```css
/* spacing */

table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid purple;
}

thead th:nth-child(1) {
  width: 30%;
}

thead th:nth-child(2) {
  width: 20%;
}

thead th:nth-child(3) {
  width: 15%;
}

thead th:nth-child(4) {
  width: 35%;
}

th, td {
  padding: 20px;
}
```

**NOTE**:

- **table-layout: fixed**
  - size columns based on width of their heading
  - Reference: [Fixed Table Layout](https://css-tricks.com/fixing-tables-long-strings/)
- **thead th:nth-child(...)**
  - given set percentage width
  - entire column width follows this heading width
- **width: 100%**
  - will fill any container it is put in
  - responsive
- **border-collapse: collapse**
  - borders collapse down into one line
- **border** around entire table

### Some simple typography

HTML (ADD - Google Fonts):

```html
<link href='https://fonts.googleapis.com/css?family=Rock+Salt' rel='stylesheet' type='text/css'>
```

CSS (ADD):

```css
/* typography */

html {
  font-family: 'helvetica neue', helvetica, arial, sans-serif;
}

thead th, tfoot th {
  font-family: 'Rock Salt', cursive;
}

th {
  letter-spacing: 2px;
}

td {
  letter-spacing: 1px;
}

tbody td {
  text-align: center;
}

tfoot th {
  text-align: right;
}
```

**NOTE**:

- global sans-serif font stack
- custom headings for thead and tfoot
- letter-spacing
- center aligned text in tbody

### Graphics and colors

CSS (ADD):

```css
thead, tfoot {
  background: url(leopardskin.jpg);
  color: white;
  text-shadow: 1px 1px 1px black;
}

thead th, tfoot th, tfoot td {
  background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5));
  border: 3px solid purple;
}
```

**NOTE**:

- background-image to thead and tfoot
- text-shadow to text in thead and tfoot
- linear-gradient to th and td elements

#### Zebra striping

CSS (ADD):

```css
tbody tr:nth-child(odd) {
  background-color: #ff33cc;
}

tbody tr:nth-child(even) {
  background-color: #e495e4;
}

tbody tr {
  background-image: url(noise.png);
}

table {
  background-color: #ff33cc;
}
```

### Styling the caption

CSS (ADD):

```css
caption {
  font-family: 'Rock Salt', cursive;
  padding: 20px;
  font-style: italic;
  caption-side: bottom;
  color: #666;
  text-align: right;
  letter-spacing: 1px;
}
```

**[FINAL - EXAMPLE (CODE): HTML](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/styling-tables/punk-bands-complete.html)**

**[FINAL - EXAMPLE (CODE): CSS](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/styling-tables/style.css)**

**[FINAL - LIVE VERSION](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html)**

## Table styling quick tips

- Make table markup as simple as possible
- Keep things flexible/responsive, e.g. by using percentages
- Use **table-layout: fixed**, column widths set by width on their headings (th)
- Use **border-collapse: collapse** to make table elements borders collapse into each other (one line)
- Use thead, tbody, and tfoot to break up  table into logical chunks
- Use zebra striping to make alternative rows easier to read
- Use **text-align** to line up th and td text