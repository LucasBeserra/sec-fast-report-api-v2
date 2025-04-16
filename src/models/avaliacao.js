module.exports = (sequelize, DataTypes) => {
  const Avaliacao = sequelize.define('Avaliacao', {
    resultado: {
      type: DataTypes.ENUM('aprovado', 'reprovado', 'nao_aplicavel'),
      allowNull: false
    },
    produto_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    criterio_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});

  Avaliacao.associate = models => {
    Avaliacao.belongsTo(models.Produto, { foreignKey: 'produto_id' });
    Avaliacao.belongsTo(models.Criterio, { foreignKey: 'criterio_id' });
  };

  return Avaliacao;
};
