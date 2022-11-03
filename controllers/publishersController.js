import httpErrors from 'http-errors'
import Publisher from '../models/Publisher.js'
import Book from '../models/Book.js'

/** @type {import("express").RequestHandler} */
export async function getAllPublishers (req, res) {
  let query = Publisher.find()

  query = query.populate('books')

  const publishers = await query

  res.status(200).send(publishers)
}

/** @type {import("express").RequestHandler} */
export async function createPublisher(req, res) {
  const publisher = await Publisher.create(req.body)

  // each book of publisher needs to set the publisher id
  for(const bookId of publisher.books) {
    const book = await Book.findById(bookId)
    book.publisher = publisher._id
    await book.save()
  }

  res.status(200).send(publisher)
}