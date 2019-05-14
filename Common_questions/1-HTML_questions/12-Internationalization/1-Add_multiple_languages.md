# Setting the primary language of the document

see [How to add multiple languages into a single webpage](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#Setting_the_primary_language_of_the_document)

*NOTE*: **SHOULD** set the language of your page.

Add the lang="" attribute to the opening HTML tag &lt;html&gt;

```html
<html lang="en-US">
```

- HTML document will be indexed more effectively by search engines
- Allowing to appear correctly in language-specific results
- Useful to people with visual impairments using screen readers (word pronunciation)

*CAN*: Set subsections of document to be recognised as different languages

```html
<p>Japanese example: <span lang="ja">ご飯が熱い。</span>.</p>
```

**Codes** are defined by [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) standard.

- [List of ISO 639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

- [W3C: Language tags in HTML and XML](https://www.w3.org/International/articles/language-tags/)