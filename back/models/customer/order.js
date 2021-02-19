module.exports = (sequelize, DataTypes) => {
  return sequelize.define('order', {
    userId: {
      type: DataTypes.STRING,
      field: "user_id"
    },
    storeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "store_id"
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