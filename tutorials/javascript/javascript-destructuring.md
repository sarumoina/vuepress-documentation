---
title: 'Javascript Destructuring'
---

# Javascript destructuring

[[toc]]

Destrucring of the Javascript array or objects can be very handy at different times. It has the potential to make even the complex scenarios into a much more elegant and readable format. You should give it a try if you haven't already. 

Let's take the following example.

```Javascript
const personOne = {
  name: "Kelly",
  age: 32,
  address: {
    city: "ohio",
    country: "USA"
  }
};

const personTwo = {
  name: "Chandler",
  age: 28,
  address: {
    city: "london",
    country: "united kingdom"
  }
};
```

Here we have two objects with their properties which also includes nested ones ('address').
Now let's desrtucture this object. 

```Javascript
const { name: firstName, address: { city:home} } = personTwo;

/* Above we have done multiple things.
1. The entities between the '{}' will become variables. 
2. by assigining `name:firstName`, we are now pointing to the same variable via 
    firstName. 
3. Since `address` was a nested objected, we first destructure it via 
`address: { city: home }` and then use it in the outmost destructuring. 
*/
console.log(home) //Outputs home


```