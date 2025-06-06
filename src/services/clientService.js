const clientRepository = require("../repositories/clientRepository");

function idValidation(clientData) {
  //Verifica se o id do Cliente foi informado
  if (!clientData.id) {
    throw new Error("O id do Cliente precisa ser informado");
  }
}

async function create(clientData) {
  if (!clientData.name || clientData.name.trim() === "") {
    throw new Error("O nome do Cliente precisa ser informado");
  }

  //normaliza o nome que está sendo cadastrado com o padrão do banco
  clientData.name = clientData.name.toUpperCase();

  //Verifica se ja existe um Cliente com esse nome
  const existingClient = await clientRepository.findByName(clientData.name);

  //Se ja existir um Cliente com esse nome, retorna um erro
  if (existingClient) {
    throw new Error("Ja existe um Cliente com esse nome");
  }

  //Se nao existir um Cliente com esse nome, cria o Cliente
  return clientRepository.create(clientData);
}

async function findAll() {
  //Apenas retorna todos os Clientes
  return clientRepository.findAll();
}

function findById(clientData) {
  //Verifica se o id do Cliente foi informado
  idValidation(clientData.id);

  //Se o id do Cliente foi informado, retorna o Cliente
  return clientRepository.findById(id);
}

function findByName(clientData) {
  //Verifica se o id do Cliente foi informado
  if (!clientData.name || clientData.name.trim() === "") {
    throw new Error("O nome do Cliente precisa ser informado");
  }
  //Se o nome do Cliente foi informado, retorna o Cliente
  return clientRepository.findByName(clientData.name);
}

function update(clientData) {
  //Verifica se o id do Cliente foi informado
  idValidation(clientData.id);

  //Se o id do Cliente foi informado, atualiza o Cliente
  return clientRepository.update(clientData, clientData.id);
}

function destroy(clientData) {
  //Verifica se o id do Cliente foi informado
  idValidation(clientData.id);

  //Se o id do Cliente foi informado, deleta o Cliente
  return clientRepository.destroy(id);
}

module.exports = {
  create,
  findAll,
  findById,
  findByName,
  update,
  destroy,
};
