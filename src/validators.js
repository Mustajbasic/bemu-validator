const {
    TYPES,
    ISSTRING_KEYS,
    ISNUMBER_KEYS,
    ISEMAIL_KEYS,
    ISARRAY_KEYS,
    REGEX,
    VALIDATOR_TYPES,
} = require('./constants');


const isString = (object, config = {}) => {
    const KEYS = ISSTRING_KEYS;

    if (typeof object !== TYPES.STRING) {
        return false;
    }

    if (config.constructor !== Object) {
        throw new TypeError('isString -> config is not an object');
    }

    if (config[KEYS.REDUCE_SPACES]) {
        object = object.trim().split(' ').filter((el) => el.length).join(' ');
    }

    for (let key in config) {
        switch (key) {
        case KEYS.MIN_LENGTH:
            if (typeof config[KEYS.MIN_LENGTH] !== TYPES.NUMBER) {
                throw new TypeError(`isString -> config -> ${key} is not a valid number`);
            }
            if (object.length < config[KEYS.MIN_LENGTH]) {
                return false;
            }
            break;
        case KEYS.MAX_LENGTH:
            if (typeof config[KEYS.MAX_LENGTH] !== TYPES.NUMBER) {
                throw new TypeError(`isString -> config -> ${key} is not a valid number`);
            }
            if (object.length > config[KEYS.MAX_LENGTH]) {
                return false;
            }
            break;
        case KEYS.ALPHA_ONLY:
            if (typeof config[KEYS.ALPHA_ONLY] !== TYPES.BOOLEAN) {
                throw new TypeError(`isString -> config -> ${key} is not a valid boolean`);
            }
            if (config[KEYS.ALPHA_ONLY] === true && !REGEX.ALPHA.test(object)) {
                return false;
            }
            break;
        case KEYS.ALPHANUMERIC_ONLY:
            if (typeof config[KEYS.ALPHANUMERIC_ONLY] !== TYPES.BOOLEAN) {
                throw new TypeError(`isString -> config -> ${key} is not a valid boolean`);
            }
            if (config[KEYS.ALPHANUMERIC_ONLY] === true && !REGEX.ALPHANUMERIC.test(object)) {
                return false;
            }
            break;
        case KEYS.ALLOWED_CHARACTERS:
            if (config[KEYS.ALLOWED_CHARACTERS].constructor !== Object) {
                throw new TypeError('isString -> config -> allowedCharacters is not an object');
            }
            const customRegex = buildRegex(
                config[KEYS.ALLOWED_CHARACTERS][KEYS.ALLOW_LETTERS],
                config[KEYS.ALLOWED_CHARACTERS][KEYS.ALLOW_NUMBERS],
                config[KEYS.ALLOWED_CHARACTERS][KEYS.SPECIAL_CHARACTERS]);
            if (!customRegex.test(object)) {
                return false;
            }
            break;
        default:
            throw new TypeError(`isString -> config -> ${key} is not a valid key of config`);
        }
    }
    return true;
};

const isNumber = (object, config = {}) => {
    const KEYS = ISNUMBER_KEYS;
    if (typeof object !== TYPES.NUMBER) {
        return false;
    }
    if (config.constructor !== Object) {
        throw new TypeError('isNumber -> config is not an object');
    }
    for (let key in config) {
        switch (key) {
        case KEYS.MIN:
            if (typeof config[KEYS.MIN] !== TYPES.NUMBER) {
                throw new TypeError(`inNumber -> config -> ${key} is not a valid number`);
            }
            if (object < config[KEYS.MIN]) {
                return false;
            }
            break;
        case KEYS.MAX:
            if (typeof config[KEYS.MAX] !== TYPES.NUMBER) {
                throw new TypeError(`inNumber -> config -> ${key} is not a valid number`);
            }
            if (object > config[KEYS.MAX]) {
                return false;
            }
            break;
        case KEYS.INTEGER:
            if (typeof config[KEYS.INTEGER] !== TYPES.BOOLEAN) {
                throw new TypeError(`inNumber -> config -> ${key} is not a valid boolean`);
            }
            if (config[KEYS.INTEGER] === true && !Number.isInteger(object)) {
                return false;
            }
            break;
        default:
            throw new TypeError(`inNumber -> config -> ${key} is not a valid key of config`);
        }
    }
    return true;
};

const isBoolean = (object) => {
    return typeof object === TYPES.BOOLEAN;
};

