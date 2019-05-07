# Annotate images

see [How to annotate images and graphics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML#Annotating_images_with_figures_and_figure_captions)

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

**TEST** : Turn off images on browser

**Figure** = independent unit of content (does not have to be an image)

*NOTE* :

- image (has meaning), use HTML image
- image (decoration only), use CSS background image