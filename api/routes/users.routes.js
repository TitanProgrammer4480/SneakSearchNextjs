import express from "express";
var usersRouter = express.Router();

usersRouter.get('/', function(req, res, next) {
  res.send({"title":"get all users"});
});

usersRouter.get('/:id', function(req, res, next) {
  res.send({"title":"get a spezific user" + req.params.id});
});

usersRouter.post('/', function(req, res, next) {
  res.send({"title":"create a user"});
});

usersRouter.put('/:id', function(req, res, next) {
  res.send({"title":"update a user"});
});

usersRouter.delete('/:id', function(req, res, next) {
  res.send({"title":"delete a user"});
});

export default usersRouter;
