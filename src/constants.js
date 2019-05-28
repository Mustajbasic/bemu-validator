const TYPES = {
    STRING: 'string',
    BOOLEAN: 'boolean',
    NUMBER: 'number',
    UNDEFINED: 'undefined',
};

const ISSTRING_KEYS = {
    REDUCE_SPACES: 'reduceSpaces',
    MIN_LENGTH: 'minLength',
    MAX_LENGTH: 'maxLength',
    ALPHA_ONLY: 'alphaOnly',
    ALPHANUMERIC_ONLY: 'alphanumericOnly',
    ALLOWED_CHARACTERS: 'allowedCharacters',
    ALLOW_LETTERS: 'allowLetters',
    ALLOW_NUMBERS: 'allowNumbers',
    SPECIAL_CHARACTERS: 'specialCharacters',
};

const ISNUMBER_KEYS = {
    MIN: 'min',
    MAX: 'max',
    INTEGER: 'integer',
};

const ISEMAIL_KEYS = {
    MIN_NAME_LENGTH: 'minNameLength',
    MAX_NAME_LENGTH: 'maxNameLength',
    DOMAINS: 'domains',
    DOMAIN_NAMES: 'domainNames',
    DOMAIN_EXTENSIONS: 'domainExtensions',
};

const ISARRAY_KEYS = {
    ELEMENT_TYPE: 'elementType',
    MIN_LENGTH: 'minLength',
    MAX_LENGTH: 'maxLength',
};

const REGEX = {
    ALPHA: /^[a-zA-Z]*$/,
    ALPHANUMERIC: /^[a-zA-Z0-9]*$/,
    EMAIL: /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*[a-zA-Z0-9]@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,}$/,
    HAS_AT: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+$/,
    PRE_AT: /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*[a-zA-Z0-9]+$/,
    AFTER_AT: /^[a-zA-Z0-9._%+-]+\.[a-zA-Z]+$/,
    URL: /^(http|https):\/\/(www.)?[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]\.[a-zA-Z]{2,16}([?/]?|([?/][\S]*)?)$/,
    URL_HTTPS: /^(https):\/\/(www.)?[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]\.[a-zA-Z]{2,16}([?/]?|([?/][\S]*)?)$/,
};

const VALIDATOR_TYPES = {
    STRING: 'string',
    NUMBER: 'number',
    BOOLEAN: 'boolean',
    URL: 'url',
    EMAIL: 'email',
    ARRAY: 'array',
};

module.exports = {
    TYPES,
    ISSTRING_KEYS,
    ISNUMBER_KEYS,
    ISEMAIL_KEYS,
    ISARRAY_KEYS,
    VALIDATOR_TYPES,
    REGEX,
};
