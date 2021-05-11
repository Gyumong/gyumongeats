module.exports = (sequelize, DataTypes) => {
  return sequelize.define('ordering_menu', {
    orderId: {
      type: DataTypes.INTEGER,
      field: "order_id"
    },
    userId: {
      type: DataTypes.STRING,
      field: "user_id"
    },
    menu: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "menu"
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "quantity"
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "category"
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });
};