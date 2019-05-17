# Accessing and modifying array items

see [How do you access and modify the items in an array? (this includes multidimensional arrays)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays#Accessing_and_modifying_array_items)

- Access individual items in the array using bracket notation

**EXAMPLES**:

```javascript
var shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];

shopping[0];    // returns "bread"

shopping[0] = 'tahini';

shopping;   // shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]
```

*NOTE*: Array inside an array is called a **multidimensional array**

```javascript
var random = ['tree', 795, [0, 1, 2]];
random[2][2];   // 2
```
