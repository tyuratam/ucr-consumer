export default (sequelize, DataTypes) => {
  const contestCategories = sequelize.define('categoria_concursos', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: DataTypes.STRING,
  });

  return contestCategories;
};
