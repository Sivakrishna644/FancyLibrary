export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}
export function add(a: number, b: number): Promise<number> {
  return Promise.resolve(a + b);
}
export function substraction(a: number, b: number): Promise<number> {
  return Promise.resolve(a - b);
}
