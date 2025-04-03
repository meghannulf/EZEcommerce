import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: Array,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subcategory: {
    type: String,
    required: true,
  },
  Sizes: {
    type: Array,
    required: true,
  },
  bestseller: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
});

const ProductModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default ProductModel;
