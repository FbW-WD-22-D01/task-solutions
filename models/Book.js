import mongoose from 'mongoose'

const Schema = mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  genre: {type: String, enum: ['Old', 'New']},
  publisher: { type: mongoose.Schema.Types.ObjectId, ref:'Publisher' }
})

const Book = mongoose.model('Book', Schema, 'books')

export default Book