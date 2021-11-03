'use strict'

const Food = (sequelize , DataTypes)=>sequelize.define('Food',{
        Name:
        {
            type : DataTypes.STRING ,
            allowNull : false 
        },
        Quantity: 
        {
            type : DataTypes.INTEGER
        }
 })
module.exports=Food