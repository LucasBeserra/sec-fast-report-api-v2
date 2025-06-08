const productRepository = require("../repositories/productRepository");

function idValidation(productData) {
  //Verifica se o id do Produto foi informado
  if (!productData.id) {
    throw new Error("O id do Produto precisa ser informado");
  }
}

async function create(productData) {
  //Verifica se o nome do Produto foi informado
  if (!productData.name || productData.name.trim() === "") {
    throw new Error("O nome do Produto precisa ser informado");
  }
  //normaliza o nome que esta sendo cadastrado com o padrao do banco
  productData.name = productData.name.toUpperCase();

  //Verifica se ja existe um Produto com esse nome
  const existingProduct = await productRepository.findByName(productData.name);

  //Se ja existir um Produto com esse nome, retorna um erro
  if (existingProduct) {
    throw new Error("Ja existe um Produto com esse nome");
  }
  //Se nao existir um Produto com esse nome, cria o Produto
  return productRepository.create(productData);
}

function findAll() {
  //Apenas retorna todos os Produtos
  return productRepository.findAll();
}

function findById(productData) {
  //Verifica se o id do Produto foi informado
  idValidation(productData);

  //Se o id do Produto foi informado, retorna o Produto
  return productRepository.findById(productData.id);
}

function findByName(productData) {
  //Verifica se o nome do Produto foi informado
  if (!productData.name || productData.name.trim() === "") {
    throw new Error("O nome do Produto precisa ser informado");
  }
  //Se o nome do Produto foi informado, retorna o Produto
  return productRepository.findByName(productData.name);
}

function update(productData) {
  //Verifica se o id do Produto foi informado
  idValidation(productData);

  //Se o id do Produto foi informado, atualiza o Produto
  return productRepository.update(productData, productData.id);
}

function destroy(productData) {
  //Verifica se o id do Produto foi informado
  idValidation(productData);

  //Se o id do Produto foi informado, deleta o Produto
  return productRepository.destroy(productData.id);
}

module.exports = {
    create,
    findAll,
    findById,
    findByName,
    update,
    destroy
};
