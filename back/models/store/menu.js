module.exports = (sequelize, DataTypes) => {
  return sequelize.define('menu', {
    menuId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'menu_id'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "name"
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "price"
    },
    introduction: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "introduction"
    },
    orderCnt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: "order_cnt"
    },
    storeId: {
      type: DataTypes.INTEGER,
      field: "store_id"
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