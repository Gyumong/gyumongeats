module.exports = (sequelize, DataTypes) => {
  return sequelize.define('cart', {
    userId: {
      type: DataTypes.STRING,
      field: "user_id"
    },
    storeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "store_id"
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
}