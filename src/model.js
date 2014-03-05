var _ = require("underscore");
var assert = require("assert");
var events = require("./events");
var datatypes = require("./datatypes");

var Model = function () {
    this._init.apply(this, arguments);
};

_.extend(Model.prototype, events, {

    _init: function (metadata) {
        assert.ok(metadata, "Cannot initialize a Model without metadata");
        this._metadata = metadata;
        this._initAttributes();
    },

    _initAttributes: function () {
        _.each(this._metadata.attributes, function (value, key) {
            var _datatype = datatypes[value.type.toLowerCase()];
            var _value = value.defaultValue || _datatype.defaultValue;

            Object.defineProperty(this, key, {
                get: function () {
                    return _value;
                },

                set: function (value) {
                    _value = value;
                },
                enumerable: true,
                configurable: false
            });
        }, this);
    }

});

module.exports = Model;
