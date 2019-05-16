# Updating a variable

see [How do you update a variable's value?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#Updating_a_variable)

- Once a variable has been initialized with a value, can change (or update) that value by giving it a different value.

```javacript
myName = 'Aya';
myAge = 4;
```

## An aside on variable naming rules

- Generally: Use Latin characters (0-9, a-z, A-Z) and underscore character.
- **DO NOT** use other characters because, may cause errors or may be hard to understand for an international audience
- **DO NOT** use underscores at the start of variable names
- **DO NOT** use numbers at the start of variables
- Safe convention:  "lower camel case"
  - stick together multiple words, using lower case for the whole first word and then capitalize subsequent words
- Make variable names intuitive, so they describe the data they contain
- **DO NOT** just use single letters/numbers, or big long phrases
- Variables are case sensitive
- **DO NOT** use JavaScript "reserved words" as variable names
  - [MDN: List of reserved keywords (to avoid)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)

**Good name examples**:

```javascript
age
myAge
init
initialColor
finalOutputValue
audio1
audio2
```

*Bad name examples*:

```javascript
1
a
_12
myage
MYAGE
var
Document
skjfndskjfnbdskjfb
thisisareallylongstupidvariablenameman
```

## Assignment operators

also see [Assignment operators](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math#Assignment_operators)

**+=** Addition assignment

**-=** Subtraction assignment

***=** Multiplication assignment

**/=** Division assignment