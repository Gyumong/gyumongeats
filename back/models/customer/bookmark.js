module.exports = (sequelize, DataTypes) => {
  return sequelize.define('bookmark', {
    restaurantId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "restaurant_id"
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });
}