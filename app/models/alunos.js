export default (sequelize, DataTypes) => {
  const students = sequelize.define('alunos', {
    ra: DataTypes.INTEGER,
    pessoa_id: DataTypes.INTEGER,
    curso_id: DataTypes.STRING,
  });

  return students;
};
