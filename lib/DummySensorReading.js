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
    }
};
