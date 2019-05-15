# Attribute selectors

see [How to select elements via attribute name and content](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Attribute_selectors)

- special kind of selector that will match elements based on their attributes and attribute values
- syntax consists of square brackets ([])
  - containing an attribute name
  - followed by an optional condition, to match attribute value
  
**Two categories**:

1. **Presence and value** attribute selectors
2. **Substring value** attribute selectors.

## Presence and value attribute selectors

> Match an exact attribute value

- **[attr]**
  - select all elements with the attribute attr, whatever its value
- **[attr=val]**
  - select all elements with the attribute attr, ONLY if value === val
- **[attr~=val]**
  - select all elements with the attribute attr, ONLY if  val is one of a space-separated list of words contained in attr's value

**HTML**:

```html
Ingredients for my recipe: <i lang="fr-FR">Poulet basquaise</i>
<ul>
  <li data-quantity="1kg" data-vegetable>Tomatoes</li>
  <li data-quantity="3" data-vegetable>Onions</li>
  <li data-quantity="3" data-vegetable>Garlic</li>
  <li data-quantity="700g" data-vegetable="not spicy like chili">Red pepper</li>
  <li data-quantity="2kg" data-meat>Chicken</li>
  <li data-quantity="optional 150g" data-meat>Bacon bits</li>
  <li data-quantity="optional 10ml" data-vegetable="liquid">Olive oil</li>
  <li data-quantity="25cl" data-vegetable="liquid">White wine</li>
</ul>
```

**CSS**:

```css
/* All elements with the attribute "data-vegetable"
   are given green text */
[data-vegetable] {
  color: green;
}

/* All elements with the attribute "data-vegetable"
   with the exact value "liquid" are given a golden
   background color */
[data-vegetable="liquid"] {
  background-color: goldenrod;
}

/* All elements with the attribute "data-vegetable",
   containing the value "spicy", even among others,
   are given a red text color */
[data-vegetable~="spicy"] {
  color: red;
}
```

*NOTE*: **data-<sup>*</sup>** are called data attributes. Store custom data in an HTML attribute can be extracted and used. [MDN: Using data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

## Substring value attribute selectors

> aka "RegExp-like selectors", offer flexible matching similar to regular expressions (but these are NOT true regular expression)

- **[attr^=val]**
  - select all elements with the attribute attr for which the value starts with val
  - *NOTE*: Alternatively, can use **[attr|=val]**
- **[attr$=val]**
  - select all elements with the attribute attr for which the value ends with val
- **[attr*=val]**
  - select all elements with the attribute attr for which the value contains the substring val. (A substring is simply part of a string, e.g. "cat" is a substring in the string "caterpillar".)

**HTML**: (Refer to above)

**CSS**:

```css
/* Classic usage for language selection */
[lang|="fr"] {
  font-weight: bold;
}

/* All elements with the attribute "data-quantity", for which
   the value starts with "optional" */
[data-quantity^="optional"] {
  opacity: 0.5;
}

/* All elements with the attribute "data-quantity", for which
   the value ends with "kg" */
[data-quantity$="kg"] {
  font-weight: bold;
}

/* All elements with the attribute "data-vegetable" containing
   the substring "not spicy" are turned back to green */
[data-vegetable*="not spicy"] {
  color: green;
}
```

[MDN: Attribute selectors (Reference Page)](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)