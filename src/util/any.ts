export function any<T>(arr: T[]): boolean {
    for (const item of arr) {
      if (item) {
        return true;
      }
    }
    return false;
}
  