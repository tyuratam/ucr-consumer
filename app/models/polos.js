export default (sequelize, DataTypes) => {
  const units = sequelize.define('polos', {
    polo_id: {
      type: DataTypes.INTEGER,
      autoIncrement: false,
      primaryKey: true,
    },
    nome: DataTypes.STRING,
  });

  return units;
};
