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

async function findAll() {
  //Apenas retorna todas as Avaliacoes
  return evaluationRepository.findAll();
}

async function findById(id) {
  //Verifica se o id da Avaliacao foi informado
  idValidation(id);

  //Se o id da Avaliacao foi informado, retorna a Avaliacao
  return evaluationRepository.findById(id);
}

async function update(evaluationData) {
  //Verifica se o id da Avaliacao foi informado
  idValidation(evaluationData);

  //Se o id da Avaliacao foi informado, atualiza a Avaliacao
  return evaluationRepository.update(
    evaluationData,
    evaluationData.evalution_id
  );
}

async function destroy(id) {
  //Verifica se o id da Avaliacao foi informado
  idValidation(id);

  //Se o id da Avaliacao foi informado, deleta a Avaliacao
  return evaluationRepository.destroy(id);
}

module.exports = {
  create,
  findAll,
  findById,
  update,
  destroy,
};
