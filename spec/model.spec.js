var assert = require("chai").assert;
var expect = require("chai").expect;
var should = require("chai").should;

var Model = require("../src/model");
var metadata = require("./model.spec.metadata");

var _model;

describe("Model", function () {
    beforeEach(function () {
        _model = new Model(metadata);
        // console.log(JSON.stringify(_model, null, 4));
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
        expect(_model.firstName).to.exist;
        expect(_model.lastName).to.exist;
    });
});
