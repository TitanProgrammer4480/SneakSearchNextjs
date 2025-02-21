import express from "express";

const authRouter = express.Router();

authRouter.get('/', async (req, res) => {
  res.send({"title":"use auth"});
});

export default authRouter;
