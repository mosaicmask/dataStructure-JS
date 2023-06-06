// class Queue {
//   item: any[] = []
//
//   // 向队尾添加一个或多个元素
//   _enqueue(element: any) {
//     this.item.push(element)
//   }
//
//   // 移除队列的第一项
//   _dequeue() {
//     this.item.shift()
//   }
//
//   // 返回队列的第一个元素
//   _front(): any {
//     return this.item[0]
//   }
//
//   // 判断队列是否为空
//   _isEmpty(): boolean {
//     return this.item.length === 0
//   }
//
//   // 返回队列的长度
//   _size(): number {
//     return this.item.length
//   }
//
//   // 清空队列
//   _clear(){
//     this.item = []
//   }
//
//   //打印队列内容
//   _print(){
//     console.log(...this.item)
//   }
// }

// 优先队列
class PriorityQueue {
  item: any[] = []

  // 向队尾添加一个或多个元素
  _enqueue(element: any, priority: number) {
    const queueElement = {
      element,
      priority
    }
    if (this._isEmpty()) {
      // 队列为空，直接添加
      this.item.push(queueElement)
    } else {
      // 队列不为空，需要判断优先级
      let added = false
      for (let i = 0; i < this.item.length; i++) {
        if (queueElement.priority < this.item[i].priority) {
          // 优先级小于当前项，插入到当前项前面
          this.item.splice(i, 0, queueElement)
          added = true
          break
        }
      }
      if(!added){
        // 优先级大于所有项，插入到队列末尾
        this.item.push(queueElement)
      }
    }
  }

  // 移除队列的第一项
  _dequeue() {
    this.item.shift()
  }

  // 返回队列的第一个元素
  _front(): any {
    return this.item[0]
  }

  // 判断队列是否为空
  _isEmpty(): boolean {
    return this.item.length === 0
  }

  // 返回队列的长度
  _size(): number {
    return this.item.length
  }

  // 清空队列
  _clear() {
    this.item = []
  }

  //打印队列内容
  _print() {
    console.log(...this.item)
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue._enqueue("John", 2);
priorityQueue._enqueue("Jack", 1);
priorityQueue._enqueue("Camila", 1);
priorityQueue._print();