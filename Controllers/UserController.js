const { User, Token, Sequelize} = require("../models/index")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { jwt_secret} = require("../config/config.json")["development"]
const {Op}= Sequelize


const UserController ={
    async create(req,res){
        try{
            req.body.password = await bcrypt.hash(req.body.password, 10);
      const user = await User.create(req.body);
      res.status(201).send({ message: "User successfully created", user });
        } catch (error){
            console.error(error);
            res.status(500).send({message:"There was a problem",error})
        }
    },
    async login(req,res){
        const user = await User.findOne({
            where:{
                email: req.body.email,
            },
        });
        if(!user){
            return res.status(400).send({ message: "Incorrect email or password" })
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(400).send({message: "Incorrect email or password"})
        }
        let token = jwt.sign({id:user.id},jwt_secret)
        await Token.create({token,UserId:user.id})
        res.send({token,message:"Successfully logged",user})
    },
    async logout(req, res) {
        try {
            await Token.destroy({
                where: {
                    [Op.and]: [
                        { UserId: req.user.id },
                        { token: req.headers.authorization }
                    ]
                }
            });
            res.send({ message: 'Successfully disconnected' })
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'There was a problem on disconnection' })
        }
    },
    async getUserInfoLogged(req,res){
        try {
            const users = await User.findByPK(req.user.id,{
                attributes:["description"],
                model: Order,
                include:{
                    model:Product,
                    attributes:["name","price"]
                }
            })
            res.send({message:"Here are all the users",users})
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was a problem",error})
        }
    },
}

module.exports = UserController