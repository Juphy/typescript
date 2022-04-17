// 旋转数组k步
export function rotate1(arr: number[], k: number): number[] {
    const length = arr.length
    if (!k || length === 0) return arr
    const step = Math.abs(k % length)
	// O(n^2)
    for (let i = 0; i < step; i++) {
        const n = arr.pop()
        if (n != null) {
            arr.unshift(n) // unshift操作非常慢
        }
    }
    return arr
}

export function rotate2(arr: number[], k: number): number[] {
    const length = arr.length
    if (!k || length === 0) return arr
    const step = Math.abs(k % length)
	// O(1)
	// O(n)
    const part1 = arr.slice(-step),
        part2 = arr.slice(0, -step)
    return part1.concat(part2)
}

const arr1: number[] = [1, 2, 3, 4, 5, 6, 7]
const arr2: number[] = [1, 2, 3, 4, 5, 6, 7]
console.info(rotate1(arr1, 3))
console.info(rotate2(arr2, 3))

// const arr3 = [], arr4 = []
// for (let i = 0; i < 10 * 10000; i++) {
//     arr3.push(i)
//     arr4.push(i)
// }
// console.time('rotate1')
// rotate1(arr3, 9* 10000)
// console.timeEnd('rotate1')
// console.time("rotate2")
// rotate2(arr4, 9 * 10000)
// console.timeEnd("rotate2")
