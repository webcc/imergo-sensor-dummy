"use strict";

const assert = require("assert");
const model = require("..");

describe("imergo-sensor-dummy::DummySensor", () =>
{
    it("should init a sensor", () =>
    {
        const sensor = new model.DummySensor({ "frequency": 1000 });
        assert(sensor instanceof model.DummySensor);
        assert.strictEqual(sensor.name, "Dummy Sensor");
        assert.strictEqual(sensor.type, "DummySensor");
        assert.strictEqual(sensor.moduleName, "imergo-sensor-dummy");
    });
    it("should return random values", done =>
    {
        let sensor = new model.DummySensor({ "frequency": 1000 });
        sensor.onchange = event => {
            assert(event.reading.values.get("dummyValue") > 0 && event.reading.values.get("dummyValue") < 1);
            sensor.stop();
            done();
        };
        sensor.start();
    });
});
