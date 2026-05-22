const fs = require('fs');
const babel = require('@babel/standalone');

const html = fs.readFileSync('standalone.html', 'utf8');
const scriptMatch = html.match(/<script type="text\/babel">([\s\S]*?)<\/script>/);

if (scriptMatch) {
    const code = scriptMatch[1];
    try {
        const transformed = babel.transform(code, { presets: ['react'] });
        console.log("Syntax is OK.");
    } catch (e) {
        console.error("Syntax error:", e.message);
    }
}
