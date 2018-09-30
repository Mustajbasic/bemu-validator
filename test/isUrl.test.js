const chai = require('chai');
const {isUrl} = require('../src/validators');
chai.should();

describe('Testing isUrl', () => {
    it('should be true, valid url, no config', () => {
        isUrl('https://google.com').should.be.eql(true);
        isUrl('https://www.npmjs.com/package/bemu-simple-event').should.be.eql(true);
        isUrl('https://www.npmjs.com/package/bemu-simple-event').should.be.eql(true);
        isUrl('https://www.google.com/search?source=hp&ei=xbSwW8vUBMXNrgTE1afYDw&q'+
            '=node+best+practices&oq=node+best+p&gs_l=psy-ab.3.0.0l2j0i22i30k1l8.4141'+
            '.5623.0.7075.13.9.0.2.2.0.174.736.0j5.6.0....0...1c.1.64.psy-ab..5.8.895'+
            '.6..35i39k1.149.dE89ZJSnCTU').should.be.eql(true);
    });

    it('should be false for everything not a string', () => {
        isUrl().should.be.eql(false);
        isUrl(42).should.be.eql(false);
        isUrl(false).should.be.eql(false);
        isUrl({}).should.be.eql(false);
    });

    it('should be false for invalid links', () => {
        isUrl('htp://www.google.com').should.be.eql(false);
        isUrl('http://google').should.be.eql(false);
        isUrl('w.google').should.be.eql(false);
        isUrl('https://google.com+342').should.be.eql(false);
    });
    it('should be false, https only', () => {
        isUrl('http://www.google.com', {
            httpsOnly: true,
        }).should.be.eql(false);
    });
});

describe('Testing isUrl, throwing errors', () => {
    it('should throw, config is not an object', () => {
        (() => {
            isUrl('http://www.google.com', 'please match https only');
        }).should.throw(TypeError, 'isUrl -> config is not an object');
    });

    it('should throw, httpsOnly is not a bolean', () => {
        (() => {
            isUrl('http://www.google.com', {
                httpsOnly: 'YES',
            });
        }).should.throw(TypeError, 'isUrl -> httpsOnly is not a valid boolean');
    });
});
