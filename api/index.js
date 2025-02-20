import express from "express";

import usersRouter from "./routes/users.routes.js";
import authRouter from "./routes/auth.routes.js";
import searchRouter from "./routes/search.routes.js";
import connectTODatabase from "./database/mongodb.js";

const app = express();

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/search", searchRouter);

app.get("/", (req, res) => {
    res.send("Welcome");
});

app.listen(8000, async () => {
    console.log("Api running at http://localhost:8000");

    await connectTODatabase();
});

export default app;
