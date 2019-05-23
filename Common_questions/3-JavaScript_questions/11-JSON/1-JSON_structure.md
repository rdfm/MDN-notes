# JSON structure

see [How do you structure JSON data, and read it from JavaScript?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON#JSON_structure)

**JSON** = JavaScript Object Notation

- **.json** extension OR MIME type of application/json
- standard text-based format for representing structured data based on JavaScript object syntax
- commonly used for transmitting data in web applications
- popularized by Douglas Crockford
- can be used independently from JavaScript, in environments with the ability to read (parse) and generate JSON
- exists as a string
- a string whose format resembles JavaScript object literal format
- can include same basic data types — strings, numbers, arrays, booleans, and other object literals
- needs to be converted to a native JavaScript object, when wnat to access data

*NOTE*:

- **parsing** = converting a string to a native object
- **stringification** = converting native object to a string

**EXAMPLE**:

```javascript
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
```

If parsed into a variable called *superHeroes*:

```javascript
superHeroes.homeTown
superHeroes['active']
```

```javascript
superHeroes['members'][1]['powers'][2]
```

**[EXAMPLE (CODE)](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/JSONTest.html)**

**[LIVE VESION](https://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html)**

## Arrays as JSON

**EXAMPLE**:

```javascript
[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": [
      "Radiation resistance",
      "Turning tiny",
      "Radiation blast"
    ]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
```

## Other notes

- JSON is purely a data format, it contains only properties, no methods.
- JSON requires double quotes to be used around strings and property names. Single quotes are not valid.
- Even a single misplaced comma or colon can cause a JSON file to go wrong, and not work. Validate via [JSONLint](https://jsonlint.com/)
- JSON can actually take the form of any data type that is valid for inclusion inside JSON, not just arrays or objects. Ex. a single string or number would be a valid JSON object.
- Unlike in JavaScript code in which object properties may be unquoted, in JSON, only quoted strings may be used as properties.