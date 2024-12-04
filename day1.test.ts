import {
    parseFile,
    part1,
    part2,
  } from './day1'
  
  const testInput = `3   4
4   3
2   5
1   3
3   9
3   3`
  console.dir(parseFile(testInput));
  describe('part1', () => {
    it('works for test input', () => {
      expect(part1(...parseFile(testInput))).toBe(11)
    })
  })
  
  describe('part2', () => {
    it('works for test input', () => {
      expect(part2(...parseFile(testInput))).toBe(31)
    })
  })