const isUrl = (object, config = {}) => {
    if (config.constructor !== Object) {
        throw new TypeError('isUrl -> config is not an object');
    }
    if (typeof config.httpsOnly === TYPES.UNDEFINED) {
        config.httpsOnly = false;
    }
    if (typeof config.httpsOnly !== TYPES.BOOLEAN) {
        throw new TypeError('isUrl -> httpsOnly is not a valid boolean');
    }

    if (typeof object !== TYPES.STRING) {
        return false;
    }

    return ((config.httpsOnly && REGEX.URL_HTTPS.test(object)) || (!config.httpsOnly && REGEX.URL.test(object)));
};

const isEmail = (object, config = {}) => {
    const KEYS = ISEMAIL_KEYS;

    if (typeof object !== TYPES.STRING) {
        return false;
    }

    if (config.constructor !== Object) {
        throw new TypeError('isEmail -> config is not an object');
    }

    if (!REGEX.HAS_AT.test(object)) {
        return false;
    }

    const name = object.split('@')[0];
    const domain = object.split('@')[1];
    if (!REGEX.PRE_AT.test(name)) {
        return false;
    }
    if (!REGEX.AFTER_AT.test(domain)) {
        return false;
    }
    const domainSplitAtDot = domain.split('.');
    for (let key in config) {
        switch (key) {
        case KEYS.MIN_NAME_LENGTH:
            if (typeof config[KEYS.MIN_NAME_LENGTH] !== TYPES.NUMBER) {
                throw new TypeError(`isEmail -> config -> ${key} is not a valid number`);
            }
            if (name.length < config[KEYS.MIN_NAME_LENGTH]) {
                return false;
            }
            break;
        case KEYS.MAX_NAME_LENGTH:
            if (typeof config[KEYS.MAX_NAME_LENGTH] !== TYPES.NUMBER) {
                throw new TypeError(`isEmail -> config -> ${key} is not a valid number`);
            }
            if (name.length > config[KEYS.MAX_NAME_LENGTH]) {
                return false;
            }
            break;
        case KEYS.DOMAINS:
            if (config[KEYS.DOMAINS].constructor !== Array) {
                throw new TypeError(`isEmail -> config -> ${key} is not an array`);
            }
            if (config[KEYS.DOMAINS].indexOf(domain) < 0) {
                return false;
            }
            break;
        case KEYS.DOMAIN_NAMES:
            if (config[KEYS.DOMAIN_NAMES].constructor !== Array) {
                throw new TypeError(`isEmail -> config -> ${key} is not an array`);
            }

            const domainNameArray = [...domainSplitAtDot];
            domainNameArray.length = domainNameArray.length - 1;
            const domainName = domainNameArray.join('.');
            if (config[KEYS.DOMAIN_NAMES].indexOf(domainName) < 0) {
                return false;
            }
            break;
        case KEYS.DOMAIN_EXTENSIONS:
            if (config[KEYS.DOMAIN_EXTENSIONS].constructor !== Array) {
                throw new TypeError(`isEmail -> config -> ${key} is not an array`);
            }

            const domainExtension = domainSplitAtDot[domainSplitAtDot.length - 1];
            if (config[KEYS.DOMAIN_EXTENSIONS].indexOf(domainExtension) < 0) {
                return false;
            }
            break;
        default:
            throw new TypeError(`isEmail -> config -> ${key} is not a valid key of config`);
        }
    }
    return true;
};

const isArray = (object, config = {}) => {
    const KEYS = ISARRAY_KEYS;
    if (object.constructor !== Array) {
        return false;
    }

    if (config.constructor !== Object) {
        throw new TypeError('isArray -> config is not an object');
    }

    for (let key in config) {
        switch (key) {
        case KEYS.MIN_LENGTH:
            if (typeof config[KEYS.MIN_LENGTH] !== TYPES.NUMBER) {
                throw new TypeError(`isArray -> config -> ${key} is not a valid number`);
            }
            if (object.length < config[KEYS.MIN_LENGTH]) {
                return false;
            }
            break;
        case KEYS.MAX_LENGTH:
            if (typeof config[KEYS.MAX_LENGTH] !== TYPES.NUMBER) {
                throw new TypeError(`isArray -> config -> ${key} is not a valid number`);
            }
            if (object.length > config[KEYS.MAX_LENGTH]) {
                return false;
            }
            break;
        case KEYS.ELEMENT_TYPE:
            if (config[KEYS.ELEMENT_TYPE].constructor !== Function) {
                throw new TypeError('isArray -> config -> elementType is not a valid function');
            }
            for (let element of object) {
                if (!config[KEYS.ELEMENT_TYPE](element)) {
                    return false;
                }
            }
            break;
        default:
            throw new TypeError(`isArray -> config -> ${key} is not a valid key of config`);
        }
    }
    return true;
};

