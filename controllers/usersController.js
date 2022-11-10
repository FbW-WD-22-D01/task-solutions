import httpErrors from 'http-errors'
import bcrypt from 'bcrypt'
import User from '../models/Users.js'

/** @type {import("express").RequestHandler} */
export async function register(req, res) {
  const user = new User(req.body)
  user.password = await bcrypt.hash(user.password, 10)
  user.token = Math.random().toString(36).slice(2, 7)

  await user.save()
  res.status(201).send(user.token)
}

/** @type {import("express").RequestHandler} */
export async function login(req, res) {
  const {email, password} = req.body

  const user = await User.findOne().where('email').equals(email)

  if(!user) throw httpErrors.Unauthorized('You shall not pass')

  const passwordCorrect = await bcrypt.compare(password, user.password)

  if(!passwordCorrect) throw httpErrors.Unauthorized('You shall not pass')

  user.token = Math.random().toString(36).slice(2, 7)

  await user.save()

  res.status(200).send(user.token)
}

/** @type {import("express").RequestHandler} */
export async function getUser(req, res) {
  const token = req.headers['x-auth']

  const user = await User.findOne().where('token').equals('token')

  if(!user) throw httpErrors.Unauthorized('You shall not pass')

  res.status(200).send(user)
}