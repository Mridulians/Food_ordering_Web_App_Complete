import { loginUser , regsiterUser } from "../controllers/userController.js";

import express from 'express'


const userRouter = express.Router();

userRouter.post("/register" , regsiterUser)
userRouter.post("/login" , loginUser)


export default userRouter;