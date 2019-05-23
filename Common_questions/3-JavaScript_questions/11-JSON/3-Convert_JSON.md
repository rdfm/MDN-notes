# Converting between objects and text

see [How do you convert a JSON object to a text string, and back again?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON#Converting_between_objects_and_text)

XHR request to convert JSON repsponse directly into a JavaScript object:

```javascript
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
```

**Built-in JSON object methods**:

**parse()**: Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.

**stringify()**: Accepts an object as a parameter, and returns the equivalent JSON string form.

EXAMPLE (parse()):

```javascript
request.open('GET', requestURL);
request.responseType = 'text'; // now we're getting a string!
request.send();

request.onload = function() {
  var superHeroesText = request.response; // get the string from the response
  var superHeroes = JSON.parse(superHeroesText); // convert it to an object
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}
```

EXAMPLE (stringify()):

```javascript
var myJSON = { "name": "Chris", "age": "38" };
myJSON
var myString = JSON.stringify(myJSON);
myString
```