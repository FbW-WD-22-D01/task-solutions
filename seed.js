import Book from './models/Book.js'
import Author from './models/Author.js'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

mongoose.connect(process.env.DB_CONN)

const datasetBooks = [
  { title: "Title 1", price: 10, genre: 'Old' },
  { title: "Title 2", price: 10, genre: 'New' },
  { title: "Title 3", price: 5, genre: 'Old' },
  { title: "Title 4", price: 6, genre: 'New' },
  { title: "Title 5", price: 7, genre: 'Old' },
  { title: "Title 6", price: 8, genre: 'New' },
  { title: "Title 7", price: 9, genre: 'Old' },
  { title: "Title 8", price: 10, genre: 'New' },
  { title: "Title 9", price: 15, genre: 'Old' },
  { title: "Title 10", price: 20, genre: 'New' },
  { title: "Title 11", price: 40, genre: 'Old' },
  { title: "Title 12", price: 100, genre: 'New' },
]

const datasetAuthors = [
  { name: 'Author 1', age: 30, books: [0,1,2] },
  { name: 'Author 2', age: 31, books: [3,4,5] },
  { name: 'Author 3', age: 32, books: [6,7] },
  { name: 'Author 4', age: 32, books: [8,9] },
]

;(async () => {
  let bookIds = []
  for(const row of datasetBooks) {
    const book = await Book.create(row)
    bookIds.push(book._id)
  }
  for(const row of datasetAuthors) {
    row.books = row.books.map(n => bookIds[n])
    await Author.create(row)
  }

  process.exit()
})()

