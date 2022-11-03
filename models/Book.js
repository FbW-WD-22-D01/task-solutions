import mongoose from 'mongoose'

const Schema = mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  genre: {type: String, enum: ['Old', 'New']}
})

const Book = mongoose.model('Book', Schema, 'books')

export default Book