const {
  sequelize,
  Cart,
  Store,
  Order,
  OrderingMenu
} = require('../../../models');

exports.takeOrder = async (req, res) => {
  const {
    email,
    storeId,
    price,
    requestForOwner,
    requestForRider,
    address,
    menuList
  } = req.body;
  const t = await sequelize.transaction();

  try {
    const ordering = await Order.create({
      userId: email,
      storeId,
      orderDate: new Date(),
      price,
      requestForOwner,
      requestForRider,
      address,
      reviewRegistered: false
    }, { transaction: t });
    for(const menu of menuList) {
      await OrderingMenu.create({
        orderId: ordering.id,
        userId: email,
        menu: menu.name,
        quantity: menu.quantity
      }, { transaction: t });
    }

    await Cart.destroy({
      where: {
        userId: email,
        storeId
      },
      transaction: t
    });

    const { orderCnt } = (await Store.findOne({
      attributes: ["orderCnt"],
      where: { storeId },
      transaction: t
    })).dataValues;
    await Store.update(
      { orderCnt: orderCnt+1 },
      {
        where: { storeId },
        transaction: t
      }
    );

    await t.commit();
    res.status(201).json({
      success: true,
      msg: "주문이 완료되었습니다."
    });
  } catch (err) {
    await t.rollback();
    res.status(400).json({
      success: false,
      errorMessage: err
    });
  }
};