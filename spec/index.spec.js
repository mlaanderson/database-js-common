const assert = require('assert');

describe('Test parseConnectionParams method', function () {
    const parseConnectionParams = require('../.').parseConnectionParams;
    const testedParamString = 'booleanTrue=true&booleanFalse=false&string=foo&integer=35&float=35.8';

    it('should be not processed by default', function () {
        const result = parseConnectionParams(testedParamString);
        assert.equal(result, testedParamString)
    });

    describe('Test parsed values', function () {
        const result = parseConnectionParams(testedParamString, true);

        it('should be parsed', function () {
            assert.ok(typeof result === 'object', 'result not parsed');
        });

        it('should be boolean true', function () {
            assert.ok(result.booleanTrue === true, 'boolean true not parsed')
        });

        it('should be boolean false', function () {
            assert.ok(result.booleanFalse === false, 'boolean false not parsed')
        });

        it('should be string', function () {
            assert.ok(typeof result.string === 'string', 'string not parsed')
        });

        it('should be integer', function () {
            assert.ok(result.integer % 1 === 0, 'integer not parsed')
        });

        it('should be float', function () {
            assert.ok(result.float % 1 !== 0, 'float not parsed')
        });
    })
});
