# Performance

see [What tools are available to debug and improve website performance?](https://developer.mozilla.org/en-US/docs/Tools/Performance)

> This set of articles shows you how to use the Developer Tools in Firefox to debug and improve performance of your website, using the tools to check the memory usage, the JavaScript call tree, the amount of DOM nodes being rendered, and more.

## Firefox: Performance Tool

- gives you insight into your site's general responsiveness, JavaScript and layout performance
- can create a recording, or profile, of your site over a period of time
- tool then shows you an overview of the things the browser was doing to render your site over the profile, and a graph of the frame rate over the profile

**Four sub-tools**:

[Waterfall](https://developer.mozilla.org/en-US/docs/Tools/Performance/Waterfall)

- shows the different operations the browser was performing, such as executing layout, JavaScript, repaints, and garbage collection

[Call Tree](https://developer.mozilla.org/en-US/docs/Tools/Performance/Call_Tree)

- shows the JavaScript functions in which the browser spent most of its time

[Flame Chart](https://developer.mozilla.org/en-US/docs/Tools/Performance/Flame_Chart)

- shows the JavaScript call stack over the course of the recording

[Allocations](https://developer.mozilla.org/en-US/docs/Tools/Performance/Allocations)

- view shows the heap allocations made by your code over the course of the recording. This view only appears if you checked "Record Allocations" in the Performance tool settings.

### Watch

[Introducing new Performance Tools in Firefox Developer Edition 40](https://www.youtube.com/watch?v=WBmttwfA_k8&feature=youtu.be)

### Scenarios

[MDN: Animating CSS properties](https://developer.mozilla.org/en-US/docs/Tools/Performance/Scenarios/Animating_CSS_properties)

[MDN: Intensive JavaScript](https://developer.mozilla.org/en-US/docs/Tools/Performance/Scenarios/Intensive_JavaScript)