export default (sequelize, DataTypes) => {
  const addresses = sequelize.define('enderecos', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    logradouro: DataTypes.STRING,
    numero: DataTypes.STRING,
    complemento: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    uf: DataTypes.STRING(2),
    cep: DataTypes.INTEGER(8),
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
  });

  return addresses;
};
