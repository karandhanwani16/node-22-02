import express from "express";
import cors from "cors";
import connectDB from "./connectiondb.js";
import CustomerModel from "./models/Customers.js";
const app = express();
connectDB();

app.use(express.json());
app.use(cors());

app.get("/customers", async(req, res) => {
    try {
        const customers = await CustomerModel.find();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.post("/customers", async(req, res) => {
    try {

        const { id, name, email, location } = req.body;
        const result = await CustomerModel.insertOne({
            id,
            name,
            email,
            location
        });
        console.log(result);

        res.status(201).json({ message: "Customer created successfully" })


    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
app.put("/customers/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { name, email, location } = req.body;
        await CustomerModel.updateOne({ id: id }, { $set: { name, location, email } })
        res.status(200).json({ message: "Customer updated successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
app.delete("/customers/:id", async(req, res) => {
    try {
        const { id } = req.params;
        await CustomerModel.deleteOne({ id })
        res.status(200).json({ message: "Customer deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})