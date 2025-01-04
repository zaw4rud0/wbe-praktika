function numberOfCodes(script) {
    return script.ranges.reduce((total, [start, end]) => total + (end - start), 0);
}

const SCRIPTS = require('./scripts.js');
console.log(numberOfCodes(SCRIPTS[3]));