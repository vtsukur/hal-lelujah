'use strict';

function Representation(data) {
    this.data = data || {};
}

Representation.prototype.toJSON = function() {
    return this.data;
};

module.exports = {
    representation: function(data) {
        return new Representation(data);
    }
};
