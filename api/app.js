import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome");
});

app.listen(3000, () => {
    console.log("Api running");
});

export default app;