const http =require('http');
const fs=require('fs');
const url =require('url');
const server=http.createServer(function(req,res){
    // console.log('有人发送了请求');
    // res.setHeader('content-type','text/html;charset="utf-8"');
    // let str=fs.readFileSync('index.html').toString();
    // res.end(str);
    // console.log(req.url);

    let urlObj=url.parse(req.url);
    console.log(urlObj);
});
server.listen(8083);