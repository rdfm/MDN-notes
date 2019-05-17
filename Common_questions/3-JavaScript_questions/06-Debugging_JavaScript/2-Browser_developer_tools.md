# What are browser developer tools?

see [What are browser developer tools, and how do you access them?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools)

**[TEST: EXAMPLE SITE](http://mdn.github.io/beginner-html-site-scripted/)**

## How to open the devtools in your browser

- Keyboard: Ctrl + Shift + I, except
  - Internet Explorer and Edge: F12
  - macOS: ⌘ + ⌥ + I
- Menu bar:
  - Firefox: Menu  ➤ Web Developer ➤ Toggle Tools, or Tools ➤ Web Developer ➤ Toggle Tools
  - Chrome: More tools ➤ Developer tools
  - Safari: Develop ➤ Show Web Inspector. If you can't see the Develop menu, go to Safari ➤ Preferences ➤ Advanced, and check the Show Develop menu in menu bar checkbox. 
  - Opera: Developer ➤ Developer tools
  - Context menu: Press-and-hold/right-click an item on a webpage (Ctrl-click on the Mac), and choose Inspect Element from the context menu that appears. (An added bonus: this method straight-away highlights the code of the element you right-clicked.)

## The Inspector: DOM explorer and CSS editor

### Exploring the DOM inspector

- right-click (Ctrl-click) an HTML element in the DOM inspector
- Delete Node
- Edit as HTML
- :hover/:active/:focus.
- Copy/Copy as HTML

### Exploring the CSS editor

- CSS Viewer
- Computed
- Layout
  - Box Model
  - Grid
- Fonts

### DOM Inspector (Find out more)

[Firefox Page inspector](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector)

[IE DOM Explorer](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/dn255008(v=vs.85))

[Chrome DOM inspector](https://developers.google.com/web/tools/chrome-devtools/inspect-styles/?utm_source=dcc&utm_medium=redirect&utm_campaign=2016q3) (Opera's inspector works the same as this)

[Safari DOM inspector and style explorer](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/ResourcesandtheDOM/ResourcesandtheDOM.html#//apple_ref/doc/uid/TP40007874-CH3-SW1)

## The JavaScript debugger

- **Firefox**: Select  ➤ Web Developer ➤ Debugger or press Ctrl + Shift + S to open the JavaScript Debugger. If the tools are already displayed, click on the Debugger tab.

- **Chrome**: Open the Developer tools and then select the Sources tab. (Opera works the same way.)

- **Edge and Internet Explorer 11**: Press F12 and then, Ctrl + 3, or if the tools are already displayed, click on the Debugger tab.

- **Safari**: Open the Developer Tools and then select the Debugger tab.

### Exploring the debugger

#### File list

#### Source code

#### Watch expressions and breakpoints

- Watch expressions
- Breakpoints
- Call stack
- Scopes

### JS Debugger (Find out more)

[Firefox JavaScript Debugger](https://developer.mozilla.org/en-US/docs/Tools/Debugger)

[Microsoft Edge Debugger](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide/debugger)

[Chrome Debugger](https://developers.google.com/web/tools/chrome-devtools/javascript/)

[Safari Debugger](https://developer.apple.com/safari/tools/)

## The JavaScript console

Ctrl + Shift + K 

OR

Menu  ➤ Web Developer ➤ Web Console, or Tools ➤ Web Developer ➤ Web Console.

**EXERCISE**:

```javascript
alert('hello!');

document.querySelector('html').style.backgroundColor = 'purple';

var myImage = document.createElement('img');
myImage.setAttribute('src','https://blog.mozilla.org/press/wp-content/themes/OneMozilla/img/mozilla-wordmark.png');
document.querySelector('h1').appendChild(myImage);
```

**EXERCISE (Incorrect versions / Errors)**:

```javascript
alert('hello!);

document.cheeseSelector('html').style.backgroundColor = 'purple';

var myImage = document.createElement('img');
myBanana.setAttribute('src','https://blog.mozilla.org/press/wp-content/themes/OneMozilla/img/mozilla-wordmark.png');
document.querySelector('h1').appendChild(myImage);
```

### JS Console (Find out more)

[Firefox Web Console](https://developer.mozilla.org/en-US/docs/Tools/Web_Console)

[IE JavaScript console](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/dn255006(v=vs.85))

[Chrome JavaScript Console](https://developers.google.com/web/tools/chrome-devtools/console/?utm_source=dcc&utm_medium=redirect&utm_campaign=2016q3) (Opera's [inspector works the same as this)

[Safari Console](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html#//apple_ref/doc/uid/TP40007874-CH6-SW1)