const http = require('http');
const server = http.createServer(function(req,res){
    res.end("hello word from nodejs http server");
});
server.listen(5000,function(){
    console.log('Http server is listening on port 5000');
})