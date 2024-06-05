function matchingStrings(stringList, queries) {
    let result = [];
    for (const query of queries) {
        let numberOfMatches = 0;
        for (const value of stringList) {
            if (query === value) {
                numberOfMatches++;
            }
        }
        result.push(numberOfMatches);
    }
    return result;
}

matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']); // [2, 1, 0]
console.log(matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab'])); // [2, 1, 0]