const http = require('http');

const server = http.createServer(function(req,res){

    
    res.end();
});
server.listen(5000,function(){
    console.log('Http server is listening on port 5000');
})