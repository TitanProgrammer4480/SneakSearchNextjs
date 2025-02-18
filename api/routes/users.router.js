var express = require('express');
var usersRouter = express.Router();

router.get('/', function(req, res, next) {
  res.send({"title":"get all users"});
});

router.get('/:id', function(req, res, next) {
  res.send({"title":"get a spezific user"});
});

router.post('/', function(req, res, next) {
  res.send({"title":"create a user"});
});

router.put('/:id', function(req, res, next) {
  res.send({"title":"update a user"});
});

router.delete('/:id', function(req, res, next) {
  res.send({"title":"delete a user"});
});

export default usersRouter;
