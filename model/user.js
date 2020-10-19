var mongoose = require('mongoose');

/* 构建数据库格式 */
var userSchema = mongoose.Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true}
});

/* 创建集合（表单） */
var UserModel = mongoose.model('userList',userSchema);

module.exports = UserModel;