---
title: 'Arrow Functions'
---

# Arrow Functions

[[toc]]

I have always found arrow functions are a bit hard to follow as I was comfortable in following the old syntax of writing a function. Here is a blog in order to remedy it.

## Old Syntax

```js
// Old syntax
function functionName(param1, param2....){
    return param1+param2+.....
}

```

## Arrow Syntax

I have always found arrow functions are a bit hard to follow as I was comfortable in following the old syntax of writing a function. Here is a blog in order to remedy it.

```js
// Old syntax
function functionName(param1, param2....){
    return param1+param2+.....
}

//Arrow syntax
var functionName = (param1, param2, ....) => return param1+param2+.....
```

If you'll look carefully, you'll realize that,

```js
(parameters) => { statements }
```

## Different ways of writing arrow functions

There are different ways of writing the arrow functions. e.g. 

```JS
parameters => expression
```
There are also basic and advanced syntaxes:
```js
// Basic syntaxes
(param1, param2, …, paramN) => { statements } 
(param1, param2, …, paramN) => expression
// equivalent to: => { return expression; }

// Parentheses are optional when there's only one parameter name:
(singleParam) => { statements }
singleParam => { statements }

// The parameter list for a function with no parameters should be written with a pair of parentheses.
() => { statements }
```

And:
```js
// Advanced syntaxes
// Parenthesize the body of a function to return an object literal expression:
params => ({foo: bar})

// Rest parameters and default parameters are supported
(param1, param2, ...rest) => { statements }
(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { 
statements }

// Destructuring within the parameter list is also supported
var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f(); // 6
```

## From Mozilla MDN

[**From mozilla MDN**][1]

```js
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]

```

**Basic Syntax:**
```js
(param1, param2, …, paramN) => { statements } 
(param1, param2, …, paramN) => expression
// equivalent to: => { return expression; }

// Parentheses are optional when there's only one parameter name:
(singleParam) => { statements }
singleParam => { statements }

// The parameter list for a function with no parameters should be written with a pair of parentheses.
() => { statements }
```

<br />

## Destructuring in arrow functions

:::tip TIP

For destructuring tutorial, [click here](./javascript-destructuring.md)

:::

**Advanced Syntax:**
```js
// Parenthesize the body of a function to return an object literal expression:
params => ({foo: bar})

// Rest parameters and default parameters are supported
(param1, param2, ...rest) => { statements }
(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { 
statements }

// Destructuring within the parameter list is also supported
var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f(); // 6
```

**There is also another advantage of using arrow functions** 

```js
var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

// This statement returns the array: [8, 6, 7, 9]
elements.map(function(element) {
  return element.length;
});

// The regular function above can be written as the arrow function below
elements.map((element) => {
  return element.length;
}); // [8, 6, 7, 9]

// When there is only one parameter, we can remove the surrounding parentheses
elements.map(element => {
  return element.length;
}); // [8, 6, 7, 9]

// When the only statement in an arrow function is `return`, we can remove `return` and remove
// the surrounding curly brackets
elements.map(element => element.length); // [8, 6, 7, 9]

// In this case, because we only need the length property, we can use destructuring parameter:
// Notice that the `length` corresponds to the property we want to get whereas the
// obviously non-special `lengthFooBArX` is just the name of a variable which can be changed
// to any valid variable name you want
elements.map(({ length: lengthFooBArX }) => lengthFooBArX); // [8, 6, 7, 9]

// This destructuring parameter assignment can also be written as seen below. However, note that in
// this example we are not assigning `length` value to the made up property. Instead, the literal name
// itself of the variable `length` is used as the property we want to retrieve from the object.
elements.map(({ length }) => length); // [8, 6, 7, 9] 
```


[1]: https://developer.mozilla.org/en-US/docs/Web/js/Reference/Functions/Arrow_functions