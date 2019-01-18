export default (sequelize, DataTypes) => {
  const preEnrolled = sequelize.define('pre_inscritos', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    codigo_acompanhamento: DataTypes.INTEGER,
    data_pre_inscricao: DataTypes.DATE,
    total_contatos: DataTypes.INTEGER,
    primeira_observacao: DataTypes.STRING,
    ultima_observacao: DataTypes.STRING,
  });

  preEnrolled.associate = (models) => {
    models.pre_inscritos.belongsTo(models.pessoas, {
      foreignKey: 'pessoa_id',
    });

    models.pre_inscritos.belongsTo(models.cursos, {
      foreignKey: 'curso_id',
    });

    models.pre_inscritos.belongsTo(models.polos, {
      foreignKey: 'polo_id',
    });

    models.pre_inscritos.hasMany(models.status, {
      foreignKey: 'status_id',
    });

    models.pre_inscritos.hasMany(models.colaborador, {
      foreignKey: 'primeiro_atendimento_colaborador_id',
    });

    models.pre_inscritos.hasMany(models.colaborador, {
      foreignKey: 'ultimo_atendimento_colaborador_id',
    });
  };

  return preEnrolled;
};
