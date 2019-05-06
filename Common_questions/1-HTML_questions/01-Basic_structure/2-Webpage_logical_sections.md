# Document and website structure

see [How to divide a webpage into logical sections](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Divide_a_webpage_into_logical_sections)

## Basic sections of a document

* header
* navigation bar
* main content
* sidebar
* footer

## HTML for structuring content

"Use the right element for the right job"

```html
Header: <header>
```

```html
Navigation bar: <nav>
```

```html
Main content: <main>
    - with various content subsections:
    <article>, <section>, <div>
```

```html
Sidebar: <aside>
    - often placed inside <main>
```

```html
Footer: <footer>
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/document_and_website_structure/index.html)**

## HTML elements in more detail

```html
<main>
  - content unique to page
  - only once per page
  - directly inside <body>
  - DO NOT nest within other elements
```

```html
<article>
  - encloses a block of related content
  - on its own (with the rest of the page)
  - Ex. single blog post
```

```html
<section>
  - similar to article
  - grouping together a single part of the page
  - one single piece of functionality
  - Ex. mini map, set of article and summaries, etc.
```

```html
<aside>
  - content NOT directly related to the main content
  - can provide additional information indirectly
  - Ex. glossary entries, author biography, related links, etc.
```

```html
<header>
  - group of introductory content
  - in <body>, defines global header of a webpage.
  - in <article> or <section>, defines local / specific header
```

```html
<nav>
  - main navigation for the page
  - NO secondary links
```

```html
<footer>
  - group of end content for a page
```

### Non-semantic wrappers

```html
<div> = block level element
<span> = inline level element
```

### Line breaks and horizontal rules

```html
<br> = line break
<hr> = horizontal rule
    - denotes a thematic change in the text
```

*NOTE* : HTML ignores most white space.

## Planning a simple website

**IA = Information Architecture**

* What content needed?
* What pages needed?
* How pages arranged and linked?
  
AKA: Site Map