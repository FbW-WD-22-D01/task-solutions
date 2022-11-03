import express from 'express'
import * as controller from '../controllers/booksController.js'
import 'express-async-errors'

const app = express.Router()

app.route('/')
  .get(controller.getAllBooks)
  .post(controller.createBook)
  

app.get('/:id', controller.getBookById)


export default app