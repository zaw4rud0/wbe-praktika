function fibonacci(n) {
    if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
        throw new Error("Input must be a non-negative integer.");
    }

    const sqrt5 = Math.sqrt(5);
    const G = (1 + sqrt5) / 2;
    const H = (1 - sqrt5) / 2;

    // Exact formula for Fibonacci using G and H
    const fib = (Math.pow(G, n) - Math.pow(H, n)) / sqrt5;

    return Math.round(fib);
}

module.exports = { fibonacci };