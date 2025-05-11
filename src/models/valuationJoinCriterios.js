'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ValuationJoinCriterio extends Model {
        static associate(models) {
            ValuationJoinCriterio.belongsTo(models.Valuation, { foreignKey: 'id_valuation' });
            ValuationJoinCriterio.belongsTo(models.Criterio, { foreignKey: 'id_criterio' });
        };
    };

    ValuationJoinCriterio.init({
        id_valuation: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Valuations',
                key: 'id_valuation'
            },
            allowNull: false,
            foreignKey: true
        },
        id_criterio: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Criterios',
                key: 'id_criterio'
            },
            allowNull: false,
            foreignKey: true
        },
        aprovado: DataTypes.BOOLEAN,
        reprovado: DataTypes.BOOLEAN,
        nao_aplicavel: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'ValuationJoinCriterio',
        tableName: 'valuation_join_criterios',
        timestamps: true,
    });

    return ValuationJoinCriterio;
}