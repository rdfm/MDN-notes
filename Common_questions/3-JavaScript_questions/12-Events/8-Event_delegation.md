# Event delegation

see [What is event delegation, and how does it work?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_delegation)

**event delegation** = concept relies on the fact that if want some code to run when clicked on any one of a large number of child elements, can set the event listener on their parent and have events that happen on them bubble up to their parent, rather than having to set the event listener on every child individually

EXAMPLE: series of list items — if you want each one of them to pop up a message when clicked, you can set the click event listener on the parent &lt;ul&gt;, and it will bubble to the list items

**READ**: [How JavaScript Event Delegation Works](https://davidwalsh.name/event-delegate)