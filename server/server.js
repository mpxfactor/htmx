import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParse from "body-parser";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParse.json());

app.get("/", (req, res, next) => {
    res.send("<h1>Welcome to HTMX GET Request</h1>")
})

app.post("/", (req, res, next) => {
  res.send("<h1>Welcome to HTMX POST Request</h1>");
});

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
