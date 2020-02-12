var express = require('express');
var router = express.Router();
const DAL = require('../dataAccessLayer/dataAccessLayer');

/* GET users listing. */
router.get('/api/waterFilters', function(req, res, next) { 
  console.log('processing request')
  DAL.getWaterFilter(req, res)
});

module.exports = router;
