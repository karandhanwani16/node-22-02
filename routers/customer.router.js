import express from "express";
import { createCustomer, getCustomers } from "../controllers/customer.controller";

const router = express.Router();


router.get("/", getCustomers)
router.post("/", createCustomer)


export default router;