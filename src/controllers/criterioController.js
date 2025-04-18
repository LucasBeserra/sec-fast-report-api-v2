const { Criterio } = require('../models');

async function create(req, res) {
    try {
      const criterio = await Criterio.create(req.body);
      return res.status(201).json(criterio);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao criar Critério' });
    }
}

async function getAll(req, res) {
    try {
      const criterios = await Criterio.findAll();
      return res.status(200).json(criterios);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar Critérios' });
    }
}

  async function getOne(req, res) {
    try {
      const { id } = req.params;
      const criterio = await Criterio.findByPk(id);

      if (!criterio) {
        return res.status(404).json({ error: 'Critério não encontrado' });
      }

      return res.status(200).json(criterio);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar Critério' });
    }
}

async function update(req, res) {
    try {
      const { id } = req.params;
      const criterio = await Criterio.findByPk(id);

      if (!criterio) {
        return res.status(404).json({ error: 'Critério não encontrado' });
      }

      await criterio.update(req.body);
      return res.status(200).json(criterio);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao atualizar Critério' });
    }
}

async function deletar(req, res) {
    try {
      const { id } = req.params;
      const criterio = await Criterio.findByPk(id);

      if (!criterio) {
        return res.status(404).json({ error: 'Critério não encontrado' });
      }

      await criterio.destroy();
      return res.status(204).send();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao deletar Critério' });
    }
}

module.exports = {
    create,
    getAll,
    getOne,
    update,
    deletar
}
