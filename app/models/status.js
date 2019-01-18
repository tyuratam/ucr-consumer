export default (sequelize, DataTypes) => {
  const status = sequelize.define('status', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: DataTypes.STRING,
    tipo: DataTypes.STRING,
  });

  return status;
};
