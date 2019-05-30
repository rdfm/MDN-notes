# Background clip

see [How to use background-clip to control how much of the box your background image covers.](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model#Background_clip)

**Box backgrounds**:

- made up of colors and images, stacked on top of each other
  - **background-color**, **background-image**
- applied to a box and drawn under that box
- Default:  backgrounds extend to the outer edge of the border
  - **WARNING**: Be careful w/ tiled background images, can be fixed with **background-clip**

**EXAMPLE**:

HTML:

```html
<div class="default"></div>
<div class="padding-box"></div>
<div class="content-box"></div>
```

CSS:

```css
div {
  width  : 60px;
  height : 60px;
  border : 20px solid rgba(0, 0, 0, 0.5);
  padding: 20px;
  margin : 20px 0;

  background-size    : 140px;
  background-position: center;
  background-image   : url('https://mdn.mozillademos.org/files/11947/ff-logo.png');
  background-color   : gold;
}

.default     { background-clip: border-box;  }
.padding-box { background-clip: padding-box; }
.content-box { background-clip: content-box; }
```