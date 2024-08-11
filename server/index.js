import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb+srv://yeasin:yeasin1211@memory.s9i90.mongodb.net/memories?retryWrites=true&w=majority&appName=memory";
const port = process.env.PORT || 4000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(port, () => console.log(`Server is running on ${port}`))
  )
  .catch((error) => console.log(error.massage));
 