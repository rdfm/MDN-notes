# Use JavaScript within a webpage

see [How to use JavaScript within a webpage](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_JavaScript_within_a_webpage)

## About JavaScript

**JavaScript** = a programming language mostly used client-side to make webpages interactive.

## How to trigger JavaScript from HTML

- run JavaScript from inside HTML webpages
- &lt;script&gt; element, call JavaScript code from within HTML

Two ways to use &lt;script&gt;

1. Linking to an external script
2. embedding a script directly on webpage

### Linking an external script

```html
<script src="path/to/my/script.js"></script>
```

**PRO-TIP** : Good idea to put &lt;script&gt; elements at the end the HTML document (right before &lt;/body&gt; closing tag).

- Loading and running scripts is blocking and immediate.
- every time the browser comes across a &lt;script&gt; element, the browser stops reading the HTML and runs script.
- browser continues reading/rendering HTML after running script.
- when &lt;script&gt; elements are at the end, **DO NOT** run the risk of manipulating DOM nodes that are not yet initialized.
- additionally, webpages will finish displaying faster.

#### Writing JavaScript within HTML

```html
<script>
window.addEventListener('load', function () {
  console.log('This function is executed once the page is fully loaded');
});
</script>
```

*NOTE* : Use ONLY  if need a small bit of JavaScript

## Use scripting accessibly

### Best practices for adding JavaScript

- **Make all content available as (structured) text.**
  - rely on HTML for content
  - i.e. Supplement JS progress bar with matching text percentages inside HTML
  - i.e. Drop-down menus should be structured as unordered lists of links
- **Make all functionality accessible from the keyboard.**
  - let users Tab through all controls in logical order (e.g. links, form input, etc.)
  - pointer events (mouse OR touch events), duplicate functionality with keyboard events
  - test site using a keyboard only
- **Don't set nor even guess time limits.**
- **Keep animations subtle and brief with no flashing.**
  - flashing is annoying and can cause seizures
  - if animation lasts more than a couple seconds, give user a way to cancel
- **Let users initiate interactions.**
  - DO NOT update content, redirect, or refresh automatically.
  - DO NOT use carouselsor display popups without warning.
- **Have a plan B for users without JavaScript.**
  - JavaScript turned off.
  - Network issues prevent loading.
  - 3rd-party scripts might break scripts

    - At a minimum, leave a short message with &lt;noscript&gt;

    ```html
    <noscript>To use this site, please enable JavaScript.</noscript>
    ```

    - replicate the JavaScript functionality with HTML and server-side scripting when possible.
    - for simple visual effects, CSS can often get the job done even more intuitively.
    - Since almost everybody does have JavaScript enabled, &lt;noscript&gt; is no excuse for writing inaccessible scripts.