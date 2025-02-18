import express from "express";
var searchRouter = express.Router();

searchRouter.get('/', function(req, res, next) {
  res.send({"title":"use search"});
});

searchRouter.get('/:id', function(req, res, next) {
    res.send({"title":"use spezific search"});
  });

export default searchRouter;
