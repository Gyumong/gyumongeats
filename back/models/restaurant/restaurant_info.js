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
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
      allowNull: false,
      field: "business_license_num"
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });
}