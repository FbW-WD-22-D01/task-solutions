import httpErrors from 'http-errors'
import User from '../../models/Users.js'

/** @type {import("express").RequestHandler} */
export default async function auth(req, res, next) {
  const token = req.headers['x-auth']

  if(!token) throw httpErrors.Unauthorized('You shall not pass')

  const user = User.findOne().where('token').equals(token)

  if(!user) throw httpErrors.Unauthorized('You shall not pass')

  req.user = user

  next()
}