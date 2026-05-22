const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('standalone.html', 'utf8');

const virtualConsole = new jsdom.VirtualConsole();
let errorCount = 0;

virtualConsole.on("error", (error) => {
  console.log("JSDOM Error:", error.message || error);
});

const dom = new JSDOM(html, {
  url: "file:///C:/Users/User/standalone.html",
  runScripts: "dangerously",
  resources: "usable",
  virtualConsole
});

setTimeout(() => {
    const root = dom.window.document.getElementById('root');
    console.log("Root children count:", root.children.length);
    if(root.children.length > 0) {
        console.log("App rendered successfully.");
    } else {
        console.log("App failed to render.");
    }
}, 4000);
