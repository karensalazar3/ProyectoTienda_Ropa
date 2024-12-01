const { Order, Product } = require("../models/index");

const OrderController = {
    async insert(req, res) {
        try {
            const order = await Order.create({
                UserId: req.body.UserId, 
                totalPrice: req.body.totalPrice,
                status: req.body.status 
            });

            
            if (req.body.ProductIds && req.body.ProductIds.length > 0) {
                
                for (let productId of req.body.ProductIds) {
                    await order.addProduct(productId);
                }
            }

            res.status(201).send({
                message: "Order created successfully",
                order
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: "There was a problem",
                error
            });
        }
    },

    async getAll(req, res) {
        try {
            const orders = await Order.findAll({
                include: {
                    model: Product,
                    attributes: ["name", "price"]
                }
            });

            res.send({
                message: "Here are all the orders",
                orders
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: "There was a problem",
                error
            });
        }
    },
};

module.exports = OrderController
