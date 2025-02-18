import express from "express";

import usersRouter from "./routes/users.routes.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/auth", authRouter);

app.get("/", (req, res) => {
    res.send("Welcome");
});

app.listen(8000, () => {
    console.log("Api running");
});

export default app;
