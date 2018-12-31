export default (sequelize, DataTypes) => {
  const pessoas = sequelize.define('pessoas', {
    cpf: {
      type: DataTypes.INTEGER,
      autoIncrement: false,
      primaryKey: true,
    },
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
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
  });
  return pessoas;
};
