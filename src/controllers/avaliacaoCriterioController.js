const { AvaliacaoCriterio, Criterio } = require('../models');

async function create(req, res) {
    try {
      const { avaliacaoId, criterioId, status } = req.body;

      const avaliacaoCriterio = await AvaliacaoCriterio.create({
        avaliacaoId,
        criterioId,
        status,
      });

      return res.status(201).json(avaliacaoCriterio);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao criar AvaliaçãoCritério' });
    }
}

async function getAll(req, res) {
    try {
      const avaliacaoCriterios = await AvaliacaoCriterio.findAll({
        include: [{ model: Criterio }],
      });
      return res.status(200).json(avaliacaoCriterios);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar AvaliaçãoCritérios' });
    }
}

async function getOne(req, res) {
    try {
      const { id } = req.params;
      const avaliacaoCriterio = await AvaliacaoCriterio.findByPk(id, {
        include: [{ model: Criterio }],
      });

      if (!avaliacaoCriterio) {
        return res.status(404).json({ error: 'AvaliaçãoCritério não encontrado' });
      }

      return res.status(200).json(avaliacaoCriterio);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar AvaliaçãoCritério' });
    }
}

async function update(req, res) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const avaliacaoCriterio = await AvaliacaoCriterio.findByPk(id);

      if (!avaliacaoCriterio) {
        return res.status(404).json({ error: 'AvaliaçãoCritério não encontrado' });
      }

      await avaliacaoCriterio.update({ status });

      return res.status(200).json(avaliacaoCriterio);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao atualizar AvaliaçãoCritério' });
    }
}

async function deletar(req, res) {
    try {
      const { id } = req.params;
      const avaliacaoCriterio = await AvaliacaoCriterio.findByPk(id);

      if (!avaliacaoCriterio) {
        return res.status(404).json({ error: 'AvaliaçãoCritério não encontrado' });
      }

      await avaliacaoCriterio.destroy();
      return res.status(204).send();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao deletar AvaliaçãoCritério' });
    }
}

module.exports = {
    create,
    getAll,
    getOne,
    update,
    deletar
}