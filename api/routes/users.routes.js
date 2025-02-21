import express from "express";

const usersRouter = express.Router();

usersRouter.get('/', async (req, res) => {
  res.send({"title":"get all users"});
});

usersRouter.get('/:id', async (req, res) => {
  res.send({"title":"get a spezific user" + req.params.id});
});

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
