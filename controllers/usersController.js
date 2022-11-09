import httpErrors from 'http-errors'
import bcrypt from 'bcrypt'
import User from '../models/Users.js'

/** @type {import("express").RequestHandler} */
export async function register(req, res) {
  const user = new User(req.body)
  user.password = await bcrypt.hash(user.password, 10)
  await user.save()
  res.status(201).send(user)
}

/** @type {import("express").RequestHandler} */
export async function login(req, res) {
  throw httpErrors.NotImplemented()
}

/** @type {import("express").RequestHandler} */
export async function getUser(req, res) {
  throw httpErrors.NotImplemented()
}