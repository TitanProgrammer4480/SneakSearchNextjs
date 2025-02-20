import express from "express";
import googleIt from 'google-it';
import axios from "axios";

const searchRouter = express.Router();

searchRouter.get('/', async (req, res, next) => {
  res.send({"title":"use search"});
});

searchRouter.get('/google/:search', async (req, res, next) => {
  const selectRandom = () => {
    const userAgents = ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36", ]
    var randomNumber = Math.floor(Math.random() * userAgents.length);
    return userAgents[randomNumber];
  }
  let user_agent = selectRandom();
  try {
    let headers = {
      "User-Agent": user_agent
    }
    const response = await axios.get(`https://www.google.com/search?q=${req.params.search}&gl=us&hl=en`, headers)
    res.send(response.data);
  } catch(e) {
    console.log("There was an error in the request: " + e);
  }
});

searchRouter.get('/:id', async (req, res, next) => {
    googleIt({'query': req.params.id}).then(results => {
      console.log(req.params.id);
      console.log(results);
      res.send({"results": results});
     }).catch(e => {
      res.send({"error": e});
     })
});

export default searchRouter;
