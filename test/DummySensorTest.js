"use strict";
const assert = require("assert");
const model = require("..");
describe("imergo-sensor-dummy::DummySensor", () =>
{
    it("should init a sensor", () =>
    {
        let sensor = new model.DummySensor();
        assert.equal(sensor instanceof model.DummySensor, true);
    });
});
