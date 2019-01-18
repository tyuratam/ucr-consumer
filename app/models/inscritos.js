export default (sequelize, DataTypes) => {
  const enrolled = sequelize.define('inscritos', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    codigo_acompanhamento: DataTypes.INTEGER,
    codigo_candidato: DataTypes.INTEGER,
    data_pre_inscricao: DataTypes.DATE,
    data_inscricao: DataTypes.DATE,
    data_vestibular: DataTypes.DATE,

    data_retorno: DataTypes.DATE,
    horario_retorno: DataTypes.DATE,
    dias_sem_contato: DataTypes.INTEGER,
    ultimo_contato: DataTypes.DATE,
    observacoes: DataTypes.STRING,

    mensalidade: DataTypes.STRING,
    motivo: DataTypes.STRING,

    ultimo_atendimento_colaborador: DataTypes.STRING,
    ultimo_local_atendimento: DataTypes.STRING,
  });

  enrolled.associate = (models) => {
    models.inscritos.belongsTo(models.pessoas, {
      foreignKey: 'pessoa_id',
    });

    models.inscritos.hasOne(models.concursos, {
      foreignKey: 'concurso_id',
    });

    models.inscritos.hasOne(models.cursos, {
      foreignKey: 'curso_id',
    });

    models.inscritos.belongsTo(models.polos, {
      foreignKey: 'polo_id',
    });

    models.inscritos.hasMany(models.status, {
      foreignKey: 'status_id',
    });

    models.inscritos.hasMany(models.colaboradores, {
      foreignKey: 'fatura_colaborador_id',
    });

    models.inscritos.hasMany(models.colaboradores, {
      foreignKey: 'inscricao_colaborador_id',
    });
  };

  return enrolled;
};
