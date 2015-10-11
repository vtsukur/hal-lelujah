'use strict';

var expect = require('chai').expect;
var dataDriven = require('data-driven');

var hal = require('../');

describe('hal-lelujah', function () {

  describe('representation', function () {

    dataDriven([
      {value: undefined, description: 'undefined'},
      {value: null, description: 'null'},
      {value: {}, description: 'empty'}
    ], function () {
      it('builds empty representation out of {description} data object', function (context) {
        var repr = hal.representation(context.value);

        //noinspection JSUnresolvedVariable
        expect(repr.toJSON()).to.eql({});
      });
    });

    it('builds representation out of non-empty data object using direct mapping from the data object', function () {
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
          []
        ]
      };
      var repr = hal.representation(source);

      //noinspection JSUnresolvedVariable
      expect(repr.toJSON()).to.eql(source);
    });

    it('build representation with the given links', function () {
      var repr = hal.representation().link('next', 'scheme://user@server:port/relative/url?query=string&two=params#hash');

      //noinspection JSUnresolvedVariable
      expect(repr.toJSON()).to.eql({
        _links: {
          next: {
            href: 'scheme://user@server:port/relative/url?query=string&two=params#hash'
          }
        }
      });
    })

  });

});
