module.exports = (sequelize, DataTypes) => {
  return sequelize.define('restaurant_info', {
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "phone"
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "location"
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "time"
    },
    introduction: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "introduction"
    },
    countryOfOrigin: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "country_of_origin"
    },
    representativeName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "representative_name"
    },
    businessLicenseNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "business_license_num"
    },
    nutritionalIngredients: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "nutritional_ingredients"
    },
    allergic: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "allergic"
    },
    notice: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "notice"
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });
}