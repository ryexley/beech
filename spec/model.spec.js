var assert = require("chai").assert;
var expect = require("chai").expect;
var should = require("chai").should;

var Model = require("../src/model");
var metadata = require("./model.spec.metadata");

var model;

describe("Model", function () {
    beforeEach(function () {
        model = new Model(metadata);
    });

    afterEach(function () {
        model = null;
    });

    it("should not allow instantiation without a metadata object", function () {
        expect(Model).to.throw(Error);
    });
});
