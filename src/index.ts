import express from "express";

const app = express();
const PORT = 5001;

app.get("/", (_req, res) => {
    res.send("Up Docker");
})

app.listen(PORT, () => {
    console.log(`Copy: http://localhost:${PORT}`);
})