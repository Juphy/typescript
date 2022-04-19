export function longStr(str: string): number {
  const length = str.length
  if (length < 2) return length
  let max = 0,
    set = new Set()
  let i = 0,
    j = 0
  for (; j < length; j++) {
    let s = str[j]
    if (set.has(s)) {
      max = Math.max(max, j - i)
      while (set.has(s)) set.delete(s[i++])
    }
    set.add(s)
  }
  return Math.max(max, j - i)
}

export function mergeArr(arr1: number[], arr2: number[]): number[] {
  let length = arr1.length - 1,
    j = arr2.length - 1,
    i = length - j - 1
  while (i >= 0 && j >= 0) {
    arr1[length--] = arr1[i] > arr2[j] ? arr1[i--] : arr2[j--]
  }
  while (j >= 0) {
    arr1[length--] = arr2[j--]
  }
  return arr1
}
// const arr1 = [1, 3, 5, 7, 9],
//   arr2 = [2, 4, 6, 8, 10]
// arr1.length = 10
// console.info(mergeArr(arr1, arr2))

export function addStr(str1: string, str2: string): string {
  const arr1 = str1.split(""),
    arr2 = str2.split("")
  let res = "",
    step = 0
  while (arr1.length || arr2.length) {
    if (arr1.length) step += Number(arr1.pop())
    if (arr2.length) step += Number(arr2.pop())
    res = (step % 10) + res
    step = step > 9 ? 1 : 0
  }
  return step > 0 ? step + res : res
}
// const str1 = "999",
//   str2 = "888"
// console.info(addStr(str1, str2))

export class MyQueue {
  private stack1: Array<number | string> = []
  private stack2: Array<number | string> = []
  add(n: number | string) {
    this.stack1.push(n)
  }
  delete() {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop()!)
    }
    const res = this.stack2.pop()
    while (this.stack2.length) {
      this.stack1.push(this.stack2.pop()!)
    }
    return res
  }
  get length(): number {
    return this.stack1.length
  }
}
// const q = new MyQueue()
// q.add(100)
// q.add(200)
// q.add(300)
// console.info(q.delete())
// console.info(q.length)
// q.add(400)
// console.info(q.length)
// console.info(q.delete())
// console.info(q.length)
// console.info(q.delete())
// console.info(q.length)

export function diffVersion(version1: string, version2: string) {
  const v1 = version1.split("."),
    v2 = version2.split(".")
  let length = Math.max(v1.length, v2.length)
  for (let i = 0; i < length; i++) {
    if (Number(v1[i]) > 0 && !v2[i]) {
      return 1
    }
    if (Number(v2[i]) > 0 && !v1[i]) {
      return -1
    }
    if (Number(v1[i]) > Number(v2[i])) {
      return 1
    }
    if (Number(v1[i]) < Number(v2[i])) {
      return -1
    }
  }
  return 0
}
// console.info(diffVersion("1.01", "1.001"))
// console.info(diffVersion("1.0", "1.0.0"))
// console.info(diffVersion("0.1", "1.1"))

export function validStr(str: string): boolean {
  let leftConvert: { [k: string]: string } = {
      "{": "}",
      "[": "]",
      "(": ")"
    },
    rightConvert: { [k: string]: string } = {
      "}": "{",
      "]": "[",
      ")": "("
    }
  let stack = [],
    length = str.length
  for (let i = 0; i < length; i++) {
    let s = str[i]
    if (leftConvert[s]) {
      stack.push(s)
    } else if (rightConvert[s]) {
      let top = stack.pop()
      if (!top || top !== rightConvert[s]) {
        return false
      }
    }
  }
  return stack.length === 0
}
// console.info(validStr("{a(b[c]dsf)ef}"))
// console.info(validStr("{a(b[c]dsf)]ef}"))
// console.info(validStr("{a(b[cdsf)]ef}"))

function targetNum(nums: number[], target: number): number[] {
  let map: { [k: number]: number } = {},
    length = nums.length
  for (let i = 0; i < length; i++) {
    const num = nums[i]
    if (num in map) {
      return [map[num], i]
    } else {
      map[target - num] = i
    }
  }
  return []
}
// console.info(targetNum([2, 7, 11, 15], 9))
// console.info(targetNum([3, 2, 4], 6))
// console.info(targetNum([3, 3], 6))

function climbStair(n: number): number {
  if (n <= 2) return n
  let cur = 2,
    pre = 1
  for (let i = 3; i <= n; i++) {
    ;[cur, pre] = [cur + pre, cur]
  }
  return cur
}
// console.info(climbStair(2))
// console.info(climbStair(3))
// console.info(climbStair(4))
// console.info(climbStair(5))

