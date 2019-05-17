# Converting between strings and arrays

see [How do you split a string into array items, or join array items into a string?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays#Converting_between_strings_and_arrays)

## .split() method

- String method
- Takes raw data contained in a big long string, and separate the items out into an array
  - Takes a single parameter, the character to separate the string at
  - Returns the substrings between the separator as items in an array

## .join() method

- Array method
- Takes items in an array and joins them together into a big string
  - Takes a single parameter, separator, the character to add between items
  - Returns string

### EXERCISES:

```javascript
var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';

var myArray = myData.split(',');
myArray;

myArray.length;
myArray[0]; // the first item in the array
myArray[1]; // the second item in the array
myArray[myArray.length-1]; // the last item in the array

var myNewString = myArray.join(',');
myNewString;
```

*NOTE*: Another way of converting an array to a string is to use the **toString()** method (but limiting)

```javascript
var dogNames = ['Rocket','Flash','Bella','Slugger'];
dogNames.toString(); //Rocket,Flash,Bella,Slugger
```