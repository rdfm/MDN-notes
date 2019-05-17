# Adding and removing array items

see [How you add and remove array items?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays#Adding_and_removing_array_items)

## @ End of the array

**.push()** = add to the end

**.pop()** = remove from the end

## @ Beginning of the array

**.unshift()** = add to the beginning

**.shift()** = remove from the beginning

### EXERCISES:

```javascript
var myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];

myArray.push('Cardiff');
myArray;
myArray.push('Bradford', 'Brighton');
myArray;

var newLength = myArray.push('Bristol');
myArray;
newLength;

myArray.pop();

var removedItem = myArray.pop();
myArray;
removedItem;

myArray.unshift('Edinburgh');
myArray;

var removedItem = myArray.shift();
myArray;
removedItem;
```