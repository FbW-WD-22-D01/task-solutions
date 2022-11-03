import httpErrors from 'http-errors'
import Book from '../models/Book.js'
import Publisher from '../models/Publisher.js'

/** @type {import("express").RequestHandler} */
export async function getAllBooks (req, res, next) {
  const books = await Book.find()
  res.status(200).send(books)
}

/** @type {import("express").RequestHandler} */
export async function getBookById (req, res, next) {
  const id = req.params.id
  const book = await Book.findById(id)

  if(!book) throw httpErrors.NotFound()

  res.status(200).send(book)
}

/** @type {import("express").RequestHandler} */
export async function createBook (req, res, next) {
  const book = await Book.create(req.body)

  // add book id to publisher
  const publisher = await Publisher.findById(book.publisher)
  publisher.books.push(book._id)
  await publisher.save()

  res.status(201).send(book)
}