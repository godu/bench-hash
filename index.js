'use strict';

var fs = require('fs');

var file = fs.readFileSync('./pic.jpg');

var crypto = require('crypto');
var xxhash = require('xxhash');
var xxhashjs = require('xxhashjs');

exports.compare = {
  "xxhash" : function () {
	  xxhash.hash(file, 0xC00ACADE);
  },
  "xxhashjs" : function () {
	  xxhashjs(file, 0xC00ACADE).toString(16);
  },
  "crypto" : function () {
    var md5 = crypto.createHash('md5');
	md5.update(file);
	md5.digest('base64');
  }
};

require("bench").runMain()
