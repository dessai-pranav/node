const fs = require('fs');
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