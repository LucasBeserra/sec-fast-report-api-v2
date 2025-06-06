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

    const avaliacao = await Avaliacao.create({
      numero_serie: numeroSerie,
      data: dataAvaliacao,
      id_produto: produtoId,
      id_cliente: clienteId,
      codigo_relatorio: codigoRelatorio
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

module.exports = {
  create,
  getAll,
  update,
};
