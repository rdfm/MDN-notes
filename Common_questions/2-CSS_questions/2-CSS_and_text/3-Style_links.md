# Styling links

see [How to style links](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_links)

## Links

[MDN: Creating hyperlinks](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)

### Link states

Can be styled using pseudo-classes:

- **:link**
  - link (unvisited)
  - default state a link resides in
- **:visited**
  - link when been visited (exists in browser history)
- **:hover**
  - link being hovered over user's mouse pointer
- **:focus**
  - link when focused (Tab key OR HTMLElement.focus())
- **:active**
  - link when being activated (e.g. clicked)

### Default styles

```html
<p><a href="#">A simple link</a></p>
```

```css
p {
  font-size: 2rem;
  text-align: center;
}
```

Default stypes:

- links are underlined
- unvisited links are blue
- visited links are purple
- hovering a link makes the mouse pointer change to a little hand icon
- focused links have an outline around them — press tab key
- active links are red (Hold down the mouse button on the link as click)

*NOTE*: Default styles are nearly the same as they were back in the early days of browsers in the mid-1990s

CSS properties:

- color
- cursor
- outline

### Styling some links

Link styles order:

```css
a { }

a:link { }

a:visited { }

a:focus { }

a:hover { }

a:active { }
```

*NOTE*: Order is important because link styles build on one another (**L**o**V**e **F**ears **HA**te)

**EXAMPLE**:

HTML:

```html
<p>There are several browsers available, such as <a href="#">Mozilla
Firefox</a>, <a href="#">Google Chrome</a>, and
<a href="#">Microsoft Edge</a>.</p>
```

CSS:

```css
body {
  width: 300px;
  margin: 0 auto;
  font-size: 1.2rem;
  font-family: sans-serif;
}

p {
  line-height: 1.4;
}

a {
  outline: none;
  text-decoration: none;
  padding: 2px 1px 0;
}

a:link {
  color: #265301;
}

a:visited {
  color: #437A16;
}

a:focus {
  border-bottom: 1px solid;
  background: #BAE498;
}

a:hover {
  border-bottom: 1px solid;
  background: #CDFEAA;
}

a:active {
  background: #265301;
  color: #CDFEAA;
}
```

## Including icons on links

[Icon Example](https://icons8.com/icon/741/external-link)

**EXAMPLE**:

```html
<p>For more information on the weather, visit our <a href="http://#">weather page</a>,
look at <a href="http://#">weather on Wikipedia</a>, or check
out <a href="http://#">weather on Extreme Science</a>.</p>
```

```css
body {
  width: 300px;
  margin: 0 auto;
  font-family: sans-serif;
}

p {
  line-height: 1.4;
}

a {
  outline: none;
  text-decoration: none;
  padding: 2px 1px 0;
}

a:link {
  color: blue;
}

a:visited {
  color: purple;
}

a:focus, a:hover {
  border-bottom: 1px solid;
}

a:active {
  color: red;
}

a[href*="http"] {
  background: url('https://mdn.mozillademos.org/files/12982/external-link-52.png') no-repeat 100% 0;
  background-size: 16px 16px;
  padding-right: 19px;
}
```

## Styling links as buttons

> links are quite commonly styled to look and behave like buttons in certain circumstances — a website navigation menu is usually marked up as a list containing links, and this can be easily styled to look like a set of control buttons or tabs that provide the user with access to other parts of the site.

**EXAMPLE (NAVIGATION)**:

HTML:

```html
<ul>
  <li><a href="#">Home</a></li><li><a href="#">Pizza</a></li><li><a href="#">Music</a></li><li><a href="#">Wombats</a></li><li><a href="#">Finland</a></li>
</ul>
```

CSS:
```css
body,html {
  margin: 0;
  font-family: sans-serif;
}

ul {
  padding: 0;
  width: 100%;
}

li {
  display: inline;
}

a {
  outline: none;
  text-decoration: none;
  display: inline-block;
  width: 19.5%;
  margin-right: 0.625%;
  text-align: center;
  line-height: 3;
  color: black;
}

li:last-child a {
  margin-right: 0;
}

a:link, a:visited, a:focus {
  background: yellow;
}

a:hover {
  background: orange;
}

a:active {
  background: red;
  color: white;
}
```

[CSS Tricks: Fighting the space between inline block elements](https://css-tricks.com/fighting-the-space-between-inline-block-elements/)