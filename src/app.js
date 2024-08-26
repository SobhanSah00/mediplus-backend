import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();
app.use(cors(
    {
        origin : process.env.CORS_ORIGIN,
        credentials : true
    }
))

app.use(express.json({limit : "50mb"}))
app.use(express.urlencoded({extended : true,limit : "30mb"}))
app.use(cookieParser());
app.use(express.static("public"))

// import routes
import userRouter from "./routes/user.routes.js"

//route declaration 
app.use("/api/v1/users",userRouter);

export {app}