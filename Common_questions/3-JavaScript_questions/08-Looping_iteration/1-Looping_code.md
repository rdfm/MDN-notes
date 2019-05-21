# Looping code

see [How do you run the same bit of code over and over again?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code)

- loop = doing the same thing over and over again
- programming terms = **iteration**

*Loop* has one or more:

- **counter**:
  - initialized with a certain value
  - starting point of the loop
- **exit condition**:
  - criteria under which the loop stops
  - usually counter reaching a certain value
- **iterator**:
  - generally increments the counter by a small amount on each successive loop
  - until it reaches the exit condition

*Pseudocode*:

```javascript
loop(food = 0; foodNeeded = 10) {
  if (food >= foodNeeded) {
    exit loop;
    // We have enough food; let's go home
  } else {
    food += 2; // Spend an hour collecting 2 more food
    // loop will then run again
  }
}
```