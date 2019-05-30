export default (sequelize, DataTypes) => {
  const history = sequelize.define('historico', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    data: DataTypes.DATE,
    objeto: DataTypes.STRING,
  });

  history.associate = (models) => {
    models.historico.hasMany(models.pessoas, {
      foreignKey: 'pessoa_id',
    });

    models.historico.hasMany(models.termos, {
      foreignKey: 'termo_id',
    });
  };

  return history;
};
