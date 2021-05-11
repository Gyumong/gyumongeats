module.exports = (sequelize, DataTypes) => {
  return sequelize.define('order', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
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
    requestForOwner: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "request_for_owner"
    },
    requestForRider: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "request_for_rider"
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "address"
    },
    reviewRegistered: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: "review_registered"
    }
  }, {
    timestamps: true,
    freezeTableName: true
  });
};