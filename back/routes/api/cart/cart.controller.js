const { Cart, Store, Menu } = require("../../../models");

exports.addMenu = async (req, res) => {
  const { email, menu, category, quantity } = req.body;
  const storeId = parseInt(req.query.id);

  try {
    const isSelected = await Cart.findOne({
      attributes: ["storeId"],
      where: { userId: email },
    });
    if (isSelected) {
      const id = isSelected.dataValues.storeId;
      if (id !== storeId) throw "같은 가게의 메뉴만 담을 수 있습니다.";
    }

    const cart = await Cart.create({
      userId: email,
      storeId: storeId,
      menu: menu,
      quantity: quantity,
      category: category,
    });
    res.status(201).json({
      success: true,
      cart,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err,
    });
  }
};

exports.getCartInfo = async (req, res) => {
  const email = req.query.e;

  try {
    const cart = await Cart.findAll({ where: { userId: email } });
    if(cart.length === 0) throw new Error("장바구니가 비어있습니다.");
    const storeId = cart[0].dataValues.storeId;

    const store = await Store.findOne({
      attributes: ["storeId", "storeName", "minOrderPrice", "deliveryFee"],
      where: { storeId: storeId },
    });

    const menuList = [];
    for (let cartItem of cart) {
      const { menu, category, quantity } = cartItem.dataValues;
      const menuInfo = await Menu.findOne({
        attributes: ["name", "price"],
        where: {
          storeId: storeId,
          name: menu,
          category: category,
        },
      });
      menuList.push({ ...menuInfo.dataValues, quantity, category });
    }

    res.status(200).json({
      success: true,
      store,
      menuList,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err.message,
    });
  }
};

exports.updateMenuQuantity = async (req, res) => {
  const { email, menu, category, quantity } = req.body;

  try {
    await Cart.update(
      { quantity: quantity },
      {
        where: {
          userId: email,
          menu: menu,
          category: category,
        },
      }
    );
    res.status(204).send();
  } catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err,
    });
  }
};

exports.deleteMenu = async (req, res) => {
  const { email, menu, category } = req.body;

  try {
    await Cart.destroy({
      where: {
        userId: email,
        menu: menu,
        category: category,
      },
    });
    res.status(204).send();
  } catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err,
    });
  }
};

exports.getMenuAndPrice = async (req, res) => {
  const email = req.query.e;

  try {
    const cart = await Cart.findAll({ where: { userId: email } });
    let price = 0;

    for (const info of cart) {
      const { storeId, menu, category, quantity } = info.dataValues;
      const menuInfo = await Menu.findOne({
        attributes: ["price"],
        where: {
          storeId: storeId,
          name: menu,
          category: category,
        },
      });
      const p = menuInfo.dataValues.price;
      price += p * quantity;
    }

    res.status(200).json({
      success: true,
      menuCnt: cart.length,
      price,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err,
    });
  }
};
