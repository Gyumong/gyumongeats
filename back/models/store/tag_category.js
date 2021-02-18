module.exports = (sequelize, DataTypes) => {
  return sequelize.define('tag_category', {
    category: {
      type: DataTypes.STRING,
      primaryKey: true,
      field: 'category'
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });
}