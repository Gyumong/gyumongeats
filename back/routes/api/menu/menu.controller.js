const { Menu, MenuCategory } = require('../../../models');

exports.menuByRestaurant = async (req, res) => {
  const restaurantId = req.params.id;

  try {
    const menu = await Menu.findAll({ where: { restaurantId } });
    res.status(200).json({
      success: true,
      menu
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err
    });
  }
};

exports.menuCategory = async (req, res) => {
  try {
    const menu_category = await MenuCategory.findAll();
    res.status(200).json({
      success: true,
      menu_category
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err
    });
  }
}