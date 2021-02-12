module.exports = (sequelize, DataTypes) => {
  return sequelize.define('customer', {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      field: "user_id"
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "password"
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "name"
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "phone"
    },
    refreshToken: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "refresh_token"
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });
}