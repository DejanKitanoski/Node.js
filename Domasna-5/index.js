const http = require('http');

const server = http.createServer((req, res) => {
    const Header = req.url.split('/').filter(Boolean);
console.log(Header)
    if (Header.length === 2 && Header[0] === 'ime') {
        const name = Header[1];
        const samoglaski = name.match(/[aeiouAEIOUаеёиоуэюяАЕЁИОУЭЮЯ]/g) || [];
        const soglaski = name.match(/[bcdfghjklmnpqrstvwxyzБВГДЖЗЙКЛМНПРСТФХЦЧШЩ]/gi) || [];
        const response = `Име: ${name}\nПарен број: ${name.length % 2 === 0 ? 'Да' : 'Не'}\nБрој на букви: ${name.length}\nСамогласки: ${samoglaski.length}\nСогласки: ${soglaski.length}`;

        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(response);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Pgresno vneseni Headeri');
    }
});

server.listen(10000,'127.0.0.1',(err)=>{
    if(err){
        console.log('ERROR')
    }else{
        console.log('Serverot startuva')
    }
    
})