const { Valuation } = require("../models");

async function create(req, res) {
  try {
    const valuation = await Valuation.create(req.body);
    return res.status(201).json(valuation);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao criar Avaliação" });
  }
}

async function getAll(req, res) {
  try {
    const valuations = await Valuation.findAll();
    return res.status(200).json(valuations);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar Avaliação" });
  }
}

async function update(req, res) {
    try {
      const { id } = req.params;
      const valuation = await Valuation.findByPk(id);

      if (!valuation) {
        return res.status(404).json({ error: 'Avaliação não encontrada' });
      }

      await valuation.update(req.body);
      return res.status(200).json(valuation);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao atualizar Avaliação' });
    }
}



module.exports = {
  create,
  getAll,
  update
};
