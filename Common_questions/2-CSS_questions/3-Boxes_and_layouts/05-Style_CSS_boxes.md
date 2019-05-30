# Create fancy boxes

see [How to create fancy boxes](https://developer.mozilla.org/en-US/docs/Learn/CSS/Howto/create_fancy_boxes)

also see [Styling boxes module](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes)

**Prerequisites**:

- [CSS box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model)
- [CSS layout basics](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction)

**BASE: HTML**:

```html
<div class="fancy">Hi! I want to be fancy.</div>
```

## Box model tweak

### Making circles

```css
.fancy {
  /* Within a circle, centered text looks prettier. */
  text-align : center;

  /* Let's avoid our text touching the border. As
     our text will still flow in a square, it looks
     nicer that way, giving the feeling that it's a "real"
     circle. */
  padding : 1em;

  /* The border will make the circle visible.
     You could also use a background, as
     backgrounds are clipped by border radius */
  border : 0.5em solid black;

  /* Let's make sure we have a square.
     If it's not a square, we'll get an
     ellipsis rather than a circle ;) */
  width  : 4em;
  height : 4em;

  /* and let's turn the square into a circle */
  border-radius: 100%;
}
```

## Backgrounds

- **background-* properties**
- possible to set several backgrounds on a single box

```css
.fancy {
  padding : 1em;
  width: 100%;
  height: 200px;
  box-sizing: border-box;

  /* At the bottom of our background stack,
     let's have a misty grey solid color */
  background-color: #E4E4D9;

  /* We stack linear gradients on top of each
     other to create our color strip effect.
     As you will notice, color gradients are
     considered to be images and can be
     manipulated as such */
  background-image: linear-gradient(175deg, rgba(0,0,0,0) 95%, #8da389 95%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 95%, #8da389 95%),
                    linear-gradient(175deg, rgba(0,0,0,0) 90%, #b4b07f 90%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 92%, #b4b07f 92%),
                    linear-gradient(175deg, rgba(0,0,0,0) 85%, #c5a68e 85%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 89%, #c5a68e 89%),
                    linear-gradient(175deg, rgba(0,0,0,0) 80%, #ba9499 80%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 86%, #ba9499 86%),
                    linear-gradient(175deg, rgba(0,0,0,0) 75%, #9f8fa4 75%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 83%, #9f8fa4 83%),
                    linear-gradient(175deg, rgba(0,0,0,0) 70%, #74a6ae 70%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 80%, #74a6ae 80%);
}
```

**NOTE**:

Resource: [CSS3 Pattern Gallery](https://leaverou.github.io/css3patterns/)

**[MDN: Using CSS gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients)**

## Pseudo-elements

**[MDN: Pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)**

### A cloud

```css
.fancy {
  text-align: center;

  /* Same trick as previsouly used to make circles */
  box-sizing: border-box;
  width     : 150px;
  height    : 150px;
  padding   : 80px 1em 0 1em;

  /* We make room for the "ears" of our cloud */
  margin    : 0 100px;

  position: relative;

  background-color: #A4C9CF;

  /* Well, actually we are not making a full circle
     as we want the bottom of our cloud to be flat.
     Feel free to tweak this example to make a cloud
     that isn't flat at the bottom ;) */
  border-radius: 100% 100% 0 0;
}

/* Those are common style that apply to both our ::before
   and ::after pseudo elements. */
.fancy::before,
.fancy::after {
  /* This is required to be allowed to display the
     pseudo-elements, event if the value is an empty
     string */
  content: '';

  /* We positionnate our pseudo-elements on the left and
     right sides of the box, but always at the bottom */
  position: absolute;
  bottom  : 0;

  /* This makes sure our pseudo-elements will be below
     the box content whatever happens. */
  z-index : -1;

  background-color: #A4C9CF;
  border-radius: 100%;
}

.fancy::before {
  /* This is the  size of the clouds left ear */
  width  : 125px;
  height : 125px;

  /* We sligthly move it to the left */
  left    : -80px;

  /* To make sure that the bottom of the cloud
     remains flat, we must make the bottom right
     corner of the left ear square. */
  border-bottom-right-radius: 0;
}

.fancy::after {
  /* This is the size of the clouds left ear */
  width  : 100px;
  height : 100px;

  /* We sligthly move it to the right */
  right   : -60px;

  /* To make sure that the bottom of the cloud
     remains flat, we must make the bottom left
     corner of the right ear square. */
  border-bottom-left-radius: 0;
}
```

### Blockquote

- Using HTML &lt;blockquote&lt; element

HTML:

```html
<blockquote>People who think they know everything are a great annoyance to those of us who do. <i>Isaac Asimov</i></blockquote>

<blockquote lang="fr">L'intelligence, c'est comme les parachutes, quand on n'en a pas, on s'écrase. <i>Pierre Desproges</i></blockquote>
```

CSS:

```css
blockquote {
  min-height: 5em;
  padding   : 1em 4em;
  font      : 1em/150% sans-serif;
  position  : relative;
  background-color: lightgoldenrodyellow;
}

blockquote::before,
blockquote::after {
  position: absolute;
  height  : 3rem;
  font    : 6rem/100% Georgia, "Times New Roman", Times, serif;
}

blockquote::before {
  content: '“';
  top    : 0.3rem;
  left   : 0.9rem;
}

blockquote::after {
  content: '”';
  bottom : 0.3rem;
  right  : 0.8rem;
}

blockquote:lang(fr)::before {
  content: '«';
  top    : -1.5rem;
  left   : 0.5rem;
}

blockquote:lang(fr)::after {
  content: '»';
  bottom : 2.6rem;
  right  : 0.5rem
}

blockquote i {
  display   : block;
  font-size : 0.8em;
  margin-top: 1rem;
  text-style: italic;
  text-align: right;
}
```