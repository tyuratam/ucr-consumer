export default (sequelize, DataTypes) => {
  const contests = sequelize.define('concursos', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    codigo: DataTypes.STRING,
    modalidade: DataTypes.STRING,
    semestre: DataTypes.INTEGER,
    ano: DataTypes.DATEONLY,
  });

  return contests;
};
