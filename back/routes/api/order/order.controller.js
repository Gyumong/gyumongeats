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
        quantity: menu.quantity,
        category: menu.category
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

exports.getPastOrderList = async (req, res) => {
  const email = req.query.e;

  try {
    const orderList = await Order.findAll({
      attributes: ["id", "storeId", "orderDate", "price", "reviewRegistered"],
      where: { userId: email },
      order: [ ["id", "DESC"] ]
    });

    const n_orderList = await Promise.all(
      orderList.map(async ({ dataValues }) => {
        const menuList = await OrderingMenu.findAll({
          attributes: ["menu", "quantity", "category"],
          where: { orderId: dataValues.id }
        });
        const { storeName, thumb1 } = (await Store.findOne({
          attributes: ["storeName", "thumb1"],
          where: { storeId: dataValues.storeId }
        })).dataValues;
        
        dataValues["storeName"] = storeName;
        dataValues["thumb"] = thumb1;
        dataValues["menuList"] = menuList;
        return dataValues;
      })
    );

    res.status(200).json({
      success: true,
      orderList: n_orderList
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err
    });
  }
};