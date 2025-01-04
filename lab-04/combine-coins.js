function combinations(amount, coins) {
    function countWays(index, amountLeft) {
        // Base cases
        if (amountLeft === 0) return 1;
        if (amountLeft < 0 || index === coins.length) return 0;

        // Recursive case: Include the current coin or exclude it
        return countWays(index, amountLeft - coins[index]) + countWays(index + 1, amountLeft);
    }

    return countWays(0, amount);
}

console.log(combinations(35, [20, 10, 5]));
console.log(combinations(100, [500, 200, 100, 50, 20, 10, 5]));