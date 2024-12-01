const { Order , Product ,} = require("../models/index")

const OrderController = {
    async insert(req,res){
        try {
            const order = await Order.create(req.body)
            res.status(201).send({message:"Order created successfully",order})
            .then(order=>{
                order.addProduct(req.body.ProductId)
                res.send(order)
            })
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was a problem",error})
        }
    },
    async getAll(req,res){
        try {
            const orders = await Order.findAll({
                include:{
                    model: Product,
                    attributes:["name","price"]
                }
            })
            res.send({message:"Here are all the orders",orders})
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was a problem",error})
        }
    },
}

module.exports = OrderController