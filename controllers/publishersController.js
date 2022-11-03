import httpErrors from 'http-errors'
import Publisher from '../models/Publisher.js'

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
  res.status(200).send(publisher)
}