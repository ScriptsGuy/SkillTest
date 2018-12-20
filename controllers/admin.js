const Compacc = require('../models/compacc');

exports.getAddComputersAccessories = (req, res, next) => {
  res.render('admin/edit-ComputersAccessories', {
    pageTitle: 'Add ComputersAccessories',
    path: '/admin/ComputersAccessories',
    editing: false
  });
};

exports.getEditComputersAccessories = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const { productId } = req.params;
  Compacc.findById(productId)
    .then((product) => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-ComputersAccessories', {
        pageTitle: 'Edit ComputersAccessories',
        path: '/admin/edit-ComputersAccessories',
        editing: editMode,
        product
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postEditComputersAccessories = (req, res, next) => {
  const productId = req.body.productId;
  const updatedname = req.body.name;
  const updatedcategory = req.body.category;
  const updatedproductCondition = req.body.productCondition;
  const updatedbrand = req.body.brand;
  const updatedprocessor = req.body.processor;
  const updatedram = req.body.ram;
  const updateddiskType = req.body.diskType;
  const updatedscreenSize = req.body.screenSize;
  const updatedgraphicsCard = req.body.graphicsCard;
  const updatedprice = req.body.price;
  const updatedpriceState = req.body.priceState;
  const updatedexchange = req.body.exchange;
  const updatedimage = req.body.image;
  const updatedcity = req.body.city;
  const updatedphoneNumber = req.body.phoneNumber;
  const updatedemail = req.body.email;
  const updateddescription = req.body.description;
  Compacc.findById(productId)
    .then((product) => {
      product.name = updatedname;
      product.category = updatedcategory;
      product.productCondition = updatedproductCondition;
      product.brand = updatedbrand;
      product.processor = updatedprocessor;
      product.ram = updatedram;
      product.diskType = updateddiskType;
      product.screenSize = updatedscreenSize;
      product.graphicsCard = updatedgraphicsCard;
      product.price = updatedprice;
      product.priceState = updatedpriceState;
      product.exchange = updatedexchange;
      product.image = updatedimage;
      product.city = updatedcity;
      product.phoneNumber = updatedphoneNumber;
      product.email = updatedemail;
      product.description = updateddescription;
      return product.save();
    })
    .then((result) => {
      console.log('Updated Compacc'.bgCyan.black);
      res.redirect('/admin/products');
    })
    .catch((err) => {
      console.log(err);
    });
};

// exports.getAddCars = (req, res, next) => {
//   res.render('admin/cars', {
//     pageTitle: 'Edit Product',
//     path: '/admin/cars'
//   });
// };

exports.postAddComputersAccessories = (req, res, next) => {
  const { name } = req.body;
  const { category } = req.body;
  const { productCondition } = req.body;
  const { brand } = req.body;
  const { processor } = req.body;
  const { ram } = req.body;
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
  const compacc = new Compacc({
    name,
    category,
    productCondition,
    brand,
    processor,
    ram,
    diskType,
    screenSize,
    graphicsCard,
    price,
    priceState,
    exchange,
    image,
    city,
    phoneNumber,
    email,
    description,
    userId: req.user
  });
  compacc
    .save()
    .then((params) => {
      console.log('NEW Product Added'.bgCyan.black);
      res.redirect('/admin/products');
    })
    .catch((err) => {
      console.log(err);
    });
};

// exports.postAddCar = (req, res, next) => {
//   const { name } = req.body;
//   const { year } = req.body;
//   const { model } = req.body;
//   const { version } = req.body;
//   const { category } = req.body;
//   const { engin } = req.body;
//   const { energy } = req.body;
//   const { gearBox } = req.body;
//   const { color } = req.body;
//   const { milage } = req.body;
//   const { papers } = req.body;
//   const { price } = req.body;
//   const { priceState } = req.body;
//   const { exchange } = req.body;
//   const { image } = req.body;
//   const { city } = req.body;
//   const { phoneNumber } = req.body;
//   const { email } = req.body;
//   const { description } = req.body;
//   const product = new Product(name, category, image, description, price);
//   console.log('NEW car Added'.bgCyan.black);
//   product.save();
//   res.redirect('/');
// };

exports.getProducts = (req, res, next) => {
  Compacc.find()
    // .populate('userId')
    .then((products) => {
      console.log(products);
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postDeleteCompacc = (req, res, next) => {
  const { productId } = req.body;
  Compacc.findByIdAndRemove(productId)
    .then(() => {
      console.log('destroyed product'.bgRed.black.bold);
      req.user
        .removeWishList(productId)
        .then((result) => {
          console.log('removed from wishlist'.red);
        })
        .catch((err) => {
          console.log(err);
        });
      res.redirect('/admin/products');
    })
    .catch((err) => {
      console.log(err);
    });
};
