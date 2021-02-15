const sequelize = require('sequelize');
const { Restaurant } = require('../../../models');

exports.allRestaurants = async (req, res) => {
  try {
    const rest = await Restaurant.findAll({ order: sequelize.fn('RAND') });
    res.status(200).json({
      success: true,
      restaurant: rest
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err
    });
  }
};

exports.restaurantByCategory = async (req, res) => {
  const category = req.params.ctg;

  try {
    const rest = await Restaurant.findAll({ where: { tagCategoryCategory: category } });
    res.status(200).json({
      success: true,
      restaurant: rest
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err
    });
  }
};

// exports.