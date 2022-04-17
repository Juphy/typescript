// 括号匹配
export function matchBracket(str: string): boolean {
    const length = str.length
    if (length === 0) return true
    const stack: string[] = []
    const leftSymbols: { [k: string]: string } = {
        "{": "}",
        "[": "]",
        "(": ")",
    }
    const rightSymbols: { [k: string]: string } = {
        "}": "{",
        "]": "[",
        ")": "(",
    }
    for (let i = 0; i < length; i++) {
        const s = str[i]
        if (leftSymbols[s]) {
            stack.push(s)
        } else if(rightSymbols[s]){
            const top = stack.pop()
            if(!top || top!==rightSymbols[s]){
                return false
            }
        }
    }
    return stack.length === 0
}
