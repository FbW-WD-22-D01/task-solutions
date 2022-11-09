import express from 'express'
import * as controller from '../controllers/usersController.js'

const app = express.Router()

app.get('/', controller.getUser)
app.post('/register', controller.register)
app.post('/login', controller.login)

export default app