export function all<T>(arr: T[]): boolean {
    for (const item of arr) {
      if (!item) {
        return false;
      }
    }
    return true;
}
  