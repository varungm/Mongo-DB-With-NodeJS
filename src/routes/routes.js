const { addnewProduct,getProducts,getProductWithID,updateProduct,deleteProduct } = require('../controllers/controllers');
const routes = (app)=>{
   app.route('/products')
     //Post endpoint
    .post(addnewProduct)
    .get(getProducts);

    app.route('/products/:ProductID')
    .get(getProductWithID)
    .put(updateProduct)
    .delete(deleteProduct);
};


module.exports = routes;