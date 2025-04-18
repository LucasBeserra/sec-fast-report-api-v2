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

async function getAllAvalicoes(params) {
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
}

module.exports = {
  criarAvaliacao,
  getAvaliacaoPorId,
  getAllAvalicoes
};
