export default (sequelize, DataTypes) => {
  const status = sequelize.define('status', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status: DataTypes.STRING,
  });

  return status;
};
