var _ = require("underscore");
var assert = require("assert");

var Model = function () {
    this._init.apply(this, arguments);
};

_.extend(Model.prototype, {

    _init: function (metadata) {
        assert.ok(metadata, "Cannot initialize a Model without metadata");
        this._metadata = metadata;
    }

});

module.exports = Model;
