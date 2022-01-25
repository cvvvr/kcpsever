// import app from "../express";
// import {User} from "../models/models";
// import bcryptjs from "bcryptjs";
// import jwt from "jsonwebtoken";
// const TOKENSERCET = 'qiubcqinfwlqwihriuqdnl';
// let nowUser = {};
//
// // 注册
// app.post('/register', async (req, res) => {
//   let user = await User.findOne({ username: req.body.params.username })
//   if ( user === null ) {
//     user = await User.create({
//       username: req.body.params.username,
//       useremail: req.body.params.useremail,
//       password: req.body.params.password
//     })
//     return res.send({
//       user,
//       message: '注册成功！'
//     });
//   } else {
//     res.message = '用户名已被注册';
//     return res.status(422).send({ message: '用户名已被注册' });
//   }
// })
//
// // 登陆
// app.post('/login', async (req, res) => {
//   console.log('params',req.body.params)
//   const user = await User.findOne({ useremail: req.body.params.useremail })
//   console.log('user',user)
//   if ( user !== null ) {
//     if(bcryptjs.compareSync(req.body.params.password, user.password)){
//       nowUser = user;
//       const token = jwt.sign({ id: user._id },TOKENSERCET)
//       return res.send({
//         user:nowUser,
//         token: token,
//         message: '登陆成功！'
//       });
//     }else {
//       return res.status(422).send({ message: '密码错误！' });
//     }
//   } else {
//     return res.status(422).send({ message: '用户名不存在' });
//   }
// })
