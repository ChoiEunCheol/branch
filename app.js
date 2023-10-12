const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead (200, {"Content-Type":"text/plain"})
    res.write('향마루');
    res.end();
});

server.listen(1111,(err)=>{
    if(err){
        console.error('에러 뜸');
    } else {
        console.log("1111 포트에 서버 열림 http://localhost:1111");
    }
});