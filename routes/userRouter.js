import express from "express";
import {
  AdminLogin,
  userList,
  userLogin,
  userRegister,
  userRemove,
  userUpdated,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);
userRouter.post("/admin", AdminLogin);
userRouter.put("update", userUpdated);
userRouter.post("remove", userRemove);
userRouter.get("/userlist", userList);

export default userRouter;
