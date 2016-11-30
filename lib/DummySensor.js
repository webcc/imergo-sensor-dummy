"use strict";
const BaseSensor = require("imergo-sensor-base").BaseSensor;

module.exports = class DummySensor extends BaseSensor {
    constructor(config)
    {
        super(config);
    }

    initDefaults()
    {
        super.initDefaults();
    }
};
