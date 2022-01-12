import express from "express"; // 수많은 라우트들이 담긴 파일


export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send('user index'));
userRouter.get("/edit", (req, res) => res.send('user edit'));

