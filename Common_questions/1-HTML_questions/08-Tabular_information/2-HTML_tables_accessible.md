# HTML table advanced features and accessibility

see [How to make HTML tables accessible](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced)

## Adding a caption to your table with &lt;caption&gt;

```html
EXAMPLE:
<table>
  <caption>Dinosaurs in the Jurassic period</caption>
  ...
</table>
```

**[EXAMPLE CODE (W/ CSS)](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/timetable-caption.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/html/tables/advanced/timetable-caption.html)**

NOTE: &lt;summary&gt; deprecated

## Adding structure with &lt;thead&gt;, &lt;tfoot&gt;, and &lt;tbody&gt;

- useful for styling and layout
- NOT for accessibility

**[EXAMPLE CODE (w/ CSS)](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/spending-record-finished.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/html/tables/advanced/spending-record-finished.html)**

## Nesting Tables

- Generally, **NOT** advised to do
- If want to import content from other sources

```html
EXAMPLE:
<table id="table1">
  <tr>
    <th>title1</th>
    <th>title2</th>
    <th>title3</th>
  </tr>
  <tr>
    <td id="nested">
      <table id="table2">
        <tr>
          <td>cell1</td>
          <td>cell2</td>
          <td>cell3</td>
        </tr>
      </table>
    </td>
    <td>cell2</td>
    <td>cell3</td>
  </tr>
  <tr>
    <td>cell4</td>
    <td>cell5</td>
    <td>cell6</td>
  </tr>
</table>
```

## Tables for visually impaired users

- Edit with the use of screenreaders
- NO visual inference

Techniques for making tables accessible (using column and row headers).

**The scope="" attribute** = tell screen readers what cells the header is for

```html
EXAMPLE:
<thead>
  <tr>
    <th scope="col">Purchase</th>
    <th scope="col">Location</th>
    <th scope="col">Date</th>
    <th scope="col">Evaluation</th>
    <th scope="col">Cost (€)</th>
  </tr>
</thead>

<tr>
  <th scope="row">Haircut</th>
  <td>Hairdresser</td>
  <td>12/09</td>
  <td>Great idea</td>
  <td>30</td>
</tr>
```

*NOTE*: scope has two more possible values

1. scope="colgroup"
2. scope="rowgroup"

### The id and headers attributes

- alternative to using the scope="" attribute
- creates associations between headers and cells
  1. Add a unique id="" to each &lt;th&gt; element
  2. Add headers="" attribute to each &lt;td&gt; element

  *NOTE*: Each headers attribute has to contain a list of the ids of all the &lt;th&gt; elements that act as a header for that cell, separated by spaces.

```html
EXAMPLE:
<thead>
  <tr>
    <th id="purchase">Purchase</th>
    <th id="location">Location</th>
    <th id="date">Date</th>
    <th id="evaluation">Evaluation</th>
    <th id="cost">Cost (€)</th>
  </tr>
</thead>
<tbody>
<tr>
  <th id="haircut">Haircut</th>
  <td headers="location haircut">Hairdresser</td>
  <td headers="date haircut">12/09</td>
  <td headers="evaluation haircut">Great idea</td>
  <td headers="cost haircut">30</td>
</tr>
  ...
</tbody>
```

**[SCOPE - EXAMPLE CODE](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/items-sold-scope.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-scope.html)**

**[HEADERS - EXAMPLE CODE](https://github.com/mdn/learning-area/blob/master/html/tables/advanced/items-sold-headers.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/html/tables/advanced/items-sold-headers.html)**

**[Assessment: Structuring planet data](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html)**