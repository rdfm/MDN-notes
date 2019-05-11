# [What is accessibility?](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility)

## Accessbility

- the practice of making your websites usable by as many people as possible
- disabilities, mobile devices, slow network connections
- same or similar experience, no matter what ability or circumstance

**Best Practices** :

- Semantic HTML
- Good ethics/morals
- Usability
- The law is some places

## Kinds of disabilities

**ATs** = assistive technologies

### People with visual impairments

- blindness, low-level vision, color blindness, etc.
- many use screen magnifiers, software zoom capabilities (most browsers capable), or screen readers

Paid Products:

- JAWS (Windows)
- Dolphin Screen Reader (Windows)

Free Products

- NVDA (Windows)
- ChromeVox (Chrome, Windows and Mac OS X)
- Orca (Linux)

Built into OS

- VoiceOver (Mac OS X and iOS)
- Narrator (Microsoft Windows)
- ChromeVox (on Chrome OS)
- TalkBack (Android).

[WATCH (VIDEO): JAWS Screen Reader - Hear an Example](https://www.youtube.com/watch?v=IK97XMibEws)

[MDN: Cross browser testing (Screen Readers)](
https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing)

### People with hearing impairments

- auditory impairments, or deaf people
- low hearing levels or no hearing at all
- No specific ATs for computer/web use

*NOTE*: Techniques for providing text alternatives to audio content

### People with mobility impairments
  
- disabilities concerning movement
- loss of limb or paralysis
- neurological/genetic disorders
- difficulty with mouse movements / tap

*NOTE* : Controls be accessible by keyboard

[MDN: Cross browser testing (Using native keyboard accessibility)](
https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Using_native_keyboard_accessibility)

### People with cognitive impairments

- mental illnesses to learning difficulties
- difficulties in comprehension and concentration

*NOTE*: Good design practices
  
- pages are consistent (nav, header, footer, and main content in the same places)
  - tools are well designed and easy to use
  - logical steps (with regular reminders, and how much left)
  - pages not overly long / dense
  - plain and easy language
  - important points and content highlighted
  - user errors clearly highlighted

[READ: WebAIM's Cognitive Page](https://webaim.org/articles/cognitive/)

## Implementing accessbility into your project

**EXAMPLE (QUESTIONS TO ASK)** :

- Is my date picker widget usable by people using screen readers?
- If content updates dynamically, do visually impaired people know about it?
- Are my UI buttons accessible using the keyboard and on touch interfaces?

*NOTE* : "100% accessibility" is an unobtainable ideal — you will always come across some kind of edge case that results in a certain user finding certain content difficult to use — but you should do as much as you can.

## Accessibility guidelines and the law

[Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)

[WCAG at a Glance](https://www.w3.org/WAI/standards-guidelines/wcag/glance/)

[Web Accessibility Laws & Policies by country](https://www.w3.org/WAI/policies/)

## Accessibility API's

**accessibility APIs** =  (provided by the underlying operating system) that expose information useful for assistive technologies (ATs)

**accessibility tree** = information is structured in a tree of information

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- Mac OS X: NSAccessibility
- Linux: AT-SPI
- Android: Accessibility framework
- iOS: UIAccessibility

[WAI-ARIA specification](https://www.w3.org/TR/wai-aria/)

[MDN: WAI-ARIA basics](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics)