import express from "express";
import cors from "cors";
const app = express();
import "dotenv/config";
import userRouter from "./routes/userRouter.js";
import blogRouter from "./routes/blogRouter.js";
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Server!");
});

app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
