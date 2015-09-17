'use strict';

var expect = require('chai').expect;

var hal = require('../');

describe('hal-lelujah', function() {

    describe('resource', function() {

        it('builds empty representation out of empty data', function() {
            var representation = hal.resource({});
            //noinspection JSUnresolvedVariable
            expect(representation).to.eql({});
        })

    });

});
