import {
    parseFile,
    part1,
    part2
  } from './day2'
  
  const testInput = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
48 46 47 49 51 54 56
1 1 2 3 4 5
1 2 3 4 5 5
5 1 2 3 4 5
1 4 3 2 1
1 6 7 8 9
1 2 3 4 3
9 8 7 6 7
7 10 8 10 11
29 28 27 25 26 25 22 20
1 3 6 7 9`
  describe('part1', () => {
    it('works for test input', () => {
      expect(part1(parseFile(testInput))).toBe(2)
    })
  })

  describe('part2', () => {
    it('works for test input', () => {
      expect(part2(parseFile(testInput))).toBe(14)
    })
  })