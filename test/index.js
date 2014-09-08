/*global describe, before, beforeEach, it */

var assert = require('assert');
var CBLabs = require("../CBLabs");
require("../core.js");
require("../schedule.js");

describe("Cybozu Connector", function () {
    "use strict";

    it.skip("Can instantiate an app", function () {
        var app = new CBLabs.CybozuConnect.App("http://localhost:3000/cgi-bin/cbag/ag.cgi", "test", "test");
        assert.ok(app);
    });

    it("Can retrieve events", function () {
        var app = new CBLabs.CybozuConnect.App("http://localhost:3000/cgi-bin/cbag/ag.cgi", "test", "test"),
            schedule = new CBLabs.CybozuConnect.Schedule(app),
            events;
        events = schedule.getEvents({start: "2014-09-01T00:00:00", end: "2014-09-30T00:00:00"});
        assert.ok(events);
    });
});