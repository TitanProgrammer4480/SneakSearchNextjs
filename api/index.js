import express from "express";

import usersRouter from "./routes/users.routes.js";
import authRouter from "./routes/auth.routes.js";
import searchRouter from "./routes/search.routes.js";

const app = express();

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/search", searchRouter);

app.get("/", (req, res) => {
    res.send("Welcome");
});

app.listen(8000, () => {
    console.log("Api running at http://localhost:8000");
});

export default app;
