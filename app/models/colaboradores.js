export default (sequelize, DataTypes) => {
  const employees = sequelize.define('colaboradores', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    codigo: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    callcenter: DataTypes.BOOLEAN,
  });

  employees.associate = (models) => {
    models.colaboradores.belongsTo(models.polos, {
      foreignKey: 'polo_id',
    });
  };

  return employees;
};
