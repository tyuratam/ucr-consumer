export default (sequelize, DataTypes) => {
  const preEnrolled = sequelize.define('pre_inscritos', {
    codigo_acompanhamento: DataTypes.INTEGER,
    concurso: DataTypes.STRING,
    candidato: DataTypes.INTEGER,
    status_prova: DataTypes.STRING,
    status_taxa: DataTypes.STRING,
    status: DataTypes.STRING,
    status_mudanca: DataTypes.DATE,
    desistiu: DataTypes.STRING,
    cancelado: DataTypes.STRING,
    mensalidade: DataTypes.STRING,
    data_vestibular: DataTypes.DATE,
    colaborador_inscricao: DataTypes.STRING,
    colaborador_fatura: DataTypes.STRING,
    ultimo_contato: DataTypes.DATE,
    dias_sem_contato: DataTypes.INTEGER,
    status_atendimento: DataTypes.STRING,
    motivo: DataTypes.STRING,
    observacoes: DataTypes.STRING,
    ultimo_atendimento_colaborador: DataTypes.STRING,
    ultimo_local_atendimento: DataTypes.STRING,
    data_inscricao: DataTypes.DATE,
    data_pre_inscricao: DataTypes.DATE,
    data_retorno: DataTypes.DATE,
    horario_retorno: DataTypes.DATE,
    origem: DataTypes.STRING,

    // Relations
    pessoa_id: DataTypes.INTEGER,
    curso_id: DataTypes.STRING,
    polo_id: DataTypes.STRING,
  });

  return preEnrolled;
};
