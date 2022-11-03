import express from 'express'
import * as controller from '../controllers/publishersController.js'

const app = express.Router()

app.get('/', controller.getAllPublishers)
app.post('/', controller.createPublisher)

export default app