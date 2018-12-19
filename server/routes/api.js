var express = require('express');
var router = express.Router();

var itemsService = require('../services/items');
var itemService = require('../services/item');

// Middleware to use for all API requests
router.use(function(req, res, next) {
  // do logging
  console.log('[LOG]: NEW API REQUEST');
  next(); // make sure we go to the next routes and don't stop here
});

var defaultResponse = function(req, res, next) {
  res.status(404).send({ // 404 Not Found
     status: 'ERROR',
     message: 'This request resource could not be found.'
  });
}

// ROUTE: /items/:id

router.route('/items/:id')
.all(function(req, res, next) {
  next();
})
.get(function(req, res) {
  // Input sanitizing stuff should be here
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  //res.header('Access-Control-Allow-Origin', '*');
  itemService(req.params.id).then(function(result){
    res.send(result);
  })})
.put(defaultResponse)
.post(defaultResponse)
.delete(defaultResponse);

// ROUTE: /items

router.route('/items')
.all(function(req, res, next) {
  next();
})
.get(function(req, res) {
  // Input sanitizing stuff should be here
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  //res.header('Access-Control-Allow-Origin', '*');
  itemsService(req.query.q).then(function(result) {
     res.send(result)
  })})
.put(defaultResponse)
.post(defaultResponse)
.delete(defaultResponse);

// Export API routes
module.exports = router;
