const chai = require('chai');
const {
    validator,
    stringValidator,
    numberValidator,
    booleanValidator,
    urlValidator,
    emailValidator,
    arrayValidator,
    customValidator,
    objectValidator,
    objectHasOnlyKnownProps,
    objectHasRequiredProps,
} = require('../src/validators');
const {VALIDATOR_TYPES} = require('../src/constants');
chai.should();

describe('Testing validator generator', () => {
    it('should return string validator', () => {
        const res = validator(VALIDATOR_TYPES.STRING, false);
        res.required.should.be.eql(false);
        JSON.stringify(res.config).should.be.eql('{}');
        res.validator('this is a string').should.be.eql(true);
    });
    it('should return number validator', () => {
        const res = validator(VALIDATOR_TYPES.NUMBER, true, {min: 5});
        res.required.should.be.eql(true);
        JSON.stringify(res.config).should.be.eql('{"min":5}');
        res.validator(10).should.be.eql(true);
    });
    it('should return boolean validator', () => {
        const res = validator(VALIDATOR_TYPES.BOOLEAN, false);
        res.required.should.be.eql(false);
        JSON.stringify(res.config).should.be.eql('{}');
        res.validator('this is not a boolean').should.be.eql(false);
        res.validator(true).should.be.eql(true);
    });
    it('should return url validator', () => {
        const res = validator(VALIDATOR_TYPES.URL, false);
        res.required.should.be.eql(false);
        JSON.stringify(res.config).should.be.eql('{}');
        res.validator('https://www.google.com').should.be.eql(true);
    });
    it('should return email validator', () => {
        const res = validator(VALIDATOR_TYPES.EMAIL, false);
        res.required.should.be.eql(false);
        JSON.stringify(res.config).should.be.eql('{}');
        res.validator('email@email.com').should.be.eql(true);
    });
    it('should return array validator', () => {
        const res = validator(VALIDATOR_TYPES.ARRAY, false);
        res.required.should.be.eql(false);
        JSON.stringify(res.config).should.be.eql('{}');
        res.validator(['hello', 'world']).should.be.eql(true);
    });
    it('should throw, invalid type', () => {
        (() => {
            validator('INVALID TYPE', false);
        }).should.throw(TypeError, 'Type INVALID TYPE is not a validator type');
    });
});

describe('Testing string validator generator', () => {
    it('should return a valid string validator', () => {
        const res = stringValidator(false);
        res.required.should.be.eql(false);
        JSON.stringify(res.config).should.be.eql('{}');
        res.validator('this is a string').should.be.eql(true);
    });
});

describe('Testing number validator generator', () => {
    it('should return a valid number validator', () => {
        const res = numberValidator(false);
        res.required.should.be.eql(false);
        JSON.stringify(res.config).should.be.eql('{}');
        res.validator(0).should.be.eql(true);
    });
});

describe('Testing boolean validator generator', () => {
    it('should return a valid boolean validator', () => {
        const res = booleanValidator(true);
        res.required.should.be.eql(true);
        JSON.stringify(res.config).should.be.eql('{}');
        res.validator(0).should.be.eql(false);
        res.validator(true).should.be.eql(true);
    });
});

describe('Testing url validator generator', () => {
    it('should return a valid url validator', () => {
        const res = urlValidator(true);
        res.required.should.be.eql(true);
        JSON.stringify(res.config).should.be.eql('{}');
        res.validator(0).should.be.eql(false);
        res.validator('https://www.google.com').should.be.eql(true);
    });
});

describe('Testing email validator generator', () => {
    it('should return a valid email validator', () => {
        const res = emailValidator(false);
        res.required.should.be.eql(false);
        JSON.stringify(res.config).should.be.eql('{}');
        res.validator('email@email.com').should.be.eql(true);
    });
});

describe('Testing array validator generator', () => {
    it('should return a valid array validator', () => {
        const res = arrayValidator(false);
        res.required.should.be.eql(false);
        JSON.stringify(res.config).should.be.eql('{}');
        res.validator(['hello', 'world']).should.be.eql(true);
    });
});

describe('Testing custom validator generator', () => {
    it('should return a valid custom validator', () => {
        const customIsValid = (a) => {
            return a > 10;
        };
        const res = customValidator(false, customIsValid);
        res.required.should.be.eql(false);
        JSON.stringify(res.config).should.be.eql('{}');
        res.validator(15).should.be.eql(true);
        res.validator(1.5).should.be.eql(false);
    });
});

describe('Testing objectHasRequiredProps method', () => {
    it('should return true', () => {
        const obj = {
            a: 1,
            b: 2,
            c: 'not required',
        };
        const props = {
            a: {
                required: true,
            },
            b: {
                required: true,
            },
            notRequired: {
                required: false,
            },
        };
        objectHasRequiredProps(obj, props).should.be.eql(true);
    });
    it('should return false', () => {
        const obj = {
            a: 1,
        };
        const props = {
            a: {
                required: true,
            },
            b: {
                required: true,
            },
        };
        objectHasRequiredProps(obj, props).should.be.eql(false);
    });
});

describe('Testing objectHasOnlyKnownProps method', () => {
    it('should return true', () => {
        const obj = {
            a: 1,
            b: 2,
            c: 'not required',
        };
        const props = {
            a: {
                required: true,
            },
            b: {
                required: true,
            },
            c: {
                required: false,
            },
        };
        objectHasOnlyKnownProps(obj, props).should.be.eql(true);
    });
    it('should return false', () => {
        const obj = {
            a: 1,
            c: 'unknown prop',
        };
        const props = {
            a: {
                required: true,
            },
        };
        objectHasOnlyKnownProps(obj, props).should.be.eql(false);
    });
});

describe('Testing object validator generator', () => {
    it('should return a valid object validator', () => {
        const isBook = objectValidator({
            title: stringValidator(true),
            author: stringValidator(true),
            numberOfPages: numberValidator(true, {min: 1, integer: true}),
        });

        const validBook = {
            title: 'A song of ice and fire',
            author: 'GRRM',
            numberOfPages: 9001,
        };

        isBook(validBook).should.be.eql(true);

        const bookMissingAuthor = {
            title: 'A song of ice and fire',
            numberOfPages: 9001,
        };

        isBook(bookMissingAuthor).should.be.eql(false);

        const bookWithUnknownProperty = {
            title: 'A song of ice and fire',
            author: 'GRRM',
            numberOfPages: 9001,
            what: 'is this',
        };

        isBook(bookWithUnknownProperty).should.be.eql(false);

        const bookTitleNotString = {
            title: {name: 'A song of ice and fire'},
            author: 'GRRM',
            numberOfPages: 9001,
        };

        isBook(bookTitleNotString).should.be.eql(false);
    });
});
