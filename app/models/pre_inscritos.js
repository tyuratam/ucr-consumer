export default (sequelize, DataTypes) => {
  const preEnrolled = sequelize.define('pre_inscritos', {
    cpf: {
      type: DataTypes.INTEGER,
      autoIncrement: false,
      primaryKey: true,
    },
    ra: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    codigo_acompanhamento: DataTypes.INTEGER,
    candidato: DataTypes.INTEGER,
    telefone_ddd: DataTypes.INTEGER(2),
    telefone: DataTypes.INTEGER,
    celular_ddd: DataTypes.INTEGER(2),
    celular: DataTypes.INTEGER,
    cep: DataTypes.INTEGER(8),
    cidade: DataTypes.STRING,
    uf: DataTypes.STRING(2),
    bairro: DataTypes.STRING,
    logradouro: DataTypes.STRING,
    complemento: DataTypes.STRING,
    numero: DataTypes.STRING,
    curso: DataTypes.STRING,
    polo: DataTypes.STRING,
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
  });

  return preEnrolled;
};
