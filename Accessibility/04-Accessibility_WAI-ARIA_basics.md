# [WAI-ARIA basics](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics)

## What is WAI-ARIA

**WAI-ARIA** = Web Accessibility Initiative – Accessible Rich Internet Applications

**W3C** = World Wide Web Consortium

[WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/)

- specification written by the W3C
- defining a set of additional HTML attributes
- applied to elements to provide additional semantics and improve accessibility wherever it is lacking
- **DOES NOT** affect webpage structure or the DOM
- attributes can be useful for CSS selecting elements

**Three main features**:

- **Roles**
  - define what an element is / does
  - landmark roles:
    - role="navigation" (&lt;nav&gt;)
    - role="complementary" (&lt;aside&gt;)
  - page structure roles (common):
    - role="banner"
    - role="search"
    - role="tabgroup"
    - role="tab"
- **Properties**
  - define properties of elements
  - used to give them extra meaning or semantic
  - examples:
    - aria-required="true"
      - specifies that a form input needs to be filled in to be valid
    - aria-labelledby="label"
      - allows to put an ID on an element, then reference it as being the label for anything else on the page, including multiple elements
- **States**
  - special properties that define the current conditions of elements
  - example:
    - aria-disabled="true"
      - specifices to a screenreader that a form input is currently disabled.

**[WAI-ARIA - Roles](https://www.w3.org/TR/wai-aria-1.1/#role_definitions)**

**[WAI-ARIA -  Definitions of States and Properties (all aria-* attributes)](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def)**

### Where is WAI-ARIA supported?

[Rough Guide: browsers, operating systems and screen reader support – Updated 23/06/2017](https://developer.paciellogroup.com/blog/2014/10/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/)

[Can I use: WAI-ARIA](https://caniuse.com/#search=WAI-ARIA)

[Article: WAI-ARIA Screen reader compatibility](https://www.powermapper.com/tests/screen-readers/aria/)

*NOTE* : JavaScript libraries support WAI-ARIA

- [jQuery UI - Deep accessibility support](https://jqueryui.com/about/#deep-accessibility-support)
- [Dijit Accessibility Statement](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html#id2)
- [Sencha Ext JS](https://www.sencha.com/products/extjs/#overview)

### When should you use WAI-ARIA?

Four main areas WAI-ARIA useful in:

1. **Signposts/Landmarks**
    - ARIA's **role** attribute values
    - landmarks to replicate the semantics of HTML5 elements (e.g. &lt;nav role="navigation"&gt;)
    - signposts to functions areas (e.g. "search", "tabgroup", "tab", "listbox", etc.)

2. **Dynamic content updates** 
    - use **aria-live** to inform screenreader users when an area of content is updated, via XMLHttpRequest or DOM APIs

3. **Enhancing keyboard accessibility**
    - built-in HTML elements that have navtive keyboard accessiblity
    - avoid similar / simultaneous interactions
    - WAI-ARIA provides a means to allow other elements to receive focus (using tabindex)

4. **Accessibility of non-semantic controls**
    - when series of nested &lt;div&gt;s + CSS/JavaScript used to create complex UI-feature (accessibility suffers)
    - ARIA can help to provide what's missing with a combination of roles like button, listbox, or tabgroup, and properties like aria-required or aria-posinset to provide further clues as to functionality

*NOTE* : **"you should only use WAI-ARIA when you need to!"**

*IDEALLY* : Always use native HTML features to provide semantics required by screenreaders.

## Practical WAI-ARIA implementations

[MDN: Handling common accessibility problems](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Screenreaders)

[EXAMPLE (Website NO roles)](https://github.com/mdn/learning-area/blob/master/accessibility/aria/website-no-roles/index.html)

[LIVE VERSION](https://mdn.github.io/learning-area/accessibility/aria/website-no-roles/)

**[EXAMPLE (Website ARIA roles)](https://github.com/mdn/learning-area/blob/master/accessibility/aria/website-aria-roles/index.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)**

### Dynamic content updates

**dynamically updating** = content that updates without the entire page reloading via a mechanism like XMLHttpRequest, Fetch, or DOM APIs. Sometimes referred to as **live regions**.

[REFER TO: aria-live property](https://www.w3.org/TR/wai-aria-1.1/#aria-live)

attribute values:

- **off** : (default), updates NOT announced
- **polite** : updates announced (ONLY if user idle)
- **assertive** : updates announced to user ASAP

*TO DO* : Go to [EXAMPLE (ARIA NO Live)](https://github.com/mdn/learning-area/blob/master/accessibility/aria/aria-no-live.html), and update &lt;section&gt; tag

```html
<section aria-live="assertive">
```

```html
(To always read heading)
<section aria-live="assertive" aria-atomic="true">
```

**[EXAMPLE (ARIA live)](https://github.com/mdn/learning-area/blob/master/accessibility/aria/aria-live.html)**

**[LIVE EXAMPLE](https://mdn.github.io/learning-area/accessibility/aria/aria-live.html)**

### Enhancing keyboard accessibility

Making non-focusable code focusable, WAI-ARIA extends the tabindex attribute:

- tabindex="0" — as indicated above, this value allows elements that are not normally tabbable to become tabbable. This is the most useful value of tabindex.

- tabindex="-1" — this allows not normally tabbable elements to receive focus programmatically, e.g. via JavaScript, or as the target of links.

### Accessibility of non-semantic controls

#### Form validation and error alerts

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul>
  </ul>
</div>
```

- **role="alert"**
  - turns element into a live region
  - semantically identifies it as an alert message (important time/context sensitive information)
  - NOTE: modal dialogs like alert() calls have a number of accessibility problems

- **aria-relevant="all"**
  - instructs the screenreader to read out the contents of the error list when any changes are made to it — i.e. when errors are added or removed.
  - informs user what errors are left

```html
EXAMPLE (Form inputs):
<input type="text" name="name" id="name" aria-required="true">

<input type="number" name="age" id="age" placeholder="Enter 1 to 150" aria-required="true">
```

**[EXAMPLE (Form validation updated)](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html)**

#### Describing non-semantic buttons as buttons

```html
<div data-message="This is from the first button" tabindex="0" role="button">Click me!</div>
```

#### Guiding users through complex widgets

**[Deque university code library (Useful examples)](https://dequeuniversity.com/library/)**

```html
<ul role="tablist">
  <li class="active" role="tab" aria-selected="true" aria-setsize="3" aria-posinset="1" tabindex="0">Tab 1</li>
  <li role="tab" aria-selected="false" aria-setsize="3" aria-posinset="2" tabindex="0">Tab 2</li>
  <li role="tab" aria-selected="false" aria-setsize="3" aria-posinset="3" tabindex="0">Tab 3</li>
</ul>
<div class="panels">
  <article class="active-panel" role="tabpanel" aria-hidden="false">
    ...
  </article>
  <article role="tabpanel" aria-hidden="true">
    ...
  </article>
  <article role="tabpanel" aria-hidden="true">
    ...
  </article>
</div>
```

**[EXAMPLE (ARIA tabbed info box)](https://github.com/mdn/learning-area/blob/master/accessibility/aria/aria-tabbed-info-box.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/accessibility/aria/aria-tabbed-info-box.html)**