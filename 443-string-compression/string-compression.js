var compress = function(chars) {
    let arr = [];
    let num = 0;

    for (let i = 1; i <= chars.length; i++) {
        if (i === chars.length || chars[i] !== chars[i - 1]) {
            arr.push(chars[num]);
            if (i - num > 1) {
                let count = (i - num).toString().split('');
                arr.push(...count);
            }
            num = i;
        }
    }

    chars.length = 0; 
    for (let char of arr) {
        chars.push(char);
    }

    return chars.length;
};
