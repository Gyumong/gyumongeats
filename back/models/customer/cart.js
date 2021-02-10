module.exports = (sequelize, DataTypes) => {
  return sequelize.define('cart', {
    restaurantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "restaurant_id"
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