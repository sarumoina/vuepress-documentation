---
title: 'Liquid-template'
permalink: 'jekyll/liquid-template'
---

# Liquid Template

[[toc]]

Liquid uses a combination of objects, tags, and filters inside template files to display dynamic content.

## Displaying objects:

 ```javascript
 {{ page.title }}
```

## Control flow

### if

Executes a block of code only if a certain condition is true.

```
{% if product.title == "Awesome Shoes" %}
  These shoes are awesome!
{% endif %}
```
### unless 

The opposite of if – executes a block of code only if a certain condition is not met.

```
{% unless product.title == "Awesome Shoes" %}
  These shoes are not awesome.
{% endunless %}
```

### Elseif/Else

```
<!-- If customer.name = "anonymous" -->
{% if customer.name == "kevin" %}
  Hey Kevin!
{% elsif customer.name == "anonymous" %}
  Hey Anonymous!
{% else %}
  Hi Stranger!
{% endif %}
```

### case/when

```
{% assign handle = "cake" %}
{% case handle %}
  {% when "cake" %}
     This is a cake
  {% when "cookie", "biscuit" %}
     This is a cookie
  {% else %}
     This is not a cake nor a cookie
{% endcase %}
``` 

## Iteration

### for

```
{% for product in collection.products %}
  {{ product.title }}
{% endfor %}
```

### else in for

```
{% for product in collection.products %}
  {{ product.title }}
{% else %}
  The collection is empty.
{% endfor %}
```

### break

```
{% for i in (1..5) %}
  {% if i == 4 %}
    {% break %}
  {% else %}
    {{ i }}
  {% endif %}
{% endfor %}
```

### continue 

Causes the loop to skip the current iteration when it encounters the continue tag.

```
{% for i in (1..5) %}
  {% if i == 4 %}
    {% continue %}
  {% else %}
    {{ i }}
  {% endif %}
{% endfor %}
```

### for with limit 

Limits the loop to the specified number of iterations.

```
<!-- if array = [1,2,3,4,5,6] -->
{% for item in array limit:2 %}
  {{ item }}
{% endfor %}
{
// Output 1 2
```

### for with offset

 Begins the loop at the specified index.

```
<!-- if array = [1,2,3,4,5,6] -->
{% for item in array offset:2 %}
  {{ item }}
{% endfor %}

// Output 3 4 5 6
```

### range

Defines a range of numbers to loop through.

```
{% for i in (3..5) %}
  {{ i }}
{% endfor %}

{% assign num = 4 %}
{% assign range = (1..num) %}
{% for i in range %}
  {{ i }}
{% endfor %}

// Output 3 4 5 
// Output 1 2 3 4 
```

### reversed

Reverses the order of the loop.

```
<!-- if array = [1,2,3,4,5,6] -->
{% for item in array reversed %}
  {{ item }}
{% endfor %}

// Output 6 5 4 3 2 1 
```

### Cycle

Loops through a group of strings and prints them in the order that they were passed as arguments. Each time cycle is called, the next string argument is printed.

```
{% cycle "one", "two", "three" %}
{% cycle "one", "two", "three" %}
{% cycle "one", "two", "three" %}
{% cycle "one", "two", "three" %}

//output
one
two
three
one

```


### cycle with parameters

cycle accepts a “cycle group” parameter in cases where you need multiple cycle blocks in one template. If no name is supplied for the cycle group, then it is assumed that multiple calls with the same parameters are one group.

```
{% cycle "first": "one", "two", "three" %}
{% cycle "second": "one", "two", "three" %}
{% cycle "second": "one", "two", "three" %}
{% cycle "first": "one", "two", "three" %}

//output
one
one
two
two

```


### tablerow



```
<table>
{% tablerow product in collection.products %}
  {{ product.title }}
{% endtablerow %}
</table>

//output
<table>
  <tr class="row1">
    <td class="col1">
      Cool Shirt
    </td>
    <td class="col2">
      Alien Poster
    </td>
    <td class="col3">
      Batman Poster
    </td>
    <td class="col4">
      Bullseye Shirt
    </td>
    <td class="col5">
      Another Classic Vinyl
    </td>
    <td class="col6">
      Awesome Jeans
    </td>
  </tr>
</table>
```


### tablerow with cols

```
{% tablerow product in collection.products cols:2 %}
  {{ product.title }}
{% endtablerow %}

//output
<table>
  <tr class="row1">
    <td class="col1">
      Cool Shirt
    </td>
    <td class="col2">
      Alien Poster
    </td>
  </tr>
  <tr class="row2">
    <td class="col1">
      Batman Poster
    </td>
    <td class="col2">
      Bullseye Shirt
    </td>
  </tr>
  <tr class="row3">
    <td class="col1">
      Another Classic Vinyl
    </td>
    <td class="col2">
      Awesome Jeans
    </td>
  </tr>
</table>
```



### tablerow with limit

Exits the tablerow loop after a specific index.

```
{% tablerow product in collection.products cols:2 limit:3 %}
  {{ product.title }}
{% endtablerow %}
```



### tablerow with offset

Starts the tablerow loop after a specific index.

```
{% raw %}
{% tablerow product in collection.products cols:2 offset:3 %}
  {{ product.title }}
{% endtablerow %}
{% endraw %}
```


### tablerow with range

Defines a range of numbers to loop through. The range can be defined by both literal and variable numbers.

```
<!--variable number example-->

{% assign num = 4 %}
<table>
{% tablerow i in (1..num) %}
  {{ i }}
{% endtablerow %}
</table>

<!--literal number example-->

<table>
{% tablerow i in (3..5) %}
  {{ i }}
{% endtablerow %}
</table>
```


