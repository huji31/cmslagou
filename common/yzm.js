/* 导入svg-captcha模块 */
var svgCaptcha = require('svg-captcha');

//封装函数,参数位置
function getYZM(req,res,next){
    var capture = svgCaptcha.create({
        size:4,
        fontSize:45,
        noise:3
    });
    // console.log(capture); /* 输出text 和 data */

    //session配置成功后，可在任意地方拿到
    req.session.capture = capture.text;

    res.type('svg');
    res.status(200).send(capture.data);
}

module.exports = getYZM;