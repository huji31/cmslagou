/* ============代码加密，创建公共功能,node.js公共模块========= */

var crypto = require('crypto');
function getCrypto(select, arg) {

    var hash = crypto.createHmac('sha256', select)/* sha256: 加密格式 select: 密钥 */

    .update(arg) /* arg: 加密的数字  */

    .digest('hex');/* hex以16进制格式进行显示*/

    return hash;
}

module.exports = getCrypto;