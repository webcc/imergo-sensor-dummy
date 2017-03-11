"use strict";

const BaseSensor = require("imergo-sensor-base").BaseSensor;
const DummySensorReading = require("./DummySensorReading");

module.exports = class DummySensor extends BaseSensor
{
    constructor(config)
    {
        super(config);
    }

    initDefaults()
    {
        super.initDefaults();
        this._name = "Dummy Sensor";
        this._type = this.constructor.name;
        this._moduleName = 'imergo-sensor-dummy';
        this._intervalHandle = null;
    }

    handleStarted() {
        this._intervalHandle = setInterval(
            () => { this.reading = new DummySensorReading({ sensorId: this.id });
            }, this.frequency
        );
    }

    handleStopped() {
        clearInterval(this._intervalHandle);
    }
};
