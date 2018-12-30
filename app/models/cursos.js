export default (sequelize, DataTypes) => {
  const courses = sequelize.define('cursos', {
    curso_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    curso: DataTypes.STRING,
    curso_nome: DataTypes.STRING,
  });

  return courses;
};
