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
    it("should return random values", done =>
    {
        let sensor = new model.DummySensor();
        sensor.onchange = event => {
            assert(event.reading.dummyValue > 0 && event.reading.dummyValue < 1);
            assert(event.reading.values.get("dummyValue") > 0 && event.reading.values.get("dummyValue") < 1);
            done();
        }
        sensor.start();
    });
});
