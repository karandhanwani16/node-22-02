import express from "express";
import cors from "cors";
import connectDB from "./connectiondb.js";
import CustomerModel from "./models/Customers.js";
const app = express();
connectDB();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.get("/customers", async(req, res) => {
    try {
        const customers = await CustomerModel.find().limit(3);
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})