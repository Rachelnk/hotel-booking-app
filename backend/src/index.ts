import express, {Request, Response} from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth"
import cookieParser from "cookie-parser";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(()=>
console.log(
    "Connected to database: ",
    process.env.MONGODB_CONNECTION_STRING
)
);  

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: process.env.FORNTEND_URL,
    credentials: true,
}));

app.use("/api/auth", authRoutes )
app.use("/api/users", userRoutes)
// app.get("/api/test",async (req: Request, res: Response) => {
//     res.json({mesage: "Hello"})
    
// })

app.listen(3000, () => {
    console.log("Server running on localhost:3000");
})