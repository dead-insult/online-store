const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError');

class BrandController {
    async create(req, res){
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }
    async getAll(req, res){
        const brands = await Brand.findAll()
        return res.json(brands)
    }
    async delete(req, res){
        const types = await Brand.delete({name})
        return res.json(brand)
    }
    async delete(req, res) {
        const { id } = req.params;
        const brand = await Brand.findByPk(id);
    
        if (!brand) {
          return next(ApiError.notFound('Type not found'));
        }
    
        await brand.destroy();
    
        return res.json({ message: 'Type deleted successfully' });
      }
}

module.exports = new BrandController()