'use strict';

var expect = require('chai').expect;

var hal = require('../');

describe('hal-lelujah', function() {

    describe('representation', function() {

        it('builds empty representation out of empty data object', function() {
            var representation = hal.representation({});
            //noinspection JSUnresolvedVariable
            expect(representation).to.eql({});
        });

        it('builds representation out of non-empty data object where result matches data object', function() {
            var representation = hal.representation({ key: 'value' });
            //noinspection JSUnresolvedVariable
            expect(representation).to.eql({ key: 'value' });
        });

    });

});
