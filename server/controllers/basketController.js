const { Good, BasketGood, Basket } = require("../models/models")

class BasketController {

    async addToBasket(req,res,next){
        const user = req.user
        const {goodId} = req.body
        const basket = await BasketGood.create({goodId : user.id, goodId : goodId})
        return res.json(basket)
    }

    async getBasketUser(req,res){
        const {id} = req.user
        const basket = await BasketGood.findAll({include: {
                model: Good
            }, where: {basketId: id}})

        return res.json(basket)
    }

}

module.exports = new BasketController()