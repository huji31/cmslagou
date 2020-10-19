var express = require('express');
var controllerUser = require('../controller/user');
var getYZM = require('../common/yzm');
var router = express.Router();

/* 用户层路由，登录，登出，注册 */
router.post('/login',controllerUser.login);

router.post('/register',controllerUser.register);

//进行路由跳转操作,a标签进行get
router.get('/logout',controllerUser.logout);

/* 验证码的功能 */
//获取验证码图片
router.get('/yzm',getYZM);

module.exports = router;
