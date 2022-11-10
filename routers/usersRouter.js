import express from 'express'
import * as controller from '../controllers/usersController.js'
import * as validations from '../lib/validations/usersValidation.js'
import validate from '../lib/middlewares/validate.js'
import auth from '../lib/middlewares/auth.js'

const app = express.Router()

app.get('/', auth, controller.getUser)
app.post('/register', validate(validations.register), controller.register)
app.post('/login', validate(validations.login), controller.login)

app.post('/change-password', auth, validate(validations.changePassword), controller.changePassword)

export default app