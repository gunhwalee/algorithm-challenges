
const MinStack = function() {
  this.stack = [];
  this.minNum = null;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack.push(val);
  this.minNum = this.minNum === null ? val : Math.min(this.minNum, val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop();
  this.minNum = Math.min(...this.stack);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack.at(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minNum;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */