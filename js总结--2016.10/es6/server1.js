const koa=require('koa');//用const 不会被改变
const static=require('koa-static');//koa一个配套库，
const server = koa();


server.use(static('./www/'));//用户可以去当前目录下www文件中去找
server.use(function* (){//还可以下载，发送邮件：把一个文件作为一个附件attachment
	this.response.attachment();
});


server.listen(8080);