const buildRegex = (allowLetters, allowNumbers, specialCharacters = []) => {
    const KEYS = ISSTRING_KEYS;
    if (typeof allowLetters !== TYPES.BOOLEAN) {
        throw new TypeError(`isString -> config -> ${KEYS.ALLOWED_CHARACTERS} -> ${KEYS.ALLOW_LETTERS} is not boolean`);
    }
    if (typeof allowNumbers !== TYPES.BOOLEAN) {
        throw new TypeError(`isString -> config -> ${KEYS.ALLOWED_CHARACTERS} -> ${KEYS.ALLOW_NUMBERS} is not boolean`);
    }
    if (specialCharacters.constructor !== Array) {
        throw new TypeError(`isString -> config -> ${KEYS.ALLOWED_CHARACTERS} -> ${KEYS.SPECIAL_CHARACTERS} is not array`);
    }
    let builtRegex = '^[';
    if (allowLetters) {
        builtRegex += 'a-zA-Z';
    }
    if (allowNumbers) {
        builtRegex += '0-9';
    }
    const alreadyAddedChars = [];
    specialCharacters.forEach((specialChar) => {
        if (specialChar.length === 1 && !REGEX.ALPHANUMERIC.test(specialChar) && alreadyAddedChars.indexOf(specialChar) < 0) {
            if (['.', '*', '\\'].indexOf(specialChar) > -1) {
                builtRegex += '\\';
            }
            builtRegex += specialChar;
            alreadyAddedChars.push(specialChar);
        }
    });
    builtRegex += ']*$';
    return new RegExp(builtRegex);
};

const objectValidator = (properties) => {
    const validatorHandler = (object) => {
        if (!objectHasOnlyKnownProps(object, properties) || !objectHasRequiredProps(object, properties)) {
            return false;
        }
        for (let key in object) {
            if (!properties[key].validator(object[key], properties[key].config)) {
                return false;
            }
        }
        return true;
    };
    return validatorHandler;
};

const validator = (type, isRequired, config = {}) => {
    const val = {
        required: isRequired,
        config,
    };
    switch (type) {
    case VALIDATOR_TYPES.STRING:
        val.validator = isString;
        break;
    case VALIDATOR_TYPES.NUMBER:
        val.validator = isNumber;
        break;
    case VALIDATOR_TYPES.BOOLEAN:
        val.validator = isBoolean;
        break;
    case VALIDATOR_TYPES.URL:
        val.validator = isUrl;
        break;
    case VALIDATOR_TYPES.EMAIL:
        val.validator = isEmail;
        break;
    case VALIDATOR_TYPES.ARRAY:
        val.validator = isArray;
        break;
    default:
        throw new TypeError(`Type ${type} is not a validator type`);
    }
    return val;
};

const stringValidator = (isRequired, config = {}) => {
    return validator(VALIDATOR_TYPES.STRING, isRequired, config);
};

const numberValidator = (isRequired, config = {}) => {
    return validator(VALIDATOR_TYPES.NUMBER, isRequired, config);
};

const booleanValidator = (isRequired, config = {}) => {
    return validator(VALIDATOR_TYPES.BOOLEAN, isRequired, config);
};

const urlValidator = (isRequired, config = {}) => {
    return validator(VALIDATOR_TYPES.URL, isRequired, config);
};

const emailValidator = (isRequired, config = {}) => {
    return validator(VALIDATOR_TYPES.EMAIL, isRequired, config);
};

const arrayValidator = (isRequired, config = {}) => {
    return validator(VALIDATOR_TYPES.ARRAY, isRequired, config);
};

const customValidator = (isRequired, isValid, config = {}) => {
    return {
        required: isRequired,
        config,
        validator: isValid,
    };
};

const objectHasRequiredProps = (object, properties) => {
    for (let key in properties) {
        if (properties[key].required) {
            if (typeof object[key] === TYPES.UNDEFINED) {
                return false;
            }
        }
    }
    return true;
};

const objectHasOnlyKnownProps = (object, properties) => {
    for (let key in object) {
        if (typeof properties[key] === TYPES.UNDEFINED) {
            return false;
        }
    }
    return true;
};

const bundleWithConfig = (validator, config) => {
    return (object) => {
        return validator(object, config);
    };
};

let forExport = {
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
    customValidator,
    bundleWithConfig,
};

if (process && process.env && process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'testing') {
    forExport = {
        ...forExport,
        buildRegex,
        validator,
        objectHasRequiredProps,
        objectHasOnlyKnownProps,
    };
}
module.exports = forExport;
