module.exports = (sequelize,DataTypes)=>{
    const Category = sequelize.define('Category',{
        name:{
            type:DataTypes.STRING(20),
            allowNull:false
        }
    },{
        charset:'utf8',
        collate:'utf8_general_ci',
    });
    Category.associate=(db)={};
    return Category
}