# CSS FAQ

see [CSS Faq](https://developer.mozilla.org/en-US/docs/Learn/CSS/Howto/CSS_FAQ)

## Why doesn't my CSS, which is valid, render correctly?

- Browsers use the **DOCTYPE** declaration
- Declare **DOCTYPE** at start of HTML will improve browser standards
- Modern browsers have two main rendering modes:
  - *Quirks Mode*:
    - also called "backwards-compatibility mode"
    - allows legacy webpages to be rendered as their authors intended
    - following the non-standard rendering rules used by older browsers
  - *Standards Mode*:
    - browser attempts to follow the W3C standards strictly
    - pages with a modern **DOCTYPE** declaration will be rendered with this mode

List of the most commonly used **DOCTYPE** declarations, will trigger Standards or Almost Standards mode:

```html
<!DOCTYPE html> /* This is the HTML5 doctype. Given that each modern browser uses an HTML5
                   parser, this is the recommended doctype */

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

## Why doesn't my CSS, which is valid, render at all?

Possible causes:

- Wrong path to CSS file
- CSS must be served with a **text/css** MIME type. (If Web server doesn't serve it with this type, it won't be applied)

## What is the difference between id and class?

- **id** attribute assigns a name to the element
  - Restrict applied styling rules to one specific block or element
- **class** attribute assigns a class name to the element
  - Apply styling rules to many blocks and elements within the page

NOTE:

- Generally recommended to use classes as much as possible
- Use ids only when absolutely necessary for specific uses (i.e. label and form elements)
- Class selectors have lower specificity than id selectors, so are easier to override if needed.

## How do I restore the default value of a property?

- Initially CSS did **NOT** provide a "default" keyword
- Only way to restore the default value of a property is to explicitly re-declare that property

```css
/* Heading default color is black */
h1 { color: red; }
h1 { color: black; }
```

CSS 2 (*initial* keyword):

```css
/* Heading default color is black */
h1 { color: red; }
h1 { color: initial; }
```

## How do I derive one style from another?

- CSS does not exactly allow one style to be defined in terms of another.
- Assigning multiple classes to a single element can provide the same effect
- CSS Variables = define style information in one place that can be reused in multiple places

## How do I assign multiple classes to an element?

- HTML elements can be assigned multiple classes
- List classes in the **class** attribute
- Use a blank space to separate

```css
<style type="text/css">
.news { background: black; color: white; }
.today { font-weight: bold; }
</style>

<div class="news today">
... content of today's news ...
</div>
```

NOTE: Order of classes in the class attribute is not relevant.

## Why don't my style rules work properly?

- Use [MDN: DOM Inspector](https://developer.mozilla.org/en-US/docs/Tools/Add-ons/DOM_Inspector) / *CSS Style Rules*

### HTML elements hierarchySection

- CSS styles depends on HTML elements hierarchy
- CSS rule applied to a descendent overrides the style of the parent
  - in spite of specificity of priority rule

```html
.news { color: black; }
.corpName { font-weight: bold; color: red; }

<!-- news item text is black, but corporate name is red and in bold -->
<div class="news">
   (Reuters) <span class="corpName">General Electric</span> (GE.NYS) announced on Thursday...
</div>
```

NOTE: If CSS rule ignored, check if element is inside another element

### Explicitly re-defined style rule

- **order is important**
- if define a rule, then re-define same rule, the last definition is used

```html
#stockTicker { font-weight: bold; }
.stockSymbol { color: red; }
/*  other rules             */
/*  other rules             */
/*  other rules             */
.stockSymbol { font-weight: normal; }

<!-- most text is in bold, except "GE", which is red and not bold -->
<div id="stockTicker">
   NYS: <span class="stockSymbol">GE</span> +1.0 ...
</div>
```

NOTE: Try to define rules only once for a certain selector, and group all rules belonging to that selector.

### Use of a shorthand propertySection

```html
#stockTicker { font-size: 12px; font-family: Verdana; font-weight: bold; }
.stockSymbol { font: 14px Arial; color: red; }

<div id="stockTicker">
   NYS: <span class="stockSymbol">GE</span> +1.0 ...
</div>
```

### Use of the * selector

***** wildcard selector refers to any element, use with care

```html
body * { font-weight: normal; }
#stockTicker { font: 12px Verdana; }
.corpName { font-weight: bold; }
.stockUp { color: red; }

<div id="section">
   NYS: <span class="corpName"><span class="stockUp">GE</span></span> +1.0 ...
</div>
```

NOTE:

- body * selector applies the rule to all elements inside body,
- a slow selector, especially when not used as the first element of a selector
- **WARNING**: should be avoided as much as possible


### Specificity in CSSSection

1. Thousands = +1, inline styles, inside *style* attribute, no selectors (1000)
2. Hundreds = +1, each ID selector (0100)
3. Tens = +1, each class, attribute, or pseudo-class selector (001))
4. Ones = +1, each element, or pseudo-element (0001)

```html
div { color: black; }
#orange { color: orange; }
.green { color: green; }

<div id="orange" class="green" style="color: red;">This is red</div>
```

## What do the -moz-*, -ms-*, -webkit-*, -o-* and -khtml-* properties do?

-moz-*
-ms-*
-webkit-*
-o-*
-khtml-*

- called *prefixed properties"
- extensions to the CSS standard
- allow use of experimental and non-standard features in browsers
- **NOT RECOMMENDED**, to use properties on production websites
- if need to use, declare prefixed versions first, then include non-prefixed standard after

```css
-ms-transform: rotate(90deg);
-webkit-transform: rotate(90deg);
transform: rotate(90deg);
```

Read: [Compatibility - Living Standard](https://compat.spec.whatwg.org/)

[MDN: Handling CSS prefixes](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#Handling_CSS_prefixes)

[MDN: Cross browser testing](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing)

[MDN: Mozilla CSS extensions](https://developer.mozilla.org/en-US/docs/Web/CSS/Mozilla_Extensions)

## How does z-index relate to positioning?

**z-index** property specifies the stack order of elements

- An element with a higher z-index/stack order is always rendered in front of an element with a lower z-index/stack order on the screen
- Z-index will only work on elements that have a specified position:
  - **position:absolute**
  - **position:relative**
  - **position:fixed**

[MDN: Positioning](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning)

[MDN: Introducing z-index](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning#Introducing_z-index)