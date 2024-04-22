const express = require('express');
const router = express.Router();
const {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller');

//post
router.post('/', getProducts);

// get all products
router.get('/', getProducts);

// get product by id
router.get('/:id', getSingleProduct);

// create
router.post('/', createProduct);

// update product
router.put('/:id', updateProduct);

// delete product
router.put('/:id', deleteProduct);

module.exports = router;
