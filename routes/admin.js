const express = require('express');

const router = express.Router();

const adminContoller = require('../controllers/admin');

// /admin/add-product => GET
router.get('/ComputersAccessories', adminContoller.getAddComputersAccessories);
// router.get('/cars', adminContoller.getAddCars);
// // this get is for admin products
router.get('/products', adminContoller.getProducts);

// // /admin/add-product => POST
router.post('/ComputersAccessories', adminContoller.postAddComputersAccessories);
router.get('/edit-ComputersAccessories/:productId', adminContoller.getEditComputersAccessories);
router.post('/edit-ComputersAccessories', adminContoller.postEditComputersAccessories);
// router.post('/cars', adminContoller.postAddCar);
router.post('/delete-product', adminContoller.postDeleteCompacc);

module.exports = router;
