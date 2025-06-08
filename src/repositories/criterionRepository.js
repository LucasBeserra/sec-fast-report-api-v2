const { Criterion } = require("../models");

const create = async () => Criterion.create(criterionData);
const findAll = async () => Criterion.findAll();
const findById = async (id) => Criterion.findByPk(id);
const findByName = async (name) => Criterion.findOne({ where: { description: name } });
const update = async (id, criterionData) => Criterion.update(criterionData, { where: { criterion_id: id } });
const destroy = async (id) => Criterion.destroy({ where: { criterion_id: id } });

module.exports = {
    create,
    findAll,
    findById,
    findByName,
    update,
    destroy,
};