const http = require('http');
const url = require('url');
const fs = require('fs');
const replaceTemplate = require('./modules/replaceTemplate')/*

const textIn = fs.readFileSync('./txt/input.txt', 'utf8')
console.log(textIn);

const textOut = `this is what we know about the avacado: ${textIn}.\n Created on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('file written!');

//non blocking
fs.readFile('./txt/start.txt', 'utf8', (err, data1) => {
    fs.readFile(`./txt/${data1}.txt`, 'utf8', (err, data2) => {
        fs.readFile(`./txt/append.txt`, 'utf8', (err, data3) => {
            console.log(data3);
fs.writeFile('./txt/final.text',`${data2}\n${data3}`, 'utf8', (err) => {
    console.log('your file has been written')
});
        })

    })
})
*/
 //server


const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8')
const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`,'utf-8')
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`,'utf-8')
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8')


const dataObj = JSON.parse(data);
const server = http.createServer((req, res) => {
const pathName = req.url;
console.log(req.url);
console.log(url.parse(req.url, true));
if(pathName === '/overview' || pathName === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
    console.log('cardsHtml', cardsHtml);
    const output = tempOverview.replace(/{%PRODUCT_CARDS%}/g, cardsHtml);
    res.end(output);



} else if(pathName === '/product'){
    res.end('product');


} else if(pathName === '/api'){
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(data);
}


else {
    res.writeHead(404,{
        'Content-type': 'text/html',
        'my-own-header' : 'hello world'
    });
    res.end('<h1>Page not found!</h1>');
}
});
server.listen(8000,'127.0.0.1',()=>{
    console.log("Server started!");
});
