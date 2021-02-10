module.exports = (sequelize, DataTypes) => {
  return sequelize.define('menu', {
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
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "quantity"
    },
    GPA: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
      field: "gpa"
    },
    orderCnt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: "order_cnt"
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });
}