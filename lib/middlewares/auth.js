import httpErrors from 'http-errors'
import User from '../../models/Users.js'

/** @type {import("express").RequestHandler} */
export default async function auth(req, res, next) {
  const token = req.headers['x-auth']

  if(!token) throw httpErrors.Unauthorized('You are not logged in')

  const user = await User.findOne()
    .where('token').equals(token)
    .select('-token -password')

  if(!user) throw httpErrors.Unauthorized('Your token is invalid')

  req.token = token
  req.user = user

  next()
}