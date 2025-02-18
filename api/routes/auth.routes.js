import express from "express";
var authRouter = express.Router();

authRouter.get('/', function(req, res, next) {
  res.send({"title":"use auth"});
});

export default authRouter;
