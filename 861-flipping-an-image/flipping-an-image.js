/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
   return image.map((nums) => nums
        .reverse()
        .map(item => item ? 0 : 1)
     )
};
