import express from "express";
import cors from "cors";
import connectDB from "./connectiondb.js";
import customerRouter from "./routers/customer.router.js";
const app = express();
connectDB();

app.use(express.json());
app.use(cors());

app.use("/", customerRouter)


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})