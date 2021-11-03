'use strict'

const express = require('express')
const {clothesCollection} = require('../models/index')
const clothesRouter = express.Router()
clothesRouter.get('/clothes' , getclothes)
clothesRouter.get('/clothes/:id' , getOneclothes)
clothesRouter.post('/clothes' , createclothes)
clothesRouter.put('/clothes/:id' , updateclothes)
clothesRouter.delete('/clothes/:id' , deleteclothes)

//read all
async function getclothes(req,res){
const allclothes = await clothesCollection.read()
res.status(200).json(allclothes)
}
//read one
async function getOneclothes(req,res){
    const id = req.params.id
    const clothes = await clothesCollection.read(id)
    
    res.status(200).json(clothes)
}
//create
async function createclothes(req,res){
    const newclothes = req.body
    const newclothesAdded = await clothesCollection.create(newclothes);
    res.status(201).json(newclothesAdded)
}
//update
async function updateclothes(req,res){
    const id =req.params.id
    const obj = req.body 
    const updatedclothes = await clothesCollection.update(obj,id)
    res.status(201).json(updatedclothes)
}
//delete
async function deleteclothes(req,res){
    const id = req.params.id 
    const deletedclothes = await clothesCollection.delete(id)
    res.status(204).json(deletedclothes)
}
module.exports=clothesRouter