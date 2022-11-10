import express from 'express'
import * as controller from '../controllers/usersController.js'
import * as validations from '../lib/validations/usersValidation.js'
import validate from '../lib/middlewares/validate.js'

const app = express.Router()

app.get('/', controller.getUser)
app.post('/register', validate(validations.register), controller.register)
app.post('/login', validate(validations.login), controller.login)

export default app