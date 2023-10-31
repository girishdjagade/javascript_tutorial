const http = require('http')
const fs = require('fs')

const PORT = 8080

fs.readFile('index.html', function(error, html){
    if(error) throw error;
    http.createServer(function(request, responce){
        responce.writeHeader(200, {"content-type": "text/html"});
        responce.write(html);
        responce.end;
    }).listen(PORT)
})