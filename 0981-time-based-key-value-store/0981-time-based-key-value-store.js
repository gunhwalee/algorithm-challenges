
const TimeMap = function() {
  this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  if (!this.map.has(key)) this.map.set(key, []);
  this.map.get(key).push([value, timestamp]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
  const items = this.map.get(key);

  if (!items) return "";

  let start = 0, end = items.length - 1, result;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (items[mid][1] <= timestamp) {
      result = items[mid][0];
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return result ? result : "";
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */