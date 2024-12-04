import {
    parseFile,
    part1,
    part2
  } from './day4'

  const testInput = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`
  describe('part1', () => {
    it('works for test input', () => {
      expect(part1(parseFile(testInput))).toBe(18)
    })
  })

  describe('part2', () => {
    it('works for test input', () => {
      expect(part2(parseFile(testInput))).toBe(9)
    })
  })
