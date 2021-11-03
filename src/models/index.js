'use strict'
const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;
// console.log(2222222,POSTGRES_URI)
const {Sequelize,DataTypes}= require('sequelize')
let sequelizeOption = process.env.NODE_ENV === 'production '? {
dialectOptions :{
    ssl :{
        require : true ,
        rejectUnauthorized : false,
    }
}
} :{}
 const clothes = require('./clothes')
 const food = require ('./food')
// console.log(1111111111111111111,food)
let sequelize = new Sequelize(POSTGRES_URI,sequelizeOption)
// console.log(33333,sequelize)
 const clothesModel = clothes(sequelize,DataTypes);
 const foodModel = food(sequelize,DataTypes);
//  console.log(foodModel)
 const Collection = require('./collection-class')
 const clothesCollection = new Collection(clothesModel)
 const foodCollection = new Collection(foodModel)
module.exports = {
    db:sequelize,
    clothesCollection : clothesCollection,
    foodCollection : foodCollection
}