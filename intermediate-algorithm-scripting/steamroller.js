function steamrollArray(arr) {
    return arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            acc = acc.concat(steamrollArray(item));
        } else {
            acc.push(item);
        }

        return acc;
   }, []);
}

steamrollArray([1, [2], [3, [[4]]]]);