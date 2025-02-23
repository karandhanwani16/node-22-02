import CustomerModel from "../models/Customers";

async function getCustomersService() {
    try {
        const customers = await CustomerModel.find();
        return customers;
    } catch (error) {
        throw error;
    }
}

async function createCustomerService(customerData) {
    try {
        const customer = await CustomerModel.insertOne(customerData);
        return customer;
    } catch (error) {
        throw error;
    }
}


export {
    getCustomersService,
    createCustomerService
}