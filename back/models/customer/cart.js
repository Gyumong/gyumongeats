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
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });
}