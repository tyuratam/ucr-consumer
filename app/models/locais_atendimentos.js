export default (sequelize, DataTypes) => {
  const customerServiceLocation = sequelize.define('locais_atendimentos', {
    local_atendimento_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    local_atendimento: DataTypes.STRING,
  });

  return customerServiceLocation;
};
