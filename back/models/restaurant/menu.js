module.exports = (sequelize, DataTypes) => {
  return sequelize.define('menu', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "name"
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "price"
    },
    introduction: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "introduction"
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "quantity"
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });
}