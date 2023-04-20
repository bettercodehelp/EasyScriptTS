export function sum(arr: number[]) : number {
    let sum : number = 0
    for (let i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum
}