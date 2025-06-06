const { Client } = require("../models");

const create = async () => Client.create(clientData);
const findAll = async () => Client.findAll();
const findById = async () => Client.findByPk(id);
const findByName = async () => Client.findOne({ where: { name } });
const update = async () => Client.update(clientData, { where: { id } });
const destroy = async () => Client.destroy({ where: { id } });

module.exports = {
  create,
  findAll,
  findById,
  findByName,
  update,
  destroy,
};
