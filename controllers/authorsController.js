import httpErrors from 'http-errors'
import Author from '../models/Author.js'

/** @type {import("express").RequestHandler} */
export async function getAllAuthors (req, res, next) {
  let query = Author.find()

  query = query.populate('books', 'title -_id')

  const authors = await query
  res.status(200).send(authors)
}

/** @type {import("express").RequestHandler} */
export async function getAuthorById (req, res, next) {
  const id = req.params.id
  const author = await Author.findById(id)

  if(!author) throw httpErrors.NotFound()

  res.status(200).send(author)
}

/** @type {import("express").RequestHandler} */
export async function createAuthor (req, res, next) {
  const author = await Author.create(req.body)
  res.status(201).send(author)
}