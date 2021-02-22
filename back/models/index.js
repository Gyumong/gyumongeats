const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development'
const config = require(path.join(__dirname, '..', 'config', 'config.js'))[env]
let db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const Address = require('./customer/address')(sequelize, Sequelize);
const Bookmark = require('./customer/bookmark')(sequelize, Sequelize);
const Cart = require('./customer/cart')(sequelize, Sequelize);
const Coupon = require('./customer/coupon')(sequelize, Sequelize);
const Customer = require('./customer/customer')(sequelize, Sequelize);
const Order = require('./customer/order')(sequelize, Sequelize);
const Review = require('./customer/review')(sequelize, Sequelize);

Customer.hasMany(Address, { foreignKey: 'userId', sourceKey: 'userId' });
Address.belongsTo(Customer, { foreignKey: 'userId', sourceKey: 'userId' });

Customer.hasMany(Bookmark, { foreignKey: 'userId', sourceKey: 'userId' });
Bookmark.belongsTo(Customer, { foreignKey: 'userId', sourceKey: 'userId' });

Customer.hasMany(Cart, { foreignKey: 'userId', sourceKey: 'userId' });
Cart.belongsTo(Customer, { foreignKey: 'userId', sourceKey: 'userId' });

Customer.hasMany(Coupon, { foreignKey: 'userId', sourceKey: 'userId' });
Coupon.belongsTo(Customer, { foreignKey: 'userId', sourceKey: 'userId' });

Customer.hasMany(Order, { foreignKey: 'userId', sourceKey: 'userId' });
Order.belongsTo(Customer, { foreignKey: 'userId', sourceKey: 'userId' });

Customer.hasMany(Review, { foreignKey: 'userId', sourceKey: 'userId' });
Review.belongsTo(Customer, { foreignKey: 'userId', sourceKey: 'userId' });

const MenuCategory = require('./store/menu_category')(sequelize, Sequelize);
const Menu = require('./store/menu')(sequelize, Sequelize);
const StoreInfo = require('./store/store_info')(sequelize, Sequelize);
const Store = require('./store/store')(sequelize, Sequelize);
const TagCategory = require('./store/tag_category')(sequelize, Sequelize);

TagCategory.hasMany(Store);
Store.belongsTo(TagCategory);

Store.hasMany(Menu);
Menu.belongsTo(Store);

MenuCategory.hasMany(Menu);
Menu.belongsTo(MenuCategory);

Store.hasOne(StoreInfo);

// remove 'id' attribute
Address.removeAttribute('id');
Bookmark.removeAttribute('id');
Cart.removeAttribute('id');
StoreInfo.removeAttribute('id');
Menu.removeAttribute('id');

db = {
  sequelize,
  Sequelize,
  Address,
  Bookmark,
  Cart,
  Coupon,
  Customer,
  Order,
  Review,
  MenuCategory,
  Menu,
  StoreInfo,
  Store,
  TagCategory
};

module.exports = db;