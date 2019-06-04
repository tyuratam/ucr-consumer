export default (sequelize, DataTypes) => {
  const contests = sequelize.define('concursos', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    codigo: DataTypes.STRING,
    semestre: DataTypes.INTEGER,
    ano: DataTypes.INTEGER,
  });

  contests.associate = (models) => {
    // Modalidade
    models.concursos.hasOne(models.termos, {
      foreignKey: 'termo_id',
    });
  };

  return contests;
};
