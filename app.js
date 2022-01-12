import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router"; // router 를 default로 export하지않았기 때문에 이렇게 사용해야함

const app = express(); // init에 전달할 app


const handleHome = (req, res) => res.send("Hello from home");

const handleProfile = (req, res) => res.send("Hello from profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter); //use는 누군가 /users url로 접속하면, 두번째 파라미터의 모든 라우터를 실행하라는 뜻

export default app; // appjs 를 init.js에서 이용할거임