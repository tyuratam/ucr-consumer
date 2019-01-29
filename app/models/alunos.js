export default (sequelize, DataTypes) => {
  const students = sequelize.define('alunos', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ra: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
    ingresso: DataTypes.DATEONLY,
  });

  students.associate = (models) => {
    models.alunos.belongsTo(models.pessoas, {
      foreignKey: 'pessoa_id',
    });

    models.alunos.hasOne(models.cursos, {
      foreignKey: 'curso_id',
    });
  };

  return students;
};
