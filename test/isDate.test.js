const chai = require('chai');
const {isDate} = require('../src/validators');
chai.should();

describe('Testing isDate', () => {
    it('should pass', () => {
        isDate('2019-01-02').should.be.eql(true);
    });
    it('should be false, is not a date', () => {
        isDate('Let\'s be clear here, this is not a date').should.be.eql(false);
    });
    it('should be false, number', () => {
        isDate(1337).should.be.eql(false);
    });
    it('should be false, boolean', () => {
        isDate(true).should.be.eql(false);
    });
});

describe('Testing isDate, throwing errors', () => {
    it('should throw, config is not object', () => {
        (() => {
            isDate('2019-01-01', 'test');
        }).should.throw(TypeError, 'isDate -> config is not an object');
    });
});
