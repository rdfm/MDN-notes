# Nesting if...else.md

see [How do nest one decision block inside another?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#Nesting_if_..._else)

- OK to put one if...else statement inside another (nest)
- Each if...else statement works completely independently of one another

**EXAMPLE**:

```javascript
if (choice === 'sunny') {
  if (temperature < 86) {
    para.textContent = 'It is ' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
  } else if (temperature >= 86) {
    para.textContent = 'It is ' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on.';
  }
}
```