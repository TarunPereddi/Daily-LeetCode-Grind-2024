/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    let result = [0];
    dfs(arr, "", 0, result);
    return result[0];
};

function dfs(arr, path, idx, result) {
    if (isUniqueChars(path)) {
        result[0] = Math.max(result[0], path.length);
    }

    if (idx === arr.length || !isUniqueChars(path)) {
        return;
    }

    for (let i = idx; i < arr.length; i++) {
        dfs(arr, path + arr[i], i + 1, result);
    }
}

function isUniqueChars(s) {
    let charSet = new Set();
    for (let c of s) {
        if (charSet.has(c)) {
            return false;
        }
        charSet.add(c);
    }
    return true;
}