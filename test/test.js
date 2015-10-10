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

        it('builds representation out of non-empty data object using direct mapping from the data object', function() {
            var source = {
                boolean: true,
                number: 7,
                string: 'property',
                object: {
                    key: 'value'
                },
                array: [
                    true,
                    7,
                    'property',
                    {
                        key: 'value'
                    },
                    [ ]
                ]
            };
            var repr = hal.representation(source);

            //noinspection JSUnresolvedVariable
            expect(repr).to.eql(source);
        });

    });

});
