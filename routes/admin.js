const express = require('express');

const router = express.Router();

const adminContoller = require('../controllers/admin');

// /admin/add-product => GET
router.get('/add-product', adminContoller.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', adminContoller.postAddProduct);

module.exports = router;
