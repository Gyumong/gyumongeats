module.exports = (sequelize, DataTypes) => {
  return sequelize.define('bookmark', {
    userId: {
      type: DataTypes.STRING,
      field: "user_id"
    },
    storeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "store_id"
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });
}