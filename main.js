//var fs=require("fs");
//fs.readFile('input.txt',function(err,data){
//if(!err)
//console.log(data.toString());});
//console.log("aaa");
var http=require("http");
http.createServer(function (req,res){
res.writeHead(200,{'Content-Type':'text/plain'});
res.end('hello world!!!\n');}).listen(9001);
