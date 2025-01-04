function assert(condition, message) {
    if (!condition) {
        throw new Error(message || "Assertion failed");
    }
}

function power(b, n) {
    assert(Number.isInteger(n) && n >= 0, "Exponent muss eine nicht-negative ganze Zahl sein");
    assert(typeof b === 'number' || typeof b === 'bigint', "Basis muss eine Zahl oder ein BigInt sein");

    const isBigInt = typeof b === 'bigint' && typeof n === 'bigint';

    if (n === 0) {
        return isBigInt ? 1n : 1;
    }

    if (n % 2 === 0) {
        const halfPower = power(b, n / 2);
        return isBigInt ? halfPower * halfPower : halfPower * halfPower;
    } else {
        const halfPower = power(b, (n - 1) / 2);
        return isBigInt ? b * halfPower * halfPower : b * halfPower * halfPower;
    }
}

module.exports = { power };