var winston     = require("winston");
var connector   = require("./index");
var CBLabs = require("./lib/CBLabs");
require("./lib/core");
require("./lib/schedule");

connector.init("Cybozu", winston);

module.exports = function (config) {
    "use strict";

    var authenticate = function (username, password, cb) {
    });

    var _connector = new connector.Connector(config, authenticate, dispose, refresh);

    this.authenticate(options, cb) {
        //get session
        _connector.getSession(options, function (err, session, auth) {
            if (err) return cb(err);
            cb( { auth: auth });
        });
    };
};