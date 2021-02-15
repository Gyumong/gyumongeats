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

Customer.hasMany(Address);
Address.belongsTo(Customer);

Customer.hasMany(Bookmark);
Bookmark.belongsTo(Customer);

Customer.hasMany(Cart);
Cart.belongsTo(Customer);

Customer.hasMany(Coupon);
Coupon.belongsTo(Customer);

Customer.hasMany(Order);
Order.belongsTo(Customer);

Customer.hasMany(Review);
Review.belongsTo(Customer);

const MenuCategory = require('./restaurant/menu_category')(sequelize, Sequelize);
const Menu = require('./restaurant/menu')(sequelize, Sequelize);
const RestaurantInfo = require('./restaurant/restaurant_info')(sequelize, Sequelize);
const Restaurant = require('./restaurant/restaurant')(sequelize, Sequelize);
const TagCategory = require('./restaurant/tag_category')(sequelize, Sequelize);

TagCategory.hasMany(Restaurant);
Restaurant.belongsTo(TagCategory);

Restaurant.hasMany(Menu);
Menu.belongsTo(Restaurant);

MenuCategory.hasMany(Menu);
Menu.belongsTo(MenuCategory);

Restaurant.hasOne(RestaurantInfo);

// remove 'id' attribute
Address.removeAttribute('id');
Bookmark.removeAttribute('id');
Cart.removeAttribute('id');
RestaurantInfo.removeAttribute('id');
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
  RestaurantInfo,
  Restaurant,
  TagCategory
};

module.exports = db;