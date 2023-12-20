import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import multer from "multer";

dotenv.config();

const app = express();
const PORT = 5000;

/**
 * Multer Configuring
 */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.send("<h1>Welcome to HTMX GET Request</h1>");
});

app.post("/", (req, res, next) => {
  res.send("<h1>Welcome to HTMX POST Request</h1>");
});

app.post("/message", (req, res, next) => {
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

app.post("/upload", upload.single("file"), (req, res, next) => {
  res.send("done");
});

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
