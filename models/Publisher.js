import mongoose from "mongoose"

const Schema = mongoose.Schema({
  name: { type:String, required: true },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }]
})

const Publisher = mongoose.model('Publisher', Schema, 'publishers')

export default Publisher