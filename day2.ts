import * as fs from 'fs'

const input = fs
  .readFileSync(`${__dirname}/day2input.txt`, 'utf8')
  .replace(/\r/g, '')

  export function part1(inputArr:number[][]): number {
  let count=0;
  for (const row of inputArr) {
    if (validRow(row)) {
      count++;
    }
  }
    return count;
  }
  function validRow(row:number[]):boolean {
    let asc=true;
    if (row[0]>row[1]) {
      asc=false;
    }
    for (let i=0;i<row.length -1 ;i++) {
      const num = row[i];
      if (asc) {
        if (row[i+1]-num <4 && row[i+1]-num >0) {
          if (i===row.length-2) {
            return true;
          }
        } else {
          i=row.length;
        }
      } else {
        if (num-row[i+1] <4 && num-row[i+1] >0) {
          if (i===row.length-2) {
            return true;
          }
        } else {
          i=row.length;
        }
      }
    }
    return false;
  }
  export function part2(inputArr:number[][]): number {
    let count=0;
    for (const row of inputArr) {
      if (validRow(row)) {
        count++;
      } else {
        for(let i=0;i<row.length;i++) {
          const newRow=row.slice();
          newRow.splice(i,1);
          if (validRow(newRow)) {
            count++;
            break;
          }
        }
      }
    }
      return count;
  }
  export function parseFile(input: string): number[][] {
    const inputArr:number[][] = input.split('\n').map(
      (line) => line.split(/\s+/).map(Number)
    )
    return inputArr;
  }
  console.log(part1(parseFile(input)));
  console.log(part2(parseFile(input)));