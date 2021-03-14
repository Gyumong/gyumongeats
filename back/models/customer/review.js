module.exports = (sequelize, DataTypes) => {
  return sequelize.define('review', {
    userId: {
      type: DataTypes.STRING,
      field: "user_id"
    },
    storeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'store_id'
    },
    orderId: {
      type: DataTypes.INTEGER,
      field: "order_id"
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'content'
    },
    img: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'img'
    },
    GPA: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      field: 'gpa'
    },
    menu: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'menu'
    }
  }, {
    timestamps: true,
    freezeTableName: true
  });
};