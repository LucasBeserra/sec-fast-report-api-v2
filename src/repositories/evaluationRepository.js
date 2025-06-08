const {Evaluation} = require('../models');

const create = async () => Evaluation.create(evaluationData);
const findAll = async () => Evaluation.findAll();
const findById = async (id) => Evaluation.findByPk(id);
const findByName = async (serial) => Evaluation.findOne({ where: { serial_number: serial } });
const update = async (id, evaluationData) => Evaluation.update(evaluationData, {where: {id}});
const destroy = async () => Evaluation.destroy({where: {id}});

module.exports = {
    create,
    findAll,
    findById,
    findByName,
    update,
    destroy,
};