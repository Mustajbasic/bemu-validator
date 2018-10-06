# Documentation for Bemu Validator

## Table of contents

* [isString](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#isstringobject--config)
* [isNumber](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#isnumberobject--config)
* [isBoolean](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#isbooleanobject)
* [isUrl](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#isurlobject--config)
* [isEmail](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#isemailobject--config)
* [isArray](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#isarrayobject--config)
* [bundleWithConfig](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#bundlewithconfigvalidator-config)
* [stringValidator](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#stringvalidatorisrequired--config)
* [numberValidator](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#numbervalidatorisrequired--config)
* [booleanValidator](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#booleanvalidatorisrequired--config)
* [urlValidator](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#urlvalidatorisrequired--config)
* [emailValidator](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#emailvalidatorisrequired--config)
* [arrayValidator](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#arrayvalidatorisrequired--config)
* [customValidator](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#customvalidatorisrequired-isvalid--config)
* [objectValidator](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.mdhttps://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#objectvalidatorpropertiesproperties)

## isString(object [, config])

This method check if the given object is a valid string and checks if it satisfies given config fields

### Config fields

<table>

<thead>

<tr>

<th>Property</th>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>minLength</td>

<td>number</td>

<td>Checks if the string is longer than the given number.</td>

</tr>

<tr>

<td>maxLength</td>

<td>number</td>

<td>Checks if the string is shorter than the given number.</td>

</tr>

<tr>

<td>reduceSpaces</td>

<td>boolean</td>

<td>Trims the string and reduces multiple space to only one before checking for minLength and maxLength.</td>

</tr>

<tr>

<td>alphaOnly</td>

<td>boolean</td>

<td>Checks if the string is letters only.</td>

</tr>

<tr>

<td>alphanumericOnly</td>

<td>boolean</td>

<td>Checks if the string is letters and numbers only.</td>

</tr>

<tr>

<td>allowedCharacters</td>

<td>object</td>

<td>Object containing the definitions for allowedCharacters.</td>

</tr>

<tr>

<td>allowedCharacters.allowLetters</td>

<td>boolean</td>

<td>If true, letters will be allowed in string. Required in allowedCharacters.</td>

</tr>

<tr>

<td>allowedCharacters.allowNumbers</td>

<td>boolean</td>

<td>If true, numbers will be allowed in string. Required in allowedCharacters.</td>

</tr>

<tr>

<td>allowedCharacters.specialCharacters</td>

<td>array</td>

<td>characters from array will be allowed in the string. NOTE: The array can only contain strings of length 1(single character). Required in allowedCharacters.</td>

</tr>

</tbody>

</table>

### Example usage

```javascript
const config1 = {
    minLength: 3,
    maxLength: 16,
    alphanumericOnly: true,
};

isString('test123', config1); // true
isString('test-123', config1); // false

const config2 = {
    minLength: 3,
    maxLength: 16,
    allowedCharacters: {
        allowLetters: false,
        allowNumbers: true,
        specialCharacters: ['+', '-', '*', '/', '=']
    },
};

isString('21', config2); // true
isString('21 pilots', config2); // false
isString('1+1=2', config2); // true
```

[Back to Top](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#table-of-contents)

## isNumber(object [, config])

This method check if the given object is a valid number and checks if it satisfies given config fields

### Config fields

<table>

<thead>

<tr>

<th>Property</th>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>min</td>

<td>number</td>

<td>Checks if the number is bigger than the given number.</td>

</tr>

<tr>

<td>max</td>

<td>number</td>

<td>Checks if the number is smaller than the given number.</td>

</tr>

<tr>

<td>integer</td>

<td>boolean</td>

<td>Checks if the number is an integer.</td>

</tr>

</tbody>

</table>

### Example usage

```javascript
isNumber(3, {
    min:1, max: 100
}); // true

isNumber(-3, {
    min:1, max: 100
}); // false

isNumber(Math.PI, {
    integer: true
}); // false
``` 

[Back to Top](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#table-of-contents)

## isBoolean(object)

This method check if the given object is a valid boolean

### Example usage

```javascript
isBoolean(true); // true

isBoolean('YES'); // false
```

[Back to Top](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#table-of-contents)

## isUrl(object [, config])

This method check if the given object is a valid url and checks if it satisfies given config fields

NOTE: This method may have give some false positives, if you find any please report them at the [GitHub repo](https://github.com/Mustajbasic/bemu-validator/issues) so I can investigate them and fix them asap.

### Config fields

<table>

<thead>

<tr>

<th>Property</th>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>httpsOnly</td>

<td>boolean</td>

<td>Allows only https urls</td>

</tr>

</tbody>

</table>

### Example usage

```javascript
isUrl('http://mustajbasic.com'); // true

isUrl('MY WEBSITE'); // false

isUrl(false); // false

isUrl('http://mustajbasic.com', {
    httpsOnly: true
}); // false

isUrl('https://mustajbasic.github.io', {
    httpsOnly: true
}); // true
```

[Back to Top](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#table-of-contents)

## isEmail(object [, config])

This method check if the given object is a valid email and checks if it satisfies given config fields

### Config fields

<table>

<thead>

<tr>

<th>Property</th>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>minNameLength</td>

<td>number</td>

<td>Defines the minimum length of the email name (everything before @, not really sure what is the propper name for this)</td>

</tr>

<tr>

<td>maxNameLength</td>

<td>number</td>

<td>Defines the maximum length of the email name (everything before @, not really sure what is the propper name for this)</td>

</tr>

<tr>

<td>domains</td>

<td>array</td>

<td>Defines the allowed domains, eg. ['gmail.com', 'yahoo.com']</td>

</tr>

<tr>

<td>domainNames</td>

<td>array</td>

<td>Defines the allowed domain names but does not care about extension, eg. ['gmail', 'yahoo']</td>

</tr>

<tr>

<td>domainExtensions</td>

<td>array</td>

<td>Defines the allowed domain extensions but does not care about names, eg. ['com', 'io']</td>

</tr>

</tbody>

</table>

NOTE: Some email domains like 'email.co.uk' may be problematic to use with domainNames and domainExtensions so please for that matter use domains while I work on the fix

### Example usage

```javascript
isEmail('belmin.mustajbasic@gmail.com'); // true

isEmail('belmin.mustajbasic'); // false

isEmail('belmin.mustajbasic@gmail.com', {
    domains: ['yahoo.com']
}); // false

isEmail('belmin.mustajbasic@gmail.com', {
    minNameLength: 32
}); // false

isEmail('belmin.mustajbasic@gmail.com', {
    maxNameLength: 32
}); // true
```

[Back to Top](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#table-of-contents)

## isArray(object [, config])

This method check if the given object is a valid array and checks if it satisfies given config fields

### Config fields

<table>

<thead>

<tr>

<th>Property</th>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>minLength</td>

<td>number</td>

<td>Defines the minimum amount of elements that the array has to have.</td>

</tr>

<tr>

<td>maxLength</td>

<td>number</td>

<td>Defines the maximum amount of elements that the array can have.</td>

</tr>

<tr>

<td>elementType</td>

<td>function</td>

<td>Function that every element of the array is tested against. The prototype of the function is (object) => boolean. For this you can use any of the built in validation functions like 'isString', 'isNumber' ..., but if you want to add config to the function you have to bundle it with [bundleWithConfig](#bundleWithConfig) function.</td>

</tr>

</tbody>

</table>

### Example usage

```javascript
isArray([]); // true

isArray('not an array'); // false

isArray(['one', 'two', 'three'], {
    minLength: 1,
    elementType: isString
}); // true

const numberLargerThan5 = bundleWithConfig(isNumber, {min:5})

isArray([1, 5, 10], {
    elementType: numberLargerThan5
}); // false
```

[Back to Top](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#table-of-contents)

## bundleWithConfig(validator, config)

This method bundles the validation function with config fo enable easy custom validation functions. Also this method is used for passing config to to the 'elementType' config property of isArray method.

### Example usage

```javascript
const config = {
    minLength: 3,
    maxLength: 16,
    alphanumericOnly: true,
};

const isMyCustomString = bundleWithConfig(isString, config);

isMyCustomString('test123'); // true
isMyCustomString('test 123'); // false
isMyCustomString('hi'); // false
isMyCustomString('alsoHiButOver16Characters'); // false

const numberLargerThan5 = bundleWithConfig(isNumber, {min:5})

isArray([1, 5, 10], {
    elementType: numberLargerThan5
}); // false
```

[Back to Top](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#table-of-contents)


## stringValidator(isRequired [, config])

Creates a string validator object which is used in [objectValidator](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#objectvalidatorproperties)

The 'isRequired' argument is a boolean and indicates if the field is required. The config object is the same as the from isString method

### Example usage

The example uage is provided in the [Example usage](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#example-usage-14) of objectValidator

[Back to Top](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#table-of-contents)

## numberValidator(isRequired [, config])

Creates a number validator object which is used in [objectValidator](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#objectvalidatorproperties)

The 'isRequired' argument is a boolean and indicates if the field is required. The config object is the same as the from isNumber method

### Example usage

The example uage is provided in the [Example usage](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#example-usage-14) of objectValidator

[Back to Top](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#table-of-contents)

## booleanValidator(isRequired [, config])

Creates a boolean validator object which is used in [objectValidator](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#objectvalidatorproperties)

The 'isRequired' argument is a boolean and indicates if the field is required. The config object is the same as the from isBoolean method

### Example usage

The example uage is provided in the [Example usage](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#example-usage-14) of objectValidator


[Back to Top](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#table-of-contents)





## urlValidator(isRequired [, config])

Creates a url validator object which is used in [objectValidator](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#objectvalidatorproperties)


The 'isRequired' argument is a boolean and indicates if the field is required. The config object is the same as the from isUrl method

### Example usage

The example uage is provided in the [Example usage](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#example-usage-14) of objectValidator

[Back to Top](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#table-of-contents)





## emailValidator(isRequired [, config])

Creates a email validator object which is used in [objectValidator](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#objectvalidatorproperties)

The 'isRequired' argument is a boolean and indicates if the field is required. The config object is the same as the from isEmail method

### Example usage

The example uage is provided in the [Example usage](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#example-usage-14) of objectValidator

[Back to Top](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#table-of-contents)





## arrayValidator(isRequired [, config])

Creates a array validator object which is used in [objectValidator](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#objectvalidatorproperties)

The 'isRequired' argument is a boolean and indicates if the field is required. The config object is the same as the from isArray method

### Example usage

The example uage is provided in the [Example usage](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#example-usage-14) of objectValidator

[Back to Top](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#table-of-contents)

## customValidator(isRequired, isValid [, config])

The 'isRequired' argument is a boolean and indicates if the field is required.

In case you need a custom validator, create a function that takes one object (and config if you desire), and returns true or false. Pass the function as the 'isValid' argument and add any aditional config.

### Example usage

The example uage is provided in the [Example usage](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#example-usage-14) of objectValidator

[Back to Top](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#table-of-contents)

## objectValidator(properties)

This method allows you to crreate a validation function for any kind of object. The 'properties' argument is an object which is a reflection of the object we want to test. This means that propery names of the object are the same as in the object we want to test but the values are validators (stringValidator, numberValidator, booleanValidator, urlValidator, emailValidator, arrayValidator and customValidator).

### Example usage

In this first example we create an object validator and test an object against it.

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

If a fied is not required we simply set the isRequired flag to false as seen in this simple example

```javascript
const isPerson = objectValidator({
    firstName: stringValidator(true),
    lastName: stringValidator(true),
    age: numberValidator(false, {
        min: 1,
        integer: true
    }) // This field is not required
});

const John = {
    firstName: 'John',
    lastName: 'Doe',
};

console.log(isPerson(John)); // True even if we don't pass the full_name property
```

We can create more complex validators like in the following example. Lets combine isBook and isPerson from the last two examples.

```javascript
const isLibrary = objectValidator({
    owner: customValidator(true, isPerson),
    books: arrayValidator(true, {
        elementType: isBook,
        minLength: 1
    })
});

const Book1 = {
    title: 'A song of ice and fire',
    rating: 4.95,
    numberOfPages: 387
}

const Book2 = {
    title: 'The Woman in the Window ',
    rating: 3.98,
    numberOfPages: 102
}

const Library = {
    owner:{
        firstName: 'John',
        lastName: 'Doe',
    },
    books: [
        Book1, Book2
    ]
}

const LibraryInvalidBooks = {
    owner:{
        firstName: 'John',
        lastName: 'Doe',
    },
    books: [
        1,2,3
    ]
}

console.log(isLibrary(Library)); // true
console.log(isLibrary(LibraryInvalidBooks)); // false
```

[Back to Top](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#table-of-contents)
