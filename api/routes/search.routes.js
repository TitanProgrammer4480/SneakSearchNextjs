import express from "express";
import { googleSearch } from "../functions/searchFunctions.js";

const searchRouter = express.Router();

searchRouter.get('/', async (req, res) => {
  res.send({"title":"use search"});
});

searchRouter.get('/google/:search', async (req, res) => {
  const response = await googleSearch(req.params.search);
  res.send(response);
});

export default searchRouter;
