const { User } = require("../models");

const create = async () => User.create(userData);
const findAll = async () => User.findAll();
const findById = async (id) => User.findByPk(id);
const findByName = async (name) => User.findOne({ where: { name: name } });
const update = async (id, userData) => User.update(userData, { where: { id } });
const destroy = async (id) => User.destroy({ where: { id } });

module.exports = {
    create,
    findAll,
    findById,
    findByName,
    update,
    destroy,
};