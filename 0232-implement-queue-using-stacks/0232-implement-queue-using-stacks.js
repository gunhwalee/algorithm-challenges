
const MyQueue = function() {
  this.queue = [];
  this.queue2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.queue.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.queue2.length === 0) {
    while (this.queue.length) {
      this.queue2.push(this.queue.pop());
    }
  }
  
  const result = this.queue2.pop();
  
  if (this.queue.length === 0) {
    while (this.queue2.length) {
      this.queue.push(this.queue2.pop());
    }
  }

  return result;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.queue2.length === 0) {
    while (this.queue.length) {
      this.queue2.push(this.queue.pop());
    }
  }
  
  const result = this.queue2[this.queue2.length - 1];
  
  if (this.queue.length === 0) {
    while (this.queue2.length) {
      this.queue.push(this.queue2.pop());
    }
  }

  return result;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return (this.queue.length === 0 && this.queue2.length === 0) ? true : false;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */