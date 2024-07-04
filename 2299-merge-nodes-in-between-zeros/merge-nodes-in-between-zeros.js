/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    let newLinkedList = new ListNode(0);
        let pointer = newLinkedList;
        let currentNode = head.next;
        let addition = 0;
    while (currentNode !== null) {
        if(currentNode.val == 0){
            if(addition){
                const newNode = new ListNode(addition);
                while (pointer.next !== null) {
                    pointer = pointer.next;
                }
                pointer.next = newNode;
            }
            addition = 0;
        }else{
            addition += currentNode.val;
        }
        currentNode = currentNode.next; 
    }
    return newLinkedList.next;
};