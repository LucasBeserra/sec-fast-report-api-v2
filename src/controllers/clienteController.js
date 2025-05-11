const { Cliente } = require('../models');


async function create(req, res) {
    try {
      const cliente = await Cliente.create(req.body);
      return res.status(201).json(cliente);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao criar Cliente' });
    }
 }

async function getAll(req, res) {
    try {
      const clientes = await Cliente.findAll();
      return res.status(200).json(clientes);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar Clientes' });
    }
}

async function getOne(req, res) {
    try {
      const { id } = req.params;
      const cliente = await Cliente.findByPk(id);

      if (!cliente) {
        return res.status(404).json({ error: 'Cliente não encontrado' });
      }

      return res.status(200).json(cliente);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar Cliente' });
    }
}

async function update(req, res) {
    try {
      const { id } = req.params;
      const cliente = await Cliente.findByPk(id);

      if (!cliente) {
        return res.status(404).json({ error: 'Cliente não encontrado' });
      }

      await cliente.update(req.body);
      return res.status(200).json(cliente);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao atualizar Cliente' });
    }
 }

async function deletar(req, res) {
    try {
      const { id } = req.params;
      const cliente = await Cliente.findByPk(id);

      if (!cliente) {
        return res.status(404).json({ error: 'Cliente não encontrado' });
      } else {
        await cliente.destroy();
        return res.status(204).send();
      }

    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao deletar Cliente' });
    }
 }
 

 module.exports = {
    create,
    getAll,
    getOne,
    update,
    deletar
 }

