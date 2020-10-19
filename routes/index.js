var express = require('express');
var controllerIndex = require('../controller/index');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//访问login页面
router.get('/login',controllerIndex.login);

router.get('/register',controllerIndex.register);

router.get('/admin',controllerIndex.admin);

//重定向不能放在这里，再app中回直接进行重定向
module.exports = router;
