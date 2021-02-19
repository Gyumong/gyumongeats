module.exports = (sequelize, DataTypes) => {
  return sequelize.define('coupon', {
    userId: {
      type: DataTypes.STRING,
      field: "user_id"
    },
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
    store: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "store"
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