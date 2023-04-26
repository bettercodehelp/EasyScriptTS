export function div(...arr: number[]) : number {
    let sum : number = arr[0]
    for (let i = 1; i < arr.length; i++){
      sum = sum / arr[i];
    }
    return sum
  }