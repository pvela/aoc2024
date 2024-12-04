import * as fs from 'fs'

const input = fs
  .readFileSync(`${__dirname}/day1input.txt`, 'utf8')
  .replace(/\r/g, '')

  export function part1(left: number[], right: number[]): number {
    const leftSorted = left.sort();
    const rightSorted = right.sort();
    return leftSorted.reduce(
      (total, value, i) => total + Math.abs(leftSorted[i] - rightSorted[i]),
      0
    )
  }
  export function part2(left: number[], right: number[]): number {
    return left
      .map(leftNo => leftNo * right.filter(rightNo => rightNo === leftNo).length)
      .reduce((a, b) => a + b)
  }
  export function parseFile(input: string): [number[], number[]] {
    return input.split('\n').reduce(
      (inputArr, line) => {
        const values = line.split(/\s+/).map(Number)
        inputArr[0].push(values[0])
        inputArr[1].push(values[1])
        return inputArr
      },
      [[], []] as [number[], number[]]
    )
  }

  //console.dir (parseLists(input));
  console.log(part1(...parseFile(input)))
  console.log(part2(...parseFile(input)))