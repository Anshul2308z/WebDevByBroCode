 /*
prompt() is part of the browser's window API — it's meant for browser popups.
Node.js runs on the server and doesn't have a window object or GUI. It won't work on nodeJS.
 */

let Name = prompt("Enter your name : "); 
console.log(Name);