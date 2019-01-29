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
  });

  people.associate = (models) => {
    models.pessoas.hasOne(models.enderecos, {
      foreignKey: 'endereco_id',
    });

    models.pessoas.hasMany(models.alunos, {
      foreignKey: 'aluno_id',
    });
  };

  return people;
};
