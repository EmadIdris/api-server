'use strict'
const Clothes = (sequelize , DataTypes)=>sequelize.define('Clothes',{
        Name:
        {
            type : DataTypes.STRING ,
            allowNull : false 
        },
        Size: 
        {
            type : DataTypes.INTEGER
        }
})
module.exports=Clothes