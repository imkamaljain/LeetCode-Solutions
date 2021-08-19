/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (head === null) return null;
    var visited = new Map();
    var getNode = (node) => {
        if (!node) return null;
        if (visited.has(node)) {
            return visited.get(node);
        } else {
            visited.set(node, new Node(node.val));
            return visited.get(node);
        }
    };
    var runner = head;
    while (runner !== null) {
        getNode(runner).next = getNode(runner.next);
        getNode(runner).random = getNode(runner.random);
        runner = runner.next;
    }
    return getNode(head);
};