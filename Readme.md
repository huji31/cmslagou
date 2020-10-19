- MVC架构模式:Model（数据） View（视图） Controller（控制器）:中间层去链接M和V


- bootstrap :响应式布局框架

  - 一套代码 =》移动端和PC端都可以适配 =》媒体查询

   - 栅格系统:12列 col-6 占屏幕1/2

   -  需要引入的依赖文件:
1.bootstrap.css
2.jquery.js
3.bootstrap.js

- 脚手架中端口的监听在bin下的www中

业务逻辑: register(view):前端传送数据,model进行数据处理（构建数据库，与集合）,



session后端技术：临时会话，在后端进行共享，可以拿到会话内容

session跟cookie配合使用，跟踪用户身份

后端 ->生成一个session -> 给浏览器（前端）一个cookie值，值里存的就是sessionID（加密的串）

再次请求时，就会把cookie（sessionID串）->给后端 ->sessionID验证用户 ->进行免登录



<!-- =====================登录态======================= -->
