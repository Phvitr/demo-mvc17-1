const fs = require('fs');

class NotfoundController{
    handle(req, res){
        fs.readFile('./views/notfound.html', 'utf-8', async (err, data) => {
            if (err) {
                console.log(err)
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        })
    }
}
module.exports  = new NotfoundController();