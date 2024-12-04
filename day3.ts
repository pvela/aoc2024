import * as fs from 'fs'

const input = fs
  .readFileSync(`${__dirname}/day3input.txt`, 'utf8')
  .replace(/\r/g, '')
  const regexp = /mul\(\d\d?\d?,\d\d?\d?\)/g;
  export function part1(inputArr:string[]): number {
    let count=0;
    for (const row of inputArr) {
      count=count+calcMul(row);
    }
    return count;
  }
  function calcMul(row:string) {
    const allMuls = [...row.matchAll(regexp)];
    return allMuls.map((item)=>  item[0]).reduce(
      (total, currentValue) => total + eval(currentValue),
      0,
    )
  }
  function mul(x:number,y:number): number {
    return x*y;
  }
  export function part2(inputArr:string[]): number {
    let count=0;
    let dontActive=false;
    for (const row of inputArr) {
      count = row.split("do()").map(doItem => {
        if (dontActive) {
          dontActive=false;
          return ""
        } else {
          return doItem.split("don't()")[0];
        }
      }).reduce(
        (total, currentValue) =>  total+calcMul(currentValue),
        count,
      )
      dontActive = (row.lastIndexOf("don't()") > row.lastIndexOf("do()"));
    }
    return count;
  }
  export function parseFile(input: string): string[] {
    const inputArr:string[] = input.split('\n').map(
      (line) => line
    )
    return inputArr;
  }
  console.log(part1(parseFile(input)));
  console.log(part2(parseFile(input)));