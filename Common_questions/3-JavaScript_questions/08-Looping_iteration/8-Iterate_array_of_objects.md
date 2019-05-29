# Iterate: Array of objects

(MDN - No link): How to iterate over the members of an object nested inside an array

see (external source): [Reactgo -How to loop through array of objects in JavaScript(es6)](https://reactgo.com/javascript-loop-through-array-of-objects/)

## Option 1: **forEach** Method

```javascript
let users = [
   {
     id:1,
     name:"king"
   },
   {
     id:2,
     name:"john"
   },
  {
    id:3,
    name:"gowtham"
  }
]

users.forEach((user)=>console.log(user.id,user.name));

// first iteration 1,"king"
// second iteration 2,"john"
// third iteration 3,"gowtham"
```

**NOTE**: forEach methods takes the callback function as an argument and runs on each object present in the array

## Option 2: **for...of** Loop

```javascript
let users = [
   {
     id:1,
     name:"king"
   },
   {
     id:2,
     name:"john"
   },
  {
    id:3,
    name:"gowtham"
  }

]


for(let user of users){
  console.log(user.id,user.name)
}
```