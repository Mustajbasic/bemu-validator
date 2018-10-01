const chai = require('chai');
const {isString, buildRegex} = require('../src/validators');
chai.should();

describe('Testing isString without config', () => {
    it('should be a true for string', () => {
        const res = isString('this is a string');
        res.should.be.eql(true);
    });
    it('should fail for number', () => {
        const res = isString(42);
        res.should.be.eql(false);
    });
    it('should fail for boolean', () => {
        const res = isString(false);
        res.should.be.eql(false);
    });
});

describe('Testing isString with config', () => {
    it('should pass, longer than 5 characters', () => {
        const res = isString('this is a string', {minLength: 5});
        res.should.be.eql(true);
    });

    it('should fail, reducing spaces on string with min length', () => {
        isString('hi            there', {
            minLength: 10,
            reduceSpaces: true,
        }).should.be.eql(false);
    });

    it('should fail, longer than 5 characters', () => {
        const res = isString('moo', {minLength: 5});
        res.should.be.eql(false);
    });

    it('should pass, shorter than 10 characters', () => {
        const res = isString('fortnite', {maxLength: 10});
        res.should.be.eql(true);
    });

    it('should fail, shorter than 10 characters', () => {
        const res = isString('2018 September', {maxLength: 10});
        res.should.be.eql(false);
    });

    it('should pass, be alpha only', () => {
        const res = isString('fortnite', {alphaOnly: true});
        res.should.be.eql(true);
    });

    it('should fail, be alpha only', () => {
        const res = isString('string string 123', {alphaOnly: true});
        res.should.be.eql(false);
    });

    it('should pass, be alphanumeric only', () => {
        const res = isString('kanyewest2020', {alphanumericOnly: true});
        res.should.be.eql(true);
    });

    it('should fail, be alphanumeric only', () => {
        const res = isString('k a n y e W € $ t', {alphanumericOnly: true});
        res.should.be.eql(false);
    });

    it('should pass, allowedCharacters', () => {
        const res = isString('@mbelmin', {
            allowedCharacters: {
                allowLetters: true,
                allowNumbers: false,
                specialCharacters: ['@'],
            },
        });
        res.should.be.eql(true);
    });

    it('should fail, allowedCharacters', () => {
        const res = isString('@ 368 NYC', {
            allowedCharacters: {
                allowLetters: true,
                allowNumbers: false,
                specialCharacters: ['@'],
            },
        });
        res.should.be.eql(false);
    });
});

describe('Testing isString, throwing errors', () => {
    it('should throw, config is not object', () => {
        (() => {
            isString('test', 'test');
        }).should.throw(TypeError, 'isString -> config is not an object');
    });
    it('should throw, minLength is not number', () => {
        (() => {
            isString('test', {
                minLength: '5',
            });
        }).should.throw(TypeError, 'isString -> config -> minLength is not a valid number');
    });
    it('should throw, maxLength is not number', () => {
        (() => {
            isString('test', {
                maxLength: '5',
            });
        }).should.throw(TypeError, 'isString -> config -> maxLength is not a valid number');
    });
    it('should throw, alphaOnly is not boolean', () => {
        (() => {
            isString('test', {
                alphaOnly: 'YEP',
            });
        }).should.throw(TypeError, 'isString -> config -> alphaOnly is not a valid boolean');
    });
    it('should throw, alphanumericOnly is not boolean', () => {
        (() => {
            isString('test', {
                alphanumericOnly: 'YEP',
            });
        }).should.throw(TypeError, 'isString -> config -> alphanumericOnly is not a valid boolean');
    });
    it('should throw, allowedCharacters is not object', () => {
        (() => {
            isString('test', {
                allowedCharacters: 'YEP',

            });
        }).should.throw(TypeError, 'isString -> config -> allowedCharacters is not an object');
    });
    it('should throw, allowedCharacters.allowLetters is not a boolean', () => {
        (() => {
            isString('test', {
                allowedCharacters: {
                    allowNumbers: true,
                    allowLetters: 1,
                },
            });
        }).should.throw(TypeError, 'isString -> config -> allowedCharacters -> allowLetters is not boolean');
    });
    it('should throw, allowedCharacters.allowNumbers is not a boolean', () => {
        (() => {
            isString('test', {
                allowedCharacters: {
                    allowNumbers: 1,
                    allowLetters: true,
                },
            });
        }).should.throw(TypeError, 'isString -> config -> allowedCharacters -> allowNumbers is not boolean');
    });
    it('should throw, unknown config property', () => {
        (() => {
            isString('test', {
                hello: 'there',
            });
        }).should.throw(TypeError, 'isString -> config -> hello is not a valid key of config');
    });
});

describe('Testing buildRegex', () => {
    it('should be equal regex for letters only', () => {
        buildRegex(true, false).source.should.be.eql('^[a-zA-Z]*$');
    });
    it('should be equal regex for numbers only', () => {
        buildRegex(false, true).source.should.be.eql('^[0-9]*$');
    });
    it('should be equal regex for alphanumeric', () => {
        buildRegex(true, true).source.should.be.eql('^[a-zA-Z0-9]*$');
    });
    it('should throw, specialCharacters not array', () => {
        (() => {
            buildRegex(true, true, 'true');
        }).should.throw(TypeError, 'isString -> config -> allowedCharacters -> specialCharacters is not array');
    });
    it('should be equal regex for alphanumeric with special characters(@.+-_)', () => {
        buildRegex(true, true, ['@', '.', '+', '-', '_']).source.should.be.eql('^[a-zA-Z0-9@\\.+\\-_]*$');
    });
    it('should be equal regex for special characters(@), ignore multiple and invalid values', () => {
        buildRegex(false, false, ['@', '@', '@', '@', 'invalidValue']).source.should.be.eql('^[@]*$');
    });
    it('shold be valid regx and now throw (test case from found bug)', () => {
        const config = {
            minLength: 3,
            maxLength: 16,
            allowedCharacters: {
                allowLetters: false,
                allowNumbers: true,
                specialCharacters: ['+', '-', '*', '/', '='],
            },
        };
        isString('1+1=2', config).should.be.eql(true);
    });
});
