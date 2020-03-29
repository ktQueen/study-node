const http =require('http');
const server=http.createServer(function(req,res){
    // console.log('有人发送了请求');
    res.setHeader('content-type','text/html;charset="utf-8"');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        hello,word
    </body>
    </html>`);
});
server.listen(8083);