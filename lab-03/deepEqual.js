function equal(objA, objB) {
    if (objA === objB) return true;

    if (typeof objA === 'object' && objA !== null && typeof objB === 'object' && objB !== null) {

        let keysA = Object.keys(objA);
        let keysB = Object.keys(objB);

        if (keysA.length !== keysB.length) {
            return false;
        }

        for (let key of keysA) {
            if (!keysB.includes(key)) {
                return false;
            }

            if (objA[key] !== objB[key]) {
                return false;
            }

            // Compare nested objects
            if (!equal(objA[key], objB[key])) {
                return false;
            }
        }
        return true;
    }
    return false;
}

module.exports = { equal }