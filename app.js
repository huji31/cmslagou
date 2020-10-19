var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//使用session中间件，在任何地方都能取到session
app.use(session({
  secret: '66666geiwojiami@%',//给cookie加盐
  name:'sessionid',//给cookie重新命名，默认为connect_sid
  resave: false, //不重复生成cookie
  saveUninitialized: true,//在不初始化session时生成cookie
  cookie: {
    secure: false,//secure 为true表示https
    maxAge: 3600000 //最大过期时间
  }
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//只会拦截admin相关的页面请求
app.get(/\/admin/,(req,res,next)=>{

  if(req.url != '/login' && req.url != '/register'){
    if(!req.session.username){
      res.redirect('/login');
    }
  }
  next();
})

app.use('/', indexRouter);
app.use('/users', usersRouter);




// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
  res.redirect('/login');
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
