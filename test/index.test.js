const assert = require('assert');

describe('Test parseConnectionParams method', function () {
    const parseConnectionParams = require('../.').parseConnectionParams;
    const testedParamString = 'booleanTrue=true&booleanFalse=false&string=foo&integer=35&float=35.8';

    describe('Test default not parsed values', function () {
        const result = parseConnectionParams(testedParamString);

        it('should be string true', function () {
            assert.equal(result.booleanTrue, 'true')
        });

        it('should be string false', function () {
            assert.equal(result.booleanFalse, 'false')
        });


        it('should be string', function () {
            assert.equal(result.string, 'foo')
        });


        it('should be string number', function () {
            assert.equal(result.integer, '35')
        });

        it('should be string float', function () {
            assert.equal(result.float, '35.8')
        });
    });

    it('should return empty object', function () {
        const result = parseConnectionParams('', true);
        assert.deepEqual(result, {})
    });

    describe('Test parsed values', function () {
        const result = parseConnectionParams(testedParamString, true);

        it('should be parsed', function () {
            assert.ok(typeof result === 'object', 'result not parsed');
        });

        it('should be boolean true', function () {
            assert.equal(result.booleanTrue, true)
        });

        it('should be boolean false', function () {
            assert.equal(result.booleanFalse, false)
        });

        it('should be string', function () {
            assert.equal(result.string, 'foo')
        });

        it('should be integer', function () {
            assert.equal(result.integer, 35)
        });

        it('should be float', function () {
            assert.equal(result.float, 35.8)
        });
    })
});
