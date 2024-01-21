function abs(x) {
    return x < 0 ? -x : x;
}

function countOfPairs(n, x, y) {
    if (x > y) {
        [x, y] = [y, x];
    }
    let ret = new Array(n).fill(0);
    let intervals = [];
    for (let i = 1; i < n; i++) {
        let short = 1 + abs(i - x);
        if (y - i > short) {
            if (y < n) {
                intervals.push({l: short + 1, r: short + n - y});
            }
            let t = y - i - short;
            let step = Math.floor(t / 2);
            if (t % 2 === 1) {
                step++;
            }
            intervals.push({l: short, r: short + step - 1});
            intervals.push({l: 1, r: y - step - i});
        } else {
            intervals.push({l: 1, r: n - i});
        }
    }
    let arr = new Array(n + 1).fill(0);
    for (let i of intervals) {
        arr[i.l]++;
        arr[i.r + 1]--;
    }
    let cur = 0;
    for (let k = 1; k <= n; k++) {
        cur += arr[k];
        ret[k - 1] = 2 * cur;
    }
    return ret;
}
