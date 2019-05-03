# Basic HTML document

see [How to create a basic HTML document](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#Anatomy_of_an_HTML_document)

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

---

```html
<!DOCTYPE html>
```

Used to look like (1991/2):

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

---

```html
<html></html>
```

* Element wraps all content.
* Known as root element.

```html
<head></head>
```

* Container for non-content.
* Includes: keywords and page description (for search results), CSS, character set declarations, etc.

---

```html
<meta charset="utf-8">
```

* Should use UTF-8 (includes most characters).

---

```html
<title></title>
```

* Set title of page.
* Appears in the browser tab.
* Used to describe page when bookmark/favorite.

---

```html
<body></body>
```

* Contains all content.