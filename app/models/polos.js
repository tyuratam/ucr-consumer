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
    models.enderecos.hasOne(models.enderecos, {
      foreignKey: 'endereco_id',
    });
  };

  return units;
};
