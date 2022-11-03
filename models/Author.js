import mongoose from 'mongoose'

const Schema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref:'Book'}]
})

const Author = mongoose.model('Author', Schema, 'authors')

export default Author