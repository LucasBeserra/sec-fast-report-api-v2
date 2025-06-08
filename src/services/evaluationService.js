const evaluationRepository = require("../repositories/evaluationRepository");

function idValidation(evaluationData) {
    //Verifica se o id da Avaliacao foi informado
    if (!evaluationData.evalution_id) {
        throw new Error("O id da Avaliacao precisa ser informado");
    }
}

async function create(evaluationData) {
    //Verifica se o numero de série da avaliação foi informado
    if (!evaluationData.description || evaluationData.description.trim() === "") {
        throw new Error("O nome da Avaliacao precisa ser informado");
    }


    //Se o id da Avaliacao foi informado, cria a Avaliacao
    return evaluationRepository.create(evaluationData);
}