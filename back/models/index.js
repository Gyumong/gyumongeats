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
const OrderingMenu = require('./customer/ordering_menu')(sequelize, Sequelize);
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

Order.hasMany(OrderingMenu, { foreignKey: 'orderId', sourceKey: 'id' });
OrderingMenu.belongsTo(Order, { foreignKey: 'orderId', sourceKey: 'id' });

Order.hasOne(Review, { foreignKey: 'orderId' });

const MenuCategory = require('./store/menu_category')(sequelize, Sequelize);
const Menu = require('./store/menu')(sequelize, Sequelize);
const StoreInfo = require('./store/store_info')(sequelize, Sequelize);
const Store = require('./store/store')(sequelize, Sequelize);
const TagCategory = require('./store/tag_category')(sequelize, Sequelize);

TagCategory.hasMany(Store, { foreignKey: 'category', sourceKey: 'category' });
Store.belongsTo(TagCategory, { foreignKey: 'category', sourceKey: 'category' });

Store.hasMany(Menu, { foreignKey: 'storeId', sourceKey: 'storeId' });
Menu.belongsTo(Store, { foreignKey: 'storeId', sourceKey: 'storeId' });

MenuCategory.hasMany(Menu, { foreignKey: 'category', sourceKey: 'category' });
Menu.belongsTo(MenuCategory, { foreignKey: 'category', sourceKey: 'category' });

Store.hasOne(StoreInfo);

// remove 'id' attribute
Address.removeAttribute('id');
Bookmark.removeAttribute('id');
Cart.removeAttribute('id');
OrderingMenu.removeAttribute('id');
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
  OrderingMenu,
  Review,
  MenuCategory,
  Menu,
  StoreInfo,
  Store,
  TagCategory
};

module.exports = db;