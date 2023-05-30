class Stack {
  items: number[] = []

  // 入栈
  _push(element: number): void {
    this.items.push(element)
  }

  // 出栈
  _pop(): number | undefined {
    return this.items.pop()
  }

  // 返回栈顶元素
  _peek(): number {
    return this.items[this._size() - 1]
  }

  // 判断栈是否为空
  _isEmpty(): boolean {
    return this.items.length === 0
  }

  // 清空栈
  _clear(): void {
    this.items = []
  }

  // 返回栈的长度
  _size(): number {
    return this.items.length
  }

  // 打印栈
  _print(): void {
    console.log(this.items.toString())
  }
}

// 利用 Stack 转任意进制
function baseConverter(num: number, base: number): string {
  const stack: Stack = new Stack()
  const digits: string = '0123456789ABCDEF'
  let rem: number
  let basedString = ''
  while (num > 0) {
    rem = Math.floor(num % base)
    stack._push(rem)
    num = Math.floor(num / base)
  }
  stack._print()
  while (!stack._isEmpty()) {
    basedString += digits[stack._pop() as number]
  }
  return basedString
}

const basedString = baseConverter(10, 16)
console.log(basedString)