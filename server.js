const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url.match(/.css/)) {
        
        let css = path.join(__dirname, req.url);
        fs.readFile(css, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found\n');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(data);
            }
        });

    } else if (req.url.match(/.js/)) {
        const url = req.url.split('/');
        const file = url[url.length - 1]; 
        let js = path.join(__dirname, "services", file);

        fs.readFile(js, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found\n');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/javascript' });
                res.end(data);
            }
        });
    } else if (req.url.includes("CalcService")) { 

        const url = req.url.split('/');
        const file = url[url.length - 1];
        fs.readFile(`pages/${file}.html`, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found\n');
            } else {
                res.setHeader('Content-Type', "text/html");
                res.end(data);
            }
        })

    } else {

        fs.readFile('pages/index.html', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found\n');
            } else {
                res.setHeader('Content-Type', "text/html");
                res.end(data);
            }
        });

    }
});

server.listen(3000, () => {
    console.log('listening on PORT 3000');
});