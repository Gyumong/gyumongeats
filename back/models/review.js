/** @format */

module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      content: {
        type: DataTypes.Text,
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
  User.associate = db = {};
  return Review;
};
