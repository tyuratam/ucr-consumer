export default (sequelize, DataTypes) => {
  const terms = sequelize.define('termos', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: DataTypes.STRING,
    slug: DataTypes.STRING,
  });

  terms.associate = (models) => {
    models.termos.belongsTo(models.taxonomias, {
      foreignKey: 'taxonomia_id',
    });
  };

  return terms;
};
