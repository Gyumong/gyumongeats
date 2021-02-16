const sequelize = require('sequelize');
const { Op } = sequelize;
const { Restaurant, TagCategory } = require('../../../models');

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

exports.allRestaurants = async (req, res) => {
  const type = req.query.t;
  const fee = req.query.f;
  const min_price = req.query.m;

  try {
    let rest;
    const cond = [];

    if(fee) cond.push({ deliveryFee: { [Op.lte]: fee } });
    if(min_price) cond.push({ minOrderPrice: { [Op.lte]: min_price } });

    if(type === undefined) {
      rest = await Restaurant.findAll({
        where: {
          [Op.and]: cond
        },
        order: sequelize.fn('RAND')
      });
    } else {
      if(type !== 'gpa' && type !== 'order_cnt') throw "정렬 옵션이 잘못되었습니다.";

      rest = await Restaurant.findAll({
        where: {
          [Op.and]: cond
        },
        order: [ [type, 'DESC'] ]
      });
    }

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
  const type = req.query.t;
  const fee = req.query.f;
  const min_price = req.query.m;

  try {
    let rest;
    const cond = [];
    cond.push({ tagCategoryCategory: category });

    if(fee) cond.push({ deliveryFee: { [Op.lte]: fee } });
    if(min_price) cond.push({ minOrderPrice: { [Op.lte]: min_price } });

    if(type === undefined) {
      rest = await Restaurant.findAll({
        where: {
          [Op.and]: cond
        }
      });
    } else {
      if(type !== 'gpa' && type !== 'order_cnt') throw "정렬 옵션이 잘못되었습니다.";

      rest = await Restaurant.findAll({
        where: {
          [Op.and]: cond
        },
        order: [ [type, 'DESC'] ]
      });
    }
    
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