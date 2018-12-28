export default (sequelize, DataTypes) => {
  const contestCategories = sequelize.define('categoria_concursos', {
    categoria_concurso_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    concurso_tipo: DataTypes.STRING,
  });

  return contestCategories;
};
