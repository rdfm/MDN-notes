# What mechanism should I use?Section

see [Which mechanism should I use to add event code to my web pages?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#What_mechanism_should_I_use)

**WARNING**: DO NOT USE Inline/HTML event handler attributes (outdated and bad practice)

Interchangeable:

1. Event handler properties (.onclick)

2. DOM Level 2 Events (addEventListener(), etc.)

**RECOMMENDED**: DOM Level 2 Events (addEventListener(), removeEventListener(), etc.)

*NOTE*: For DOM Level 2 Events, can add multiple listeners of the same type to elements if required