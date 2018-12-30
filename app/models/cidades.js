export default (sequelize, DataTypes) => {
  const cities = sequelize.define('cities', {
    city_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    city_slug: DataTypes.STRING,
    UF: DataTypes.STRING(2),
  });

  return cities;
};
