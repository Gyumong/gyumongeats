module.exports = (sequelize, DataTypes) => {
  return sequelize.define('order', {
    restaurantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "restaurant_id"
    },
    restaurantName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "restaurant_name"
    },
    orderDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "order_date"
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "price"
    },
    request: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "request"
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "address"
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });
}