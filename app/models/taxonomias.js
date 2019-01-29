export default (sequelize, DataTypes) => {
  const taxonomies = sequelize.define('taxonomias', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: DataTypes.STRING,
    slug: DataTypes.STRING,
  });

  taxonomies.associate = (models) => {
    models.taxonomias.hasMany(models.termos, {
      foreignKey: 'termo_id',
    });
  };

  return taxonomies;
};
