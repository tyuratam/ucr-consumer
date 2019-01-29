export default (sequelize, DataTypes) => {
  const units = sequelize.define('polos', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    codigo: DataTypes.INTEGER,
    nome: DataTypes.STRING,
  });

  units.associate = (models) => {
    models.polos.hasOne(models.enderecos, {
      foreignKey: 'endereco_id',
    });

    models.polos.hasMany(models.pessoas, {
      foreignKey: 'pessoa_id',
    });
  };

  return units;
};
