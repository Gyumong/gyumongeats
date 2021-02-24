const sequelize = require('sequelize');
const { Op } = sequelize;
const {
  Store,
  StoreInfo,
  Menu,
  TagCategory,
  MenuCategory
} = require('../../../models');

exports.getTagCategory = async (req, res) => {
  try {
    const tag_category = await TagCategory.findAll();
    res.status(200).json({
      success: true,
      tag_category
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err
    });
  }
};

exports.getMenuCategory = async (req, res) => {
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
};

exports.allStores = async (req, res) => {
  const type = req.query.t;
  const fee = req.query.f;
  const min_price = req.query.m;

  try {
    let store;
    const cond = [];

    if(fee) cond.push({ deliveryFee: { [Op.lte]: fee } });
    if(min_price) cond.push({ minOrderPrice: { [Op.lte]: min_price } });

    if(type === undefined) {
      store = await Store.findAll({
        where: {
          [Op.and]: cond
        },
        order: sequelize.fn('RAND')
      });
    } else {
      if(type !== 'gpa' && type !== 'order_cnt') throw "정렬 옵션이 잘못되었습니다.";

      store = await Store.findAll({
        where: {
          [Op.and]: cond
        },
        order: [ [type, 'DESC'] ]
      });
    }

    store = store.map(({ dataValues }) => {
      const thumb1 = dataValues["thumb1"];
      const thumb2 = dataValues["thumb2"];
      const thumb3 = dataValues["thumb3"];
      delete dataValues["thumb1"];
      delete dataValues["thumb2"];
      delete dataValues["thumb3"];
      dataValues["thumb"] = [ thumb1, thumb2, thumb3 ];
      return dataValues;
    });

    res.status(200).json({
      success: true,
      Store: store
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err
    });
  }
};

exports.storeByCategory = async (req, res) => {
  const category = req.params.ctg;
  const type = req.query.t;
  const fee = req.query.f;
  const min_price = req.query.m;

  try {
    let store;
    const cond = [];
    cond.push({ category: category });

    if(fee) cond.push({ deliveryFee: { [Op.lte]: fee } });
    if(min_price) cond.push({ minOrderPrice: { [Op.lte]: min_price } });

    if(type === undefined) {
      store = await Store.findAll({
        where: {
          [Op.and]: cond
        }
      });
    } else {
      if(type !== 'gpa' && type !== 'order_cnt') throw "정렬 옵션이 잘못되었습니다.";

      store = await Store.findAll({
        where: {
          [Op.and]: cond
        },
        order: [ [type, 'DESC'] ]
      });
    }

    store = store.map(({ dataValues }) => {
      const thumb1 = dataValues["thumb1"];
      const thumb2 = dataValues["thumb2"];
      const thumb3 = dataValues["thumb3"];
      delete dataValues["thumb1"];
      delete dataValues["thumb2"];
      delete dataValues["thumb3"];
      dataValues["thumb"] = [ thumb1, thumb2, thumb3 ];
      return dataValues;
    });
    
    res.status(200).json({
      success: true,
      Store: store
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err
    });
  }
};

exports.storeDetailAndMenu = async (req, res) => {
  const StoreId = req.query.id;

  try {
    if(StoreId === undefined) throw "잘못된 ID입니다.";
    const [ info1 ] = await Store.findAll({ where: { storeId: StoreId } });
    const [ info2 ] = await StoreInfo.findAll({ where: { storeStoreId: StoreId } });
    const menu = await Menu.findAll({ where: { storeId: StoreId } });

    res.status(200).json({
      success: true,
      store_info: { info1, info2 },
      menu
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err
    });
  }
};