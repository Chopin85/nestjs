import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  price: Number,
});
