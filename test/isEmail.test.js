const chai = require('chai');
const {isEmail} = require('../src/validators');
chai.should();

describe('Testing isEmail', () => {
    it('should be true, valid email, no config', () => {
        isEmail('belmin.mustajbasic@gmail.com').should.be.eql(true);
        isEmail('belmin@mustajbasic.com').should.be.eql(true);
    });
    it('should be false, invalid email, no config', () => {
        isEmail().should.be.eql(false);
        isEmail(2).should.be.eql(false);
        isEmail(false).should.be.eql(false);
        isEmail({}).should.be.eql(false);
        isEmail('belmin.mustajbasicgmail.com').should.be.eql(false);
        isEmail('.belmin@mustajbasic.com').should.be.eql(false);
        isEmail('belmin@mustajbasic').should.be.eql(false);
    });
    it('should be true, name min length', () => {
        isEmail('belmin.mustajbasic@gmail.com', {
            minNameLength: 5,
        }).should.be.eql(true);
    });
    it('should be false, name min length', () => {
        isEmail('bemu@gmail.com', {
            minNameLength: 5,
        }).should.be.eql(false);
    });
    it('should be true, name max length', () => {
        isEmail('belmin.mustajbasic@gmail.com', {
            maxNameLength: 32,
        }).should.be.eql(true);
    });
    it('should be false, name max length', () => {
        isEmail('belmin.mustajbasic@gmail.com', {
            maxNameLength: 5,
        }).should.be.eql(false);
    });
    it('should be true, allowed domains', () => {
        isEmail('belmin.mustajbasic@gmail.com', {
            domains: ['gmail.com', 'mustajbasic.com'],
        }).should.be.eql(true);
        isEmail('belmin@mustajbasic.com', {
            domains: ['gmail.com', 'mustajbasic.com'],
        }).should.be.eql(true);
    });
    it('should be false, allowed domains', () => {
        isEmail('belmin.mustajbasic@yahoo.com', {
            domains: ['gmail.com', 'mustajbasic.com'],
        }).should.be.eql(false);
    });
    it('should be true, allowed domain names', () => {
        isEmail('belmin.mustajbasic@gmail.com', {
            domainNames: ['gmail'],
        }).should.be.eql(true);
        isEmail('belmin.mustajbasic@gmail.info', {
            domainNames: ['gmail'],
        }).should.be.eql(true);
    });
    it('should be false, allowed domain names', () => {
        isEmail('belmin.mustajbasic@yahoo.com', {
            domainNames: ['gmail'],
        }).should.be.eql(false);
    });
    it('should be true, allowed domain extensions', () => {
        isEmail('belmin.mustajbasic@gmail.com', {
            domainExtensions: ['com', 'ba'],
        }).should.be.eql(true);
        isEmail('belmin.mustajbasic@email.ba', {
            domainExtensions: ['com', 'ba'],
        }).should.be.eql(true);
    });
    it('should be false, allowed domain extensions', () => {
        isEmail('belmin.mustajbasic@yahoo.uk', {
            domainExtensions: ['com', 'ba'],
        }).should.be.eql(false);
    });
});

describe('Testing isEmail, throwing errors', () => {
    it('should throw, config is not an object', () => {
        (() => {
            isEmail('belmin.mustajbasic@gmail.com', '');
        }).should.throw(TypeError, 'isEmail -> config is not an object');
    });
    it('should throw, minNameLength is not a number', () => {
        (() => {
            isEmail('belmin.mustajbasic@gmail.com', {
                minNameLength: '5',
            });
        }).should.throw(TypeError, 'isEmail -> config -> minNameLength is not a valid number');
    });
    it('should throw, maxNameLength is not a number', () => {
        (() => {
            isEmail('belmin.mustajbasic@gmail.com', {
                maxNameLength: '5',
            });
        }).should.throw(TypeError, 'isEmail -> config -> maxNameLength is not a valid number');
    });
    it('should throw, domains is not an array', () => {
        (() => {
            isEmail('belmin.mustajbasic@gmail.com', {
                domains: '5',
            });
        }).should.throw(TypeError, 'isEmail -> config -> domains is not an array');
    });
    it('should throw, domainNames is not an array', () => {
        (() => {
            isEmail('belmin.mustajbasic@gmail.com', {
                domainNames: '5',
            });
        }).should.throw(TypeError, 'isEmail -> config -> domainNames is not an array');
    });
    it('should throw, domainExtensions is not an array', () => {
        (() => {
            isEmail('belmin.mustajbasic@gmail.com', {
                domainExtensions: '5',
            });
        }).should.throw(TypeError, 'isEmail -> config -> domainExtensions is not an array');
    });
    it('should throw, unknown config property', () => {
        (() => {
            isEmail('test@gmail.com', {
                hello: 'there',
            });
        }).should.throw(TypeError, 'isEmail -> config -> hello is not a valid key of config');
    });
});
