const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  wishlist: {
    items: [
      {
        productId: { type: Schema.Types.ObjectId, ref: 'compacc', required: true }
      }
    ]
  }
});

userSchema.methods.addToWishList = function(product) {
  const WishListProductIndex = this.wishlist.items.findIndex(
    // eslint-disable-next-line no-underscore-dangle
    (cp) => cp.productId.toString() === product._id.toString()
  );
  const updatedWishListItems = [...this.wishlist.items];

  if (WishListProductIndex >= 0) {
    console.log('this wish is already fullfilled!!');
  } else {
    updatedWishListItems.push({
      // eslint-disable-next-line no-underscore-dangle
      productId: product._id
    });
  }
  const updatedWishList = {
    items: updatedWishListItems
  };
  this.wishlist = updatedWishList;
  return this.save();
};

userSchema.methods.removeWishList = function(productId) {
  // eslint-disable-next-line arrow-body-style
  const updatedProduct = this.wishlist.items.filter((item) => {
    return item.productId.toString() !== productId.toString();
  });
  this.wishlist.items = updatedProduct;
  return this.save();
};

const User = mongoose.model('user', userSchema);

module.exports = User;
