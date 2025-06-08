const criterionRepository = require("../repositories/criterionRepository");


function idValidation(criterionData) {
    //Verifica se o id do Criterio foi informado
    if (!criterionData.id) {
        throw new Error("O id do Criterio precisa ser informado");
    }
}

async function create(criterionData) {
    //Verifica se o nome do Criterio foi informado
    if (!criterionData.description || criterionData.description.trim() === "") {
        throw new Error("O nome do Criterio precisa ser informado");
    }

    //normaliza o nome que esta sendo cadastrado com o padrao do banco
    criterionData.description = criterionData.description.toUpperCase();

    const existingCriterion = await criterionRepository.findByName(criterionData.description);

    //Se ja existir um Criterio com esse nome, retorna um erro
    if (existingCriterion) {
        throw new Error("Ja existe um Criterio com esse nome");
    }

    //Se o nome do Criterio foi informado, cria o Criterio
    return criterionRepository.create(criterionData);
}

function findById(criterionData) {
    //Verifica se o id do Criterio foi informado
    idValidation(criterionData);

    //Se o id do Criterio foi informado, retorna o Criterio
    return criterionRepository.findById(criterionData.id);
}

function findByName(criterionData) {
    //Verifica se o nome do Criterio foi informado
    if (!criterionData.description || criterionData.description.trim() === "") {
        throw new Error("O nome do Criterio precisa ser informado");
    }
    //Se o nome do Criterio foi informado, retorna o Criterio
    return criterionRepository.findByName(criterionData.description);
}

function update(criterionData) {
    //Verifica se o id do Criterio foi informado
    idValidation(criterionData);

    //Se o id do Criterio foi informado, atualiza o Criterio
    return criterionRepository.update(criterionData, criterionData.id);
}

function destroy(criterionData) {
    //Verifica se o id do Criterio foi informado
    idValidation(criterionData);

    //Se o id do Criterio foi informado, deleta o Criterio
    return criterionRepository.destroy(criterionData.id);
}

module.exports = {
    create,
    findById,
    findByName,
    update,
    destroy,
};