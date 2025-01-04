// Implementation using for...of loop
function oldAndLiving(scripts) {
    const result = [];
    for (const script of scripts) {
        if (script.year < 0 && script.living) {
            result.push(script.name);
        }
    }
    return result;
}

// Implementation using filter and map
function oldAndLiving2(scripts) {
    return scripts
        .filter(script => script.year < 0 && script.living)
        .map(script => script.name);
}

const SCRIPTS = require('./scripts.js');
console.log(oldAndLiving(SCRIPTS));