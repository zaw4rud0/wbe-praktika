function scriptOfSample(char, scripts) {
    const code = char.codePointAt(0);
    for (const script of scripts) {
        for (const [from, to] of script.ranges) {
            if (code >= from && code < to) {
                return script.name;
            }
        }
    }
    return "unknown";
}

module.exports = { scriptOfSample };
