export default (sequelize, DataTypes) => {
  const activities = sequelize.define('atividades', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ava: DataTypes.DATEONLY,
    aula: DataTypes.DATEONLY,
    atividade: DataTypes.DATEONLY,
    forum: DataTypes.DATEONLY,
  });

  activities.associate = (models) => {
    models.atividades.belongsTo(models.alunos, {
      foreignKey: 'aluno_id',
    });
  };

  return activities;
};
