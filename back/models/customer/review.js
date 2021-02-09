module.exports = (sequelize, DataTypes) => {
  return sequelize.define('review', {
    restaurantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'restaurant_id'
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
      type: DataTypes.INTEGER,
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
}