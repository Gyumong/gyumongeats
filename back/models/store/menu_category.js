module.exports = (sequelize, DataTypes) => {
  return sequelize.define('menu_category', {
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      field: "category"
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });
}