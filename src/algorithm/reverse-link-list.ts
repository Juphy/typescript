interface ILinkListNode {
    value: number
    next?: ILinkListNode
}

function createLinkList(arr: number[]): ILinkListNode {
    const length = arr.length
    if (length === 0) throw new Error("arr is empty")
    let curNode: ILinkListNode = {
        value: arr[length - 1],
    }
    if (length === 1) return curNode
    for (let i = length - 2; i >= 0; i--) {
        curNode = {
            value: arr[i],
            next: curNode,
        }
    }
    return curNode
}

export function reverseLinkList(listNode: ILinkListNode): ILinkListNode {
    let prevNode: ILinkListNode | undefined = undefined,
        curNode: ILinkListNode | undefined = undefined,
        nextNode: ILinkListNode | undefined = listNode
    while(nextNode){
        if(curNode && !prevNode){
            // @ts-ignore
            delete curNode.next
        }
        if(curNode && prevNode){
            // @ts-ignore
            curNode.next = prevNode
        }
        prevNode = curNode
        curNode = nextNode
        nextNode = nextNode?.next

    } 
    curNode!.next = prevNode
    return curNode!   
}

const arr = [100, 200, 300, 400, 500]
const list = createLinkList(arr)
console.info("list:", list)

const list1 = reverseLinkList(list)
console.info("list1:", list1)