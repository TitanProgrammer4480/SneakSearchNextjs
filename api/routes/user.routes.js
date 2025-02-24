import express from "express";

import authorize from "../middleware/auth.middleware.js";

import { getUser, getUsers } from "../controllers/user.controller.js";

const usersRouter = express.Router();

usersRouter.get('/', getUsers);

usersRouter.get('/:id', authorize, getUser);

usersRouter.post('/', async (req, res) => {
  console.log(req.body.name);
  console.log(req.body.password);
  res.send({"title":"create a user"});
});

usersRouter.put('/:id', async (req, res) => {
  res.send({"title":"update a user"});
});

usersRouter.delete('/:id', async (req, res) => {
  res.send({"title":"delete a user"});
});

export default usersRouter;
