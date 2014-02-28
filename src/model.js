var _ = require("underscore");
var assert = require("assert");

var Model = function (metadata) {
    this._init.apply(this, arguments);
};

_.extend(Model.prototype, {

    _init: function (metadata) {
        assert.ok(metadata, "Canoot initialize a Model without metadata");
        this._metadata = metadata;

        console.log("Initializing model " + this._metadata.name || "");
    }

});

module.exports = Model;
