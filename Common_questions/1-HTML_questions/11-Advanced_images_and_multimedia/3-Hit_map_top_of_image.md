# Add a hitmap on top of an image

see [How to add a hit map on top of an image](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image)

## Image maps, and their drawbacks

- When an image nested inside &lt;a&gt;, the entire image links to one webpage
- Otherhand, an image map contains serveral active regions (called "hotspots")
  - Each hotspot links to a different resource
- Text links (styled with CSS) = preferable to image maps
  - Text links = text links are lightweight, maintainable, often more SEO-friendly, and support accessibility needs (e.g., screen readers, text-only browsers, translation services)

## How to insert an image map, properly

### Step 1: The image

```html
<img
  src="image-map.png"
  alt=""
  usemap="#example-map-1" />
```

[EXAMPLE](http://www.goethe-verlag.com/book2/)

### Step 2: Activate your hotspots

```html
<map name="example-map-1">

</map>
```

*NOTE*: Inside the &lt;map&gt; element, we need &lt;area&gt; elements, and require four attributes: shape, coords, href, alt.

```html
<map name="example-map-1">
  <area shape="circle" coords="200,250,25"
    href="page-2.html" alt="circle example" />

  <area shape="rect" coords="10, 5, 20, 15"
    href="page-3.html" alt="rectangle example" />

</map>
```

### Step 3: Make sure it works for everybody

- Test image maps rigorously on many browsers and devices
- Try following links with keyboard ONLY
- Try turning images off

If **NEED** to use images maps, look into:

- [Matt Stow's jQuery plugin](https://github.com/stowball/jQuery-rwdImageMaps)
- [the new code: Use SVG for an image map effect](http://thenewcode.com/696/Using-SVG-as-an-Alternative-To-Imagemaps)
- [the new code: Combined SVG-raster hack](http://thenewcode.com/760/Create-A-Responsive-Imagemap-With-SVG)