export default (sequelize, DataTypes) => {
  const courses = sequelize.define('cursos', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    codigo: DataTypes.STRING,
    nome: DataTypes.STRING,
  });

  return courses;
};
