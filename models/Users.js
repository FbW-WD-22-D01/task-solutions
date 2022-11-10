import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema({
  name: String,
  email: {type:String, required: true, unique:true},
  password:{type:String, required: true},
  token: String
})

Schema.methods.toJSON = function () {
  const user = this
  const publicFields = [
    'name',
    'email',
    '_id',
  ]
  const result = {}
  for(const key of publicFields) result[key] = user[key]
  return result
}

Schema.methods.generateToken = function () {
  const user = this
  user.token = Math.random().toString(36).slice(2, 7)
}

Schema.statics.findByToken = function (token) {
  return User.findOne().where('token').equals(token)
}

Schema.pre('save', async function (next) {
  const user = this
  if(user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10) 
  }

  next()
})

const User = mongoose.model('User', Schema, 'users')

export default User