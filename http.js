const http = require('http')
const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.write('Hello workld fdrom Ben');
res.end();
}
else{
    res.write('Using someone else domain');
    res.end();
}
});


server.listen('5000');

