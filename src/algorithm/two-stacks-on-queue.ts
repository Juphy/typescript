// 双栈实现队列
export class MyQueue {
    private statck1: number[] = []
    private statck2: number[] = []

    add(n: number) {
        this.statck1.push(n)
    }

    delete(): number | null {
        while (this.statck1.length) {
            const n = this.statck1.pop()
            if (n != null) {
                this.statck2.push(n)
            }
        }
        let res = this.statck2.pop()
        while (this.statck2.length) {
            const n = this.statck2.pop()
            if (n != null) {
                this.statck1.push(n)
            }
        }
        return res || null
    }

    get length(): number {
        return this.statck1.length
    }
}

const q = new MyQueue()
q.add(1)
q.add(2)
q.add(3)
console.info(q.length)
console.info(q.delete())
console.info(q.length)
console.info(q.delete())
console.info(q.length)