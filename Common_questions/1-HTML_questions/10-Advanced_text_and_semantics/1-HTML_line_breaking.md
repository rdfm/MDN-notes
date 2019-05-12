# &lt;br&gt;: The Line Break element

see [How to take control of HTML line breaking](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br)

```html
HTML
<p> O’er all the hilltops<br>
    Is quiet now,<br>
    In all the treetops<br>
    Hearest thou<br>
    Hardly a breath;<br>
    The birds are asleep in the trees:<br>
    Wait, soon like these<br>
    Thou too shalt rest.
</p>
```

```css
CSS
p {
    font-size: 1rem;
    font-family: sans-serif;
    margin: 20px;
}
```

**WARNING**: **DO NOT** use &lt;br&gt; to create margins between paragraphs. Wrap in &lt;p&gt; elements and use CSS margin property.

## Attributes

[MDN: Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

## Styling with CSS

- The &lt;br&gt; element has a single, well-defined purpose — to create a line break in a block of text.

## Examples

```html
Mozilla<br>
331 E. Evelyn Avenue<br>
Mountain View, CA<br>
94041<br>
USA<br>
```

## Accessibility concerns

*BAD PRACTICE*: Creating separate paragraphs of text using &lt;br&gt;

*USE*: &lt;p&gt; elements, and use CSS properties like margin to control their spacing.