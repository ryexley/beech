var assert = require("chai").assert;
var expect = require("chai").expect;
var should = require("chai").should;

var Model = require("../src/model");
var metadata = require("./model.spec.metadata");

var __model = new Model(metadata);
console.log(JSON.stringify(__model, null, 4));

var _model;

describe("Model", function () {
    beforeEach(function () {
        _model = new Model(metadata);
    });

    afterEach(function () {
        _model = null;
    });

    it("should not allow instantiation without a metadata object", function () {
        expect(Model).to.throw(Error);
    });

    it("should persist passed in metadata internally for reference", function () {
        expect(_model._metadata).to.exist;
        expect(_model._metadata.name).to.equal("Person");
    });

    it("should initialize attributes", function () {
        expect(_model).to.have.ownProperty("firstName");
        expect(_model).to.have.ownProperty("lastName");
    });

    it("should raise an event after a property value has been changed", function () {
        _model.on("firstName.changed", function (newValue) {
            expect(newValue).to.equal("John");
        });

        _model.firstName = "John";
    });
});
