const isValid = function (s:string):boolean {
  // 如果传入字符长度为奇数，直接返回false
  if (s.length % 2 === 1) return false;
  // 利用map存储括号对
  const pairs:Map<string,string> = new Map();
  // 存储括号对 key:右括号 value:左括号
  pairs.set(')', '(');
  pairs.set(']', '[');
  pairs.set('}', '{');
  // 利用栈来实现括号匹配
  const stack:string[] = [];
  for(let ch of s){
    if(pairs.has(ch)){
      // 如果是右括号，判断栈顶元素是否是对应的左括号
      // 不是则返回false
      if(!stack.length || stack[stack.length -1] !== pairs.get(ch)){
        return false
      }else{
        // 是则弹出栈顶元素
        stack.pop()
      }
    }else{
      // 如果是左括号，直接压入栈中
      stack.push(ch)
    }
    console.log(stack)
  }
  // 如果最后栈中还有元素，返回false
  return !stack.length
};

console.log(isValid('()'))