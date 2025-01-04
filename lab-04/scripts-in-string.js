function scriptsInString(string, scripts) {
    const counts = {};

    for (const char of string) {
        const codePoint = char.codePointAt(0);
        const script = scripts.find(s =>
            s.ranges.some(([start, end]) => codePoint >= start && codePoint < end)
        );

        const scriptName = script ? script.name : "unknown";
        counts[scriptName] = (counts[scriptName] || 0) + 1;
    }

    return counts;
}

const SCRIPTS = require('./scripts.js');
const testString = '英国的狗说 "JavaScript", "тяв"';
console.log(scriptsInString(testString, SCRIPTS));