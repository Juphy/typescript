import { longStr } from './index'
describe('无重复最长子串', () => {
    it('无重复字符串', () => {
        const str = 'abcdef'
        const res = longStr(str)
        expect(res).toEqual(str.length)
    })
    it('全重复字符串', () => {
        const str = 'aaaa'
        const res = longStr(str)
        expect(res).toEqual(1)
    })
    it('前重复字符串', () => {
        const str = 'aaaabcdef'
        const res = longStr(str)
        expect(res).toEqual(6)
    })
    it('中重复字符串', () => {
        const str = 'abccccdef'
        const res = longStr(str)
        expect(res).toEqual(4)
    })
    it('后重复字符串', () => {
        const str = 'abcdefffff'
        const res = longStr(str)
        expect(res).toEqual(6)
    })
    it('前后重复字符串', () => {
        const str = 'aaabcdefff'
        const res = longStr(str)
        expect(res).toEqual(6)
    })
})