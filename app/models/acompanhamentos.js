export default (sequelize, DataTypes) => {
  const tracking = sequelize.define('acompanhamentos', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  });

  tracking.associate = (models) => {
    models.acompanhamentos.hasMany(models.pre_inscritos, {
      foreignKey: 'pre_inscrito_id',
    });

    models.acompanhamentos.hasMany(models.inscritos, {
      foreignKey: 'pre_inscrito_id',
    });
  };

  return tracking;
};
