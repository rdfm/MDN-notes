# Video and audio content

see [How to add video content to a webpage](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)

```html
<video>
<audio>
```

## Audio and video on the web

**[SAMPLE FILES (Audio + Video for experimentation)](https://github.com/mdn/learning-area/tree/master/html/multimedia-and-embedding/video-and-audio-content)**

**OVP** = Online Video Providers

- i.e. YouTube, Dailymotion, Vimeo
- i.e. (Audio): Soundcloud

### The &lt;video&gt; element

- src="" attribute
- controls attribute
- &lt;p&gt; inside &lt;videogt; = fallback content

```html
EXAMPLE:
<video src="rabbit320.webm" controls>
  <p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.webm">link to the video</a> instead.</p>
</video>
```

### Supporting multiple formats

- above code won't play on Safari or Internet Explorer
- different browsers support different video (and audio) formats

Container formats = i.e. MP3, MP4 and WebM

**[TABLE: audio-video codec compatibility table](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats#Browser_compatibility)**

*NOTE* : Browsers contain different codecs

```html
EXAMPLE (Updated):
<video controls>
  <source src="rabbit320.mp4" type="video/mp4">
  <source src="rabbit320.webm" type="video/webm">
  <p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.mp4">link to the video</a> instead.</p>
</video>
```

*NOTE* : &lt;source&gt; advised to have a type="" attribute

- contain MIME types of files
- MIME type (now properly called "media type", but also sometimes "content type")
- string sent along with a file indicating the type of the file

### Other &lt;video&gt; features

- width + height
- autoplay
- loop
- muted
- poster
- preload

```html
EXAMPLE:
<video controls width="400" height="400"
       autoplay loop muted
       poster="poster.png">
  <source src="rabbit320.mp4" type="video/mp4">
  <source src="rabbit320.webm" type="video/webm">
  <p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.mp4">link to the video</a> instead.</p>
</video>
```

### The &lt;audio&gt; element

- similar to &lt;video&gt; element
- Does NOT support:
  - width/height attributes
  - poster="" attribute

```html
EXAMPLE:
<audio controls>
  <source src="viper.mp3" type="audio/mp3">
  <source src="viper.ogg" type="audio/ogg">
  <p>Your browser doesn't support HTML5 audio. Here is a <a href="viper.mp3">link to the audio</a> instead.</p>
</audio>
```

### Restarting media playback

- element's load() method
- reset media to the beginning / process of selecting best media source

```html
EXAMPLE:
var mediaElem = document.getElementById("my-media-element");
mediaElem.load();
```

### Detecting track addition and removal

- monitor track lists within a media element, detect when tracks are added or deleted.
- Example: watch for the addtrack event to be sent to the HTMLMediaElement.audioTrackList

```html
EXAMPLE:
var mediaElem = document.querySelector("video");
mediaElem.audioTracks.onaddtrack = function(event) {
  audioTrackAdded(event.track);
}
```

### Displaying video text tracks

- a transcript of the words being spoken in the audio/video
- Web Video Text Tracks Format (WebVTT), using the &lt;track&gt; element
  - format for writing text files containing multiple strings
  - along with metadata (time in the video each string to be displayed)
  - text strings = cues

#### Types of cues

- subtitles
- captions
- timed descriptions

```html
EXAMPLE: WebVTT file
WEBVTT

1
00:00:22.230 --> 00:00:24.606
This is the first subtitle.

2
00:00:30.739 --> 00:00:34.074
This is the second.

  ...
```

To get this displayed along with the HTML media playback, you need to:

1. Save it as a .vtt file in a sensible place.

2. Link to the .vtt file with the &lt;track&gt; element

- &lt;track&gt; placed within &lt;audio&gt; or &lt;video>
- after all &lt;source&gt; elements
- use kind="" attribute, to specify cue

```html
EXAMPLE:
<video controls>
    <source src="example.mp4" type="video/mp4">
    <source src="example.webm" type="video/webm">
    <track kind="subtitles" src="subtitles_en.vtt" srclang="en">
</video>
```

**[EXAMPLE (CODE)](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions)**

**[LIVE VERSION](https://iandevlin.github.io/mdn/video-player-with-captions/)**

### Active learning: Embedding your own audio and video

#### Tools (Conversion Apps)

- Video => WebM and MP4
  - [MiroVideoConverter](http://www.mirovideoconverter.com/)
- Audio => MP3 and Ogg
  -[Audacity](https://sourceforge.net/projects/audacity/)

**[SAMPLE FILES (Audio + Video for experimentation)](https://github.com/mdn/learning-area/tree/master/html/multimedia-and-embedding/video-and-audio-content)**