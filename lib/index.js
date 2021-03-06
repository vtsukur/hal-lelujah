'use strict';

var _ = require('lodash');

var DEFAULT_LINKS = { _links: {} };

function Representation(data) {
  this.content = data || {};
}

Representation.prototype._putLinksIfAbsent = function () {
  _.defaults(this.content, DEFAULT_LINKS);
  return this.content._links;
};

Representation.prototype._doAddLink = function (rel, link) {
  this._putLinksIfAbsent();
  this.content._links[rel] = link;
};

Representation.prototype.link = function (rel, hrefOrLink) {
  var link = _.isString(hrefOrLink) ? { href: hrefOrLink } : hrefOrLink;
  this._doAddLink(rel, link);
  return this;
};

Representation.prototype.templatedLink = function (rel, hrefOrLink) {
  var link = _.isString(hrefOrLink) ? {
    href: hrefOrLink,
    templated: true
  } : _.extend({ templated: true }, hrefOrLink);
  return this.link(rel, link);
};

Representation.prototype.toJSON = function () {
  return this.content;
};

module.exports = {
  newRepresentation: function (data) {
    return new Representation(data);
  }
};
