/** @format */

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
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
  Product.associate = db = {};
  return Product;
};
