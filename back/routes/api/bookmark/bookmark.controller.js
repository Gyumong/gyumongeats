const { Bookmark, Store } = require('../../../models');

exports.addBookmark = async (req, res) => {
  const { email, storeId } = req.body;

  try {
    const bookmark = await Bookmark.create({
      userId: email,
      storeId
    });

    res.status(201).json({
      success: true,
      bookmark
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err,
    });
  }
};

exports.getBookmarkList = async (req, res) => {
  const email = req.query.e;

  try {
    const storeIdList = await Bookmark.findAll({
      attributes: ["storeId"],
      where: { userId: email }
    });

    const resultList = await Promise.all(
      storeIdList.map(async ({ dataValues }) => {
        const store = await Store.findOne({
          attributes: ["storeId", "storeName", "thumb1", "GPA", "reviewCnt", "deliveryFee", "estimatedDelTime"],
          where: { storeId: dataValues.storeId }
        });
        return store.dataValues;
      })
    );

    res.status(200).json({
      success: true,
      bookmarkList: resultList
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err,
    });
  }
};

exports.deleteBookmark = async (req, res) => {
  const email = req.query.e;
  const id = req.query.id;

  try {
    await Bookmark.destroy({
      where: {
        userId: email,
        storeId: id
      }
    });

    res.status(204).send();
  } catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err,
    });
  }
};