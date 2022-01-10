const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

// const TEST = 'mongodb://localhost:27017/test';
const DOCKER = 'mongodb://database:27017/test';

//测试环境
// mongoose.connect(TEST, {});
//docker环境
mongoose.connect(DOCKER, {});

const UserSchema = new mongoose.Schema({
  username: { type: String },
  password: {
    type: String,
    set(val){
      return bcryptjs.hashSync(val, 10);
    },
  },
})

const User = mongoose.model('user', UserSchema);
// User.db.dropCollection('user').then(r => console.log(r)).catch(err => console.log(err))

module.exports = { User };