export default (sequelize, DataTypes) => {
  const history = sequelize.define('historico', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    data: DataTypes.DATETIME,
    objeto: DataTypes.STRING,
  });

  history.associate = (models) => {
    models.hostorico.hasMany(models.pessoas, {
      foreignKey: 'pessoa_id',
    });

    models.hostorico.hasMany(models.termos, {
      foreignKey: 'termo_id',
    });
  };

  return history;
};
