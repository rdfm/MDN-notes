# Text drop shadows

see [How to add shadows to text](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#Text_drop_shadows)

**text-shadow** = apply drop shadows to text

```css
text-shadow: 4px 4px 5px red;
```

Takes four properties:

- horizontal offset
  - of the shadow from original text
  - moves shadow left/right
  - value required
- vertical offset
  - of the shadow from original text
  - moves shadow up/down
  - value required
- blur radius
  - higher value = shadow dispersed more widely
  - if no value, defaults to 0 (no blur)
- base color
  - of shadow
  - if no value, defaults to black

## Multiple shadows

- can apply mutiple shadows to the same text by including shadow values

```css
text-shadow: -1px -1px 1px #aaa,
             0px 4px 1px rgba(0,0,0,0.5),
             4px 4px 5px rgba(0,0,0,0.7),
             0px 0px 7px rgba(0,0,0,0.4);
```

[EXAMPLES: Moonlighting with CSS text-shadow](https://www.sitepoint.com/moonlighting-css-text-shadow/)