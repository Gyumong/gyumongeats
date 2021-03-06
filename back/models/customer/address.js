module.exports = (sequelize, DataTypes) => {
  return sequelize.define('address', {
    userId: {
      type: DataTypes.STRING,
      field: "user_id"
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      field: 'latitude'
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      field: 'longitude'
    },
    building: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'building'
    },
    unit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'unit'
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });
}