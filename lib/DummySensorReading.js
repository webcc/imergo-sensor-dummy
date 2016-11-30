"use strict";
const BaseSensorReading = require("imergo-sensor-base").BaseSensorReading;

module.exports = class DummySensorReading extends BaseSensorReading {
    constructor(config)
    {
        super(config);
    }

    initDefaults()
    {
        super.initDefaults();
        this.dummyValue = Math.random();
    }

    get dummyValue() {
        return this._dummyValue;
    }
    set dummyValue(value) {
        this.values.set("dummyValue", value);
        this._dummyValue = value;
    }
};
