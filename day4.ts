import * as fs from 'fs'

const input = fs
  .readFileSync(`${__dirname}/day4input.txt`, 'utf8')
  .replace(/\r/g, '')
  const regexp = /mul\(\d\d?\d?,\d\d?\d?\)/g;
  let rows:number;
  let cols:number;
  const word1="XMAS";
  const word2="MAS";
  const directions1 = [
    [-1, 0], // Up
    [1, 0],  // Down
    [0, -1], // Left
    [0, 1],  // Right
    [-1, -1], // Top-left diagonal
    [-1, 1],  // Top-right diagonal
    [1, -1],  // Bottom-left diagonal
    [1, 1],   // Bottom-right diagonal
  ];
  const directions2:any = [
    [0,[-1, -1],[[0,0],[0,-2],[-2,0],[0,0]]], // Top-left diagonal, skip 4, 2:0,-2 3:-2,0
    [1,[-1, 1],[[0,2],[0,0],[0,0],[-2,0]]],  // Top-right diagonal, skip 3, 1:0,2 4:-2,0
    [2,[1, -1],[[2,0],[0,0],[0,0],[0,-2]]],  // Bottom-left diagonal, skip 2, 1:2,0 4:0,-2
    [3,[1, 1],[[0,0],[2,0],[0,2],[0,0]]],   // Bottom-right diagonal, skip 1, 2:2,0 3:0,2
  ];

  export function part1(inputArr:string[][]): number {
    rows=inputArr.length;
    cols=inputArr[0].length;
    const count = countXmas(inputArr);
    return count;
  }
  function countXmas(inputArr:string[][]): number {
    let count = 0;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (inputArr[i][j] === word1[0]) {
          for (let [dx, dy] of directions1) {
            if (searchFrom(inputArr,i, j, dx, dy, word1)) {
              count++;
            }
          }
        }
      }
    }
    return count;
  }

  function countXmas2(inputArr:string[][]): number {
    let count = 0;
    let visitedArray:string[]=[];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let foundOne=false;
        if (inputArr[i][j] === word2[0]) {
          for (let [idx,direction,paths] of directions2) {
            let dx = direction[0], dy=direction[1];
            if (visitedArray.indexOf(idx+"|"+i+"|"+j)<0 && searchFrom(inputArr,i, j, dx,dy, word2)) {
              visitedArray.push(idx+"|"+i+"|"+j);
                for (let [pidx,pdirection] of directions2) {
                  const path = paths[pidx];
                  const pathx=path[0],pathy=path[1];
                  let pdx = pdirection[0], pdy=pdirection[1];
                  if (pathx+pathy!==0) {
                    let newi=i+pathx, newj=j+pathy;
                    if (visitedArray.indexOf(pidx+"|"+newi+"|"+newj)<0 && searchFrom(inputArr,newi, newj, pdx, pdy, word2)) {
                      count++;
                      visitedArray.push(pidx+"|"+newi+"|"+newj);
                    }
                  }
                }
            }
          }
        }
      }
    }
    return count;
  }

  function searchFrom(inputArr:string[][],i: number, j: number, dx: number, dy: number, word: string): boolean {
    let x = i;
    let y = j;
    for (let k = 0; k < word.length; k++) {
      if (x < 0 || x >= rows || y < 0 || y >= cols || inputArr[x][y] !== word[k]) {
        return false;
      }
      x += dx;
      y += dy;
    }
    return true;
  }


  export function part2(inputArr:string[][]): number {
    rows=inputArr.length;
    cols=inputArr[0].length;
    const count = countXmas2(inputArr);
    return count;
  }
  export function parseFile(input: string): string[][] {
    return input.split('\n').reduce(
      (inputArr, line) => {
        inputArr.push([...line]);
        return inputArr
      },
      [] as string[][]);
  }
  console.log(part1(parseFile(input)));
  console.log(part2(parseFile(input)));