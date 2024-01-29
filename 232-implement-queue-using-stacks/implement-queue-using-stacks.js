// Stack implementation
class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// MyQueue implementation using two stacks
var MyQueue = function() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
};

MyQueue.prototype.push = function(x) {
    while (!this.stack2.isEmpty()) {
        this.stack1.push(this.stack2.pop());
    }
    this.stack1.push(x);
    while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
    }
};

MyQueue.prototype.pop = function() {
    return this.stack2.pop();
};

MyQueue.prototype.peek = function() {
    return this.stack2.peek();
};

MyQueue.prototype.empty = function() {
    return this.stack2.isEmpty();
};
/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */