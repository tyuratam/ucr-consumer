export default (sequelize, DataTypes) => {
  const cities = sequelize.define('cidades', {
    cidade_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: DataTypes.STRING,
    cidade_slug: DataTypes.STRING,
    uf: DataTypes.STRING(2),
  });

  return cities;
};
