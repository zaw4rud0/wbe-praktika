function factorial(n) {
    const useBigInt = typeof n === 'bigint';
    n = BigInt(n);

    let result = 1n;

    for (let i = 2n; i <= n; i++) {
        result *= i;
    }

    return useBigInt ? result : Number(result);
}

module.exports = { factorial };