const { Op } = require('sequelize');
const {
  sequelize,
  Review,
  Order,
  Store
} = require('../../../models');

exports.writeReview = async (req, res) => {
  const {
    email,
    storeId,
    orderId,
    content,
    img,
    GPA,
    menuName
  } = req.body;
  const t = await sequelize.transaction();

  try {
    const review = await Review.create({
      userId: email,
      storeId,
      orderId,
      content,
      img,
      GPA,
      menu: menuName
    }, { transaction: t });

    const storeInfo = (await Store.findOne({
      attributes: ["GPA", "reviewCnt"],
      where: { storeId },
      transaction: t
    })).dataValues;
    await Store.update(
      {
        GPA: storeInfo.GPA + GPA,
        reviewCnt: storeInfo.reviewCnt + 1
      },
      {
        where: { storeId },
        transaction: t
      }
    );

    await Order.update(
      { reviewRegistered: true },
      {
        where: { id: orderId },
        transaction: t
      }
    );

    await t.commit();
    res.status(201).json({
      success: true,
      review
    });
  } catch (err) {
    await t.rollback();
    res.status(400).json({
      success: false,
      errorMessage: err
    });
  }
};

exports.getReviewList = async (req, res) => {
  const id = req.params.id;
  const type = req.query.t;
  const photo = req.query.p;
  
  try {
    let review;
    const cond = [{ storeId: id }];

    if(photo) cond.push({ img: { [Op.not]: null } });

    if(type == undefined) {
      review = await Review.findAll({
        where: { [Op.and]: cond },
        order: [ [ "createdAt", 'DESC' ] ]
      });
    } else {
      if(type !== 'ASC' && type !== 'DESC') throw "정렬 옵션이 잘못되었습니다.";
      
      review = await Review.findAll({
        where: { [Op.and]: cond },
        order: [
          [ "GPA", type ],
          [ "createdAt", "DESC" ]
        ]
      });
    }

    res.status(200).json({
      success: true,
      review
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err
    });
  }
};