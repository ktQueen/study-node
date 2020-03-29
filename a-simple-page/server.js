const http =require('http');
const fs=require('fs');
const url =require('url');
const server=http.createServer(function(req,res){
    let file='./html'+url.parse(req.url).pathname;
    res.setHeader('content-type','text/html;charset="utf-8"');
    // if(fs.accessSync(file)){
        
    // }else{
        
    // }
    console.log(file);
    try{
        let str=fs.readFileSync(file).toString();
        res.end(str);
    }catch(e){
        res.end('<h2>我爱你</h2>');
    }
});
server.listen(8083);