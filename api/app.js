import express from "express";

import usersRouter from "./routes/users.router";

const app = express();

app.use(usersRouter, "/api/v1/users");

app.get("/", (req, res) => {
    res.send("Welcome");
});

app.listen(3000, () => {
    console.log("Api running");
});

export default app;
