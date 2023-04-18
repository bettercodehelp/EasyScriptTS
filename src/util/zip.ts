export function zip(...arrays: any[][]): any[][] {
    const result: any[][] = [];
    const shortestArrayLength = Math.min(...arrays.map(arr => arr.length));
    for (let i = 0; i < shortestArrayLength; i++) {
      const zipped = arrays.map(arr => arr[i]);
      result.push(zipped);
    }
    return result;
}
