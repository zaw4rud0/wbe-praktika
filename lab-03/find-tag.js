function findTag(str) {
    let tag = "";
    let extracting = false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '<') {
            if (extracting) {
                tag = "";
            }

            extracting = true;
            continue;
        }

        if (str[i] === '>') {
            extracting = false;
            break;
        }

        if (extracting) {
            if (str[i] === ' ') {
                extracting = false;
                tag = "";
                continue;
            }

            tag += str[i];
        }
    }

    // No closing angle parenthesis
    if (extracting || tag === "") {
        return undefined;
    }

    return tag;
}

module.exports = { findTag }

console.log(findTag("<header>Text</header"))
console.log(findTag("blabla <br> blabla"))
console.log(findTag("123245 </header> bla"))
console.log(findTag("123245 <hea der> bla"))
console.log(findTag("123245 <hea<der> bla"))
console.log(findTag("123245 <hea<der bla"))