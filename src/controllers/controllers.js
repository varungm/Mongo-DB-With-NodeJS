const mongoose = require('mongoose');
const  { ProductSchema } = require('../models/models');
const Product = mongoose.model('Product',ProductSchema);


const addnewProduct = (req, res) => {
    let newProduct = new Product(req.body);

    newProduct.save((err, Product) => {
        if(err){
            res.send(err);
        }
        res.json(Product);
    })
};

const getProducts = (req, res) => {
    Product.find({},'-name -price' ,(err, Product) => {
        if(err){
            res.send(err);
        }
        res.json(Product);
    })
};

const getProductWithID = (req, res) => {
    Product.findById(req.params.ProductID, (err, Product) => {
        if(err){
            res.send(err);
        }
        res.json(Product);
    });
};

const updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.ProductID }, req.body, { new: true, useFindAndModify: false }, (err, Product) => {
        if(err){
            res.send(err);
        }
        res.json(Product);
    });
};

const deleteProduct = (req, res) =>{
    Product.deleteOne({ _id: req.params.ProductID}, (err, Product) => {
        if(err){
            res.send(err);
        }
        res.json({ message: 'successfully deleted product' });
    })
};

module.exports = {addnewProduct,getProducts,getProductWithID,updateProduct,deleteProduct};