function foo(nums: number[], target: number): number {
  if (nums.length === 0) return -1
  let left = 0,
    right = nums.length - 1
  while (left <= right) {
    let midIndex = Math.floor((left + right) / 2)
    let midValue = nums[midIndex]
    if (midValue === target) {
      return midIndex
    } else if (midValue > target) {
      right = midIndex - 1
    } else {
      left = midIndex + 1
    }
  }
  return -1
}
function maxStr(s: string): string | undefined {
  if (s.length < 2) return s
  let max = 0,
    maxStr = "",
    length = s.length
  for (let i = 0; i < length; i++) {
    let str = s[i]
    let left = i - 1
    while (s[i] === s[i + 1]) {
      str += s[i + 1]
      i++
    }
    let right = i + 1
    while (left >= 0 && right < length && s[left] === s[right]) {
      str = s[left] + str + s[right]
      left--
      right++
    }
    if (str.length > max) {
      max = str.length
      maxStr = str
    }
  }
  return maxStr
}

console.info(maxStr("babad"))

type IRow = Array<"0" | "1">
const grid: IRow[] = [
  ["0", "1", "0", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["1", "1", "0", "1", "1"]
]
function isLandNums(grid: IRow[]): number {
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    let row = grid[i]
    for (let j = 0; j < row.length; j++) {
      if (row[j] === "1") {
        count++
        dfs(grid, i, j)
      }
    }
  }
  function dfs(grid: IRow[], i: number, j: number) {
    if (grid[i] && grid[i][j] === "1") {
      grid[i][j] = "0"
      dfs(grid, i - 1, j)
      dfs(grid, i + 1, j)
      dfs(grid, i, j - 1)
      dfs(grid, i, j + 1)
    }
  }
  return count
}
console.info(isLandNums(grid))

function validComm(n: number): string[] {
  let res: string[] = []
  function dfs(s: string, left: number, right: number) {
    if (left < right || left > n) return
    if (left === n && right === n) {
      res.push(s)
    }
    dfs(s + "(", left + 1, right)
    dfs(s + ")", left, right + 1)
  }
  dfs("", 0, 0)
  return res
}
console.info(validComm(3))

interface ILinkNode {
  val: number
  next: null | ILinkNode
}
function createLinkNode(nums: number[]): ILinkNode {
  let length = nums.length
  let head: ILinkNode = {
    val: nums[length - 1],
    next: null
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    head = {
      val: nums[i],
      next: head
    }
  }
  return head
}
let l1: any = createLinkNode([1, 2, 4]),
  l2: any = createLinkNode([1, 3, 4])
let cur = l1
l1 = l1.next
console.log(cur, l1)
// function mergeLinkNode(l1: ILinkNode, l2: ILinkNode): ILinkNode {
//   let ll1: ILinkNode | null = l1,
//     ll2: ILinkNode | null = l2
//   let head: ILinkNode = {
//     val: ll1.val < ll2.val ? ll1.val : ll2.val,
//     next: null
//   }, cur
//   if (ll1.val < ll2.val) {
//     ll1 = ll1.next
//   } else {
//     ll2 = ll2.next
//   }
//   while (ll1 && ll2) {
//     if (ll1.val < ll2.val) {
//       head.next
//       ll1 = ll1.next
//     } else {
//       ll2 = ll2.next
//     }
//   }

// }

interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
//   1
// 2   3
//4 5 6 7

const root1: TreeNode = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}

//   1
//     2
//   3
const root2: TreeNode = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: null
  }
}
function centerTreeNode(root: TreeNode): number[] {
  if (root == null) return []
  let res: number[] = []
  function dfs(root: TreeNode) {
    if (root.left) dfs(root.left)
    res.push(root.val)
    if (root.right) dfs(root.right)
  }
  dfs(root)
  return res
}
console.info(centerTreeNode(root1))
console.info(centerTreeNode(root2))

function preTreeNode(root: TreeNode): number[] {
  if (root == null) return []
  let res: number[] = []
  function dfs(root: TreeNode) {
    res.push(root.val)
    if (root.left) dfs(root.left)
    if (root.right) dfs(root.right)
  }
  dfs(root)
  return res
}
console.info(preTreeNode(root1))
console.info(preTreeNode(root2))

function nextTreeNode(root: TreeNode): number[] {
  if (root == null) return []
  let res: number[] = []
  function dfs(root: TreeNode) {
    if (root.left) dfs(root.left)
    if (root.right) dfs(root.right)
    res.push(root.val)
  }
  dfs(root)
  return res
}
console.info(nextTreeNode(root1))
console.info(nextTreeNode(root2))

class LRUCache{
  private max
  private map: { [k: number]: number } = {}
  private stack: number[] = []
  constructor(n: number){
      this.max = n
  }
  put(key: number, value: number){
      if(this.stack.length >= this.max){
          let topKey: number = this.stack.pop()!
          delete this.map[topKey]
      }
      this.stack = [key].concat(this.stack)
      this.map[key] = value
  }
  get(key: number){
      if(key in this.map){
          let index = this.stack.indexOf(key)
          this.stack.splice(index, 1)
          this.stack.unshift(key)
          return this.map[key]
      }
      return -1
  }
}
const lru = new LRUCache(2)
lru.put(1, 1)
lru.put(2, 2)
console.info(lru.get(1))
lru.put(3, 3)
console.info(lru.get(2))
lru.put(4, 4)
console.info(lru.get(1))
console.info(lru.get(3))
console.info(lru.get(4))