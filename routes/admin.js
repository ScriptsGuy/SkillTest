const express = require('express');

const router = express.Router();

const adminContoller = require('../controllers/admin');

// /admin/add-product => GET
router.get('/ComputersAccessories', adminContoller.getAddComputersAccessories);
router.get('/cars', adminContoller.getAddCars);
// this get is for admin products
router.get('/products', adminContoller.getProducts);

// /admin/add-product => POST
router.post('/ComputersAccessories', adminContoller.postAddProduct);
router.post('/cars', adminContoller.postAddCar);

module.exports = router;
