// console.log("Node JS")
// const args = require("minimist")(process.argv.slice(2));
// const readline = require('readline');
// const lineDetail = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// lineDetail.question(`name Please : `, (name) =>{
//     console.log(name);
//     lineDetail.close();
// })
// console.log(args);

const http = require('http');
const fs = require('fs');
const args = require("minimist")(process.argv.slice(1));

// fs.readFile('home.html', (err, home) => {
//     console.log(home.toString());
// });
let homePage = "";
let projectPage = "";

fs.readFile("home.html", (err, home) => {
    if (err){
        throw err;
    }
    homePage = home;
});
fs.readFile("projects.html", (err, proj) => {
    if (err){
        throw err;
    }
    projectPage = proj;
});
fs.readFile("registration.html", (err, reg) => {
    if(err){
        throw err;
    }
    regisPage = reg;
});

http
.createServer((request, response) => {
    let browserURL = request.url;
    response.writeHeader(200, {"Content-Type" : "text/html"});
    switch (browserURL){
        case "/project":
            response.write(projectPage);
            response.end();
            break;
        case "/register":
            response.write(regisPage);
            response.end();
            break;
        case "/": 
            response.write(homePage);
            response.end();
            break;
    }   
}).listen(args.port, () => {
    console.log("Listening at "+args.port);
});