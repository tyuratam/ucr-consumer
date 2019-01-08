export default (sequelize, DataTypes) => {
  const people = sequelize.define('pessoas', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cpf: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
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

  people.associate = (models) => {
    models.enderecos.hasOne(models.enderecos, {
      foreignKey: 'endereco_id',
    });
  };

  return people;
};
