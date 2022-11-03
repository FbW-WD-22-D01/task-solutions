import express from 'express'
import * as controller from '../controllers/authorsController.js'
import 'express-async-errors'

const app = express.Router()

app.route('/')
  .get(controller.getAllAuthors)
  .post(controller.createAuthor)
  

app.get('/:id', controller.getAuthorById)


export default app