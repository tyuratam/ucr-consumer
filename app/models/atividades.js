export default (sequelize, DataTypes) => {
  const activities = sequelize.define('atividades', {
    aluno_id: {
      type: DataTypes.INTEGER,
      autoIncrement: false,
      primaryKey: true,
    },
    ra: {
      type: DataTypes.INTEGER,
      autoIncrement: false,
      primaryKey: true,
    },
    ava: DataTypes.STRING,
    aula: DataTypes.STRING,
    atividade: DataTypes.STRING,
    forum: DataTypes.STRING,
  });

  return activities;
};
