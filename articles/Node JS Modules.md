---

title:   'Understanding Node JS Modules'

metaTitle:   'Understanding Node JS Modules'

metaDesc:   'Understanding Node JS Modules'

socialImage:   images/coke.jpg

date:   '2022-08-07'

tags:

 -   nodejs

 -   modules
---

# Node JS Modules Simplified

## What is a module ?

A module is an encapsulated piece of code that provides functionallity to an application. For example let's say you are building an application that needs to display the time in different timezones depending on what country your application is being used. Well you could use an external module like momentjs. MomentJS is an External module or Third Party Module that you can import into your application.

## Different Types of module.

* Core Modules
* local Modules
* Third-party Modules

### Core Modules

  Core modules are built into Node JS , you can find a list of them at the Node JS API Documentaion [https://nodejs.org/api/]. 
  Some examples of core modules you must know would be [HTTP] (https://nodejs.org/api/http.html) & [File System] (https://nodejs.org/api/fs.html)
  
### Local Modules
  
  Local modules are utilities that you write and keep it local in your project to use across your application.
  
### Third-Party-Module
  These are the modules created by other developers that you can download from NPM (Node Package Manager) Registry. 
  Some examples would be React, angular, vue, express etc. 
  
  
## The Module System 

Node JS has two ways to import and export modules. Originally when node js was launched the module system followed the Common JS Syntax for importing and exporting modules. It uses the `require()` method.

### CommonJS
The Module System built into Node JS is also known as the CommonJS 
To export and import a single function from a module we can use the following syntax.
## Single Import/export
let's create a simple module called `math.js`
```bash
npm init -y
touch math.js index.js
```

```javascript
// math.js
const sum = (a,b)=> {
    return a + b
}

module.exports = sum

```


 ```javascript
//index.js
const sum = require('./math.js')

const total = sum(1,2)

console.log(total)
```

## Multiple Import/export


```javascript
const sum = (a,b) => {
    return a + b
}
const mult = (a,b) => {
    return a * b
}

module.exports = { sum, mult }
```

```javascript
({sum,mult})= require('./math.js')

const total = sum(1,2)
const product = mult(2,2)

console.log(`Total ${total}`)
console.log(`Product ${product}`)

```