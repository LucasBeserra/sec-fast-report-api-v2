const { Avaliacao, AvaliacaoCriterio } = require('../models');

async function criarAvaliacao(req, res) {
  const {
    codigo_relatorio,
    numero_serie,
    data,
    produto_id,
    cliente_id,
    criterios,
  } = req.body;

  try {
    // Cria avaliação principal
    const avaliacao = await Avaliacao.create({
      codigo_relatorio,
      numero_serie,
      data,
      produto_id,
      cliente_id,
    });

    // Cria os critérios relacionados
    const avaliacaoCriterios = criterios.map((c) => ({
      avaliacao_id: avaliacao.id,
      criterio_id: c.criterio_id,
      status: c.status,
    }));

    await AvaliacaoCriterio.bulkCreate(avaliacaoCriterios);

    return res.status(201).json({ message: 'Avaliação criada com sucesso!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao criar avaliação.' });
  }
}

async function getAvaliacaoPorId(req, res) {
  const {id} = req.params;
  try {
    const avaliacao = await Avaliacao.findByPk(id, {
      include: [
        {
          model: Produto,
          as: 'produto'
        },
        {
          model: Cliente,
          as: 'cliente'
        },
        {
          model: AvaliacaoCriterio,
          as: 'avaliacaoCriterios',
          include: [
            {
              model: Criterio,
              as: 'criterio'
            }
          ]
        }
      ]
    });

    if (!avaliacao) {
      return res.status(404).json({ message: 'Avaliação não encontrada.' });
    }

    res.json(avaliacao);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar avaliação.' });
  }
}

async function getAllAvalicoes(req, res) {
  try {  
    const avalicoes = await Avaliacao.findAll({
    include: [
      {
        model: Produto,
        as: 'produto'
      },
      {
        model: Cliente,
        as: 'cliente'
      },
      {
        model: AvaliacaoCriterio,
        as: 'avaliacaoCriterios',
        include: [
          {
            model: Criterio,
            as: 'criterio'
          }
        ]
      }
    ],
    order: [['createdAt', 'DESC']] // Ordenar pelas mais recentes 
  });

  res.json(avalicoes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar avaliação.' });
  }
}

async function updateAvaliacao(req, res) {

    const { id } = req.params;
    const { codigo_relatorio, numero_serie, data, produto_id, cliente_id } = req.body;

    try {
      const avaliacao = await Avaliacao.findByPk(id);

      if (!avaliacao) {
        return res.status(404).json({ message: 'Avaliação não encontrada.' });
      }

      // Atualiza os dados da avaliação
      await avaliacao.update({
        codigo_relatorio,
        numero_serie,
        data,
        produto_id,
        cliente_id,
      });

      // Atualiza os criterais relacionados
      const criterios = req.body.criterios;

      await AvaliacaoCriterio.destroy({ where: { avaliacao_id: id } });

      const avaliacaoCriterios = criterios.map((criterio) => ({
        avaliacao_id: id,
        criterio_id: criterio.criterio_id,
        status: criterio.status,
      }));

      await AvaliacaoCriterio.bulkCreate(avaliacaoCriterios);

      return res.status(200).json({ message: 'Avaliação atualizada com sucesso!' });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro ao atualizar avaliação.' });
    }
  
}

async function deleteAvaliacao(req, res) {
  const { id } = req.params;

  try {
    const avaliacao = await Avaliacao.findByPk(id);

    // Verifica se a avaliação existe
    if (!avaliacao) {
      return res.status(404).json({ error: 'Avaliação não encontrada' });
    }

    // Remove os critérios primeiro 
    await AvaliacaoCriterio.destroy({ where: { avaliacaoId: id } });

    // Remove a avaliação
    await avaliacao.destroy();

    res.json({ message: 'Avaliação deletada com sucesso!' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar avaliação' });
  }
};

module.exports = {
  criarAvaliacao,
  getAvaliacaoPorId,
  getAllAvalicoes,
  updateAvaliacao,
  deleteAvaliacao
};
