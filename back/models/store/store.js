module.exports = (sequelize, DataTypes) => {
  return sequelize.define('store', {
    storeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "store_id"
    },
    storeName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "store_name"
    },
    thumb1: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "thumb1"
    },
    thumb2: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "thumb2"
    },
    thumb3: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "thumb3"
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
    },
    category: {
      type: DataTypes.STRING,
      field: "category"
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });
}