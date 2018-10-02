module.exports = function check(str, bracketsConfig) {
  let bracketsStore = {};

  // Fill braces object
  // key - close bracket
  // value - open bracket
  for(let i = 0; i < bracketsConfig.length; i++) {
  bracketsStore[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }
  
  // Stack for storing opened brackets
  let stack = [];
  
  // All magic inside
  for(let i = 0; i < str.length; i++) {
  // Get current bracket
  let char = str.charAt(i);
  
  // Check if it's open bracket
  // or if it | and last stack element is not |
  if (!bracketsStore[char] || bracketsStore[char] && char == bracketsStore[char] && stack[stack.length - 1] != char) {
  // And push open bracket into stack
  stack.push(char);
  } else {
  // Otherwise check if stack is empty
  // or last value from stack not equal to open bracket for current char
  if(stack.length == 0 || stack.pop() != bracketsStore[char]) {
  return false;
  }
  }
  }
  // If stack is empty then return true, otherwise - false;
  return stack.length == 0 ? true : false;
}
