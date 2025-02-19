import express from "express";
import googleIt from 'google-it';
var searchRouter = express.Router();

searchRouter.get('/', function(req, res, next) {
  res.send({"title":"use search"});
});

searchRouter.get('/:id', function(req, res, next) {
    googleIt({'query': req.params.id}).then(results => {
      console.log(req.params.id);
      console.log(results);
      res.send({"results": results});
     }).catch(e => {
      res.send({"error": e});
     })
});

export default searchRouter;
