# Numbers vs. strings

see [Can you join strings and numbers together?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings#Numbers_vs._strings)

**EXAMPLE**: Browser converts number to string, then concatenates

```javascript
'Front ' + 242;
// 'Front 242'
```

**EXAMPLE**:

```javascript
var myDate = '19' + '67';
typeof myDate;  // string
myDate; // '1967'
```

**EXAMPLE**: Numeric value convert to string, use Number() object

```javascript
var myString = '123';
var myNum = Number(myString);
typeof myNum;   // number
myNum; // 123
```

**EXAMPLE**: String ()convert to numeric value, use number method, toString()

```javascript
var myNum = 123;
var myString = myNum.toString();
typeof myString;    // string
myString; '123'
``` 