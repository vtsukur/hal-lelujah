'use strict';

var expect = require('chai').expect;

var hal = require('../');

describe('hal-lelujah', function() {

    describe('representation', function() {

        it('builds empty representation out of empty data object', function () {
            var repr = hal.representation({});

            //noinspection JSUnresolvedVariable
            expect(repr).to.eql({});
        });

        it('builds representation out of non-empty data object where result matches data object', function() {
            var repr = hal.representation({ key: 'value' });

            //noinspection JSUnresolvedVariable
            expect(repr).to.eql({ key: 'value' });
        });

    });

});
