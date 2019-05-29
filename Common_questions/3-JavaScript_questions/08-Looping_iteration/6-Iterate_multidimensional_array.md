# Iterate: Multidimensional Array

(MDN - No link): How to iterate over the elements in a multidimensional array

see (external resource): [Dynamic Web Coding - JavaScript Multidimenstional Arrays](https://www.dyn-web.com/javascript/arrays/multidimensional.php)

## JavaScript Multidimensional Arrays

EXAMPLE:

```javascript
var ar = [
    ['apple', 'orange', 'pear'],
    ['carrots', 'beans', 'peas'],
    ['cookies', 'cake', 'muffins', 'pie']
];
```

## How to Access Elements of a Multidimensional Array

```javascript
alert( ar[2][1] ); // cake
```

## Adding and Removing Elements in Multidimensional Arrays

EXAMPLE: Add by declaring

```javascript
ar[0][3] = 'banana';
console.log( ar[0] ); // ["apple", "orange", "pear", "banana"]
```

EXAMPLES: Add by .push()

```javascript
ar[1].push('kale', 'broccoli');
console.log( ar[1] ); // ["carrots", "beans", "peas", "kale", "broccoli"]
```

```javascript
ar.push( ['fried chicken', 'pot roast', 'rib-eye steak'] );
```

EXAMPLE: Remove last element (.pop)

```javascript
ar[2].pop(); // remove last element from 3rd sub-array
alert( ar[2] ); // cookies,cake,muffins
```

## Looping through Multidimensional Arrays

```javascript
// outer loop applies to outer array
for (var i=0, len=ar.length; i<len; i++) {
    // inner loop applies to sub-arrays
    for (var j=0, len2=ar[i].length; j<len2; j++) {
        // accesses each element of each sub-array in turn
        console.log( ar[i][j] );
    }
}
```