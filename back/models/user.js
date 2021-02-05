/** @format */

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING(30), // integer
        allowNull: false, // 필수
        unique: true, // 고유
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false, // 필수
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false, // 필수
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true, // 고유
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  User.associate = db = {};
  return User;
};
