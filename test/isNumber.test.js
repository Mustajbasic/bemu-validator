const chai = require('chai');
const {isNumber} = require('../src/validators');
chai.should();

describe('Testing isNumber validator without config', () => {
    it('should be a true for number', () => {
        const res = isNumber(1708);
        res.should.be.eql(true);
    });

    it('should be a true for decimal', () => {
        const res = isNumber(1.61);
        res.should.be.eql(true);
    });

    it('should be a true for PI', () => {
        const res = isNumber(Math.PI);
        res.should.be.eql(true);
    });

    it('should be a false for string', () => {
        const res = isNumber('1708');
        res.should.be.eql(false);
    });
});

describe('Testing isNumber validator with config', () => {
    it('should pass, min', () => {
        const res = isNumber(1708.2015, {min: 1000});
        res.should.be.eql(true);
    });
    it('should fail, min', () => {
        const res = isNumber(1708.2015, {min: 15000});
        res.should.be.eql(false);
    });

    it('should pass, max', () => {
        const res = isNumber(1708, {max: 2000});
        res.should.be.eql(true);
    });
    it('should fail, max', () => {
        const res = isNumber(1708, {max: 1000});
        res.should.be.eql(false);
    });

    it('should pass, is integer', () => {
        const res = isNumber(1708, {integer: true});
        res.should.be.eql(true);
    });
    it('should fail, is integer', () => {
        const res = isNumber(Math.PI, {integer: true});
        res.should.be.eql(false);
    });
});

describe('Testing isNumber, throwing errors', () => {
    it('should throw, config not object', () => {
        (() => {
            isNumber(1708.2015, '{min: 1000}');
        }).should.throw(TypeError, 'isNumber -> config is not an object');
    });
    it('should throw, invalid config property', () => {
        (() => {
            isNumber(1708.2015, {unknown: 1000});
        }).should.throw(TypeError, 'inNumber -> config -> unknown is not a valid key of config');
    });
    it('should throw, min is not a number', () => {
        (() => {
            isNumber(1708.2015, {min: '10'});
        }).should.throw(TypeError, 'inNumber -> config -> min is not a valid number');
    });
    it('should throw, max is not a number', () => {
        (() => {
            isNumber(1708.2015, {max: '10'});
        }).should.throw(TypeError, 'inNumber -> config -> max is not a valid number');
    });
    it('should throw, integer is not a boolean', () => {
        (() => {
            isNumber(1708.2015, {integer: 'YES'});
        }).should.throw(TypeError, 'inNumber -> config -> integer is not a valid boolean');
    });
});
