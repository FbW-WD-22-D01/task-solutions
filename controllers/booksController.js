import httpErrors from 'http-errors'
import Book from '../models/Book.js'

/** @type {import("express").RequestHandler} */
export async function getAllBooks (req, res, next) {
  const books = await Book.find()
  res.status(200).send(books)
}

/** @type {import("express").RequestHandler} */
export async function getBookById (req, res, next) {
  const id = req.params.id
  const book = Book.findById(id)

  if(!book) throw httpErrors.NotFound()

  res.status(200).send(book)
}

/** @type {import("express").RequestHandler} */
export async function createBook (req, res, next) {
  const book = await Book.create(req.body)
  res.status(201).send(book)
}