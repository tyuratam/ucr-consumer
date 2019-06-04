export default (sequelize, DataTypes) => {
  const tracking = sequelize.define('acompanhamentos', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    codigo_acompanhamento: DataTypes.INTEGER,
    data_pre_inscricao: DataTypes.DATE,

    // Pré inscritos
    total_contatos: DataTypes.INTEGER,
    primeira_observacao: DataTypes.STRING,
    ultima_observacao: DataTypes.STRING,

    // Inscritos
    codigo_candidato: DataTypes.INTEGER,
    data_inscricao: DataTypes.DATE,
    data_vestibular: DataTypes.DATE,

    data_retorno: DataTypes.DATE,
    horario_retorno: DataTypes.TIME,
    dias_sem_contato: DataTypes.INTEGER,
    ultimo_contato: DataTypes.DATE,
    observacoes: DataTypes.STRING,

    mensalidade: DataTypes.STRING,
    motivo: DataTypes.STRING,

    ultimo_atendimento_colaborador: DataTypes.STRING,
    ultimo_local_atendimento: DataTypes.STRING,
  });

  tracking.associate = (models) => {
    models.acompanhamentos.belongsTo(models.pessoas, {
      foreignKey: 'pessoa_id',
    });

    models.acompanhamentos.hasOne(models.concursos, {
      foreignKey: 'concurso_id',
    });

    models.acompanhamentos.hasOne(models.cursos, {
      foreignKey: 'curso_id',
    });

    models.acompanhamentos.belongsTo(models.polos, {
      foreignKey: 'polo_id',
    });

    models.acompanhamentos.hasMany(models.termos, {
      foreignKey: 'termo_id',
    });

    models.acompanhamentos.hasMany(models.colaboradores, {
      foreignKey: 'fatura_colaborador_id',
    });

    models.acompanhamentos.hasMany(models.colaboradores, {
      foreignKey: 'inscricao_colaborador_id',
    });

    models.acompanhamentos.hasMany(models.colaboradores, {
      foreignKey: 'primeiro_atendimento_colaborador_id',
    });

    models.acompanhamentos.hasMany(models.colaboradores, {
      foreignKey: 'ultimo_atendimento_colaborador_id',
    });
  };

  return tracking;
};
