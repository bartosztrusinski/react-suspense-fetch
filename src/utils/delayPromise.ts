export function delayPromise<T>(
  promise: Promise<T>,
  delayMs: number = 1000
): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(promise), delayMs));
}
