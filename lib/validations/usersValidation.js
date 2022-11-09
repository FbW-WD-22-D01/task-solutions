import {body} from 'express-validator'

export const register = [
  body('name').optional().isString().withMessage('name must be a string'),
  body('email').isEmail().withMessage('email is not valid'),
  body('password').isStrongPassword().withMessage('password not strong!'),
]

export const login = [
  body('email').isEmail().withMessage('email is not valid'),
  body('password').notEmpty().withMessage('you forgot to type your password'),
]

