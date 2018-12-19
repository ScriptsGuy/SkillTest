const Product = require('../models/product');

exports.getAddComputersAccessories = (req, res, next) => {
  res.render('admin/ComputersAccessories', {
    pageTitle: 'Add Product',
    path: '/admin/ComputersAccessories'
  });
};

exports.postAddProduct = (req, res, next) => {
  const { name } = req.body;
  const { category } = req.body;
  const { productCondition } = req.body;
  const { brand } = req.body;
  const { processor } = req.body;
  const { RAM } = req.body;
  const { diskType } = req.body;
  const { screenSize } = req.body;
  const { graphicsCard } = req.body;
  const { price } = req.body;
  const { priceState } = req.body;
  const { exchange } = req.body;
  const { image } = req.body;
  const { city } = req.body;
  const { phoneNumber } = req.body;
  const { email } = req.body;
  const { description } = req.body;
  const product = new Product(name, category, image, description, price);
  console.log('NEW Product Added'.bgCyan.black);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};
