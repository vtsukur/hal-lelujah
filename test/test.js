'use strict';

var expect = require('chai').expect;
var dataDriven = require('data-driven');

var hal = require('../');

describe('hal-lelujah', function () {

  describe('representation', function () {

    var SAMPLE_HREF = 'scheme://user@server:port/relative/url?query=string&two=params#hash';
    var SAMPLE_TEMPLATED_HREF = 'scheme://user@server:port/relative/url/{template-param}?query=string&two=params#hash';

    dataDriven([
      {value: undefined, description: 'undefined'},
      {value: null, description: 'null'},
      {value: {}, description: 'empty'}
    ], function () {
      it('builds empty representation out of {description} data object', function (context) {
        var repr = hal.newRepresentation(context.value);

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
      var repr = hal.newRepresentation(source);

      //noinspection JSUnresolvedVariable
      expect(repr.toJSON()).to.eql(source);
    });

    it('builds representation with the link given by relation name and hypertext reference', function () {
      var repr = hal.newRepresentation().link('next', SAMPLE_HREF);

      //noinspection JSUnresolvedVariable
      expect(repr.toJSON()).to.eql({
        _links: {
          next: {
            href: SAMPLE_HREF
          }
        }
      });
    });

    it('builds representation with the link given by relation name and link object', function () {
      var repr = hal.newRepresentation().link('next', {
        href: SAMPLE_HREF,
        name: 'specialization',
        templated: true
      });

      //noinspection JSUnresolvedVariable
      expect(repr.toJSON()).to.eql({
        _links: {
          next: {
            href: SAMPLE_HREF,
            name: 'specialization',
            templated: true
          }
        }
      });
    });

    it('builds representation with the templated link given by relation name and hypertext reference', function () {
      var repr = hal.newRepresentation().templatedLink('next', SAMPLE_TEMPLATED_HREF);

      //noinspection JSUnresolvedVariable
      expect(repr.toJSON()).to.eql({
        _links: {
          next: {
            href: SAMPLE_TEMPLATED_HREF,
            templated: true
          }
        }
      });
    });

    it('builds representation with the templated link given by relation name and link object', function () {
      var repr = hal.newRepresentation().templatedLink('next', {
        href: SAMPLE_TEMPLATED_HREF,
        name: 'specialization',
        templated: false
      });

      //noinspection JSUnresolvedVariable
      expect(repr.toJSON()).to.eql({
        _links: {
          next: {
            href: SAMPLE_TEMPLATED_HREF,
            name: 'specialization',
            templated: false
          }
        }
      });
    });

  });

});
