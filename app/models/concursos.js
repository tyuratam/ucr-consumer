export default (sequelize, DataTypes) => {
  const contests = sequelize.define('concursos', {
    concurso_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    concurso: DataTypes.STRING,
    modalidade: DataTypes.STRING,
    semestre: DataTypes.INTEGER,
    ano: DataTypes.DATEONLY,
  });

  return contests;
};
