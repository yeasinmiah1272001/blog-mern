import {
  blogList,
  blogRemove,
  blogUpdate,
  bolgAdd,
} from "../controllers/blogController.js";
import express from "express";

const blogRouter = express.Router();

blogRouter.post("/add", bolgAdd);
blogRouter.put("/update", blogUpdate);
blogRouter.post("/remove", blogRemove);
blogRouter.get("/list", blogList);

export default blogRouter;
