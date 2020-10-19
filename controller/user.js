var UserModel = require('../model/user');
var getCrypo = require('../common/crypto');

/* ==================================登录================================================ */
var login = async (req,res,next)=>{
    /* res.send("login"); */
    var {username,password,yzm} = req.body;

    // console.log(yzm);
    // console.log(req.session.capture);
    //session进行验证,成功向下走
    if(yzm.toLowerCase() != req.session.capture.toLowerCase()){
        res.send('<script>alert("验证码输入错误");location.href="/login" </script>');
        return;
    }

    //库中查询比对用户名代码
    var info = await UserModel.findOne({
        username,
        password:getCrypo("woshihujigeiwojiami",password)
    });

    if(info){
        //写入session值，知道时哪位用户
        req.session.username = username;

        res.send("<script>alert('登录成功');location.href='/admin'</script>");
    }else{
        res.send("<script>alert('登录失败');location.href='/login'</script>");
    }
};

/* =========================================注册==================================== */
var register = async (req,res,next)=>{
    /* 进行结构赋值，获取密码进行加密 */
    var {username,password} =req.body;

    /* 执行catch证明没获取到值 */
    var info = await UserModel({
        username,
        password:getCrypo("woshihujigeiwojiami",password)
    }).save().catch((err)=>{
        res.send("<script>alert('注册失败');location.href='/register'</script>");
    });
    if(info){
        res.send("<script>alert('注册成功');location.href='/login'</script>");
    }
};

/* ===========================================登出=========================== */
var logout = (req,res,next)=>{  
    //退出清理session
    req.session.username = null;
    //地址重定向
    res.redirect('/login');
};

module.exports = {
    login,
    register,
    logout
}