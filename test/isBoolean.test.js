const chai = require('chai');
const {isBoolean} = require('../src/validators');
chai.should();

describe('Testing isBoolean', () => {
    it('should pass', () => {
        isBoolean(true).should.be.eql(true);
        isBoolean(false).should.be.eql(true);
    });
    it('should be false, number', () => {
        isBoolean(2).should.be.eql(false);
    });
    it('should be false, string', () => {
        isBoolean('true').should.be.eql(false);
    });
    it('should be false, object', () => {
        isBoolean({}).should.be.eql(false);
    });
});
