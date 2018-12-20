const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shop');

router.get('/', shopController.getProducts);
router.get('/products/:productId', shopController.getDetails);
router.get('/wishlist', shopController.getWishlist);
router.post('/wishlist', shopController.postWishlist);
router.post('/cart-delete-item', shopController.postWishListDelete);
// router.get('/orders', shopController.getOrders);

module.exports = router;
