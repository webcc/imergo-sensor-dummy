"use strict";
const BaseSensor = require("imergo-sensor-base").BaseSensor;
const DummySensorReading = require("./DummySensorReading");

module.exports = class DummySensor extends BaseSensor {
    constructor(config)
    {
        super(config);
        this._intervalHandle = null;
    }

    initDefaults()
    {
        super.initDefaults();
    }

    handleStarted() {
        this._intervalHandle = setInterval(
            () => {
                this.reading = new DummySensorReading({
                    sensorId: this.id
                });
            },
            this.frequency
        );
    }

    handleStopped() {
        clearInterval(this._intervalHandle);
    }
};
