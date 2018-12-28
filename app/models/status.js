export default (sequelize, DataTypes) => {
  const status = sequelize.define('status', {
    status_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status: DataTypes.STRING,
  });

  return status;
};
