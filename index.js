const http = require('http');
const notFound = require('./controllers/notfound-controller')
const router = require('./routers/router');
http.createServer((req, res) => {
    let chooseHandler = (typeof router[req.url] != 'undefined' ? router[req.url] : notFound.handle);
    chooseHandler(req, res)
}).listen(8080, ()=>{
    console.log("Server is running on http://localhost:8080");
})