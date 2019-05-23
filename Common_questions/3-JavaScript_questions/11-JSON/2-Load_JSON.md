# Working with JSON

see [How can you load a JSON file into a page?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON#Active_learning_Working_through_a_JSON_example)

**[MDN EXAMPLE (JSON Data)](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json)**

## Obtaining the JSON

Use API: [XMLHttp​Request](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) (often called **XHR**)

- useful JavaScript object that allows us to make network requests to retrieve resources from a server via JavaScript (e.g. images, text, JSON, even HTML snippets), meaning that we can update small sections of content without having to reload the entire page

```javascript
var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
```

```javascript
var request = new XMLHttpRequest();
```

Refer to **[.open()](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open)** method

```javascript
request.open('GET', requestURL);
```

Refer to **[.response​Type](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType)**

```javascript
request.responseType = 'json';
request.send();
```

```javascript
request.onload = function() {
  var superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}
```

## Populating the header

```javascript
function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['squadName'];
  header.appendChild(myH1);

  var myPara = document.createElement('p');
  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  header.appendChild(myPara);
}
```

## Creating the hero information cards

```javascript
function showHeroes(jsonObj) {
  var heroes = jsonObj['members'];
      
  for (var i = 0; i < heroes.length; i++) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myList = document.createElement('ul');

    myH2.textContent = heroes[i].name;
    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    myPara2.textContent = 'Age: ' + heroes[i].age;
    myPara3.textContent = 'Superpowers:';
        
    var superPowers = heroes[i].powers;
    for (var j = 0; j < superPowers.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/heroes-finished.html)**

**[LIVE VERSION](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html)**

**[FILE: superheroes.json](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json)**
