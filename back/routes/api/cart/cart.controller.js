const { Cart } = require('../../../models');

exports.addMenu = async (req, res) => {
  const { email, menu } = req.body;
  const storeId = req.query.id;

  try {
    const cart = await Cart.create({
      userId: email,
      storeId: storeId,
      menu: menu
    });
    res.status(201).json({
      success: true,
      cart
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err
    });
  }
};