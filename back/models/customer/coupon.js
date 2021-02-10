module.exports = (sequelize, DataTypes) => {
  return sequelize.define('coupon', {
    couponId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: "coupon_id"
    },
    couponName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "coupon_name"
    },
    restaurant: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "restaurant"
    },
    used: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: "used"
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });
}