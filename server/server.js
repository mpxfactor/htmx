import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.send("<h1>Welcome to HTMX GET Request</h1>");
});

app.post("/", (req, res, next) => {
  res.send("<h1>Welcome to HTMX POST Request</h1>");
});

app.post("/post", (req, res, next) => {
  setTimeout(() => res.send("<h1>Welcome to HTMX POST Request</h1>"), 5000);
});

app.post("/echopayload", (req, res, next) => {
  const { email, password } = req.body;

  // return res.send(`<div><h1>Email = ${email}, Password = ${password}</h1></div>`);

  setTimeout(
    () =>
      res.send(`<div><h1>Email = ${email}, Password = ${password}</h1></div>`),
    2000
  );
});

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
