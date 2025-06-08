const productService = require('../services/productService');

function create(req, res) {
    try {
      const product = productService.create(req.body);
      return res.status(201).json(product);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao criar Produto' });
    }
}

async function getAll(req, res) {
    try {
      const products = await productService.findAll( { order: [['createdAt', 'DESC']] } );
      
      console.log(products);

      return res.status(200).json(products);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar Produtos' });
    }
}

async function getOne(req, res) {
    try {
      const { id } = req.params;
      const produto = await Produto.findByPk(id);

      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }

      return res.status(200).json(produto);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar Produto' });
    }
}

async function update(req, res) {
    try {
      const { id } = req.params;
      const produto = await Produto.findByPk(id);

      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }

      await produto.update(req.body);

      return res.status(200).json(produto);

    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao atualizar Produto' });
    }
}

async function destroy(req, res) {
    try {
      const { id } = req.params;
      const produto = await Produto.findByPk(id);

      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }

      await produto.destroy();
      return res.status(204).send(); 
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao deletar Produto' });
    }
}

module.exports = {
    create,
    getAll,
    getOne,
    update,
    destroy,
}
