/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const dfs = (root) => {
            if (root === null) {
                return [];
            }
            const leaves = dfs(root.left).concat(dfs(root.right));
            return leaves.length > 0 ? leaves : [root.val];
        };
        return JSON.stringify(dfs(root1)) === JSON.stringify(dfs(root2));
};