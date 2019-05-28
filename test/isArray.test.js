const chai = require('chai');
const {isArray, isString, isBoolean, isNumber} = require('../src/validators');
chai.should();

describe('Testing isArray without config', () => {
    it('should be true for valid arrays', () => {
        isArray([]).should.be.eql(true);
        isArray([1, 2, 'three', false]).should.be.eql(true);
    });
});

describe('Testing isArray with config', () => {
    it('should be true for valid arrays', () => {
        isArray([1, 2, 'three', false], {minLength: 3}).should.be.eql(true);
        isArray([1, 2, 3], {minLength: 3, elementType: isNumber}).should.be.eql(true);
        isArray([], {maxLength: 5, elementType: isBoolean}).should.be.eql(true);
    });

    it('should be false for invalid arrays', () => {
        isArray('not an array', {
            elementType: isString,
        }).should.be.eql(false);
        isArray([1], {
            elementType: isNumber,
            minLength: 2,
        }).should.be.eql(false);
        isArray([1, 2, 3, 4, 5], {
            elementType: isNumber,
            maxLength: 4,
        }).should.be.eql(false);
        isArray([1, 2, 'three', false], {
            elementType: isString,
        }).should.be.eql(false);

        isArray([false, false, false], {minLength: 3, elementType: isNumber}).should.be.eql(false);
    });
});

describe('Testing isArray with custom validators', () => {
    const startsWithCapitalA = (el) => {
        return /^A[\s\S]*$/.test(el);
    };
    it('should be true for custom validator', () => {
        isArray(['Alabama', 'Alaska', 'Alcatraz'], {maxLength: 5, elementType: startsWithCapitalA}).should.be.eql(true);
    });
    it('should be false for custom validator', () => {
        isArray(['Dakota', 'North Carolina', 'Bosnia and Herzegovina'], {elementType: startsWithCapitalA}).should.be.eql(false);
    });
});

describe('Testing isArray, throwing errors', () => {
    it('should throw, config is not object', () => {
        (() => {
            isArray([], 'test');
        }).should.throw(TypeError, 'isArray -> config is not an object');
    });

    it('should throw, minLength is not a number', () => {
        (() => {
            isArray([], {
                minLength: 'minLength',
            });
        }).should.throw(TypeError, 'isArray -> config -> minLength is not a valid number');
    });

    it('should throw, maxLength is not a number', () => {
        (() => {
            isArray([], {
                maxLength: 'maxLength',
            });
        }).should.throw(TypeError, 'isArray -> config -> maxLength is not a valid number');
    });

    it('should throw, elementType is not a function', () => {
        (() => {
            isArray([], {
                elementType: 'elementType',
            });
        }).should.throw(TypeError, 'isArray -> config -> elementType is not a valid function');
    });

    it('should throw, unknown property of config', () => {
        (() => {
            isArray([], {
                unknown: 'property',
            });
        }).should.throw(TypeError, 'isArray -> config -> unknown is not a valid key of config');
    });
});
