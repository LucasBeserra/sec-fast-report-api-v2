const { Product } = require("../models");

const create = async () => Product.create(productData);
const findAll = async () => Product.findAll();
const findById = async () => Product.findByPk(id);
const findByName = async () => Product.findOne({ where: { name } });
const update = async () => Product.update(productData, { where: { id } });
const destroy = async () => Product.destroy({ where: { id } });

module.exports = {
    create,
    findAll,
    findById,
    findByName,
    update,
    destroy,
};