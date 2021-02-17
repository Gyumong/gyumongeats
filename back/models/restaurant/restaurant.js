module.exports = (sequelize, DataTypes) => {
  return sequelize.define('restaurant', {
    restaurantName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "restaurant_name"
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "thumbnail"
    },
    GPA: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
      field: "gpa"
    },
    reviewCnt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: "review_cnt"
    },
    orderCnt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: "order_cnt"
    },
    minOrderPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "min_order_price"
    },
    deliveryFee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "delivery_fee"
    },
    estimatedDelTime: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "estimated_del_time"
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });
}