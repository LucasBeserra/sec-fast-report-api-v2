const { Evaluation } = require("../models");

async function create(req, res) {
  try {
    const {
      numeroSerie,
      dataAvaliacao,
      produtoId,
      clienteId,
      codigoRelatorio,
      criterios // ← array de critérios [{ nome: "...", status: "aprovado" }, ...]
    } = req.body;

    const evalution = await Evaluation.create({
      serial_number: numeroSerie,
      date: dataAvaliacao,
      product_id  : produtoId,
      client_id: clienteId,
      evaluation_code: codigoRelatorio
    });

    if (criterios && Array.isArray(criterios)) {
      const criteriosParaSalvar = criterios.map((c) => ({
        nome: c.nome,
        status: c.status,
        avaliacao_id: avaliacao.id
      }));

      await CriterioAvaliacao.bulkCreate(criteriosParaSalvar);
    }

    res.status(201).json({ message: "Avaliação salva com sucesso." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao salvar avaliação." });
  }
}

async function findAll(req, res) {
  try {
    const evaluations = await Evaluation.findAll();
    return res.status(200).json(evaluations);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar Avaliação" });
  }
}

async function findById(req, res) {
  try {
    const { id } = req.params;
    const evaluation = await Evaluation.findByPk(id);
    return res.status(200).json(evaluation);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar Avaliação" });
  }
}

async function findByCode(req, res) {
  try {
    const { evalutionCode } = req.params;
    const evaluation = await Evaluation.findOne({ where: { evalution_code: evalutionCode } });
    return res.status(200).json(evaluation);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar Avaliação" });
  }
}

async function update(req, res) {
  try {
    const { id } = req.params;
    const avalicao = await Avaliacao.findByPk(id);

    if (!avalicao) {
      return res.status(404).json({ error: "Avaliação não encontrada" });
    }

    await avalicao.update(req.body);
    return res.status(200).json(avalicao);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao atualizar Avaliação" });
  }
}

async function destroy(req, res) {
  try {
    const { id } = req.params;
    const avalicao = await Avaliacao.findByPk(id);

    if (!avalicao) {
      return res.status(404).json({ error: "Avaliação não encontrada" });
    }

    await avalicao.destroy();
    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao deletar Avaliação" });
  }
}

module.exports = {
  create,
  findAll,
  findById,
  findByCode,
  update,
  destroy,
};
