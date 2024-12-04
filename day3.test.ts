import {
    parseFile,
    part1,
    part2
  } from './day3'

  const testInput = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))
xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`
  describe('part1', () => {
    it('works for test input', () => {
      expect(part1(parseFile(testInput))).toBe(161+161)
    })
  })
  const testInput2 = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))
  xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?don't()mul(8,5))
  xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?don't()mul(8,5))`;
  describe('part2', () => {
    it('works for test input', () => {
      expect(part2(parseFile(testInput2))).toBe(48+8+0)
    })
  })
