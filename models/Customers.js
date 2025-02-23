import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    location: { type: String, required: false },
})

const Customer = mongoose.model("Customer", customerSchema, "customer");

export default Customer;