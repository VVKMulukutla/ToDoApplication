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

// const http = require('http');
// const fs = require('fs');
// const args = require("minimist")(process.argv.slice(1));

// fs.readFile('home.html', (err, home) => {
//     console.log(home.toString());
// });
// let homePage = "";
// let projectPage = "";

// fs.readFile("home.html", (err, home) => {
//     if (err){
//         throw err;
//     }
//     homePage = home;
// });
// fs.readFile("projects.html", (err, proj) => {
//     if (err){
//         throw err;
//     }
//     projectPage = proj;
// });
// fs.readFile("registration.html", (err, reg) => {
//     if(err){
//         throw err;
//     }
//     regisPage = reg;
// });

// http
// .createServer((request, response) => {
//     let browserURL = request.url;
//     response.writeHeader(200, {"Content-Type" : "text/html"});
//     switch (browserURL){
//         case "/project":
//             response.write(projectPage);
//             response.end();
//             break;
//         case "/register":
//             response.write(regisPage);
//             response.end();
//             break;
//         case "/": 
//             response.write(homePage);
//             response.end();
//             break;
//     }   
// }).listen(args.port, () => {
//     console.log("Listening at "+args.port);
// });
const todoList = () => {
    const all = [];
  
    const add = (todoItem) => {
        all.push(todoItem);
    };
  
    const markAsComplete = (index) => {
        all[index].completed = true;
    };
  
    const overdue = (yesterday) => {
        return all.filter(item => item.dueDate === yesterday);
    };
  
    const dueToday = (today) => {
        return all.filter(item => item.dueDate == today);
    };
  
    const dueLater = (tomorrow) => {
        return all.filter(item => item.dueDate == tomorrow);
    };
  
    const toDisplayableList = (list) => {
        let outputString = '';
        list.forEach((item, index) => {
            const checkbox = item.completed ? '[x]' : '[ ]';
            if (item.dueDate == today) {
                outputString += `${checkbox} ${item.title}\n`;
            } else {
                outputString += `${checkbox} ${item.title} ${item.dueDate}\n`;
            }
        });
        return outputString;
    };
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  };
  
  module.exports = todoList;
//   const todos = todoList();
  
//   const formattedDate = (d) => {
//     return d.toISOString().split("T")[0];
//   };
  
//   const dateToday = new Date();
//   const today = formattedDate(dateToday);
//   const yesterday = formattedDate(new Date(dateToday.setDate(dateToday.getDate() - 1)));
//   const tomorrow = formattedDate(new Date(dateToday.setDate(dateToday.getDate() + 2)));
  
//   console.log(`today : ${today}, yesterday : ${yesterday}, tommo : ${tomorrow}`);
  
//   todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false });
//   todos.add({ title: 'Pay rent', dueDate: today, completed: true });
//   todos.add({ title: 'Service vehicle', dueDate: today, completed: false });
//   todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false });
//   todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false });
  
//   console.log("My Todo-list\n\n");
  
//   console.log("Overdue");
//   const overdues = todos.overdue();
//   console.log(todos.toDisplayableList(overdues));
//   console.log("\n\n");
  
//   console.log("Due Today");
//   const itemsDueToday = todos.dueToday();
//   console.log(todos.toDisplayableList(itemsDueToday));
//   console.log("\n\n");
  
//   console.log("Due Later");
//   const itemsDueLater = todos.dueLater();
//   console.log(todos.toDisplayableList(itemsDueLater));
//   console.log("\n\n");
  