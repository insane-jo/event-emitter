var express = require('express');
var router = express.Router();
var path = require('path');

router.use('event-emitter-es6', express.static( path.resolve(__dirname, '../dist') ) );

module.exports = router;