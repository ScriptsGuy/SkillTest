const Compacc = require('../models/compacc');
const User = require('../models/user');

exports.getProducts = (req, res, next) => {
  Compacc.find()
    .then((products) => {
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/'
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getDetails = (req, res, next) => {
  const { productId } = req.params;
  Compacc.findById(productId)
    .then((product) => {
      res.render('shop/product-details', {
        product,
        pageTitle: 'Details',
        path: '/'
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getWishlist = (req, res, next) => {
  req.user
    .populate('wishlist.items.productId')
    .execPopulate()
    .then((user) => {
      const products = user.wishlist.items;
      res.render('shop/wishlist', {
        pageTitle: 'Wishlist',
        path: '/wishlist',
        products
      });
    });
};
exports.postWishlist = (req, res, next) => {
  const prodId = req.body.productId;
  Compacc.findById(prodId)
    .then((product) => {
      req.user.addToWishList(product);
    })
    .then((result) => {
      console.log(result);
      res.redirect('/wishlist');
    });
};
exports.postWishListDelete = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .removeWishList(prodId)
    .then((result) => {
      res.redirect('/wishlist');
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    pageTitle: 'Orders',
    path: '/orders'
  });
};
