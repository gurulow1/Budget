const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('standalone.html', 'utf8');

const virtualConsole = new jsdom.VirtualConsole();

virtualConsole.on("error", (error) => {
  console.log("JSDOM Error:", error.message || error);
});

virtualConsole.on("warn", (warn) => {
  console.log("JSDOM Warn:", warn);
});
  
virtualConsole.on("info", (info) => {
  console.log("JSDOM Info:", info);
});

virtualConsole.on("log", (log) => {
  console.log("JSDOM Log:", log);
});

const dom = new JSDOM(html, {
  runScripts: "dangerously",
  resources: "usable",
  virtualConsole
});

// Since external scripts (unpkg React/Babel) are loaded, wait a bit
setTimeout(() => {
    console.log("Root HTML:");
    console.log(dom.window.document.getElementById('root').innerHTML);
}, 3000);
