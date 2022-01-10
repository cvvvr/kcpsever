const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken')
const app = express();
require('../models/models');
const { User } = require("../models/models");
app.use(express.json())
const TOKENSERCET = 'qiubcqinfwlqwihriuqdnl';
let nowUser = {};

// 首页
app.get('/',async  (req, res) => {
  res.send('hello express!')
  user = await User.create({
    username: '123',
    password: '345'
  })
  console.log('user',user);
})

// 注册
app.post('/register', async (req, res) => {
  const user = await User.findOne({ username: req.body.params.username })
  console.log(user);
  if ( user === null ) {
    user = await User.create({
      username: req.body.params.username,
      password: req.body.params.password
    })
    return res.send({
      user,
      message: '注册成功！'
    });
  } else {
    res.message = '用户名已被注册';
    return res.status(422).send({ message: '用户名已被注册' });
  }
})

// 登陆
app.post('/login', async (req, res) => {
  const user = await User.findOne({ username: req.body.params.username })
  if ( user !== null ) {
    if(bcryptjs.compareSync(req.body.params.password, user.password)){
      nowUser = user;
      const token = jwt.sign({ id: user._id },TOKENSERCET)
      return res.send({
        user:nowUser,
        token: token,
        message: '登陆成功！'
      });
    }else {
      return res.status(422).send({ message: '密码错误！' });
    }
  } else {
    return res.status(422).send({ message: '用户名不存在' });
  }
})

// 查看用户
app.post('/getUser', async (req,res)=>{
  console.log(nowUser,111);
  if(nowUser){
    res.send({
      user:nowUser
    })
  }else {
    return res.status(422).send({ message: '登陆过期！重新登陆！' });
  }
})

app.listen(3002, () => {
  console.log('listen ready!')
})