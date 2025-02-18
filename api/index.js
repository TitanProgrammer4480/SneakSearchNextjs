import express from "express";

import usersRouter from "./routes/users.router.js";

const app = express();

app.use("/api/v1/users", usersRouter);

app.get("/", (req, res) => {
    res.send("Welcome");
});

app.listen(8000, () => {
    console.log("Api running");
});

export default app;
