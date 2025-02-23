import { createCustomerService, getCustomersService } from "../services/customer.service.js";


async function getCustomers(req, res) {
    try {
        const customers = await getCustomersService();
        res.status(200).json({
            status: "success",
            data: customers,
            message: "Customers fetched successfully"
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            data: null,
            message: error.message
        })

    }
}

async function createCustomer(req, res) {
    try {
        const { id, name, email, location } = req.body;

        const customerData = { id, name, email, location };

        const customer = await createCustomerService(customerData);

        res.status(200).json({
            status: "success",
            data: customer,
            message: "Customers created successfully"
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            data: null,
            message: error.message
        })

    }
}


export {
    getCustomers,
    createCustomer
}