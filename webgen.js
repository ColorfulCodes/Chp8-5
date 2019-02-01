const fs = require('fs');

let readline = require('readline-sync');

let site_name = readline.question("What is the site name? ");
let author_name = readline.question("Author? ");
let js_name = readline.question("Do you want a JavaScript folder? ");
let css_name = readline.question("Do you want a CSS folder? ");

if (!fs.existsSync(site_name)){
  fs.mkdirSync(site_name);
  console.log(site_name+"/")
}
let sentence ="<title>"+site_name+"</title>\n" +
"<meta>"+author_name+"</meta>";


fs.writeFile(site_name+"/index.html",sentence,(err)=> {
    if (err) throw err;

    console.log(site_name+"/index.html")
  });

if (js_name === "y"){

  let testjs = site_name+"/js/";

  if (!fs.existsSync(testjs)){
    fs.mkdirSync(testjs);
    console.log(testjs)
}}

if (css_name === "y"){

  let nice = site_name+"/js/";

  if (!fs.existsSync(nice)){
    fs.mkdirSync(nice);

    console.log(nice)
}}
