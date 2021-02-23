const sequelize = require('sequelize');
const { Cart, Store, Menu } = require('../../../models');

exports.addMenu = async (req, res) => {
  const { email, menu, category } = req.body;
  const storeId = parseInt(req.query.id);

  try {
    const isSelected = await Cart.findOne({
      attributes: ['storeId'],
      where: { userId: email }
    });
    if(isSelected) {
      const id = isSelected.dataValues.storeId;
      if(id !== storeId) throw "같은 가게의 메뉴만 담을 수 있습니다.";
    }

    const cart = await Cart.create({
      userId: email,
      storeId: storeId,
      menu: menu,
      quantity: 1,
      category: category
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

exports.getCartInfo = async (req, res) => {
  const email = req.query.e;

  try {
    const cart = await Cart.findAll({ where: { userId: email } });
    const storeId = cart[0].dataValues.storeId;

    const store = await Store.findOne({
      attributes: ['storeName', 'minOrderPrice', 'deliveryFee'],
      where: { storeId: storeId }
    });
    
    const menuList = [];
    for(let cartItem of cart) {
      const { menu, category, quantity } = cartItem.dataValues;
      const menuInfo = await Menu.findOne({
        attributes: ['name', 'price'],
        where: {
          storeId: storeId,
          name: menu,
          category: category
        }
      });
      menuList.push({ ...menuInfo.dataValues, quantity });
    }

    res.status(200).json({
      success: true,
      store,
      menuList
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err
    });
  }
};