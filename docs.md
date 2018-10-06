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
* [objectValidator](https://github.com/Mustajbasic/bemu-validator/blob/master/docs.md#objectvalidatorproperties)





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
Insert here




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

Insert example 




## isBoolean(object)

This method check if the given object is a valid boolean

### Example usage

Insert example



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
Insert example




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







## bundleWithConfig(validator, config)

This method bundles the validation function with config fo enable easy custom validation functions. Also this method is used for passing config to to the 'elementType' config property of [isArray](#isArray) method.

### Example usage








## stringValidator(isRequired [, config])

Creates a string validator object which is used in [objectValidator](#objectValidator)

The 'isRequired' argument is a boolean and indicates if the field is required. The config object is the same as the from [isString](#isString) method

### Example usage

The example uage is provided in the [Example usage](#objectValidatorExample) of objectValidator








## numberValidator(isRequired [, config])

Creates a number validator object which is used in [objectValidator](#objectValidator)

The 'isRequired' argument is a boolean and indicates if the field is required. The config object is the same as the from [isNumber](#isNumber) method

### Example usage

The example uage is provided in the [Example usage](#objectValidatorExample) of objectValidator







## booleanValidator(isRequired [, config])

Creates a boolean validator object which is used in [objectValidator](#objectValidator)

The 'isRequired' argument is a boolean and indicates if the field is required. The config object is the same as the from [isBoolean](#isBoolean) method

### Example usage

The example uage is provided in the [Example usage](#objectValidatorExample) of objectValidator








## urlValidator(isRequired [, config])

Creates a url validator object which is used in [objectValidator](#objectValidator)


The 'isRequired' argument is a boolean and indicates if the field is required. The config object is the same as the from [isUrl](#isUrl) method

### Example usage

The example uage is provided in the [Example usage](#objectValidatorExample) of objectValidator







## emailValidator(isRequired [, config])

Creates a email validator object which is used in [objectValidator](#objectValidator)

The 'isRequired' argument is a boolean and indicates if the field is required. The config object is the same as the from [isEmail](#isEmail) method

### Example usage

The example uage is provided in the [Example usage](#objectValidatorExample) of objectValidator







## arrayValidator(isRequired [, config])

Creates a array validator object which is used in [objectValidator](#objectValidator)

The 'isRequired' argument is a boolean and indicates if the field is required. The config object is the same as the from [isArray](#isArray) method

### Example usage

The example uage is provided in the [Example usage](#objectValidatorExample) of objectValidator








## customValidator(isRequired, isValid [, config])

The 'isRequired' argument is a boolean and indicates if the field is required.

In case you need a custom validator, create a function that takes one object (and config if you desire), and returns true or false. Pass the function as the 'isValid' argument and add any aditional config.

### Example usage

The example uage is provided in the [Example usage](#objectValidatorExample) of objectValidator








## objectValidator(properties)

This method allows you to crreate a validation function for any kind of object. The 'properties' argument is an object which is a reflection of the object we want to test. This means that propery names of the object are the same as in the object we want to test but the values are validators (stringValidator, numberValidator, booleanValidator, urlValidator, emailValidator, arrayValidator and customValidator).

### Example usage

In this first example we create an object validator and test an object against it.


If a fied is not required we simply set the isRequired flag to false as seen in this simple example



We can create more complex validators like in the following example. Lets combine isBook and isPerson from the last two examples.



