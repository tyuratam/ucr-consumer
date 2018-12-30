export default (sequelize, DataTypes) => {
  const employees = sequelize.define('colaboradores', {
    colaborador_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    colaborador_codigo: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    polo_id: DataTypes.INTEGER,
  });

  return employees;
};
