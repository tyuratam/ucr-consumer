export default (sequelize, DataTypes) => {
  const preEnrolled = sequelize.define('pre_inscritos', {
    codigo_acompanhamento: DataTypes.INTEGER,
    candidato: DataTypes.INTEGER,
    origem: DataTypes.STRING,
    data_pre_inscricao: DataTypes.DATE,
    status: DataTypes.STRING,
    desistiu: DataTypes.STRING,
    cancelado: DataTypes.STRING,
    total_contatos: DataTypes.INTEGER,
    primeiro_atendimento_status: DataTypes.STRING,
    primeiro_atendimento_colaborador: DataTypes.STRING,
    primeiro_local_atendimento: DataTypes.STRING,
    primeira_observacao: DataTypes.STRING,
    ultimo_atendimento_status: DataTypes.STRING,
    ultimo_atendimento_colaborador: DataTypes.STRING,
    ultimo_local_atendimento: DataTypes.STRING,
    ultima_observacao: DataTypes.STRING,

    // Relations
    pessoa_id: DataTypes.INTEGER,
    curso_id: DataTypes.STRING,
    polo_id: DataTypes.STRING,
  });

  return preEnrolled;
};
