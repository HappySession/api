import * as mongoose from 'mongoose';

export const Ww3Schema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});
