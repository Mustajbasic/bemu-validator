# Bemu Validator
Bemu Validator is a simple, easy customizable JavaScript object validator. It contains many ways of validating predefined and also custom defined objects in a configurable manner. The package has no dependencies making it small and portable. Every method has multiple tests, with 100% code coverage making it somewhat well tested.

# Setting up
To install the package simply do

  npm i --save bemu-validator

After installaton you can require or import it to your project as
```javascript
const bemuValidator = require('bemu-validator');
```
or
```javascript
import bemuValidator from 'bemu-validator';
```
Or you can require any individual validator via the destructuring assignment syntax

```javascript
// Require only the methods you need
const {
    isString,
    isNumber,
    isBoolean,
    isUrl,
    isEmail,
    isArray,
    objectValidator,
    stringValidator,
    numberValidator,
    booleanValidator,
    urlValidator,
    emailValidator,
    arrayValidator,
    customValidator
} = require('bemu-validator');

// Example with import

import {
    isString,
    isNumber
} from 'bemu-validator';
```
# Example usage
In this advanced example we are creating a composite object validator and checking if an object is valid. In this case we are testing if a if objects are valid Books.
```javascript
// Lets create a object validator to check if an object is a Book
const isBook = objectValidator({
    title: stringValidator(true, {
        minLength: 3,
        maxLength: 64,
        allowedCharacters: {
            allowLetters: true,
            allowNumbers: true,
            specialCharacters: [' ']
        }
    }),
    rating: numberValidator({
        min: 1,
        max: 5
    }),
    numberOfPages: numberValidator({
        min: 1,
        integer: true
    })
});

// This is a object which we want to test if it is really a valid book
const potentialBook = {
    title: 'A song of ice and fire',
    rating: 4.95,
    numberOfPages: 387
}

// To check if the object we recieved is a valid book we simply do
if(!isBook(potentialBook)) {
    console.log('The book we recieved is not valid!');
    
} else {
    console.log('The book we recieved is valid.'); // This will be logged
    
}
```
For additional examples and docs please refer to this [page](https://please.stand/by).
