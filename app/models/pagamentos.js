export default (sequelize, DataTypes) => {
  const payments = sequelize.define('pagamentos', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    parcela: DataTypes.INTEGER,
    vencimento: DataTypes.DATEONLY,
    pagamento: DataTypes.DATEONLY,
    valor: DataTypes.FLOAT,
  });

  payments.associate = (models) => {
    models.pagamentos.belongsTo(models.alunos, {
      foreignKey: 'aluno_id',
    });
  };

  return payments;
};
