/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    return image.map(row => row.map(element => 1 - element)).map(row => row.reverse());
};
