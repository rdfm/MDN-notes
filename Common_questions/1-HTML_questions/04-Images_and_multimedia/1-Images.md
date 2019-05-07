# Images in HTML

see [How to add images to a webpage](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML#How_do_we_put_an_image_on_a_webpage)

## How do we put an image on a webpage?

```html
<img>
```

- empty element = no text content
- self closing tag
- **REQUIRED** src="" attribute
- path pointing to image: relative OR absolute URL
- similar to &lt;a&gt;

*NOTE* : Search engines also read image filenames and count them towards SEO. Therefore, give your image a descriptive filename; dinosaur.jpg is better than img835.png.

**WARNING** : Most images are copyrighted.

- Do not display an image on your webpage unless you own it or have the rights
- Do not "hotlink"

*NOTE* : &lt;img&gt; and &lt;video&gt; aka "replaced elements"

- element's content and size are defined by an external resource

### Alternative text

- alt="" attribute
- textual description of the image
- where the image cannot be seen/displayed

```html
EXAMPLE:
<img src="images/dinosaur.jpg"
     alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth">
```

**TESTING (Display of Image)** : Misspell filename

#### Decoration

- USE: CSS Background images for decorative images
- if must use HTML, add a blank alt=""

#### Content

- **DO NOT** write redundant alt text

#### Link

- put inside &lt;a&gt; tags
- provide accessible link text

#### Text

- **DO NOT** put text into images

**TESTING (UX)** : Turn off images in brower. (Verify users are not missing any of the content).

### Width and height

- width="" attribute
- height="" attribute

*NOTE* : (On Mac) Cmd + I (to get info of image file)

```html
EXAMPLE:
<img src="images/dinosaur.jpg"
     alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
     width="400"
     height="341">
```

LEARN: **[Aspect Ratio](https://en.wikipedia.org/wiki/Aspect_ratio_%28image%29)**

*NOTE* :

- DO NOT use HTML attributes to alter image size
- Use image editor to put image in correct size before placing on webpage.

### Image titles

- as with links, can add title="" attribute
- gives a tooltip on mouse hover
- NOT recommended for accessibility (screen reader support is very unpredictable, unless hovering over with a mouse).
- better to include supporting information in the main article text

```html
EXAMPLE:
<img src="images/dinosaur.jpg"
     alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
     width="400"
     height="341"
     title="A T-Rex on display in the Manchester University Museum">
```

## Annotating images with figures and figure captions

*HTML5 Elements* : &lt;figure&gt; and &lt;figcaption&gt;

- semantic container for figures
- clearly link the figure to the caption

```html
EXAMPLE:
<figure>
  <img src="images/dinosaur.jpg"
       alt="The head and torso of a dinosaur skeleton;
            it has a large head with long sharp teeth"
       width="400"
       height="341">

  <figcaption>A T-Rex on display in the Manchester University Museum.</figcaption>
</figure>
```

*NOTE* :

- captions, benefit visible image
- alt text, functionality for an absent image
- both appear when image is gone
- should NOT say the same thing

**TESTING (Image alt text + captions)** : Turn off images on browser

**Figure** = independent unit of content (does not have to be an image)

*NOTE* :

- image (has meaning), use HTML image
- image (decoration only), use CSS background image