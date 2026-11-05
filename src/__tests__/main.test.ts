import { sum } from '../main'

describe("Simple tests for sum function", () => {
    it("Should compute sum correctly for 5 and 3", () => {
        const result = sum(5, 3)
        expect(result).toBe(8)
    })

    it("Should compute sum correctly for -5 and 3", () => {
        const result = sum(-5, 3)
        expect(result).toBe(-2)
    })
})